import {
  ExportProfilesPluginMethod,
  ErrorWithProfileGuid,
  ExportedProfile,
  SimpleAppOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { getListId } from "./listMethods";

enum MarketoAction {
  Delete = "DELETE",
  EmailChange = "EMAILCHANGE",
  Update = "UPDATE",
}
export interface MarketoExport extends ExportedProfile {
  profileGuid: string;
  marketoId?: number;
  action?: MarketoAction;
  result?: any; // result from find
  processed?: boolean;
  error?: any;
}
export interface ExportBatchMethod {
  (argument: {
    // connection: any;
    appOptions: SimpleAppOptions;
    exports: MarketoExport[];
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}
declare type MarketoEmailMap = { [email: string]: MarketoExport };

export async function exportBatch({ appOptions, exports }) {
  if (exports.length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const emailMap: MarketoEmailMap = {};
  for (const exportedProfile of exports) {
    try {
      sortExport(exportedProfile, emailMap);
    } catch (error) {
      // if just one of them is missing email or something, move on
      exportedProfile.error = error;
    }
  }

  await setMarketoIds(client, emailMap);

  await deleteLeads(client, exports);
  await updateByIds(client, exports);
  await updateByEmail(client, exports);

  // so now, all the exports that don't have an error and where not deleted should have a marketoId
  // use those ids to update the groups
  await updateGroups(client, exports);

  // assuming semantics here of success is only true if there are zero errors
  let errors: ErrorWithProfileGuid[] = null; // for ones that go wrong
  let success = true;
  for (const exportedProfile of exports) {
    let { error } = exportedProfile;
    if (error) {
      success = false;
      errors = errors || [];
      if (typeof error === "string") {
        error = new Error(error);
      }
      error.profileGuid = exportedProfile.profileGuid;
      errors.push(error);
    }
  }

  return { success, errors };
}

async function updateGroups(client, exports: MarketoExport[]) {
  const removal: { [groupName: string]: MarketoExport[] } = {};
  const addition: { [groupName: string]: MarketoExport[] } = {};
  for (const exportedProfile of exports) {
    if (exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action === MarketoAction.Delete) {
      continue;
    }

    const { marketoId } = exportedProfile;
    if (!marketoId) {
      try {
        throw new Error(
          `profile does not have a marketo id: ${exportedProfile?.newProfileProperties?.email}`
        );
      } catch (error) {
        exportedProfile.error = error;
      }
    }

    // build up groups situation of group names to addition and removal
    const { oldGroups, newGroups } = exportedProfile;
    const removedLists = oldGroups.filter((k) => !newGroups.includes(k));
    const addedLists = newGroups;

    for (const list of removedLists) {
      removal[list] = removal[list] || [];
      removal[list].push(exportedProfile);
    }
    for (const list of addedLists) {
      addition[list] = addition[list] || [];
      addition[list].push(exportedProfile);
    }
  }

  for (const listName in addition) {
    await updateList(client, ListAction.Add, listName, addition[listName]);
  }
  for (const listName in removal) {
    await updateList(client, ListAction.Remove, listName, removal[listName]);
  }
}

enum ListAction {
  Add = "ADD",
  Remove = "REMOVE",
}
async function updateList(
  client,
  action: ListAction,
  listName: string,
  users: MarketoExport[]
) {
  if (users.length === 0) {
    return;
  }
  const id = await getListId(client, listName);
  const idMap: { [marketoId: number]: MarketoExport } = {};
  const marketoIds: any[] = [];
  for (const user of users) {
    idMap[user.marketoId] = user;
    //marketoIds.push({ id: user.marketoId });
    marketoIds.push(user.marketoId);
  }
  let response;
  if (action === ListAction.Add) {
    response = await client.list.addLeadsToList(id, marketoIds);
  } else if (action === ListAction.Remove) {
    // DELETE /rest/v1/lists/{listId}/leads.json?id=318603&id=318595&id=999999
    const query = marketoIds.join("&id=");
    const path = `/v1/lists/${id}/leads.json?id=${query}`;

    //client.list.removeLeadsToList has issue
    response = await client._connection.del(path, {
      headers: { "Content-Type": "application/json" },
    });
  }
  if (!response.success) {
    throw new Error(`Marketo list error: ${listName}`);
  }
  const results = response.result || [];
  if (results.length === 0) {
    throw new Error(`Marketo empty results: ${listName}`);
  }
  for (const result of results) {
    const { id } = result;
    if (result.reasons) {
      if (action === ListAction.Remove && result.status === "skipped") {
        // this is ok, not in the  list
      } else {
        const message = result.reasons.map((r) => r.message).join(", ");
        const user = idMap[id];
        if (!user) {
          throw new Error(`Unknown user id in list: ${id}`);
        }
        user.error =
          user.error || new Error(`could update list ${listName}: ${message}`);
      }
    }
  }
}

async function updateByIds(client, exports: MarketoExport[]) {
  const users: MarketoExport[] = [];
  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (!exportedProfile.marketoId) {
      continue;
    }
    users.push(exportedProfile);
  }

  const options = { lookupField: "id", action: "updateOnly" };
  await updateUsers(client, users, options);
}

async function updateByEmail(client, exports: MarketoExport[]) {
  const users: MarketoExport[] = [];
  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    users.push(exportedProfile);
  }

  const options = { lookupField: "email", action: "createOrUpdate" };
  await updateUsers(client, users, options);
}

async function updateUsers(client, users: MarketoExport[], options) {
  const input: any[] = [];
  for (const exportedProfile of users) {
    exportedProfile.processed = true;
    input.push(buildPayload(exportedProfile));
  }
  if (input.length === 0) {
    return;
  }
  const response = await client.lead.createOrUpdate(input, options);
  if (!response.success) {
    throw new Error(`Marketo createOrUpdate error`);
  }

  // process response and update
  const results = response.result;
  if (results.length !== input.length) {
    throw new Error("expected results and input lengths to be the same");
  }
  for (let i = 0; i < results.length; i++) {
    // TODO: these might not be in the same order, but use the id (or email) to map
    // probably also have to check the "status" and the "reason" (to make an error)
    const user = users[i];
    const result = results[i];

    try {
      if (!result.id) {
        throw new Error(
          `Marketo profile error: ${user.profileGuid} ${JSON.stringify(result)}`
        );
      }
      if (user.marketoId && user.marketoId !== result.id) {
        throw new Error(
          `user id does not match updated one: ${user.marketoId} -> ${result.id}`
        );
      }
    } catch (error) {
      user.error = error;
    }

    user.marketoId = result.id;
  }
}

function buildPayload(exportedProfile: MarketoExport): any {
  const user: any = {};
  const {
    marketoId,
    oldProfileProperties,
    newProfileProperties,
  } = exportedProfile;

  user.email = newProfileProperties.email.toLowerCase().trim();
  if (marketoId) {
    user.id = marketoId;
  }

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const key of allKeys) {
    if (["id", "email"].includes(key)) {
      continue; // set above
    }
    const value = newProfileProperties[key]; // includes clearing out removed ones (by setting to null)
    user[key] = formatVar(value);
  }

  return user;
}

function formatVar(value) {
  if (!value) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  } else {
    return value;
  }
}

async function deleteLeads(client, exports: MarketoExport[]) {
  const marketoIds: any[] = [];
  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action !== MarketoAction.Delete) {
      continue;
    }
    exportedProfile.processed = true;

    const id = exportedProfile.marketoId;
    if (id) {
      marketoIds.push({ id });
    } else {
      // they aren't there anyway. let it go.
    }
  }

  if (marketoIds.length === 0) {
    return;
  }
  const path = "/v1/leads.json?_method=DELETE";
  const data = { input: marketoIds };
  const response = await client.lead._connection.postJson(path, data);
  if (!response.success) {
    throw new Error(`Marketo delete error`);
  }
}

async function setMarketoIds(client, emailMap: MarketoEmailMap) {
  // search for these email addresses
  const filterValues = Object.keys(emailMap);
  const filterType = "email";

  // TODO: there might be size limit for this GET.
  // The library commented out // _method: 'GET' and post approach
  // That would have worked around that. I wonder why.
  const response = await client.lead.find(filterType, filterValues);
  if (!response.success) {
    throw new Error(`Marketo email find error`);
  }
  const results = response.result;
  for (const result of results) {
    const email = result.email.toLowerCase().trim();
    const found = emailMap[email];
    if (found) {
      found.marketoId = result.id;
      found.result = result;
    } else {
      // Marketo result found but didn't have email. not sure what that means
    }
  }
}

// returns what to do for each case
function sortExport(exportedProfile: MarketoExport, emailMap: MarketoEmailMap) {
  const {
    oldProfileProperties,
    newProfileProperties,
    toDelete,
  } = exportedProfile;

  const email = newProfileProperties.email?.toLowerCase()?.trim();
  const oldEmail = oldProfileProperties.email?.toLowerCase()?.trim();
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  emailMap[email] = exportedProfile;

  // record other one if applicable
  if (oldEmail && oldEmail !== email) {
    emailMap[oldEmail] = exportedProfile;
    exportedProfile.action = MarketoAction.EmailChange;
  }

  if (toDelete) {
    exportedProfile.action = MarketoAction.Delete;
  }

  if (!exportedProfile.action) {
    exportedProfile.action = MarketoAction.Update;
  }

  return exportedProfile;
}

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  exports,
}) => {
  // TODO: marketo can do batches of 300 at a time, it seems.
  // developers.marketo.com/rest-api/marketo-integration-best-practices
  // do we need to switch this even one more level up?
  // i'm making a separate function to enable that loop
  // the separate function also enabled testing (doesn't need profile model)

  const exportsWithGuid: MarketoExport[] = [];
  for (const exportedProfile of exports) {
    const profileGuid = exportedProfile.profile.guid;
    const marketo: MarketoExport = Object.assign(
      { profileGuid },
      exportedProfile
    );
    exportsWithGuid.push(marketo);
  }
  return exportBatch({ appOptions, exports: exportsWithGuid });
};

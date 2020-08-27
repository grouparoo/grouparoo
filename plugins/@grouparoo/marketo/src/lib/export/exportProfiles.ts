import {
  ExportProfilesPluginMethod,
  ErrorWithProfileGuid,
  ExportedProfile,
  SimpleAppOptions,
} from "@grouparoo/core";
import { connect } from "../connect";

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

export const exportBatch: ExportBatchMethod = async ({
  appOptions,
  exports,
}) => {
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
      console.log("error found", error);
      error.profileGuid = exportedProfile.profileGuid;
      errors.push(error);
    }
  }

  return { success, errors };
};

async function updateGroups(client, exports: MarketoExport[]) {
  const removal: { [groupName: string]: number[] } = {};
  const addition: { [groupName: string]: number[] } = {};
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
      removal[list].push(marketoId);
    }
    for (const list of addedLists) {
      addition[list] = addition[list] || [];
      addition[list].push(marketoId);
    }
  }

  // now we have the lists by name and th ids that should be added or removed
  // TODO: look up list (with mutex) to get id
  //await client.list.addLeadsToList(listId, addition);
  //await client.list.removeLeadsFromList(listId, removal);
  // also need to process the results to look for errors
  // TODO: should we handle deleting lists. i don't think so.
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
  console.log("createOrUpdate response", response);

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
        console.log("result does not have id", result);
        throw `no id in result: ${JSON.stringify(result)}`;
      }
      if (user.marketoId && user.marketoId !== result.id) {
        throw `user id does not match updated one: ${user.marketoId} -> ${result.id}`;
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
      console.log("Marketo user not found to delete", exportedProfile);
    }
  }

  if (marketoIds.length === 0) {
    return;
  }
  const path = "/v1/leads.json?_method=DELETE";
  const data = { input: marketoIds };
  const response = await client.lead._connection.postJson(path, data);
  if (!response.success) {
    throw `Marketo delete error`;
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
    throw `Marketo email find error`;
  }
  const results = response.result;
  for (const result of results) {
    const email = result.email.toLowerCase().trim();
    const found = emailMap[email];
    if (found) {
      found.marketoId = result.id;
      found.result = result;
    } else {
      console.log("Marketo result found but didn't have email", result);
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

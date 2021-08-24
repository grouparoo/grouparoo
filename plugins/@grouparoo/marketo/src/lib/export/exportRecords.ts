import {
  buildBatchExports,
  BatchExport,
  exportRecordsInBatch,
  BatchGroupMode,
  BatchMethodGetClient,
  BatchMethodFindAndSetDestinationIds,
  BatchMethodDeleteByDestinationIds,
  BatchMethodUpdateByDestinationIds,
  BatchMethodCreateByForeignKeyAndSetDestinationIds,
  BatchMethodAddToGroups,
  GroupNameListMap,
  DestinationIdMap,
  BatchMethodNormalizeForeignKeyValue,
  BatchMethodNormalizeGroupName,
  BatchMethodRemoveFromGroups,
} from "@grouparoo/app-templates/dist/destination/batch";
import { ExportRecordsPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { getListId, MarketoCacheData } from "./listMethods";

export interface MarketoData {
  cacheData: MarketoCacheData;
}

// return an object that you can connect with
const getClient: BatchMethodGetClient = async ({ config }) => {
  return connect(config.appOptions);
};

// fetch using the keys to set destinationId and result on BatchExports
// use the getByForeignKey to lookup results
const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = async ({
  client,
  foreignKeys,
  getByForeignKey,
}) => {
  // search for these email addresses
  const filterValues = foreignKeys;
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
    const found = getByForeignKey(result.email);
    if (found) {
      found.destinationId = result.id;
      found.result = result;
    } else {
      // Marketo result found but didn't have email. not sure what that means
    }
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async ({
  client,
  users,
}) => {
  const marketoIds = users.map((user) => {
    return {
      id: user.destinationId,
    };
  });
  const path = "/v1/leads.json?_method=DELETE";
  const data = { input: marketoIds };
  const response = await client.lead._connection.postJson(path, data);
  if (!response.success) {
    throw new Error(`Marketo delete error`);
  }
};

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
}) => {
  const options = { lookupField: "id", action: "updateOnly" };
  await updateUsers(client, users, options);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users }) => {
    const options = { lookupField: "email", action: "createOrUpdate" };
    await updateUsers(client, users, options);
  };

async function updateUsers(client, users: BatchExport[], options) {
  const input: any[] = [];
  for (const exportedProfile of users) {
    input.push(buildPayload(exportedProfile));
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
    // I'm assuming these are in the same order. That seems like the only option.
    const user = users[i];
    const result = results[i];

    try {
      if (!result.id) {
        throw new Error(
          `Marketo profile error: ${user.recordId} ${JSON.stringify(result)}`
        );
      }
      if (user.destinationId && user.destinationId !== result.id) {
        throw new Error(
          `user id does not match updated one: ${user.destinationId} -> ${result.id}`
        );
      }
    } catch (error) {
      user.error = error;
    }

    user.destinationId = result.id;
  }
}

function buildPayload(exportedProfile: BatchExport): any {
  const user: any = {};
  const {
    destinationId,
    oldRecordProperties,
    newRecordProperties,
    foreignKeyValue,
  } = exportedProfile;

  user.email = foreignKeyValue; // email
  if (destinationId) {
    user.id = destinationId;
  }

  // set profile properties, including old ones
  const newKeys = Object.keys(newRecordProperties);
  const oldKeys = Object.keys(oldRecordProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const key of allKeys) {
    if (["id", "email"].includes(key)) {
      continue; // set above
    }
    const value = newRecordProperties[key]; // includes clearing out removed ones (by setting to null)
    user[key] = formatVar(value);
  }

  return user;
}

function formatVar(value) {
  if (value === undefined) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  } else {
    return value;
  }
}

// make sure these user are in these groups (keys of map are group names)
const addToGroups: BatchMethodAddToGroups = async ({
  client,
  groupMap,
  destIdMap,
  config,
}) => {
  const { cacheData } = config.data;
  return updateList(client, ListAction.Add, groupMap, destIdMap, cacheData);
};

const removeFromGroups: BatchMethodRemoveFromGroups = async ({
  client,
  groupMap,
  destIdMap,
  config,
}) => {
  const { cacheData } = config.data;
  return updateList(client, ListAction.Remove, groupMap, destIdMap, cacheData);
};

enum ListAction {
  Add = "ADD",
  Remove = "REMOVE",
}
async function updateList(
  client,
  action: ListAction,
  groupMap: GroupNameListMap,
  destIdMap: DestinationIdMap,
  cacheData: MarketoCacheData
) {
  for (const listName in groupMap) {
    const id = await getListId(client, cacheData, listName);
    const users = groupMap[listName];
    const marketoIds: string[] = users.map((user) => user.destinationId);

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
          const user = destIdMap[id];
          if (!user) {
            throw new Error(`Unknown user id in list: ${id}`);
          }
          user.error =
            user.error ||
            new Error(`could update list ${listName}: ${message}`);
        }
      }
    }
  }
}

// mess with the keys (lowercase emails, for example)
const normalizeForeignKeyValue: BatchMethodNormalizeForeignKeyValue = ({
  keyValue,
}) => {
  if (!keyValue) {
    return null;
  }
  return keyValue.toString().toLowerCase().trim();
};
// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: BatchMethodNormalizeGroupName = ({ groupName }) => {
  return groupName.toString().trim();
};

export async function exportBatch({
  appId,
  appOptions,
  syncOperations,
  exports,
}) {
  const cacheData = { appId, appOptions };
  const batchSize = 300;
  const findSize = 300;
  const data: MarketoData = { cacheData };

  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.WithinGroup,
      syncOperations,
      appOptions,
      data,
      foreignKey: "email",
    },
    {
      getClient,
      findAndSetDestinationIds,
      deleteByDestinationIds,
      updateByDestinationIds,
      createByForeignKeyAndSetDestinationIds,
      addToGroups,
      removeFromGroups,
      normalizeForeignKeyValue,
      normalizeGroupName,
    }
  );
}

export const exportRecords: ExportRecordsPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  const batchExports = buildBatchExports(recordsToExport);
  return exportBatch({
    appId,
    appOptions,
    syncOperations,
    exports: batchExports,
  });
};

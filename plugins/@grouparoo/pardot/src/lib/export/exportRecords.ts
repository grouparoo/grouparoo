import {
  buildBatchExports,
  BatchExport,
  exportRecordsInBatch,
  BatchSyncMode,
  BatchGroupMode,
  BatchMethodGetClient,
  BatchMethodFindAndSetDestinationIds,
  BatchMethodDeleteByDestinationIds,
  BatchMethodUpdateByDestinationIds,
  BatchMethodCreateByForeignKeyAndSetDestinationIds,
  BatchMethodAddToGroups,
  BatchMethodNormalizeForeignKeyValue,
  BatchMethodNormalizeGroupName,
  BatchMethodRemoveFromGroups,
} from "@grouparoo/app-templates/dist/destination/batch";
import { ExportRecordsPluginMethod } from "@grouparoo/core";
import PardotClient from "../client";
import { connect } from "../connect";
import { PardotCacheData, getListId } from "./listMethods";

interface PardotData {
  cacheData: PardotCacheData;
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
  for (const email of foreignKeys) {
    const user = getByForeignKey(email);

    try {
      const prospect = await client.getProspectByEmail(email);
      if (prospect) {
        user.destinationId = prospect.id;
        user.result = prospect;
      }
    } catch (error) {
      user.error = error;
    }
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async ({
  client,
  users,
}) => {
  for (const user of users) {
    // No batch delete available, do one by one
    try {
      await client.deleteProspectById(parseInt(user.destinationId));
    } catch (error) {
      user.error = error;
    }
  }
};

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const { cacheData } = config.data;
  await updateProspects(client, users, cacheData);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users, config }) => {
    const { cacheData } = config.data;

    await updateProspects(client, users, cacheData);

    for (let user of users) {
      // We're not using destinationIds for created prospects, but app-templates/batch requires it to be set
      // and the batch upsert does not return IDs, so we'll just set it to the foreignKey
      if (!user.destinationId) {
        user.destinationId = user.foreignKeyValue;
      }
    }
  };

async function updateProspects(
  client: PardotClient,
  users: BatchExport[],
  cacheData: PardotCacheData
) {
  const input: any[] = [];
  for (const exportedProfile of users) {
    const payload = await buildPayload(client, exportedProfile, cacheData);
    input.push(payload);
  }

  const errors = await client.batchUpsertProspects(input);
  for (let errorIdx in errors) {
    const resultIdx = parseInt(errorIdx);
    const user = users[resultIdx];
    user.error = new Error(errors[errorIdx]);
  }
}

async function buildPayload(
  client: PardotClient,
  exportedProfile: BatchExport,
  cacheData: PardotCacheData
) {
  const {
    destinationId,
    oldRecordProperties,
    newRecordProperties,
    oldGroups,
    newGroups,
    foreignKeyValue,
  } = exportedProfile;

  const payload: any = {};

  payload.email = foreignKeyValue; // email
  if (destinationId) {
    payload.id = destinationId;
  }

  // set profile properties, including old ones
  const newKeys = Object.keys(newRecordProperties);
  const oldKeys = Object.keys(oldRecordProperties);
  const allKeys = new Set([...oldKeys, ...newKeys]);

  for (const key of allKeys) {
    if (["id", "email"].includes(key)) {
      continue; // set above
    }
    const value = newRecordProperties[key]; // includes clearing out removed ones (by setting to null)
    payload[key] = formatVar(value);
  }

  // Lists can be set as properties in the payload
  // list_123=1 will include the user in list ID 123, and list_123=0 will remove them

  for (const group of newGroups) {
    const listId = await getListId(client, cacheData, group, true);
    payload[`list_${listId}`] = 1;
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const listId = await getListId(client, cacheData, group, false);
      if (listId) {
        payload[`list_${listId}`] = 0;
      }
    }
  }

  return payload;
}

function formatVar(value) {
  if (value === null || value === undefined) {
    return ""; // empty string clears the value
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

const addToGroups: BatchMethodAddToGroups = async () => {
  // We're adding to groups by setting properties in the upsert payload
  // No need to add to groups separately
};

const removeFromGroups: BatchMethodRemoveFromGroups = async () => {
  // We're removing from groups by setting properties in the upsert payload
  // No need to remove from groups separately
};

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
  const batchSize = 50;
  const findSize = 200;

  const cacheData = { appId, appOptions };
  const data: PardotData = { cacheData };

  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Sync,
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

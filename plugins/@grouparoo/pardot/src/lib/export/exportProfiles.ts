import {
  buildBatchExports,
  BatchExport,
  exportProfilesInBatch,
  BatchSyncMode,
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
import { ExportProfilesPluginMethod } from "@grouparoo/core";
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
  // search for these email addresses
  const filterValues = foreignKeys;
  const filterType = "email";

  const results = await client.queryProspects({ [filterType]: filterValues });
  for (const result of results) {
    const found = getByForeignKey(result.email);
    if (found) {
      found.destinationId = result.id;
      found.result = result;
    } else {
      // Result found but didn't have email. not sure what that means
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
    await client.deleteProspectById(parseInt(user.destinationId));
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
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const { cacheData } = config.data;
  await updateProspects(client, users, cacheData);
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

    // We're not using destinationIds for created prospects, but grouparoo requires it to be set
    // and the batch upsert does not return IDs, so we'll just set it to the foreignKey
    if (!exportedProfile.destinationId) {
      exportedProfile.destinationId = exportedProfile.foreignKeyValue;
    }
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
    oldProfileProperties,
    newProfileProperties,
    oldGroups,
    newGroups,
    foreignKeyValue,
  } = exportedProfile;

  const payload: any = {};

  payload.email = foreignKeyValue; // email
  if (destinationId) {
    payload.id = destinationId;
  }

  if (!payload.email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = new Set([...oldKeys, ...newKeys]);

  for (const key of allKeys) {
    if (["id", "email"].includes(key)) {
      continue; // set above
    }
    const value = newProfileProperties[key]; // includes clearing out removed ones (by setting to null)
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
  if (!value) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  } else {
    return value;
  }
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

export async function exportBatch({ appId, appOptions, exports }) {
  const batchSize = 50;
  const findSize = 200;

  const cacheData = { appId, appOptions };
  const data: PardotData = { cacheData };

  return exportProfilesInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Sync,
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

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appId,
  appOptions,
  exports: profilesToExport,
}) => {
  const batchExports = buildBatchExports(profilesToExport);
  return exportBatch({
    appId,
    appOptions,
    exports: batchExports,
  });
};

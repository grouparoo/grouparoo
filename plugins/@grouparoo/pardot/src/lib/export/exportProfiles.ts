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
}) => {
  await updateProspects(client, users);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds = async ({
  client,
  users,
}) => {
  await updateProspects(client, users);
  // TODO set destination ids
};

async function updateProspects(client: PardotClient, prospects: BatchExport[]) {
  const input: any[] = [];
  for (const exportedProfile of prospects) {
    input.push(buildPayload(exportedProfile));
  }

  const errors = await client.batchUpsertProspects(input);
  for (let errorIdx in errors) {
    const resultIdx = parseInt(errorIdx);
    const prospect = prospects[resultIdx];

    // TODO why do we throw and catch? (got this from marketo)
    try {
      throw new Error(errors[errorIdx]);
    } catch (err) {
      prospect.error = err;
    }
  }
}

function buildPayload(exportedProfile: BatchExport): any {
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
  // need to first get the corresponding list ids and keep them cached

  /* TODO
  for (const group of newGroups) {
    const groupAttribute = getGroupAttribute(group);
    payload[groupAttribute] = true;
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupAttribute = getGroupAttribute(group);
      payload[groupAttribute] = null;
    }
  }
  */

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

// make sure these user are in these groups (keys of map are group names)
const addToGroups: BatchMethodAddToGroups = async ({
  client,
  groupMap,
  destIdMap,
  config,
}) => {
  // TODO We're going to do this by setting properties in the upsert payload
  // No need to add to groups separately
};

const removeFromGroups: BatchMethodRemoveFromGroups = async ({
  client,
  groupMap,
  destIdMap,
  config,
}) => {
  // TODO We're going to do this by setting properties in the upsert payload
  // No need to remove from groups separately
};

enum ListAction {
  Add = "ADD",
  Remove = "REMOVE",
}
async function updateList(
  client,
  action: ListAction,
  groupMap: GroupNameListMap,
  destIdMap: DestinationIdMap
) {
  // TODO
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

export async function exportBatch({ appOptions, exports }) {
  const batchSize = 50;
  const findSize = 200;

  return exportProfilesInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Sync,
      appOptions,
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
  destinationOptions,
  exports: profilesToExport,
}) => {
  const batchExports = buildBatchExports(profilesToExport);
  return exportBatch({
    appOptions,
    exports: batchExports,
  });
};

import {
  BatchExport,
  BatchGroupMode,
  BatchMethodAddToGroups,
  BatchMethodCreateByForeignKeyAndSetDestinationIds,
  BatchMethodDeleteByDestinationIds,
  BatchMethodFindAndSetDestinationIds,
  BatchMethodGetClient,
  BatchMethodNormalizeForeignKeyValue,
  BatchMethodNormalizeGroupName,
  BatchMethodRemoveFromGroups,
  BatchMethodUpdateByDestinationIds,
  BatchSyncMode,
  buildBatchExports,
  exportRecordsInBatch,
} from "@grouparoo/app-templates/dist/destination/batch";
import { ExportRecordsPluginMethod } from "@grouparoo/core";
import Mixpanel from "../client/mixpanel";
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
  const records = await client.query.profile.getByDistinctIds(foreignKeys);
  for (const foreignKey of foreignKeys) {
    const user = getByForeignKey(foreignKey);
    try {
      const filteredProfiles = records.filter(
        (p) => p["$distinct_id"] === foreignKey
      );
      if (filteredProfiles && filteredProfiles.length > 0) {
        user.destinationId = filteredProfiles[0]["$distinct_id"];
        user.result = filteredProfiles[0];
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
      await client.ingestion.profile.delete(user.destinationId);
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
  for (const user of users) {
    try {
      const { newRecordProperties, oldRecordProperties } = user;
      const distinctId = newRecordProperties["$distinct_id"];
      const oldDistinctId = oldRecordProperties["$distinct_id"];
      if (
        oldDistinctId &&
        oldDistinctId !== distinctId &&
        config.syncOperations
      ) {
        await deleteOrCleanGroups(
          client,
          oldDistinctId,
          config.syncOperations.delete
        );
      }
      const result = await updateProfile(client, user);
      if (result === 0) {
        throw new Error(`One or more data objects in the profile are invalid.`);
      }
    } catch (error) {
      user.error = error;
    }
  }
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users }) => {
    for (const user of users) {
      try {
        const result = await updateProfile(client, user);
        if (result === 0) {
          throw new Error(
            `One or more data objects in the profile are invalid.`
          );
        } else {
          user.destinationId = user.foreignKeyValue;
        }
      } catch (error) {
        user.error = error;
      }
    }
  };

async function updateProfile(client: Mixpanel, exportedProfile: BatchExport) {
  const {
    oldRecordProperties,
    newRecordProperties,
    oldGroups,
    newGroups,
    foreignKeyValue,
  } = exportedProfile;

  // create the profile and set properties
  const deletePropertiesPayload = {};
  const newPropertyKeys = Object.keys(newRecordProperties);
  Object.keys(oldRecordProperties)
    .filter((k) => !newPropertyKeys.includes(k))
    .forEach((k) => (deletePropertiesPayload[k] = null));

  let payload = Object.assign(newRecordProperties, deletePropertiesPayload);
  const formattedDataFields = {};
  for (const key of Object.keys(payload)) {
    if (key === "$distinct_id") {
      continue;
    }
    formattedDataFields[key] = formatVar(payload[key]);
  }
  formattedDataFields["groups"] = getGroupsListToExport(
    exportedProfile,
    oldGroups,
    newGroups
  );
  return await client.ingestion.profile.update(
    foreignKeyValue,
    formattedDataFields
  );
}

function formatVar(value) {
  if (value === undefined || value === null) {
    return null;
  }
  return value;
}

async function deleteOrCleanGroups(
  client: Mixpanel,
  distinctId: string,
  shouldDelete: boolean
) {
  if (shouldDelete) {
    await client.ingestion.profile.delete(distinctId);
  } else {
    await client.ingestion.profile.update(distinctId, { groups: [] });
  }
}

function getGroupsListToExport(profile, oldGroups, newGroups) {
  const groups = newGroups;
  if (profile.destinationId && profile.result) {
    const removedGroups = [];
    for (const group of oldGroups) {
      if (!groups.includes(group)) {
        removedGroups.push(group);
      }
    }
    for (const group of profile.result["$properties"]["groups"]) {
      if (!groups.includes(group) && !removedGroups.includes(group)) {
        groups.push(group);
      }
    }
  }
  return groups;
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

export async function exportBatch({ appOptions, syncOperations, exports }) {
  const batchSize = 200;
  const findSize = 200;

  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Sync,
      syncOperations,
      appOptions,
      foreignKey: "$distinct_id",
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
  appOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  const batchExports = buildBatchExports(recordsToExport);
  return exportBatch({
    appOptions,
    syncOperations,
    exports: batchExports,
  });
};

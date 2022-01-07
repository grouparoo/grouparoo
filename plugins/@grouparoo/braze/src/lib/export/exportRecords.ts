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
  const users = await client.users.get(foreignKeys);
  for (const foreignKey of foreignKeys) {
    const filtered = users.filter((user) => user["external_id"] === foreignKey);
    if (filtered.length > 0) {
      const user = getByForeignKey(foreignKey);
      user.destinationId = foreignKey;
      user.result = filtered[0];
    }
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async ({
  client,
  users,
}) => {
  const response = await client.users.delete(
    users.map((user) => user.destinationId)
  );
  treatErrors({ response, users });
};

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
}) => {
  const userToDelete = [];
  for (const user of users) {
    const { newRecordProperties, oldRecordProperties } = user;
    const externalId = newRecordProperties["external_id"];
    const oldExternalId = oldRecordProperties["external_id"];
    if (oldExternalId && oldExternalId !== externalId) {
      userToDelete.push(oldExternalId);
    }
  }
  const payload = getUsersPayload(users);
  if (payload.length > 0) {
    const response = await client.users.updateOrCreate(payload);
    treatErrors({ response, users });
  }
  if (userToDelete.length > 0) {
    const response = await client.users.delete(userToDelete);
    treatErrors({ response, users });
  }
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users }) => {
    const payload = getUsersPayload(users);

    if (payload.length > 0) {
      const response = await client.users.updateOrCreate(payload);
      treatErrors({ response, users });
      for (let user of users) {
        // We're not using destinationIds for created prospects, but app-templates/batch requires it to be set
        // and the batch upsert does not return IDs, so we'll just set it to the foreignKey
        if (!user.destinationId) {
          user.destinationId = user.foreignKeyValue;
        }
      }
    }
  };

function getGroupsListToExport(profile) {
  const { oldGroups, newGroups } = profile;
  const groups = newGroups;
  if (profile.destinationId && profile.result) {
    const removedGroups = [];
    for (const group of oldGroups) {
      if (!groups.includes(group)) {
        removedGroups.push(group);
      }
    }

    for (const group of profile.result["custom_attributes"]["groups"]) {
      if (!groups.includes(group) && !removedGroups.includes(group)) {
        groups.push(group);
      }
    }
  }
  return groups;
}

function treatErrors({ response, users }) {
  const errors = response.errors || [];
  for (const error of errors) {
    const resultIdx = parseInt(error.index);
    const user = users[resultIdx];
    user.error = new Error(error.type);
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

export async function exportBatch({ appOptions, syncOperations, exports }) {
  const batchSize = 50; // users updates accepts up to 75 and groups up to 50, then batchSize should be the lower one.
  const findSize = 50;

  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Sync,
      syncOperations,
      appOptions,
      foreignKey: "external_id",
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

function getUsersPayload(users: BatchExport[]) {
  const payload = [];
  for (const user of users) {
    const { oldRecordProperties, newRecordProperties } = user;
    const deletePropertiesPayload = {};
    const newPropertyKeys = Object.keys(newRecordProperties);
    Object.keys(oldRecordProperties)
      .filter((k) => !newPropertyKeys.includes(k))
      .forEach((k) => (deletePropertiesPayload[k] = null));

    let userPayload = Object.assign(
      newRecordProperties,
      deletePropertiesPayload
    );
    const formattedDataFields = {};
    for (const key of Object.keys(userPayload)) {
      formattedDataFields[key] = formatVar(userPayload[key]);
    }
    formattedDataFields["groups"] = getGroupsListToExport(user);
    payload.push(formattedDataFields);
  }
  return payload;
}

function formatVar(value) {
  if (value === undefined || value === null) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

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
  foreignKeys,
  getByForeignKey,
}) => {
  for (const foreignKey of foreignKeys) {
    const user = getByForeignKey(foreignKey);
    user.destinationId = foreignKey;
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async ({
  client,
  users,
}) => {
  try {
    const response = await client.user.delete(
      users.map((user) => user.destinationId)
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
}) => {
  const externalIdRenames = [];
  for (const user of users) {
    const { newRecordProperties, oldRecordProperties } = user;
    const externalId = newRecordProperties["external_id"];
    const oldExternalId = oldRecordProperties["external_id"];
    if (oldExternalId && oldExternalId !== externalId) {
      externalIdRenames.push({
        current_external_id: oldExternalId,
        new_external_id: externalId,
      });
    }
  }
  if (externalIdRenames.length > 0) {
    try {
      const response = await client.users.updateExternalIds(externalIdRenames);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  try {
    const payload = getUsersPayload(users);
    if (payload.length > 0) {
      const response = await client.users.update(payload);
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async () => {
    // We're handling the existing and new users inside the updateByDestinationIds.
    // To do so, we're setting the fk as destinationId.
  };

const addToGroups: BatchMethodAddToGroups = async ({ client, groupMap }) => {
  for (const audienceName in groupMap) {
    const users = groupMap[audienceName];
    const response = await client.groups.add(audienceName, users);
    console.log(response);
  }
};

const removeFromGroups: BatchMethodRemoveFromGroups = async ({
  client,
  groupMap,
}) => {
  for (const audienceName in groupMap) {
    const users = groupMap[audienceName];
    const response = await client.groups.remove(audienceName, users);
    console.log(response);
  }
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
  const findSize = 1000;

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

function getUsersPayload(users: Array<BatchExport>) {
  const payload = [];
  for (const user of users) {
    const { oldRecordProperties, newRecordProperties, foreignKeyValue } = user;
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
      if (key === "external_id") {
        continue;
      }
      formattedDataFields[key] = formatVar(userPayload[key]);
    }
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

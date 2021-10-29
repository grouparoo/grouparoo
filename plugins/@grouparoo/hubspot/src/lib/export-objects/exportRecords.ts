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
  config,
}) => {
  const { schemaId, primaryKey } = config.destinationOptions;
  const records = await client.objects.searchObjects(
    schemaId as string,
    primaryKey as string,
    foreignKeys
  );
  for (const key of foreignKeys) {
    const user = getByForeignKey(key);
    try {
      const filteredProfiles = records.filter(
        (p) => p["properties"][primaryKey as string] === key
      );
      if (filteredProfiles && filteredProfiles.length > 0) {
        user.destinationId = filteredProfiles[0]["id"];
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
  config,
}) => {
  const { schemaId } = config.destinationOptions;
  const destinationIds = users.map((user) => user.destinationId);
  if (destinationIds.length > 0) {
    const response = await client.objects.delete(schemaId, destinationIds);
    if (response?.errors) {
      attachErrorsToErroneousUsers({ users, errors: response.errors });
    }
  }
};

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const { schemaId } = config.destinationOptions;
  const inputs = [];
  for (const user of users) {
    inputs.push(buildPayload(user));
  }
  if (inputs.length > 0) {
    const response = await client.objects.update(schemaId, inputs);
    if (response?.errors) {
      attachErrorsToErroneousUsers({ users, errors: response.errors });
    }
  }
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users, config }) => {
    const { schemaId, primaryKey } = config.destinationOptions;
    const inputs = [];
    for (const user of users) {
      inputs.push(buildPayload(user));
    }
    if (inputs.length > 0) {
      const response = await client.objects.create(schemaId, inputs);
      const results = response?.results || [];
      const destinationIds = {};
      results.map((record) => {
        destinationIds[record.properties[primaryKey as string]] = record.id;
      });
      for (const user of users) {
        if (destinationIds[user.foreignKeyValue]) {
          user.destinationId = destinationIds[user.foreignKeyValue];
        }
      }
      if (response?.errors) {
        attachErrorsToErroneousUsers({ users, errors: response.errors });
      }
    }
  };

function buildPayload(exportedProfile: BatchExport) {
  const { oldRecordProperties, newRecordProperties, destinationId } =
    exportedProfile;
  const deletePropertiesPayload = {};
  const newPropertyKeys = Object.keys(newRecordProperties);
  Object.keys(oldRecordProperties)
    .filter((k) => !newPropertyKeys.includes(k))
    .forEach((k) => (deletePropertiesPayload[k] = null));

  let payload = Object.assign(newRecordProperties, deletePropertiesPayload);
  const formattedDataFields = {};
  for (const key of Object.keys(payload)) {
    formattedDataFields[key] = formatVar(payload[key]);
  }
  if (destinationId) {
    return { id: destinationId, properties: formattedDataFields };
  }
  return { properties: formattedDataFields };
}

function attachErrorsToErroneousUsers({ users, errors }) {
  const errorsMapping = {};
  errors.map((error) => {
    error.context?.ids?.map((id) => {
      errorsMapping[id] = error.message;
    });
  });
  users.map((user) => {
    if (errorsMapping[user.destinationId]) {
      user.error = new Error(errorsMapping[user.destinationId]);
    }
  });
}

function formatVar(value) {
  if (value === undefined || value === null) {
    return "";
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
  appOptions,
  destinationOptions,
  syncOperations,
  exports,
}) {
  const { schemaId, primaryKey } = destinationOptions;
  const batchSize = schemaId.toLowerCase().trim() === "contact" ? 10 : 100;
  const findSize = 5;

  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Sync,
      syncOperations,
      appOptions,
      destinationOptions,
      foreignKey: primaryKey,
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
  destinationOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  const batchExports = buildBatchExports(recordsToExport);
  return exportBatch({
    appOptions,
    destinationOptions,
    syncOperations,
    exports: batchExports,
  });
};

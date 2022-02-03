import {
  BatchConfig,
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
import Spreadsheet from "../shared/Spreadsheet";

const GOOGLE_SHEETS_ROWS_LIMIT = 10000;

// return an object that you can connect with
const getClient: BatchMethodGetClient = async ({ config }) => {
  return new Spreadsheet(
    config.appOptions,
    config.destinationOptions.sheet_url?.toString()
  );
};

// fetch using the keys to set destinationId and result on BatchExports
// use the getByForeignKey to lookup results
const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = async ({
  client,
  foreignKeys,
  getByForeignKey,
  config,
}) => {
  const headers = await client.getHeaders();
  const primaryKey = config?.destinationOptions?.primaryKey?.toString();
  const toFind = foreignKeys.length;
  let count = 0;
  if (headers && primaryKey) {
    let offset = 0;
    let rows = await client.read({ limit: GOOGLE_SHEETS_ROWS_LIMIT, offset });
    while (rows.length > 0) {
      for (const row of rows) {
        const found = getByForeignKey(row[primaryKey]);
        if (found) {
          found.destinationId = row._rowNumber;
          found.result = row;
          count++;
          if (count >= toFind) {
            return; // found them all!
          }
        }
      }
      offset += GOOGLE_SHEETS_ROWS_LIMIT;
      rows = await client.read({ limit: GOOGLE_SHEETS_ROWS_LIMIT, offset });
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
      await client.cleanRowByRowNumber(user.destinationId);
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
      const id = newRecordProperties[config.foreignKey];
      const oldId = oldRecordProperties[config.foreignKey];
      if (oldId && oldId !== id) {
        await deleteOrCleanGroups(
          client,
          config.foreignKey,
          oldId,
          config.destinationOptions?.groupsColumn?.toString(),
          config.syncOperations?.delete
        );
      }
      const payload = buildPayload(config, user);
      await client.updateRowByRowNumber(user.destinationId, payload);
    } catch (error) {
      user.error = error;
    }
  }
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users, config }) => {
    for (const user of users) {
      try {
        const payload = buildPayload(config, user);
        const destinationId = await client.addRowAtTheEnd(payload);
        if (destinationId) {
          user.destinationId = destinationId;
        }
      } catch (error) {
        user.error = error;
      }
    }
  };

function buildPayload(config: BatchConfig, user) {
  const { newRecordProperties, oldRecordProperties, oldGroups, newGroups } =
    user;
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
  const groupsColumn = config?.destinationOptions?.groupsColumn?.toString();
  if (groupsColumn) {
    formattedDataFields[groupsColumn] = newGroups.sort().join(",");
  }
  return formattedDataFields;
}

async function deleteOrCleanGroups(
  client: Spreadsheet,
  primaryKeyColumn: string,
  primaryKeyValue: string,
  groupsColumn: string,
  shouldDelete: boolean
) {
  if (shouldDelete) {
    await client.cleanRowByPrimaryKey(primaryKeyColumn, primaryKeyValue);
  } else {
    await client.updateRowByPrimaryKey(primaryKeyColumn, primaryKeyValue, {
      [groupsColumn]: "",
    });
  }
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
  syncOperations,
  destinationOptions,
  exports,
}) {
  const batchSize = 1000000;
  const findSize = 1000000;

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
      foreignKey: destinationOptions["primaryKey"],
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
  destinationOptions,
  exports: recordsToExport,
}) => {
  const batchExports = buildBatchExports(recordsToExport);
  return exportBatch({
    appOptions,
    syncOperations,
    destinationOptions,
    exports: batchExports,
  });
};

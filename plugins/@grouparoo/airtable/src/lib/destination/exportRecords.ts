import {
  DestinationSyncOperations,
  ExportRecordsPluginMethod,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { extractClient } from "../connect";
import {
  BatchConfig,
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
  GetForeignKeyMapMethod,
} from "@grouparoo/app-templates/dist/destination/batch";
import { IClient } from "../client/interfaces/iClient";
import { AirtableDestinationOptions } from "./destinationOptions";
import Airtable, { FieldSet, RecordData } from "airtable";
import { CreateRecord } from "../client/models";

/**
 * Batch Size is the size of the batches sent to Airtable
 * 10 is the maximum number of records that can be sent in any batch
 */
const BATCH_SIZE = 10;

const getClient: BatchMethodGetClient = async ({ config }) => {
  if (config.appOptions) {
    return extractClient(config.appOptions);
  }
  return;
};

interface MethodOptions {
  client: IClient;
  users: BatchExport[];
  config: BatchConfig;
  getByForeignKey: GetForeignKeyMapMethod;
}

interface FindAndSetMethodOptions {
  client: IClient;
  users: BatchExport[];
  config: BatchConfig;
  foreignKeys: string[];
  getByForeignKey: GetForeignKeyMapMethod;
}

const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async (
  methodOptions: MethodOptions
) => {
  const { config, users, client } = methodOptions;
  const { tableId } = config.destinationOptions as AirtableDestinationOptions;
  const recordIds = users
    .map((value) => value.destinationId)
    .filter((id: string | undefined): id is string => !!id);
  if (recordIds.length > 0) {
    try {
      await client.deleteRecords(tableId, recordIds);
    } catch (err) {
      await singleRecords("delete", methodOptions);
    }
  }
};

const singleRecords = async (
  action: "update" | "create" | "delete",
  methodOptions: MethodOptions
) => {
  const { config, users, client } = methodOptions;
  const { tableId } = config.destinationOptions as AirtableDestinationOptions;
  for (const record of users) {
    try {
      switch (action) {
        case "update":
          await client.updateRecords(tableId.toString(), [
            buildUpdatePayload(record),
          ]);
          break;
        case "create":
          const response = await client.createRecords(tableId.toString(), [
            buildCreatePayload(record),
          ]);
          assignKeysFromResponse(response, methodOptions);
          break;
        case "delete":
          if (record.destinationId) {
            await client.deleteRecords(tableId, [record.destinationId]);
          }
        default:
          throw new Error(`unknown action: ${action}`);
      }
    } catch (err) {
      // attach to this single record
      record.error = err;
    }
  }
};

const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async (
  methodOptions: MethodOptions
) => {
  const { config, users, client } = methodOptions;
  const { tableId } = config.destinationOptions as AirtableDestinationOptions;
  const inputs = [];
  for (const record of users) {
    inputs.push(buildUpdatePayload(record));
  }
  if (inputs.length == 0) {
    return;
  }
  try {
    await client.updateRecords(tableId.toString(), inputs);
  } catch (err) {
    await singleRecords("update", methodOptions);
  }
};

function assignKeysFromResponse(
  response: Airtable.Records<FieldSet>,
  methodOptions: MethodOptions
) {
  const { config, getByForeignKey } = methodOptions;
  const { primaryKey } =
    config.destinationOptions as AirtableDestinationOptions;

  for (const result of response) {
    const key = result.fields[primaryKey];
    if (!key) {
      return;
    }
    const found = getByForeignKey(key.toString());
    if (found) {
      found.destinationId = result.id;
    }
  }
}

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async (methodOptions: MethodOptions) => {
    const { client, users, config } = methodOptions;
    const { tableId } = config.destinationOptions as AirtableDestinationOptions;
    const inputs = users.map((record) => buildCreatePayload(record));

    if (inputs.length > 0) {
      try {
        const response = await client.createRecords(tableId.toString(), inputs);
        assignKeysFromResponse(response, methodOptions);
      } catch (err) {
        await singleRecords("create", methodOptions);
      }
    }
  };

// fetch using the keys to set destinationId and result on BatchExports
// use the getByForeignKey to lookup results
const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = async (
  options: FindAndSetMethodOptions
) => {
  const { config, client, getByForeignKey, foreignKeys } = options;
  const { tableId, primaryKey } =
    config.destinationOptions as AirtableDestinationOptions;
  const records = await client.listRecordsByField(
    tableId,
    primaryKey,
    foreignKeys
  );
  records.forEach((record) => {
    const key = record.fields[primaryKey.toString()];
    if (!key) {
      return;
    }
    const found = getByForeignKey(key.toString());
    if (found) {
      found.destinationId = record.id;
      found.result = record.fields;
    }
  });
};

function buildUpdatePayload(
  exportedProfile: BatchExport
): RecordData<Partial<FieldSet>> {
  if (!exportedProfile.destinationId) {
    throw ReferenceError(
      `Could not find destination ID in Batch Export with key ${exportedProfile.recordId}`
    );
  }
  return {
    id: exportedProfile.destinationId,
    fields: buildPayloadFields(exportedProfile),
  };
}

function buildCreatePayload(
  exportedProfile: BatchExport
): CreateRecord<FieldSet> {
  return {
    fields: buildPayloadFields(exportedProfile),
  };
}

function buildPayloadFields(exportedProfile: BatchExport): FieldSet {
  const { oldRecordProperties, newRecordProperties } = exportedProfile;
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
  return formattedDataFields;
}

function formatVar(value) {
  if (value === null || value === undefined) {
    return null; // empty string clears the value
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

const addToGroups: BatchMethodAddToGroups = async () => {
  // This destination doesn't do groups
};

const removeFromGroups: BatchMethodRemoveFromGroups = async () => {
  // This destination doesn't do groups
};
// mess with the keys (lowercase emails, for example)
const normalizeForeignKeyValue: BatchMethodNormalizeForeignKeyValue = ({
  keyValue,
}) => {
  if (!keyValue) {
    return null;
  }
  // Formula search is case sensitive
  return keyValue.toString().trim();
};

// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: BatchMethodNormalizeGroupName = ({ groupName }) => {
  return groupName.toString().trim();
};

interface ExportBatchOptions {
  appOptions: SimpleAppOptions;
  connection: IClient;
  destinationOptions: SimpleDestinationOptions;
  syncOperations?: DestinationSyncOperations;
  exports: BatchExport[];
}

export async function exportBatch(exportBatchOptions: ExportBatchOptions) {
  const { syncOperations, appOptions, destinationOptions, exports } =
    exportBatchOptions;
  const { primaryKey } = destinationOptions;
  const batchSize = BATCH_SIZE;
  const findSize = BATCH_SIZE;

  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncMode: BatchSyncMode.Additive,
      syncOperations,
      appOptions,
      destinationOptions,
      foreignKey: primaryKey.toString(),
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
  connection,
  destinationOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  const batchExports = buildBatchExports(recordsToExport);
  try {
    return await exportBatch({
      appOptions,
      connection,
      destinationOptions,
      syncOperations,
      exports: batchExports,
    });
  } catch (error) {
    throw error;
  }
};

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
  GroupNameListMap,
} from "@grouparoo/app-templates/dist/destination/batch";
import { ExportRecordsPluginMethod, FilterOperation } from "@grouparoo/core";
import { connect } from "../connect";
import { makeWhereClause } from "../shared/util";
import { checkOptionsIntegrity } from "./destinationMappingOptions";

// return an object that you can connect with
const getClient: BatchMethodGetClient = async ({ config }) => {
  return await connect({
    app: null,
    appId: null,
    appOptions: config.appOptions,
  });
};

// fetch using the keys to set destinationId and result on BatchExports
// use the getByForeignKey to lookup results
const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = async ({
  client,
  users,
  foreignKeys,
  getByForeignKey,
  config,
}) => {
  const table: string = config.destinationOptions.table?.toString();
  const primaryKey: string = config.destinationOptions.primaryKey?.toString();
  const uniqueForeignKeys = Array.from(new Set(foreignKeys));

  const records = await getRecords(
    client,
    table,
    primaryKey,
    uniqueForeignKeys
  );

  for (const record of records) {
    const user = getByForeignKey(record[primaryKey.toString()]);
    user.destinationId = record[primaryKey.toString()];
    user.result = record;
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const primaryKeys = users.map((record) => record.foreignKeyValue);
  await deleteOrClearGroups(client, config, primaryKeys);
};

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const table: string = config.destinationOptions.table?.toString();
  const primaryKey: string = config.destinationOptions.primaryKey?.toString();
  const payloads: any[] = [];
  let columns: any = [];
  let columnsToSet: string = "";

  const { primaryKeysToDelete, currentPrimaryKeyValues } =
    await treatCollisions(client, table, primaryKey, users);

  for (const record of users) {
    const payload = buildPayload(record);
    if (columns.length === 0 || columns.length < Object.keys(payload).length) {
      columns = Object.keys(payload);
      columnsToSet = Object.keys(payload)
        .map((entry) => `${entry} = newRecord.${entry}`)
        .join(", ");
    }
    payloads.push(payload);
  }

  if (primaryKeysToDelete.length > 0) {
    // delete/orphan old primary keys
    await deleteOrClearGroups(client, config, primaryKeysToDelete);
  }

  let values: any = [];
  for (let payload of payloads) {
    payload = normalizePayload(payload, columns);
    payload["currentPrimaryKeyValue"] =
      currentPrimaryKeyValues[payload[primaryKey]];
    const cleanedValues = formatPayloadValues(Object.values(payload));
    values.push(`(${cleanedValues})`);
  }
  values = values.join(", ");
  columns.push("CURRENT_PRIMARY_KEY");
  columns = columns.join(", ");
  const query = `UPDATE ${table} SET ${columnsToSet} FROM (VALUES ${values}) newRecord(${columns}) WHERE ${table}.${primaryKey} = newRecord.CURRENT_PRIMARY_KEY`;
  await client.execute(query);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users, config }) => {
    const table: string = config.destinationOptions.table?.toString();
    const primaryKey: string = config.destinationOptions.primaryKey?.toString();
    let values = [];
    let columns = "";
    for (const record of users) {
      const payload = buildPayload(record);
      if (columns === "") {
        columns = Object.keys(payload).join(", ");
      }
      const cleanedValues = formatPayloadValues(Object.values(payload));
      if (users.length > 1) {
        values.push(`(${cleanedValues})`);
      } else {
        values.push(`${cleanedValues}`);
      }
    }
    const response = await insertValues(client, table, columns, values);
    if (
      response?.length > 0 &&
      response[0]["number of rows inserted"].toString() ===
        users?.length.toString()
    ) {
      for (const user of users) {
        user.destinationId = user.foreignKeyValue;
      }
    } else {
      const primaryKeys = users.map((record) => record.foreignKeyValue);
      await treatErrors(client, table, primaryKey, primaryKeys, users);
    }
  };

async function getRecords(
  client: any,
  table: string,
  primaryKey: string,
  primaryKeys: string[]
) {
  let query = `SELECT "${primaryKey}" FROM "${table}" WHERE`;
  const inClause = makeWhereClause(
    {
      columnName: primaryKey.toString(),
      filterOperation: FilterOperation.In,
      values: primaryKeys,
    },
    []
  );
  query += ` ${inClause}`;
  return await client.execute(query, primaryKeys);
}

async function treatErrors(
  client: any,
  table: string,
  primaryKey: string,
  primaryKeys: string[],
  users: BatchExport[]
) {
  const exportedRecords = await getRecords(
    client,
    table,
    primaryKey,
    primaryKeys
  );
  const exportedRecordsMapping = {};
  for (const record of exportedRecords) {
    exportedRecordsMapping[record[primaryKey]] = record;
  }
  for (const record of users) {
    if (exportedRecordsMapping[record[primaryKey]]) {
      record.destinationId = record.foreignKeyValue;
    } else {
      record.error = new Error("Something went wrong exporting this record.");
    }
  }
}

async function treatCollisions(
  client: any,
  table: string,
  primaryKey: string,
  records: BatchExport[]
) {
  const primaryKeysToDelete: string[] = [];
  const currentPrimaryKeyValues: any = {};
  const primaryKeysPossibleCollision: string[] = [];
  for (const record of records) {
    const newPrimaryKeyValue = record.newRecordProperties[primaryKey];
    const oldPrimaryKeyValue = record.oldRecordProperties[primaryKey];
    if (oldPrimaryKeyValue && oldPrimaryKeyValue !== newPrimaryKeyValue) {
      primaryKeysPossibleCollision.push(newPrimaryKeyValue);
    }
  }
  let recordPossibleCollision = [];
  if (primaryKeysPossibleCollision.length > 0) {
    recordPossibleCollision = await getRecords(
      client,
      table,
      primaryKey,
      primaryKeysPossibleCollision
    );
  }
  for (const record of records) {
    const newPrimaryKeyValue = record.newRecordProperties[primaryKey];
    const oldPrimaryKeyValue = record.oldRecordProperties[primaryKey];
    if (oldPrimaryKeyValue && oldPrimaryKeyValue !== newPrimaryKeyValue) {
      const filteredExistentRecords = recordPossibleCollision.filter(
        (existent) => existent[primaryKey] === newPrimaryKeyValue
      );
      if (filteredExistentRecords.length > 0) {
        primaryKeysToDelete.push(oldPrimaryKeyValue);
        currentPrimaryKeyValues[newPrimaryKeyValue] = newPrimaryKeyValue;
      } else {
        currentPrimaryKeyValues[newPrimaryKeyValue] = oldPrimaryKeyValue;
      }
    } else {
      currentPrimaryKeyValues[newPrimaryKeyValue] = newPrimaryKeyValue;
    }
  }
  return { primaryKeysToDelete, currentPrimaryKeyValues };
}

async function insertValues(
  client: any,
  table: string,
  columns: string,
  values: string[]
) {
  const valuesMethod = values.length <= 1 ? "SELECT" : "VALUES";
  const query = `INSERT INTO ${table} (${columns}) ${valuesMethod} ${values.join(
    ", "
  )}`;
  return client.execute(query);
}

function formatPayloadValues(payloadValues: string[]) {
  return payloadValues.reduce((prev, curr, idx) => {
    return (
      prev +
      (curr === null ||
      curr === undefined ||
      curr.toString().trim().length === 0
        ? null
        : `'${curr.toString().replace(new RegExp("'", "gi"), "")}'`) +
      (idx === payloadValues.length - 1 ? "" : ", ")
    );
  }, "");
}

function normalizePayload(payload, columns) {
  const fullPayload = {};
  for (const column of columns) {
    fullPayload[column] = null;
  }
  return Object.assign(fullPayload, payload);
}

function buildPayload(user: any) {
  const { newRecordProperties, oldRecordProperties } = user;
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
  if (value === undefined || value === null) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

async function getGroups(
  client: any,
  groupsTable: string,
  groupNameField: string,
  groupForeignKey: string,
  groupNames: string[],
  primaryKeyValues: string[]
) {
  let query = `SELECT * FROM "${groupsTable}" WHERE`;
  const inClause1 = makeWhereClause(
    {
      columnName: groupNameField.toString(),
      filterOperation: FilterOperation.In,
      values: groupNames,
    },
    []
  );
  const inClause2 = makeWhereClause(
    {
      columnName: groupForeignKey.toString(),
      filterOperation: FilterOperation.In,
      values: primaryKeyValues,
    },
    [groupNames]
  );

  query += ` ${inClause1} AND`;
  query += ` ${inClause2}`;
  return await client.execute(query, [...groupNames, ...primaryKeyValues]);
}

function buildGroupsPayload(
  groupMap: GroupNameListMap,
  groupColumnName: string,
  groupForeignKey: string
) {
  const groupNames = new Set<string>();
  const primaryKeys = new Set<string>();
  const payloads = [];
  for (const key in groupMap) {
    groupNames.add(key);
    payloads.push(
      ...groupMap[key].map((record) => {
        primaryKeys.add(record.foreignKeyValue);
        return {
          [groupColumnName]: key,
          [groupForeignKey]: record.foreignKeyValue,
        };
      })
    );
  }
  return {
    groupNames: Array.from(groupNames),
    primaryKeys: Array.from(primaryKeys),
    payloads,
  };
}

async function deleteOrClearGroups(
  client: any,
  config: BatchConfig,
  primaryKeys: string[]
) {
  let tableToDeleteFrom: string;
  let columnToDeleteFrom: string;
  if (config.syncOperations.delete) {
    tableToDeleteFrom = config.destinationOptions.table?.toString();
    columnToDeleteFrom = config.destinationOptions.primaryKey?.toString();
  } else {
    tableToDeleteFrom = config.destinationOptions.groupsTable?.toString();
    columnToDeleteFrom = config.destinationOptions.groupForeignKey?.toString();
  }
  let query = `DELETE FROM "${tableToDeleteFrom}" WHERE`;
  const inClause = makeWhereClause(
    {
      columnName: columnToDeleteFrom,
      filterOperation: FilterOperation.In,
      values: primaryKeys,
    },
    []
  );
  query += ` ${inClause}`;
  await client.execute(query, primaryKeys);
}

const addToGroups: BatchMethodAddToGroups = async ({
  client,
  groupMap,
  config,
}) => {
  const groupsTable: string = config.destinationOptions.groupsTable?.toString();
  const groupForeignKey: string =
    config.destinationOptions.groupForeignKey?.toString();
  const groupColumnName: string =
    config.destinationOptions.groupColumnName?.toString();
  const columns = [groupColumnName, groupForeignKey];

  const { groupNames, primaryKeys, payloads } = buildGroupsPayload(
    groupMap,
    groupColumnName,
    groupForeignKey
  );

  const existingGroups = await getGroups(
    client,
    groupsTable,
    groupColumnName,
    groupForeignKey,
    groupNames,
    primaryKeys
  );

  const values = [];
  for (const payload of payloads) {
    const filtered = existingGroups.filter(
      (existingGroup) =>
        existingGroup[groupColumnName] === payload[groupColumnName] &&
        existingGroup[groupForeignKey] === payload[groupForeignKey]
    );
    if (filtered.length > 0) {
      continue;
    }
    const cleanedValues = formatPayloadValues(Object.values(payload));
    if (payloads.length > 1) {
      values.push(`(${cleanedValues})`);
    } else {
      values.push(`${cleanedValues}`);
    }
  }
  if (values.length > 0) {
    await insertValues(client, groupsTable, columns.join(", "), values);
  }
};

const removeFromGroups: BatchMethodRemoveFromGroups = async ({
  client,
  groupMap,
  config,
}) => {
  const groupsTable: string = config.destinationOptions.groupsTable?.toString();
  const groupForeignKey: string =
    config.destinationOptions.groupForeignKey?.toString();
  const groupColumnName: string =
    config.destinationOptions.groupColumnName?.toString();

  const { payloads } = buildGroupsPayload(
    groupMap,
    groupColumnName,
    groupForeignKey
  );
  const columns = [groupColumnName, groupForeignKey];
  const values = [];
  for (const payload of payloads) {
    const cleanedValues = formatPayloadValues(Object.values(payload));
    values.push(`(${cleanedValues})`);
  }
  const where1 = `${groupsTable}.${groupColumnName} = toDelete.${groupColumnName}`;
  const where2 = `${groupsTable}.${groupForeignKey} = toDelete.${groupForeignKey}`;
  let query = `DELETE FROM "${groupsTable}" USING (VALUES ${values.join(
    ", "
  )}) toDelete(${columns}) WHERE ${where1} AND ${where2}`;
  await client.execute(query);
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
  const batchSize = 200;
  const findSize = 200;

  checkOptionsIntegrity(destinationOptions);
  exports.map((currentExport) => {
    if (
      !destinationOptions.groupsTable ||
      !destinationOptions.groupForeignKey ||
      !destinationOptions.groupColumnName
    ) {
      currentExport.oldGroups = [];
      currentExport.newGroups = [];
    }
  });

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
      foreignKey: destinationOptions.primaryKey,
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

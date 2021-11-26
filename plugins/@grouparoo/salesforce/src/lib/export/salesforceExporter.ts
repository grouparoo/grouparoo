import {
  DestinationSyncOperations,
  ErrorWithRecordId,
  objectCache,
  SimpleAppOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { getFieldMap, SalesforceCacheData } from "../objects";
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
  exportRecordsInBatch,
} from "@grouparoo/app-templates/dist/destination/batch";
import { SalesforceModel } from "./model";
import { parseFieldName } from "./mapping";

const idType = "Id";

// return an object that you can connect with
const getClient: BatchMethodGetClient = async ({ config }) => {
  return connect(config.appOptions);
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
  // search for these using the foreign key
  const { recordObject, recordMatchField } = config.data;
  const idType = "Id";

  const foreignKeyType = getForeignKeyType(users, recordMatchField);
  const parsedForeignKeys = parseForeignKeys(foreignKeys, foreignKeyType);

  const query = { [recordMatchField]: parsedForeignKeys };
  const fields = [idType, recordMatchField];
  const records = await client
    .sobject(recordObject)
    .find(query, fields)
    .execute();

  for (const record of records) {
    const value = record[recordMatchField];
    const id = record[idType];
    const found = getByForeignKey(value);
    if (found) {
      found.destinationId = id;
      found.result = record;
    } else {
      // Salesforce result found but didn't have email. not sure what that means
      //console.log("foreign key not found!", record);
    }
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const { recordObject } = config.data;
  const payload = users.map((user) => user.destinationId);
  const results = await client.sobject(recordObject).del(payload);
  processResults(results, users, ResultType.USER);
};
interface ReferenceObject {
  properties: {
    [key: string]: any;
  };
  refForeignKeyValue: string;
  row: any;
  user: BatchExport;
}
interface ReferenceMap {
  [refKey: string]: ReferenceObject[];
}

async function buildPayload(
  client: any,
  users: BatchExport[],
  config: BatchConfig
): Promise<{ usersInPayload: BatchExport[]; payload: any[] }> {
  const { recordReferenceMatchField } = config.data;
  const refMap: ReferenceMap = {};
  const toUpdate: ReferenceObject[] = [];
  for (const user of users) {
    const { row, referenceData } = buildUserPayload(user, config);
    const refObject: ReferenceObject = {
      properties: referenceData,
      refForeignKeyValue: null,
      row,
      user,
    };
    if (recordReferenceMatchField) {
      const foreignKeyValue = normalizeReferenceKeyValue({
        keyValue: referenceData[recordReferenceMatchField],
        config,
      });
      refObject.refForeignKeyValue = foreignKeyValue;

      const refKey = (foreignKeyValue || "").toString().trim().toLowerCase();
      refMap[refKey] = refMap[refKey] || [];
      refMap[refKey].push(refObject);
    }
    toUpdate.push(refObject);
  }

  await createAndUpdateReferences(client, toUpdate, refMap, config);

  const payload = [];
  const usersInPayload: BatchExport[] = [];
  for (const refObject of toUpdate) {
    const user = refObject.user;
    if (!user.error) {
      payload.push(refObject.row);
      usersInPayload.push(refObject.user);
    }
  }
  return { payload, usersInPayload };
}

function updateReferences(
  refObjects: ReferenceObject[],
  refId: string,
  config: BatchConfig
) {
  const { recordReferenceField } = config.data;
  for (const refObject of refObjects) {
    const { row } = refObject;
    row[recordReferenceField] = refId;
  }
}

async function createAndUpdateReferences(
  client: any,
  toUpdate: ReferenceObject[],
  refMap: ReferenceMap,
  config: BatchConfig
) {
  const {
    recordReferenceField,
    recordReferenceObject,
    recordReferenceMatchField,
  } = config.data;
  const idType = "Id";

  if (!recordReferenceField) {
    return;
  }

  const refKeys = Object.keys(refMap);
  if (refKeys.length === 0) {
    return;
  }

  const updatedKeys = new Set();
  const foreignKeys = new Set();
  for (const refKey of refKeys) {
    const refObjects = refMap[refKey];
    if (refKey.length === 0) {
      updateReferences(refObjects, null, config);
      updatedKeys.add(refKey);
    } else {
      for (const refObject of refObjects) {
        foreignKeys.add(refObject.refForeignKeyValue);
      }
    }
  }

  if (foreignKeys.size === 0) {
    return;
  }
  const query = { [recordReferenceMatchField]: Array.from(foreignKeys) };
  const fields = [idType, recordReferenceMatchField];
  const records = await client
    .sobject(recordReferenceObject)
    .find(query, fields)
    .execute();

  for (const record of records) {
    const value = normalizeReferenceKeyValue({
      keyValue: record[recordReferenceMatchField],
      config,
    })
      .toString()
      .trim()
      .toLowerCase();
    if (updatedKeys.has(value)) {
      continue;
    }
    const id = record[idType]; // id of the reference object
    const foundRows = refMap[value]; // key of the reference object
    if (foundRows) {
      updateReferences(foundRows, id, config);
      updatedKeys.add(value);
    } else {
      // Salesforce result found but didn't have key. not sure what that means
      //console.log("reference key not found!", { value, refMap, record });
    }
  }

  const payload = [];
  const createKeys = [];
  // one for each key
  for (const refKey of refKeys) {
    if (updatedKeys.has(refKey)) {
      continue; // already updated
    }
    const refObjects = refMap[refKey];
    if (refObjects.length === 0) {
      continue;
    }
    createKeys.push(refKey);
    payload.push(buildReferenceCreatePayload(refObjects, config));
  }

  if (payload.length === 0) {
    return; // all done
  }
  const results = await client.sobject(recordReferenceObject).create(payload);
  for (let i = 0; i < results.length; i++) {
    // I'm assuming these are in the same order. That seems like the only option.
    const refKey = createKeys[i];
    const refObjects = refMap[refKey] || [];
    const result = results[i];

    try {
      let id = (result.id || "").toString();
      if (id.length === 0) {
        throw new Error(
          `Missing reference id (${refKey}): ${JSON.stringify(result)}`
        );
      }
      const foundRows = refMap[refKey];
      updateReferences(foundRows, id, config);
      updatedKeys.add(refKey);
    } catch (error) {
      for (const refObject of refObjects) {
        // each has an error
        refObject.user.error = error;
      }
    }
  }
}

function buildReferenceCreatePayload(
  refObjects: ReferenceObject[],
  config: BatchConfig
) {
  const {
    recordReferenceField,
    recordReferenceObject,
    recordReferenceMatchField,
  } = config.data;

  // we could do a lot here (most common one?) but for now we'll just take the first
  const refObject = refObjects[0];
  const { properties, refForeignKeyValue } = refObject;
  const row: any = {};

  row[recordReferenceMatchField] = refForeignKeyValue;
  const allKeys = Object.keys(properties);
  for (const fieldName of allKeys) {
    const value = properties[fieldName];
    if ([idType, recordReferenceMatchField].includes(fieldName)) {
      continue; // set above
    }

    const field = config.data.referenceFields[fieldName];
    if (field) {
      row[fieldName] = formatAndDefaultValue(value, field);
    } else {
      // otherwise, it's no longer a field (got deleted from Salesforce): let it go
      //console.log("Unknown reference field", fieldName, value);
    }
  }
  return row;
}

function buildUserPayload(
  exportedRecord: BatchExport,
  config: BatchConfig
): { row: any; referenceData: any } {
  const { recordMatchField, recordReferenceObject } = config.data;
  const row: any = {};
  const {
    destinationId,
    oldRecordProperties,
    newRecordProperties,
    foreignKeyValue,
  } = exportedRecord;

  row[recordMatchField] = foreignKeyValue;
  if (destinationId) {
    row[idType] = destinationId;
  }

  const referenceData = {};
  // set record properties, including old ones
  const newKeys = Object.keys(newRecordProperties);
  const oldKeys = Object.keys(oldRecordProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const keyName of allKeys) {
    const value = newRecordProperties[keyName]; // includes clearing out removed ones (by setting to null)
    const { reference, fieldName } = parseFieldName({
      recordReferenceObject,
      key: keyName,
    });
    if (reference) {
      referenceData[fieldName] = value;
      continue;
    }
    if ([idType, recordMatchField].includes(fieldName)) {
      continue; // set above
    }

    const field = config.data.recordFields[fieldName];
    if (field) {
      row[fieldName] = formatAndDefaultValue(value, field);
    } else {
      // otherwise, it's no longer a field (got deleted from Salesforce): let it go
      //console.log("Unknown record field", keyName, fieldName, value);
    }
  }

  return { row, referenceData };
}

function getForeignKeyType(users: BatchExport[], recordMatchField: string) {
  if (users.length > 0) {
    return typeof users[0].newRecordProperties[recordMatchField];
  }
  return null;
}

function parseForeignKeys(
  foreignKeys: string[],
  type: string
): Array<number | string> {
  if (!type) {
    return foreignKeys;
  }
  return foreignKeys.map((foreignKey) => {
    return type === "number" ? Number(foreignKey) : foreignKey;
  });
}

function formatAndDefaultValue(value, field) {
  if (value === undefined || value === null) {
    if (field) {
      return field.defaultValue;
    }
    return null;
  }

  value = truncateIfString(value, field);
  return value;
}
enum ResultType {
  USER = "USER",
  ADDGROUP = "ADDGROUP",
  REMOVEGROUP = "REMOVEGROUP",
  LIST = "LIST",
}
const OK_PROCESS_ERROR = new Error("this is fine");
const CONVERTED_LEAD_ERROR = new Error("converted lead");
function processResult(result, identifier, type: ResultType) {
  let id = (result.id || "").toString();
  let errors = result.errors || [];
  let success = !!result.success;

  if (type === ResultType.ADDGROUP) {
    // it's ok if it was already there
    errors = errors.filter((err) => err?.statusCode !== "DUPLICATE_VALUE");
    if (errors.length === 0) {
      throw OK_PROCESS_ERROR;
    }
    id = "doesntmatter";
  }
  if (type === ResultType.REMOVEGROUP) {
    // it's ok if it wasn't there
    errors = errors.filter((err) => err?.statusCode !== "NOT_FOUND");
    if (errors.length === 0) {
      throw OK_PROCESS_ERROR;
    }
    id = "doesntmatter";
  }
  if (!success || errors.length > 0) {
    // console.log("SDFC error:", JSON.stringify(errors));
    if (
      errors.length === 1 &&
      errors[0].statusCode === "CANNOT_UPDATE_CONVERTED_LEAD"
    ) {
      // it's ok if this lead has been converted. it's now a contact.
      throw CONVERTED_LEAD_ERROR;
    }

    const messages = errors.map((err) => err?.message).filter((msg) => !!msg);
    if (messages.length > 0) {
      throw new Error(`Error (${identifier}): ${messages.join(",")}`);
    } else {
      throw new Error(
        `Unknown Error (${identifier}): ${JSON.stringify(result)}`
      );
    }
  }
  if (id.length === 0) {
    throw new Error(`Missing id (${identifier}): ${JSON.stringify(result)}`);
  }
  return id;
}

// called from create, update, and delete
function processResults(results, users: BatchExport[], type: ResultType) {
  if (results.length !== users.length) {
    throw new Error("expected results and users lengths to be the same");
  }
  for (let i = 0; i < results.length; i++) {
    // I'm assuming these are in the same order. That seems like the only option.
    const user = users[i];
    const result = results[i];
    try {
      const id = processResult(result, user.recordId, type);
      if (type === ResultType.USER) {
        if (user.destinationId && user.destinationId !== id) {
          throw new Error(
            `destinationId does not match updated one: ${user.destinationId} -> ${id}`
          );
        }
        user.destinationId = id;
      }
    } catch (error) {
      if ([OK_PROCESS_ERROR, CONVERTED_LEAD_ERROR].includes(error)) {
        if (type === ResultType.USER) {
          if (!user.destinationId) {
            // still should have an id!
            user.error = new Error(
              `destinationId never set from ok process error: ${user.destinationId}`
            );
          }
          if (error === CONVERTED_LEAD_ERROR) {
            // remove from all groups.
            // groups are done in the batch helper after processing users
            // remove from all old and (just to be sure) all new groups
            user.removedGroups = Array.from(
              new Set(user.removedGroups.concat(user.addedGroups))
            );
            user.addedGroups = [];
          }
        }
      } else {
        user.error = error;
      }
    }
  }
}

// update these users by destinationId
const updateByDestinationIds: BatchMethodUpdateByDestinationIds = async ({
  client,
  users,
  config,
}) => {
  const { recordObject } = config.data;
  const { payload, usersInPayload } = await buildPayload(client, users, config);

  const results = await client.sobject(recordObject).update(payload);
  processResults(results, usersInPayload, ResultType.USER);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds =
  async ({ client, users, config }) => {
    const { recordObject } = config.data;
    const { payload, usersInPayload } = await buildPayload(
      client,
      users,
      config
    );

    // upsert doesn't have a HTTP batch api (even though jsforce does and fakes it), so use create
    const results = await client.sobject(recordObject).create(payload);
    processResults(results, usersInPayload, ResultType.USER);
  };

// make sure these user are in these groups (keys of map are group names)
const addToGroups: BatchMethodAddToGroups = async ({
  client,
  groupMap,
  config,
}) => {
  const { membershipObject, membershipRecordField, membershipGroupField } =
    config.data;
  const payload = [];
  const users = [];
  for (const name in groupMap) {
    const id = await getListId(client, name, config.data);
    const records = groupMap[name] || [];
    for (const exportedRecord of records) {
      payload.push({
        [membershipGroupField]: id,
        [membershipRecordField]: exportedRecord.destinationId,
      });
      users.push(exportedRecord);
    }
  }

  if (payload.length === 0) {
    return;
  }

  const results = await client.sobject(membershipObject).create(payload);
  processResults(results, users, ResultType.ADDGROUP);
};

// make sure these users are not in these groups (keys of map are group names)
const removeFromGroups: BatchMethodRemoveFromGroups = async ({
  client,
  groupMap,
  destIdMap,
  config,
}) => {
  const { membershipObject, membershipRecordField, membershipGroupField } =
    config.data;
  let payload = []; // to delete
  const users = [];
  for (const name in groupMap) {
    const id = await getListId(client, name, config.data);
    const records = groupMap[name] || [];
    const destIds = records.map((pro) => pro.destinationId);
    if (destIds.length > 0) {
      const query = {
        [membershipGroupField]: id,
        [membershipRecordField]: destIds,
      };
      const fields = [idType, membershipRecordField];
      const results = await client
        .sobject(membershipObject)
        .find(query, fields);
      for (const result of results) {
        const membershipId = result[idType];
        const destId = result[membershipRecordField];
        if (!membershipId) {
          throw new Error(`no membership id: ${JSON.stringify(result)}`);
        }
        if (!destId) {
          throw new Error(`no destination id: ${JSON.stringify(result)}`);
        }
        const user = destIdMap[destId];
        if (!user) {
          throw new Error(`no user found: ${JSON.stringify(result)}`);
        }
        payload.push(membershipId);
        users.push(user);
      }
    }
  }

  if (payload.length === 0) {
    return;
  }
  const results = await client.sobject(membershipObject).del(payload);
  processResults(results, users, ResultType.REMOVEGROUP);
};

async function getListId(
  client,
  listName: string,
  model: SalesforceData
): Promise<number> {
  const { groupObject, groupNameField, cacheData } = model;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes

  const { appId, appOptions } = cacheData;
  const cacheKey = [
    "getListId",
    groupObject,
    groupNameField,
    listName,
    appOptions,
  ];
  const listId = await objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      let destId = await findObjectIdByField({
        client,
        objectName: groupObject,
        objectField: groupNameField,
        fieldValue: listName,
      });
      if (destId) {
        return destId;
      }
      // otherwise, create it
      return createList(client, listName, model);
    }
  );
  return listId;
}
async function findObjectIdByField({
  client,
  objectName,
  objectField,
  fieldValue,
}): Promise<number> {
  const query = { [objectField]: fieldValue };
  const fields = [idType];
  const results = await client.sobject(objectName).find(query, fields);
  if (results.length === 0) {
    return null;
  }
  return results[0][idType];
}
async function createList(
  client,
  listName: string,
  model: SalesforceData
): Promise<number> {
  const { groupObject, groupNameField } = model;

  const payload = { [groupNameField]: listName };
  const result = await client.sobject(groupObject).create(payload);
  return processResult(result, `list ${listName}`, ResultType.LIST);
}

// mess with the keys (lowercase emails, for example)
const normalizeForeignKeyValue: BatchMethodNormalizeForeignKeyValue = ({
  keyValue,
  config,
}) => {
  const { recordMatchField } = config.data;
  const field = config.data.recordFields[recordMatchField];
  return normalizeValue({ keyValue, field });
};
// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: BatchMethodNormalizeGroupName = ({ groupName }) => {
  return groupName.toString().trim();
};
const normalizeReferenceKeyValue = ({ keyValue, config }) => {
  const { recordReferenceMatchField } = config.data;
  const field = config.data.referenceFields[recordReferenceMatchField];
  return normalizeValue({ keyValue, field });
};

function truncateIfString(value: any, field): any {
  if (field) {
    if (field.type === "email" || field.type === "string") {
      value = value.toString().trim();
      if (field.length && field.length > 0) {
        // truncate like it will in the salesforce db
        value = value.substring(0, field.length);
      }
    }
  }
  return value;
}
function normalizeValue({ keyValue, field }) {
  if (!keyValue) {
    return null;
  }
  const value = keyValue.toString().trim();
  return truncateIfString(value, field);
}

export interface SalesforceData extends SalesforceModel {
  recordFields: any;
  referenceFields: any;
  cacheData: SalesforceCacheData;
}
export interface ExportSalesforceMethod {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    syncOperations: DestinationSyncOperations;
    exports: BatchExport[];
    model: SalesforceModel;
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithRecordId[];
  }>;
}
export const exportSalesforceBatch: ExportSalesforceMethod = async ({
  appId,
  appOptions,
  syncOperations,
  exports,
  model,
}) => {
  const connection = await connect(appOptions);
  const cacheData = { appId, appOptions };
  // use larger number if sales force api >= 42
  const batchSize = connection._supports("sobject-collection")
    ? 200
    : connection.maxRequests;
  const findSize = 200;

  const recordFields = await getFieldMap(
    connection,
    cacheData,
    model.recordObject
  );
  const referenceFields = model.recordReferenceObject
    ? await getFieldMap(connection, cacheData, model.recordReferenceObject)
    : null;
  const data: SalesforceData = Object.assign({}, model, {
    recordFields,
    referenceFields,
    cacheData,
  });
  return exportRecordsInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: BatchGroupMode.TotalMembers,
      syncOperations,
      appOptions,
      connection,
      data,
      foreignKey: model.recordMatchField,
      destinationOptions: null, // in data now
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
};

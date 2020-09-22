import { ErrorWithProfileGuid, SimpleAppOptions } from "@grouparoo/core";
import { connect, cacheKeyFromClient } from "../connect";
import { cache } from "../cache";
import { getFieldMap } from "../objects";
import {
  exportProfilesInBatch,
  BatchFunctions,
  BatchConfig,
  BatchExport,
  GroupBatchMode,
} from "../batchHelper";
import { SalesforceModel } from "./model";
import { parseFieldName } from "./mapping";

const idType = "Id";

// return an object that you can connect with
const getClient: BatchFunctions["getClient"] = async ({ config }) => {
  return connect(config.appOptions);
};

// fetch using the keys to set destinationId and result on BatchExports
// use the getByForeignKey to lookup results
const findAndSetDestinationIds: BatchFunctions["findAndSetDestinationIds"] = async ({
  client,
  foreignKeys,
  getByForeignKey,
  config,
}) => {
  // search for these using the foreign key
  const { profileObject, profileMatchField } = config.data;
  const idType = "Id";

  const query = { [profileMatchField]: foreignKeys };
  const fields = [idType, profileMatchField];
  const records = await client
    .sobject(profileObject)
    .find(query, fields)
    .execute();

  for (const record of records) {
    const value = normalizeForeignKeyValue({
      keyValue: record[profileMatchField],
      config,
    });
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
const deleteByDestinationIds: BatchFunctions["deleteByDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { profileObject } = config.data;
  const payload = users.map((user) => user.destinationId);
  const results = await client.sobject(profileObject).del(payload);
  processResults(results, users, ResultType.USER);
};
interface ReferenceObject {
  properties: {
    [key: string]: any;
  };
  foreignKeyValue: string;
  row: any;
}
interface ReferenceMap {
  [refKey: string]: ReferenceObject[];
}

async function buildPayload(
  client: any,
  users: BatchExport[],
  config: BatchConfig
): Promise<any[]> {
  const { profileReferenceMatchField } = config.data;
  const out = [];
  const refMap: ReferenceMap = {};
  for (const user of users) {
    const { row, referenceData } = buildUserPayload(user, config);
    if (profileReferenceMatchField) {
      const foreignKeyValue = normalizeReferenceKeyValue({
        keyValue: referenceData[profileReferenceMatchField],
        config,
      });
      const refObject = {
        properties: referenceData,
        foreignKeyValue,
        row,
      };
      const refKey = (foreignKeyValue || "").toString().trim().toLowerCase();
      refMap[refKey] = refMap[refKey] || [];
      refMap[refKey].push(refObject);
    }

    out.push(row);
  }

  await createAndUpdateReferences(client, refMap, config);
  return out;
}

function updateReferences(
  refObjects: ReferenceObject[],
  refId: string,
  config: BatchConfig
) {
  const { profileReferenceField } = config.data;
  for (const refObject of refObjects) {
    const { row } = refObject;
    row[profileReferenceField] = refId;
  }
}

async function createAndUpdateReferences(
  client: any,
  refMap: ReferenceMap,
  config: BatchConfig
) {
  const {
    profileReferenceField,
    profileReferenceObject,
    profileReferenceMatchField,
  } = config.data;
  const idType = "Id";

  if (!profileReferenceField) {
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
        foreignKeys.add(refObject.foreignKeyValue);
      }
    }
  }

  if (foreignKeys.size === 0) {
    return;
  }
  const query = { [profileReferenceMatchField]: Array.from(foreignKeys) };
  const fields = [idType, profileReferenceMatchField];
  const records = await client
    .sobject(profileReferenceObject)
    .find(query, fields)
    .execute();

  for (const record of records) {
    const value = normalizeReferenceKeyValue({
      keyValue: record[profileReferenceMatchField],
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

  // TODO: should we do this user by user somehow? have to pass that exportedProfile through and set error
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
  const results = await client
    .sobject(profileReferenceObject)
    .create(payload, { allOrNone: true });
  for (let i = 0; i < results.length; i++) {
    // I'm assuming these are in the same order. That seems like the only option.
    const refKey = createKeys[i];
    const result = results[i];

    let id = (result.id || "").toString();
    if (id.length === 0) {
      throw new Error(
        `Missing reference id (${refKey}): ${JSON.stringify(result)}`
      );
    }
    const foundRows = refMap[refKey];
    updateReferences(foundRows, id, config);
    updatedKeys.add(refKey);
  }
}

function buildReferenceCreatePayload(
  refObjects: ReferenceObject[],
  config: BatchConfig
) {
  const {
    profileReferenceField,
    profileReferenceObject,
    profileReferenceMatchField,
  } = config.data;

  // we could do a lot here (most common one?) but for now we'll just take the first
  const refObject = refObjects[0];
  const { properties, foreignKeyValue } = refObject;
  const row: any = {};

  row[profileReferenceMatchField] = foreignKeyValue;
  const allKeys = Object.keys(properties);
  for (const fieldName of allKeys) {
    const value = properties[fieldName];
    if ([idType, profileReferenceMatchField].includes(fieldName)) {
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
  exportedProfile: BatchExport,
  config: BatchConfig
): { row: any; referenceData: any } {
  const { profileMatchField, profileReferenceObject } = config.data;
  const row: any = {};
  const {
    destinationId,
    oldProfileProperties,
    newProfileProperties,
    foreignKeyValue,
  } = exportedProfile;

  row[profileMatchField] = foreignKeyValue;
  if (destinationId) {
    row[idType] = destinationId;
  }

  const referenceData = {};
  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const keyName of allKeys) {
    const value = newProfileProperties[keyName]; // includes clearing out removed ones (by setting to null)
    const { reference, fieldName } = parseFieldName({
      profileReferenceObject,
      key: keyName,
    });
    if (reference) {
      referenceData[fieldName] = value;
      continue;
    }
    if ([idType, profileMatchField].includes(fieldName)) {
      continue; // set above
    }

    const field = config.data.profileFields[fieldName];
    if (field) {
      row[fieldName] = formatAndDefaultValue(value, field);
    } else {
      // otherwise, it's no longer a field (got deleted from Salesforce): let it go
      //console.log("Unknown profile field", keyName, fieldName, value);
    }
  }

  return { row, referenceData };
}

function formatAndDefaultValue(value, field) {
  if (!value) {
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
function processResult(result, identifier, type: ResultType) {
  let id = (result.id || "").toString();
  let errors = result.errors || [];
  let success = !!result.success;

  if (type === ResultType.ADDGROUP) {
    // it's ok if it was already there
    errors = errors.filter((err) => err?.statusCode !== "DUPLICATE_VALUE");
    if (errors.length === 0) {
      success = true;
    }
    id = "doesntmatter";
  }
  if (type === ResultType.REMOVEGROUP) {
    // it's ok if it wasn't there
    errors = errors.filter((err) => err?.statusCode !== "NOT_FOUND");
    if (errors.length === 0) {
      success = true;
    }
    id = "doesntmatter";
  }
  if (!success || errors.length > 0) {
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
function processResults(results, users, type: ResultType) {
  if (results.length !== users.length) {
    throw new Error("expected results and users lengths to be the same");
  }
  for (let i = 0; i < results.length; i++) {
    // I'm assuming these are in the same order. That seems like the only option.
    const user = users[i];
    const result = results[i];
    try {
      const id = processResult(result, user.profileGuid, type);
      if (type === ResultType.USER) {
        if (user.destinationId && user.destinationId !== id) {
          throw new Error(
            `destinationId does not match updated one: ${user.destinationId} -> ${id}`
          );
        }
        user.destinationId = id;
      }
    } catch (error) {
      user.error = error;
    }
  }
}

// update these users by destinationId
const updateByDestinationIds: BatchFunctions["updateByDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { profileObject } = config.data;
  const payload = await buildPayload(client, users, config);

  const results = await client.sobject(profileObject).update(payload);
  processResults(results, users, ResultType.USER);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchFunctions["createByForeignKeyAndSetDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { profileObject } = config.data;
  const payload = await buildPayload(client, users, config);

  // upsert doesn't have a HTTP batch api (even though jsforce does), so use create
  const results = await client.sobject(profileObject).create(payload);
  processResults(results, users, ResultType.USER);
};

// make sure these user are in these groups (keys of map are group names)
const addToGroups: BatchFunctions["addToGroups"] = async ({
  client,
  groupMap,
  config,
}) => {
  const {
    membershipObject,
    membershipProfileField,
    membershipGroupField,
  } = config.data;
  const payload = [];
  const users = [];
  for (const name in groupMap) {
    const id = await getListId(client, name, config.data);
    const profiles = groupMap[name] || [];
    for (const exportedProfile of profiles) {
      payload.push({
        [membershipGroupField]: id,
        [membershipProfileField]: exportedProfile.destinationId,
      });
      users.push(exportedProfile);
    }
  }

  if (payload.length === 0) {
    return;
  }

  const results = await client.sobject(membershipObject).create(payload);
  processResults(results, users, ResultType.ADDGROUP);
};

// make sure these users are not in these groups (keys of map are group names)
const removeFromGroups: BatchFunctions["removeFromGroups"] = async ({
  client,
  groupMap,
  destIdMap,
  config,
}) => {
  const {
    membershipObject,
    membershipProfileField,
    membershipGroupField,
  } = config.data;
  let payload = []; // to delete
  const users = [];
  for (const name in groupMap) {
    const id = await getListId(client, name, config.data);
    const profiles = groupMap[name] || [];
    const destIds = profiles.map((pro) => pro.destinationId);
    if (destIds.length > 0) {
      const query = {
        [membershipGroupField]: id,
        [membershipProfileField]: destIds,
      };
      const fields = [idType, membershipProfileField];
      const results = await client
        .sobject(membershipObject)
        .find(query, fields);
      for (const result of results) {
        const membershipId = result[idType];
        const destId = result[membershipProfileField];
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
  const { groupObject, groupNameField } = model;
  const uniqKey = cacheKeyFromClient(client);
  const cacheKey = `${uniqKey}:list-${groupObject}-${groupNameField}-${listName}:key`;
  const lockKey = `${uniqKey}:list-${groupObject}-${groupNameField}-${listName}:lock`;
  const cacheDuration = 1000 * 60 * 30; // 30 minutes

  const listId = await cache({ cacheKey, lockKey, cacheDuration }, async () => {
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
  });
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
const normalizeForeignKeyValue: BatchFunctions["normalizeForeignKeyValue"] = ({
  keyValue,
  config,
}) => {
  const { profileMatchField } = config.data;
  const field = config.data.profileFields[profileMatchField];
  return normalizeValue({ keyValue, field });
};
// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: BatchFunctions["normalizeGroupName"] = ({
  groupName,
}) => {
  return groupName.toString().trim();
};
const normalizeReferenceKeyValue = ({ keyValue, config }) => {
  const { profileReferenceMatchField } = config.data;
  const field = config.data.referenceFields[profileReferenceMatchField];
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
  profileFields: any;
  referenceFields: any;
}
export interface ExportSalesforceMethod {
  (argument: {
    appOptions: SimpleAppOptions;
    exports: BatchExport[];
    model: SalesforceModel;
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}
export const exportSalesforceBatch: ExportSalesforceMethod = async ({
  appOptions,
  exports,
  model,
}) => {
  const connection = await connect(appOptions);
  // use larger number if sales force api >= 42
  const batchSize = connection._supports("sobject-collection")
    ? 200
    : connection.maxRequests;
  const findSize = 200;

  const profileFields = await getFieldMap(connection, model.profileObject);
  const referenceFields = model.profileReferenceObject
    ? await getFieldMap(connection, model.profileReferenceObject)
    : null;
  const data: SalesforceData = Object.assign({}, model, {
    profileFields,
    referenceFields,
  });
  return exportProfilesInBatch(
    exports,
    {
      findSize,
      batchSize,
      groupMode: GroupBatchMode.TotalMembers,
      appOptions,
      connection,
      data,
      foreignKey: model.profileMatchField,
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

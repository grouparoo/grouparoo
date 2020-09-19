import { connect } from "../connect";
import { getFieldMap } from "../objects";
import {
  exportProfilesInBatch,
  BatchFunctions,
  BatchConfig,
  BatchExport,
} from "../batchHelper";
import { ErrorWithProfileGuid, SimpleAppOptions } from "@grouparoo/core";
import { cache } from "../cache";
import { cacheKeyFromClient } from "../connect";

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
  //console.log("sending query", query, fields);
  const records = await client
    .sobject(profileObject)
    .find(query, fields)
    .execute();

  for (const record of records) {
    //console.log("record", record);
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
  //console.log("sending delete", payload);
  const results = await client.sobject(profileObject).del(payload);
  processResults(results, users, ResultType.USER);
};

function buildPayload(exportedProfile: BatchExport, config: BatchConfig): any {
  const { profileMatchField } = config.data;
  const idType = "Id";
  const user: any = {};
  const {
    destinationId,
    oldProfileProperties,
    newProfileProperties,
    foreignKeyValue,
  } = exportedProfile;

  user[profileMatchField] = foreignKeyValue;
  if (destinationId) {
    user[idType] = destinationId;
  }

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const key of allKeys) {
    if ([idType, profileMatchField].includes(key)) {
      continue; // set above
    }

    const value = newProfileProperties[key]; // includes clearing out removed ones (by setting to null)
    const field = config.data.profileFields[key];
    if (field) {
      if (!value) {
        user[key] = field.defaultValue;
      } else {
        user[key] = formatVar(value);
      }
    } else {
      // otherwise, it's no longer a field (got deleted from Salesforce): let it go
    }
  }

  return user;
}

function formatVar(value) {
  if (!value) {
    return null;
  }
  // Dates ok to send by themself
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
    //console.log("result", result);
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
  const payload = [];
  for (const user of users) {
    payload.push(buildPayload(user, config));
  }

  //console.log("sending update", payload);
  const results = await client.sobject(profileObject).update(payload);
  //console.log("update results!");
  processResults(results, users, ResultType.USER);
};

// usually this is creating them. ideally upsert. set the destinationId on each when done
const createByForeignKeyAndSetDestinationIds: BatchFunctions["createByForeignKeyAndSetDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { profileObject } = config.data;
  const payload = [];
  for (const user of users) {
    payload.push(buildPayload(user, config));
  }

  // upsert doesn't have a HTTP batch api (even though jsforce does), so use create
  //console.log("sending create", payload);
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
  // TODO: still need to decide about batching here
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

  //console.log("adding group", payload);
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
  // TODO: still need to decide about batching here
  let payload = []; // to delete
  const users = [];
  for (const name in groupMap) {
    const id = await getListId(client, name, config.data);
    const profiles = groupMap[name] || [];
    const destIds = profiles.map((pro) => pro.destinationId);
    if (destIds.length > 0) {
      const idType = "Id";
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
  //console.log("removing group", payload);
  const results = await client.sobject(membershipObject).del(payload);
  processResults(results, users, ResultType.REMOVEGROUP);
};

async function getListId(
  client,
  listName: string,
  model: SalesforceData
): Promise<number> {
  const { groupObject } = model;
  const uniqKey = cacheKeyFromClient(client);
  const cacheKey = `${uniqKey}:list-${groupObject}-${listName}:key`;
  const lockKey = `${uniqKey}:list-${groupObject}-${listName}:lock`;
  const cacheDuration = 1000 * 60 * 30; // 30 minutes

  const listId = await cache({ cacheKey, lockKey, cacheDuration }, async () => {
    // not cached find it
    let destId = await findListByName(client, listName, model);
    if (destId) {
      return destId;
    }
    // otherwise, create it
    return createList(client, listName, model);
  });
  return listId;
}
async function findListByName(
  client,
  listName: string,
  model: SalesforceData
): Promise<number> {
  const { groupObject, groupNameField } = model;
  const query = { [groupNameField]: listName };
  const idType = "Id";
  const fields = [idType];
  const results = await client.sobject(groupObject).find(query, fields);
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
  if (!keyValue) {
    return null;
  }
  // TODO: consider using config.profileFields to check for email
  return keyValue.toString().trim();
};
// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: BatchFunctions["normalizeGroupName"] = ({
  groupName,
}) => {
  return groupName.toString().trim();
};

export interface SalesforceModel {
  profileObject: string;
  profileMatchField: string;
  groupObject: string;
  groupNameField: string;
  membershipObject: string;
  membershipProfileField: string;
  membershipGroupField: string;
}
export interface SalesforceData extends SalesforceModel {
  profileFields: any;
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
  const data: SalesforceData = Object.assign({}, model, {
    profileFields,
  });
  return exportProfilesInBatch(
    exports,
    {
      findSize,
      batchSize,
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

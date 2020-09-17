import { connect } from "../connect";
import { getFieldMap } from "./../objects";
import {
  buildBatchExports,
  exportProfilesInBatch,
  BatchFunctions,
  BatchConfig,
  BatchExport,
} from "../batchHelper";
import { ExportProfilesPluginMethod } from "@grouparoo/core";

// return an object that you can connect with
const getClient: BatchFunctions["getClient"] = async ({ config }) => {
  return connect(config.appOptions);
};

// fetch using the keys in fkMap to set destinationId and result on BatchExports in fkMap
// fkMap has newValue and oldValue of foreignKey
const setDestinationIds: BatchFunctions["setDestinationIds"] = async ({
  client,
  fkMap,
  config,
}) => {
  // search for these using the foreign key
  const { objectType, fkType } = config.data;
  const filterValues = Object.keys(fkMap);
  const idType = "Id";

  const query = { [fkType]: filterValues };
  const fields = [idType, fkType];
  console.log("sending query", query, fields);
  const records = await client
    .sobject(objectType)
    .find(query, fields)
    .execute();

  for (const record of records) {
    //console.log("record", record);
    const value = normalizeForeignKeyValue({
      keyValue: record[fkType],
      config,
    });
    const id = record[idType];
    const found = fkMap[value];
    if (found) {
      found.destinationId = id;
      found.result = record;
    } else {
      // Salesforce result found but didn't have email. not sure what that means
      console.log("foreign key not found!", record);
    }
  }
};

// delete the given destinationIds
const deleteByDestinationIds: BatchFunctions["deleteByDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { objectType } = config.data;
  const payload = users.map((user) => user.destinationId);
  console.log("sending delete", payload);
  const results = await client.sobject(objectType).del(payload);
  processResults(results, users);
};

function buildPayload(exportedProfile: BatchExport, config: BatchConfig): any {
  const { fkType } = config.data;
  const idType = "Id";
  const user: any = {};
  const {
    destinationId,
    oldProfileProperties,
    newProfileProperties,
    foreignKeyValue,
  } = exportedProfile;

  user[fkType] = foreignKeyValue;
  if (destinationId) {
    user[idType] = destinationId;
  }

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const key of allKeys) {
    if ([idType, fkType].includes(key)) {
      continue; // set above
    }

    const value = newProfileProperties[key]; // includes clearing out removed ones (by setting to null)
    if (!value) {
      const field = config.data.fields[key];
      if (field) {
        user[key] = field.defaultValue;
      } else {
        // otherwise it's no longer a field (got deleted from Salesforce), let it go
      }
    } else {
      user[key] = formatVar(value);
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

// called from upsert, update, and delete
function processResults(results, users) {
  if (results.length !== users.length) {
    throw new Error("expected results and users lengths to be the same");
  }
  for (let i = 0; i < results.length; i++) {
    // I'm assuming these are in the same order. That seems like the only option.
    const user = users[i];
    const result = results[i];
    const id = (result.id || "").toString();
    const errors = result.errors || [];
    const success = !!result.success;

    // console.log("result", result);

    try {
      if (!success || errors.length > 0) {
        const messages = errors
          .map((err) => err?.message)
          .filter((msg) => !!msg);
        if (messages.length > 0) {
          throw new Error(`Error (${user.profileGuid}): ${messages.join(",")}`);
        } else {
          throw new Error(
            `Unknown Error (${user.profileGuid}): ${JSON.stringify(result)}`
          );
        }
      }
      if (id.length === 0) {
        throw new Error(
          `Missing id (${user.profileGuid}): ${JSON.stringify(result)}`
        );
      }
      if (user.destinationId && user.destinationId !== id) {
        throw new Error(
          `destinationId does not match updated one: ${user.destinationId} -> ${id}`
        );
      }
    } catch (error) {
      user.error = error;
    }

    user.destinationId = id;
  }
}

// update these users by destinationId
const updateByDestinationIds: BatchFunctions["updateByDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { objectType } = config.data;
  const payload = [];
  for (const user of users) {
    payload.push(buildPayload(user, config));
  }

  console.log("sending update", payload);
  const results = await client.sobject(objectType).update(payload);
  processResults(results, users);
};

// usually this is creating them. set the destinationId on each when done
const updateByForeignKeyAndSetDestinationIds: BatchFunctions["updateByForeignKeyAndSetDestinationIds"] = async ({
  client,
  users,
  config,
}) => {
  const { objectType, fkType } = config.data;
  const payload = [];
  for (const user of users) {
    payload.push(buildPayload(user, config));
  }

  console.log("sending upsert", payload);
  const results = await client.sobject(objectType).upsert(payload, fkType);
  processResults(results, users);
};

// make sure these user are in these groups (keys of map are group names)
const addToGroups: BatchFunctions["addToGroups"] = async ({
  client,
  groupMap,
  config,
}) => {};
// make sure these users are not in these groups (keys of map are group names)
const removeFromGroups: BatchFunctions["removeFromGroups"] = async ({
  client,
  groupMap,
  config,
}) => {};

// mess with the keys (lowercase emails, for example)
const normalizeForeignKeyValue: BatchFunctions["normalizeForeignKeyValue"] = ({
  keyValue,
}) => {
  if (!keyValue) {
    return null;
  }
  return keyValue.toString().trim();
};
// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: BatchFunctions["normalizeGroupName"] = ({
  groupName,
}) => {
  return groupName;
};

// export interface MyBatchMethod {
//   (
//     appOptions: SimpleAppOptions,
//     destinationOptions: SimpleDestinationOptions,
//     exports: ExportedProfile[]
//   ): Promise<{
//     success: boolean;
//     retryDelay?: number;
//     errors?: ErrorWithProfileGuid[];
//   }>;
// }

export async function exportBatch({ appOptions, destinationOptions, exports }) {
  const connection = await connect(appOptions);

  const batchSize = 200;
  const foreignKey = destinationOptions.profileFieldMatch;
  const profileObject = destinationOptions.profileObject;
  const data = {
    objectType: profileObject,
    fkType: foreignKey,
    fields: await getFieldMap(connection, profileObject),
  };
  return exportProfilesInBatch(
    exports,
    {
      batchSize,
      foreignKey,
      appOptions,
      destinationOptions,
      connection,
      data,
    },
    {
      getClient,
      setDestinationIds,
      deleteByDestinationIds,
      updateByDestinationIds,
      updateByForeignKeyAndSetDestinationIds,
      addToGroups,
      removeFromGroups,
      normalizeForeignKeyValue,
      normalizeGroupName,
    }
  );
}

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  connection,
  destinationOptions,
  exports,
}) => {
  const batchExports = buildBatchExports(exports);
  return exportBatch({ appOptions, destinationOptions, exports: batchExports });
};

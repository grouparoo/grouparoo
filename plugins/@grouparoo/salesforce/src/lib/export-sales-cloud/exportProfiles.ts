import { connect } from "../connect";
import {
  buildBatchExports,
  exportProfilesInBatch,
  ForeignKeyMap,
  DestinationIdMap,
  BatchConfig,
  GroupNameListMap,
  BatchExport,
} from "../batchHelper";
import { ExportProfilesPluginMethod } from "@grouparoo/core";

// return an object that you can connect with
async function getClient(config: BatchConfig): Promise<any> {
  return connect(config.appOptions);
}

// fetch using the keys in fkMap to set destinationId and result on BatchExports in fkMap
async function setDestinationIds(
  client: any,
  fkMap: ForeignKeyMap, // has newValue and oldValue of foreignKey
  config: BatchConfig
): Promise<void> {
  // search for these using the foreign key
  const objectType = config.destinationOptions.profileObject;
  const fkType = config.destinationOptions.profileFieldMatch;
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
    const value = normalizeForeignKeyValue(record[fkType]);
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
}

// delete the given destinationIds
async function deleteByDestinationIds(
  client: any,
  destIdMap: DestinationIdMap,
  fkMap: ForeignKeyMap,
  config: BatchConfig
): Promise<void> {
  const objectType = config.destinationOptions.profileObject;
  const users = Object.values(fkMap);
  const payload = users.map((user) => user.destinationId);
  console.log("sending delete", payload);
  const results = await client.sobject(objectType).del(payload);
  processResults(results, users);
}

function buildPayload(exportedProfile: BatchExport, config: BatchConfig): any {
  const fkType = config.destinationOptions.profileFieldMatch;
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
    user[key] = formatVar(value);
  }

  return user;
}

function formatVar(value) {
  if (!value) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  } else {
    return value;
  }
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
async function updateByDestinationIds(
  client: any,
  destIdMap: DestinationIdMap,
  fkMap: ForeignKeyMap,
  config: BatchConfig
): Promise<void> {
  const objectType = config.destinationOptions.profileObject;
  const users = Object.values(fkMap);

  const payload = [];
  for (const user of users) {
    payload.push(buildPayload(user, config));
  }

  console.log("sending update", payload);
  const results = await client.sobject(objectType).update(payload);
  processResults(results, users);
}

// usually this is creating them. set the destinationId on each when done
async function updateByForeignKeyAndSetDestinationIds(
  client: any,
  fkMap: ForeignKeyMap,
  config: BatchConfig
): Promise<void> {
  const objectType = config.destinationOptions.profileObject;
  const users = Object.values(fkMap);
  const fkType = config.destinationOptions.profileFieldMatch;

  const payload = [];
  for (const user of users) {
    payload.push(buildPayload(user, config));
  }

  console.log("sending upsert", payload);
  const results = await client.sobject(objectType).upsert(payload, fkType);
  processResults(results, users);
}

// make sure these user are in these groups (keys of map are group names)
async function addToGroups(
  client: any,
  groupMap: GroupNameListMap,
  destIdMap: DestinationIdMap,
  config: BatchConfig
): Promise<void> {}
// make sure these users are not in these groups (keys of map are group names)
async function removeFromGroups(
  client: any,
  groupMap: GroupNameListMap,
  destIdMap: DestinationIdMap,
  config: BatchConfig
): Promise<void> {}

// mess with the keys (lowercase emails, for example)
function normalizeForeignKeyValue(keyValue: any): string {
  if (!keyValue) {
    return null;
  }
  return keyValue.toString().trim();
}
// mess with the names of groups (tags with no spaces, for example)
function normalizeGroupName(groupName: string): string {
  return groupName;
}

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
  const batchSize = 200;
  const foreignKey = destinationOptions.profileFieldMatch;
  return exportProfilesInBatch(
    exports,
    {
      batchSize,
      foreignKey,
      appOptions,
      destinationOptions,
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
  destinationOptions,
  exports,
}) => {
  const batchExports = buildBatchExports(exports);
  return exportBatch({ appOptions, destinationOptions, exports: batchExports });
};

import {
  exportRecordsInGroups,
  GroupConfig,
  GroupMethodAddToGroups,
  GroupMethodGetClient,
  GroupMethodNormalizeForeignKeyValue,
  GroupMethodNormalizeGroupName,
  GroupMethodRemoveFromGroups,
  GroupSizeMode,
  GroupNameListMap,
  GroupExport,
} from "@grouparoo/app-templates/dist/destination/group";
import { DestinationSyncOperations, SimpleAppOptions } from "@grouparoo/core";
import { connect, Client } from "../connect";
import { getAudienceId, FacebookCacheData } from "./audienceMethods";
import { userData } from "./data";

import { ErrorWithProfileId, ExportedProfile } from "@grouparoo/core";
import { FacebookModel } from "./model";

export interface ExportFacebookMethod {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    exports: ExportedProfile[];
    syncOperations: DestinationSyncOperations;
    model: FacebookModel;
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileId[];
  }>;
}

export interface FacebookData {
  cacheData: FacebookCacheData;
  model: FacebookModel;
}

// return an object that you can connect with
const getClient: GroupMethodGetClient = async ({ config }) => {
  return connect(config.appOptions);
};

// make sure these user are in these groups (keys of map are group names)
const addToGroups: GroupMethodAddToGroups = async ({
  client,
  groupMap,
  config,
}) => {
  return updateAudiences(client, Action.Add, groupMap, config);
};

const removeFromGroups: GroupMethodRemoveFromGroups = async ({
  client,
  groupMap,
  config,
}) => {
  return updateAudiences(client, Action.Remove, groupMap, config);
};

enum Action {
  Add = "ADD",
  Remove = "REMOVE",
}

function makeSampleKey(array: any[]) {
  const data = JSON.stringify(array);
  return data;
}

function updatePayload(
  users: GroupExport[],
  dataMap: { [data: string]: GroupExport }
) {
  const fields = {}; // the fields in play
  for (const user of users) {
    for (const field in user.oldRecordProperties) {
      fields[field] = true;
    }
    for (const field in user.newRecordProperties) {
      fields[field] = true;
    }
  }
  const schema = Object.keys(fields).sort();
  const data = [];

  for (const user of users) {
    try {
      const me = userData(schema, user.newRecordProperties);
      const key = makeSampleKey(me);
      dataMap[key] = user;
      data.push(me);
    } catch (error) {
      // invalid property
      user.error = error;
    }
  }
  return { schema, data };
}

function deletePayload(
  users: GroupExport[],
  dataMap: { [data: string]: GroupExport },
  config: GroupConfig
) {
  const { foreignKey } = config;
  const schema = [foreignKey];
  const data = [];

  for (const user of users) {
    try {
      const { foreignKeyValue } = user;
      const me = userData(schema, { [foreignKey]: foreignKeyValue });
      const key = makeSampleKey(me);
      dataMap[key] = user;
      data.push(me);
    } catch (error) {
      // invalid property
      user.error = error;
    }
  }
  return { schema, data };
}

async function updateAudience(
  audience: any,
  action: Action,
  name: string,
  users: GroupExport[],
  config: GroupConfig
) {
  let payload = null;
  const dataMap: { [data: string]: GroupExport } = {};
  if (action === Action.Add) {
    payload = updatePayload(users, dataMap);
  } else if (action === Action.Remove) {
    payload = deletePayload(users, dataMap, config);
  } else {
    throw new Error(`no users updated: ${action}`);
  }

  if (payload.data.length === 0) {
    return;
  }

  let response;
  const fields = [];
  const params = { payload };
  testFunction({ action, name, payload, id: audience.id });

  try {
    if (action === Action.Add) {
      response = await audience.createUser(fields, params);
    } else if (action === Action.Remove) {
      response = await audience.deleteUsers(params);
    }
  } catch (error) {
    const message: string = error.message || "Facebook error.";
    if (message.includes("result in a low audience size")) {
      error.message = `${message} You need to have more than 100 users in your audience.`;
      error.errorLevel = "info";
    }
    throw error;
  }

  const { num_received, num_invalid_entries, invalid_entry_samples } = response;

  if (num_received === payload.data.length && num_invalid_entries === 0) {
    return; // full success!
  }

  const mapped = {};
  const failed = Object.keys(invalid_entry_samples || {});
  for (const data of failed) {
    // data is a string like made from getSampleKey
    const user: GroupExport = dataMap[data];
    if (user) {
      const message = invalid_entry_samples[data];
      user.error = new Error(`Facebook data invalid: ${message}`);
      mapped[data] = user.profileId;
    }
  }

  if (Object.keys(mapped).length === num_invalid_entries) {
    // found them all!
    return;
  }

  // I've never actually seen these cases, so I will throw to see if we can discover them
  const debug = {
    action,
    audienceId: audience.id,
    audienceName: name,
    schema: payload.schema,
    payloadCount: payload.data.length,
    num_received,
    num_invalid_entries,
    mapped,
    invalid_entry_samples,
  };

  if (failed.length > 0) {
    throw new Error(
      `Facebook ${action} Error (failed)! ${JSON.stringify(debug)}`
    );
  }

  if (num_invalid_entries > 0) {
    throw new Error(
      `Facebook ${action} Error (no samples)! ${JSON.stringify(debug)}`
    );
  }

  throw new Error(
    `Facebook ${action} Error (unknown)! ${JSON.stringify(debug)}`
  );
}

let _testFunction = null;
export function setTestFunction(fn) {
  _testFunction = fn;
}

function testFunction(data) {
  if (_testFunction) {
    _testFunction(data);
  }
}

async function updateAudiences(
  client: Client,
  action: Action,
  groupMap: GroupNameListMap,
  config: GroupConfig
) {
  const { cacheData, model } = config.data;
  const { audienceType } = model;

  for (const audienceName in groupMap) {
    const id = await getAudienceId(
      client,
      cacheData,
      audienceType,
      audienceName
    );

    const audience = client.audience(id);
    const users = groupMap[audienceName];
    try {
      await updateAudience(audience, action, audienceName, users, config);
    } catch (error) {
      // TODO: check for rate-limit or other global errors here and just throw
      for (const user of users) {
        // otherwise, put error on each user
        let verb = "?";
        if (Action.Add === action) {
          verb = "add to";
        } else if (Action.Remove === action) {
          verb = "delete from";
        }
        let message = error.message || "Facebook error.";
        const info = `Could not ${verb} ${audienceName} (${id}) because: ${message}`;
        if (!user.error) {
          user.error = error;
          user.error.message = info;
        } else {
          const current = user.error.message || "Unknown Facebook error.";
          user.error.message = `${current} \n| ${info}`;
        }
      }
    }
  }
}

// mess with the keys (lowercase emails, for example)
const normalizeForeignKeyValue: GroupMethodNormalizeForeignKeyValue = ({
  keyValue,
}) => {
  if (!keyValue) {
    return null;
  }
  return keyValue.toString().toLowerCase().trim();
};
// mess with the names of groups (tags with no spaces, for example)
const normalizeGroupName: GroupMethodNormalizeGroupName = ({ groupName }) => {
  return groupName.toString().trim();
};

export const exportFacebookProfiles: ExportFacebookMethod = async ({
  appId,
  appOptions,
  model,
  syncOperations,
  exports: recordsToExport,
}) => {
  const cacheData = { appId, appOptions };
  const batchSize = 10000;
  const data: FacebookData = { cacheData, model };

  return exportRecordsInGroups(
    recordsToExport,
    {
      batchSize,
      groupMode: GroupSizeMode.WithinGroup,
      syncOperations,
      appOptions,
      data,
      foreignKey: model.primaryKey,
    },
    {
      getClient,
      addToGroups,
      removeFromGroups,
      normalizeForeignKeyValue,
      normalizeGroupName,
    }
  );
};

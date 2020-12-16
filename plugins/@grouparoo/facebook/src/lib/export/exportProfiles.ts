import {
  exportProfilesInGroups,
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
import { ExportProfilesPluginMethod } from "@grouparoo/core";
import { connect, Client } from "../connect";
import { getAudienceId, FacebookCacheData } from "./audienceMethods";
import { userData } from "./data";

export interface FacebookModel {
  primaryKey: string;
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
  const { cacheData } = config.data;
  return updateAudiences(client, Action.Remove, groupMap, cacheData);
};

enum Action {
  Add = "ADD",
  Remove = "REMOVE",
}

function updatePayload(users: GroupExport[]) {
  const fields = {}; // the fields in play
  for (const user of users) {
    for (const field in user.oldProfileProperties) {
      fields[field] = true;
    }
    for (const field in user.newProfileProperties) {
      fields[field] = true;
    }
  }
  const schema = Object.keys(fields).sort();
  const data = [];

  for (const user of users) {
    try {
      const me = userData(schema, user.newProfileProperties);
      data.push(me);
    } catch (error) {
      // invalid property
      user.error = error;
    }
  }
  const payload = { schema, data };
  return payload;
}

function deletePayload(users: GroupExport[], config: GroupConfig) {
  const { foreignKey } = config;
  const schema = [foreignKey];
  const data = [];

  for (const user of users) {
    try {
      const { foreignKeyValue } = user;
      const me = userData(schema, { [foreignKey]: foreignKeyValue });
      data.push(me);
    } catch (error) {
      // invalid property
      user.error = error;
    }
  }
  const payload = { schema, data };
  return payload;
}

async function updateAudience(
  audience: any,
  action: Action,
  name: string,
  users: GroupExport[],
  config: GroupConfig
) {
  // const foreignKeys: string[] = users.map((user) => user.foreignKeyValue);

  let payload = null;
  const fields = [];
  if (action === Action.Add) {
    payload = updatePayload(users);
  } else if (action === Action.Remove) {
    payload = deletePayload(users, config);
  } else {
    throw new Error(`no users updated: ${action}`);
  }

  if (payload.data.length === 0) {
    return;
  }

  let response;
  const params = { payload };
  testFunction({ action, name, payload });
  if (action === Action.Add) {
    response = await audience.createUser(fields, params);
  } else if (action === Action.Remove) {
    response = await audience.deleteUser(fields, params);
  }

  const { num_received, num_invalid_entries, invalid_entry_samples } = response;

  // console.log({
  //   action,
  //   num_received,
  //   num_invalid_entries,
  //   invalid_entry_samples,
  // });
  if (num_received === users.length && num_invalid_entries === 0) {
    return; // full success!
  }

  // if (!response.success) {
  //   throw new Error(`Facebook list error: ${listName}`);
  // }
  // const results = response.result || [];
  // if (results.length === 0) {
  //   throw new Error(`Facebook empty results: ${listName}`);
  // }
  // for (const result of results) {
  //   const { id } = result;
  //   if (result.reasons) {
  //     if (action === ListAction.Remove && result.status === "skipped") {
  //       // this is ok, not in the  list
  //     } else {
  //       const message = result.reasons.map((r) => r.message).join(", ");
  //       const user = destIdMap[id];
  //       if (!user) {
  //         throw new Error(`Unknown user id in list: ${id}`);
  //       }
  //       user.error =
  //         user.error || new Error(`could update list ${listName}: ${message}`);
  //     }
  //   }
  // }
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
  const { cacheData } = config.data;
  for (const audienceName in groupMap) {
    const id = await getAudienceId(client, cacheData, "CUSTOM", audienceName);
    const audience = client.audience(id);
    const users = groupMap[audienceName];
    await updateAudience(audience, action, audienceName, users, config);
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

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appGuid,
  appOptions,
  destinationOptions,
  exports: profilesToExport,
}) => {
  const cacheData = { appGuid, appOptions };
  const batchSize = 10000;
  const { primaryKey } = destinationOptions;

  const model: FacebookModel = { primaryKey };
  const data: FacebookData = { cacheData, model };

  return exportProfilesInGroups(
    profilesToExport,
    {
      batchSize,
      groupMode: GroupSizeMode.WithinGroup,
      appOptions,
      data,
      foreignKey: primaryKey,
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

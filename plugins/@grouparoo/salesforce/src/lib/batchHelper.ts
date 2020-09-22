import {
  ExportedProfile,
  App,
  SimpleAppOptions,
  Destination,
  SimpleDestinationOptions,
  ErrorWithProfileGuid,
} from "@grouparoo/core";

enum BatchAction {
  Delete = "DELETE",
  ForeignKeyChange = "FOREIGNKEYCHANGE",
  Update = "UPDATE",
}
export enum GroupBatchMode {
  WithinGroup = "WITHINGROUP",
  TotalMembers = "TOTALMEMBERS",
}

export interface BatchExport extends ExportedProfile {
  profileGuid: string;
  foreignKeyValue?: string;
  oldForeignKeyValue?: string;
  destinationId?: string;
  addedGroups?: string[];
  removedGroups?: string[];
  action?: BatchAction;
  result?: any; // result from find
  data?: any; // can stick other things on here
  processed?: boolean;
  error?: any;
}

export declare type ForeignKeyMap = { [value: string]: BatchExport };
export declare type DestinationIdMap = { [value: string]: BatchExport };
export declare type GroupNameListMap = { [groupName: string]: BatchExport[] };

export interface BatchConfig {
  batchSize: number; // max number to update, create, delete
  findSize: number; // max query parameters to send to findAndSetDestinationIds
  groupMode: GroupBatchMode;
  foreignKey: string;
  connection?: any;
  app?: App;
  appOptions?: SimpleAppOptions;
  destination?: Destination;
  destinationOptions?: SimpleDestinationOptions;
  data?: any; // set any object you want on here
}

export interface BuildBatchExportMethod {
  (exports: ExportedProfile[]): BatchExport[];
}

export interface ProfileBatchProfilesPluginMethod {
  (
    exports: BatchExport[],
    config: BatchConfig,
    functions: BatchFunctions
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}

export interface ExportBatchProfilesPluginMethod {
  (
    exports: BatchExport[],
    config: BatchConfig,
    functions: BatchFunctions
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}

export const buildBatchExports: BuildBatchExportMethod = (exports) => {
  const exportsWithGuid: BatchExport[] = [];
  for (const exportedProfile of exports) {
    const profileGuid = exportedProfile.profile.guid;
    const info: BatchExport = Object.assign({ profileGuid }, exportedProfile);
    exportsWithGuid.push(info);
  }
  return exportsWithGuid;
};

export const exportProfilesInBatch: ProfileBatchProfilesPluginMethod = async (
  exports,
  config,
  functions
) => {
  return exportOneBatch(exports, config, functions);
};

export interface GetForeignKeyMapFunction {
  (key: string): any;
}
export interface SetForeignKeyMapFunction {
  (key: string, value: any): void;
}
export interface BatchFunctions {
  // return an object that you can connect with
  getClient: {
    (argument: { config: BatchConfig }): Promise<any>;
  };
  // fetch using the keys to set destinationId and result on BatchExports
  // use the getByForeignKey to lookup results
  findAndSetDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      foreignKeys: string[]; // has newValue and oldValue of foreignKey
      getByForeignKey: GetForeignKeyMapFunction;
      config: BatchConfig;
    }): Promise<void>;
  };
  // delete the given destinationIds
  deleteByDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      destIdMap: DestinationIdMap;
      getByForeignKey: GetForeignKeyMapFunction;
      config: BatchConfig;
    }): Promise<void>;
  };
  // update these users by destinationId
  updateByDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      destIdMap: DestinationIdMap;
      getByForeignKey: GetForeignKeyMapFunction;
      config: BatchConfig;
    }): Promise<void>;
  };
  // usually this is creating them. ideally upsert. set the destinationId on each when done
  createByForeignKeyAndSetDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      getByForeignKey: GetForeignKeyMapFunction;
      config: BatchConfig;
    }): Promise<void>;
  };
  // make sure these user are in these groups (keys of map are group names)
  addToGroups: {
    (argument: {
      client: any;
      users: BatchExport[];
      groupMap: GroupNameListMap;
      destIdMap: DestinationIdMap;
      config: BatchConfig;
    }): Promise<void>;
  };
  // make sure these users are not in these groups (keys of map are group names)
  removeFromGroups: {
    (argument: {
      client: any;
      users: BatchExport[];
      groupMap: GroupNameListMap;
      destIdMap: DestinationIdMap;
      config: BatchConfig;
    }): Promise<void>;
  };
  // mess with the keys (lowercase emails, for example)
  normalizeForeignKeyValue?: {
    (argument: { keyValue: any; config: BatchConfig }): string;
  };
  // mess with the names of groups (tags with no spaces, for example)
  normalizeGroupName?: {
    (argument: { groupName: string; config: BatchConfig }): string;
  };
}

const exportOneBatch: ExportBatchProfilesPluginMethod = async (
  exports,
  config,
  functions
) => {
  if (exports.length === 0) {
    return { success: true };
  }

  const client = config.connection || (await functions.getClient({ config }));

  for (const exportedProfile of exports) {
    try {
      setGroupNames(exportedProfile, functions, config);
      sortExport(exportedProfile, functions, config);
    } catch (error) {
      // if just one of them is missing foreign key or something, move on
      exportedProfile.error = error;
    }
  }

  await lookupDestinationIds(client, exports, functions, config);

  await deleteExports(client, exports, functions, config);
  await updateByIds(client, exports, functions, config);
  await createByForeignKey(client, exports, functions, config);

  verifyAllProcessed(exports);

  // so now, all the exports that don't have an error and where not deleted should have a destinationId
  // use those ids to update the groups
  await updateGroups(client, exports, functions, config);

  return checkErrors(exports);
};

function checkErrors(
  exports
): { success: boolean; errors: ErrorWithProfileGuid[] } {
  // assuming semantics here of success is only true if there are zero errors
  let errors: ErrorWithProfileGuid[] = null; // for ones that go wrong
  let success = true;
  for (const exportedProfile of exports) {
    let { error } = exportedProfile;
    if (error) {
      success = false;
      errors = errors || [];
      if (typeof error === "string") {
        error = new Error(error);
      }
      error.profileGuid = exportedProfile.profileGuid;
      errors.push(error);
    }
  }

  return { success, errors };
}

function verifyAllProcessed(exports) {
  for (const exportedProfile of exports) {
    try {
      verifyProcessed(exportedProfile);
    } catch (error) {
      exportedProfile.error = error;
    }
  }
}

function verifyProcessed(exportedProfile) {
  const { destinationId, processed, error } = exportedProfile;
  if (error) {
    return;
  }
  if (!processed) {
    throw new Error(
      `profile has not processed: ${exportedProfile.foreignKeyValue}`
    );
  }
  if (exportedProfile.action === BatchAction.Delete) {
    return; // doesn't need a destinationd
  }
  if (!destinationId) {
    throw new Error(
      `profile does not have a destination id: ${exportedProfile.foreignKeyValue}`
    );
  }
}

async function updateGroups(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const removal: GroupNameListMap = {};
  const addition: GroupNameListMap = {};

  for (const exportedProfile of exports) {
    if (exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action === BatchAction.Delete) {
      continue;
    }

    // build up groups situation of group names to addition and removal
    for (const list of exportedProfile.removedGroups) {
      removal[list] = removal[list] || [];
      removal[list].push(exportedProfile);
    }
    for (const list of exportedProfile.addedGroups) {
      addition[list] = addition[list] || [];
      addition[list].push(exportedProfile);
    }
  }

  if (Object.keys(removal).length > 0) {
    await batchGroups(client, GroupAction.Remove, removal, functions, config);
  }

  if (Object.keys(addition).length > 0) {
    await batchGroups(client, GroupAction.Add, addition, functions, config);
  }
}

enum GroupAction {
  Add = "ADD",
  Remove = "REMOVE",
}
async function batchGroups(
  client: any,
  action: GroupAction,
  groupMap: GroupNameListMap,
  functions: BatchFunctions,
  config: BatchConfig
) {
  let currentGroupMap: GroupNameListMap = {};
  let currentDeskIdMap: DestinationIdMap = {};
  let currentCount = 0;
  let hasData = false;

  const batches: Array<{
    groupMap: GroupNameListMap;
    destIdMap: DestinationIdMap;
  }> = [];

  for (const name in groupMap) {
    if (config.groupMode === GroupBatchMode.WithinGroup) {
      // the count is per group
      currentCount = 0;
    }
    const users = groupMap[name] || [];
    for (const user of users) {
      if (currentCount > config.batchSize) {
        batches.push({
          groupMap: currentGroupMap,
          destIdMap: currentDeskIdMap,
        });
        currentGroupMap = {};
        currentDeskIdMap = {};
        currentCount = 0;
        hasData = false;
      }

      currentGroupMap[name] = currentGroupMap[name] || [];
      currentDeskIdMap[user.destinationId] = user;
      currentCount++;
      hasData = true;
    }
  }

  if (hasData) {
    batches.push({
      groupMap: currentGroupMap,
      destIdMap: currentDeskIdMap,
    });
  }

  for (const { groupMap, destIdMap } of batches) {
    if (action === GroupAction.Add) {
      await functions.addToGroups({
        client,
        users: Object.values(destIdMap),
        groupMap,
        destIdMap,
        config,
      });
    } else if (action === GroupAction.Remove) {
      await functions.removeFromGroups({
        client,
        users: Object.values(destIdMap),
        groupMap,
        destIdMap,
        config,
      });
    } else {
      throw new Error(`Unknown GroupAction: ${action}`);
    }
  }
}

async function createByForeignKey(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const batches: Array<{ fkMap: ForeignKeyMap }> = [];
  let currentFkMap: ForeignKeyMap = {};
  let currentCount = 0;

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action === BatchAction.Delete) {
      continue;
    }
    if (currentCount > config.batchSize) {
      batches.push({ fkMap: currentFkMap });
      currentFkMap = {};
      currentCount = 0;
    }

    setForeignKey(
      currentFkMap,
      exportedProfile.foreignKeyValue,
      exportedProfile
    );
    currentCount++;
  }

  if (currentCount > 0) {
    batches.push({ fkMap: currentFkMap });
  }

  for (const { fkMap } of batches) {
    const users = Object.values(fkMap);
    const getByForeignKey = functionToGetForeignKey(fkMap);

    await functions.createByForeignKeyAndSetDestinationIds({
      client,
      users,
      getByForeignKey,
      config,
    });

    for (const user of users) {
      user.processed = true;
    }
  }
}

async function updateByIds(
  client: any,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  let currentFkMap: ForeignKeyMap = {};
  let currentDeskIdMap: DestinationIdMap = {};
  let currentCount = 0;

  const batches: Array<{
    fkMap: ForeignKeyMap;
    destIdMap: DestinationIdMap;
  }> = [];

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action === BatchAction.Delete) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      continue;
    }

    if (currentCount > config.batchSize) {
      batches.push({ fkMap: currentFkMap, destIdMap: currentDeskIdMap });
      currentCount = 0;
      currentFkMap = {};
      currentDeskIdMap = {};
    }

    setForeignKey(
      currentFkMap,
      exportedProfile.foreignKeyValue,
      exportedProfile
    );
    currentDeskIdMap[exportedProfile.destinationId] = exportedProfile;
    currentCount++;
  }

  if (currentCount > 0) {
    batches.push({ fkMap: currentFkMap, destIdMap: currentDeskIdMap });
  }

  for (const { fkMap, destIdMap } of batches) {
    const users = Object.values(destIdMap);
    const getByForeignKey = functionToGetForeignKey(fkMap);

    await functions.updateByDestinationIds({
      client,
      users,
      destIdMap,
      getByForeignKey,
      config,
    });

    for (const user of users) {
      user.processed = true;
    }
  }
}

async function deleteExports(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  let currentFkMap: ForeignKeyMap = {};
  let currentDeskIdMap: DestinationIdMap = {};
  let currentCount = 0;

  const batches: Array<{
    fkMap: ForeignKeyMap;
    destIdMap: DestinationIdMap;
  }> = [];

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action !== BatchAction.Delete) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      // should we try again for just this one or something and look them up?
      // maybe it should make an error. if's a timing issue, we want to be sure to delete it.
      try {
        throw new Error(
          `destinationId not found to delete: ${exportedProfile.foreignKeyValue}`
        );
      } catch (error) {
        exportedProfile.error = error;
      }
      continue;
    }

    if (currentCount > config.batchSize) {
      batches.push({ fkMap: currentFkMap, destIdMap: currentDeskIdMap });
      currentFkMap = {};
      currentDeskIdMap = {};
      currentCount = 0;
    }

    setForeignKey(
      currentFkMap,
      exportedProfile.foreignKeyValue,
      exportedProfile
    );
    currentDeskIdMap[exportedProfile.destinationId] = exportedProfile;
    currentCount++;
  }

  if (currentCount > 0) {
    batches.push({ fkMap: currentFkMap, destIdMap: currentDeskIdMap });
  }

  for (const { fkMap, destIdMap } of batches) {
    const users = Object.values(destIdMap);
    const getByForeignKey = functionToGetForeignKey(fkMap);

    await functions.deleteByDestinationIds({
      client,
      users,
      destIdMap,
      getByForeignKey,
      config,
    });

    for (const user of users) {
      user.processed = true;
    }
  }
}

async function lookupDestinationIds(
  client: any,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  let currentFkMap: ForeignKeyMap = {};
  let currentUsers: BatchExport[] = [];
  let currentForeignKeys: string[] = [];
  let currentCount = 0;

  const batches: Array<{
    fkMap: ForeignKeyMap;
    users: BatchExport[];
    foreignKeys: string[];
  }> = [];

  for (const exportedProfile of exports) {
    if (exportedProfile.error) {
      continue;
    }

    const { foreignKeyValue, oldForeignKeyValue } = exportedProfile;

    const maxSize = oldForeignKeyValue ? config.findSize - 1 : config.findSize;
    if (currentCount > maxSize) {
      batches.push({
        fkMap: currentFkMap,
        users: currentUsers,
        foreignKeys: currentForeignKeys,
      });
      currentFkMap = {};
      currentUsers = [];
      currentForeignKeys = [];
      currentCount = 0;
    }

    currentUsers.push(exportedProfile);
    setForeignKey(currentFkMap, foreignKeyValue, exportedProfile);
    currentForeignKeys.push(foreignKeyValue);
    currentCount++;
    if (oldForeignKeyValue) {
      setForeignKey(currentFkMap, oldForeignKeyValue, exportedProfile);
      currentForeignKeys.push(oldForeignKeyValue);
      currentCount++;
    }
  }

  if (currentCount > 0) {
    batches.push({
      fkMap: currentFkMap,
      users: currentUsers,
      foreignKeys: currentForeignKeys,
    });
  }

  for (const { fkMap, users, foreignKeys } of batches) {
    const getByForeignKey = functionToGetForeignKey(fkMap);
    await functions.findAndSetDestinationIds({
      client,
      users,
      foreignKeys,
      getByForeignKey,
      config,
    });
  }
}

// puts added and removed on export
function setGroupNames(
  exportedProfile: BatchExport,
  functions: BatchFunctions,
  config: BatchConfig
) {
  // build up groups situation of group names to addition and removal
  let oldGroups = exportedProfile.oldGroups || [];
  let newGroups = exportedProfile.newGroups || [];
  if (functions.normalizeGroupName) {
    oldGroups = oldGroups.map((groupName) =>
      functions.normalizeGroupName({ groupName, config })
    );
    newGroups = newGroups.map((groupName) =>
      functions.normalizeGroupName({ groupName, config })
    );
  }
  oldGroups = oldGroups.filter((name) => name && name.length > 0);
  newGroups = newGroups.filter((name) => name && name.length > 0);

  const removed = oldGroups.filter((k) => !newGroups.includes(k));
  const added = newGroups;

  exportedProfile.addedGroups = added;
  exportedProfile.removedGroups = removed;
}

function fixupKey(key: string): string {
  key = (key || "").toString().trim().toLowerCase();
  if (key.length === 0) {
    throw new Error(`blank key given`);
  }
  return key;
}
function setForeignKey(fkMap: ForeignKeyMap, key: string, value: BatchExport) {
  key = fixupKey(key);
  fkMap[key] = value;
}
function functionToGetForeignKey(
  fkMap: ForeignKeyMap
): GetForeignKeyMapFunction {
  const func: GetForeignKeyMapFunction = function (key) {
    key = fixupKey(key);
    return fkMap[key];
  };
  return func;
}

// returns what to do for each case
function sortExport(
  exportedProfile: BatchExport,
  functions: BatchFunctions,
  config: BatchConfig
) {
  const {
    oldProfileProperties,
    newProfileProperties,
    toDelete,
  } = exportedProfile;

  const { foreignKey } = config;
  let newValue = newProfileProperties[foreignKey];
  let oldValue = oldProfileProperties[foreignKey];
  if (!newValue) {
    throw new Error(
      `newProfileProperties[${foreignKey}] is a required mapping`
    );
  }
  if (functions.normalizeForeignKeyValue) {
    newValue = functions.normalizeForeignKeyValue({
      keyValue: newValue,
      config,
    });
    if (oldValue) {
      oldValue = functions.normalizeForeignKeyValue({
        keyValue: oldValue,
        config,
      });
    }
  }
  if (!newValue || newValue.toString().length === 0) {
    throw new Error(`${foreignKey} normalized to no value`);
  }

  newValue = newValue.toString();
  exportedProfile.foreignKeyValue = newValue;

  // record other one if applicable
  if (oldValue) {
    oldValue = oldValue.toString();
    if (newValue !== oldValue && oldValue.length > 0) {
      exportedProfile.oldForeignKeyValue = oldValue;
      exportedProfile.action = BatchAction.ForeignKeyChange;
    }
  }

  if (toDelete) {
    exportedProfile.action = BatchAction.Delete;
  }

  if (!exportedProfile.action) {
    exportedProfile.action = BatchAction.Update;
  }

  return exportedProfile;
}

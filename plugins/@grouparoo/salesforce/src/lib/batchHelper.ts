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

export interface BatchExport extends ExportedProfile {
  profileGuid: string;
  foreignKeyValue?: string;
  oldForeignKeyValue?: string;
  destinationId?: string;
  addedGroups?: string[];
  removedGroups?: string[];
  action?: BatchAction;
  result?: any; // result from find
  processed?: boolean;
  error?: any;
}

export declare type ForeignKeyMap = { [value: string]: BatchExport };
export declare type DestinationIdMap = { [value: string]: BatchExport };
export declare type GroupNameListMap = { [groupName: string]: BatchExport[] };

export interface BatchConfig {
  batchSize: number;
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
  // TODO: use input.batchSize
  return exportOneBatch(exports, config, functions);
};

export interface BatchFunctions {
  // return an object that you can connect with
  getClient: {
    (argument: { config: BatchConfig }): Promise<any>;
  };
  // fetch using the keys in fkMap to set destinationId and result on BatchExports in fkMap
  setDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      fkMap: ForeignKeyMap; // has newValue and oldValue of foreignKey
      config: BatchConfig;
    }): Promise<void>;
  };
  // delete the given destinationIds
  deleteByDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      destIdMap: DestinationIdMap;
      fkMap: ForeignKeyMap;
      config: BatchConfig;
    }): Promise<void>;
  };
  // update these users by destinationId
  updateByDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      destIdMap: DestinationIdMap;
      fkMap: ForeignKeyMap;
      config: BatchConfig;
    }): Promise<void>;
  };
  // usually this is creating them. set the destinationId on each when done
  updateByForeignKeyAndSetDestinationIds: {
    (argument: {
      client: any;
      users: BatchExport[];
      fkMap: ForeignKeyMap;
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
  await updateByForeignKey(client, exports, functions, config);

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
    return;
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
  const removalMap: DestinationIdMap = {};
  const additionMap: DestinationIdMap = {};

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
      removalMap[exportedProfile.destinationId] = exportedProfile;
    }
    for (const list of exportedProfile.addedGroups) {
      addition[list] = addition[list] || [];
      addition[list].push(exportedProfile);
      additionMap[exportedProfile.destinationId] = exportedProfile;
    }
  }

  if (Object.keys(removal).length > 0) {
    await functions.removeFromGroups({
      client,
      users: Object.values(removalMap),
      groupMap: removal,
      destIdMap: removalMap,
      config,
    });
  }

  if (Object.keys(addition).length > 0) {
    await functions.addToGroups({
      client,
      users: Object.values(additionMap),
      groupMap: addition,
      destIdMap: additionMap,
      config,
    });
  }
}

async function updateByForeignKey(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const fkMap: ForeignKeyMap = {};

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    fkMap[exportedProfile.foreignKeyValue] = exportedProfile;
  }

  const users = Object.values(fkMap);
  if (users.length === 0) {
    return;
  }

  await functions.updateByForeignKeyAndSetDestinationIds({
    client,
    users,
    fkMap,
    config,
  });

  for (const user of users) {
    user.processed = true;
  }
}

async function updateByIds(
  client: any,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const fkMap: ForeignKeyMap = {};
  const destIdMap: DestinationIdMap = {};

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      continue;
    }
    fkMap[exportedProfile.foreignKeyValue] = exportedProfile;
    destIdMap[exportedProfile.destinationId] = exportedProfile;
  }

  const users = Object.values(destIdMap);
  if (users.length === 0) {
    return;
  }

  await functions.updateByDestinationIds({
    client,
    users,
    destIdMap,
    fkMap,
    config,
  });

  for (const user of users) {
    user.processed = true;
  }
}

async function deleteExports(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const fkMap: ForeignKeyMap = {};
  const destIdMap: DestinationIdMap = {};

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action !== BatchAction.Delete) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      continue; // they aren't there anyway. let it go.
    }
    fkMap[exportedProfile.foreignKeyValue] = exportedProfile;
    destIdMap[exportedProfile.destinationId] = exportedProfile;
  }

  const users = Object.values(destIdMap);
  if (users.length === 0) {
    return;
  }

  await functions.deleteByDestinationIds({
    client,
    users,
    destIdMap,
    fkMap,
    config,
  });

  for (const user of users) {
    user.processed = true;
  }
}

async function lookupDestinationIds(
  client: any,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const fkMap: ForeignKeyMap = {};
  const users: BatchExport[] = [];
  for (const exportedProfile of exports) {
    if (exportedProfile.error) {
      continue;
    }

    const { foreignKeyValue, oldForeignKeyValue } = exportedProfile;
    users.push(exportedProfile);
    fkMap[foreignKeyValue] = exportedProfile;
    if (oldForeignKeyValue) {
      fkMap[oldForeignKeyValue] = exportedProfile;
    }
  }

  if (users.length === 0) {
    return;
  }
  await functions.setDestinationIds({ client, users, fkMap, config });
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

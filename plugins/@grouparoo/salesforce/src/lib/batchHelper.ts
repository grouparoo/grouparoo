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
    (config: BatchConfig): Promise<any>;
  };
  // fetch using the keys in fkMap to set destinationId and result on BatchExports in fkMap
  setDestinationIds: {
    (
      client: any,
      fkMap: ForeignKeyMap, // has newValue and oldValue of foreignKey
      config: BatchConfig
    ): Promise<void>;
  };
  // delete the given destinationIds
  deleteByDestinationIds: {
    (
      client: any,
      destIdMap: DestinationIdMap,
      fkMap: ForeignKeyMap,
      config: BatchConfig
    ): Promise<void>;
  };
  // update these users by destinationId
  updateByDestinationIds: {
    (
      client: any,
      destIdMap: DestinationIdMap,
      fkMap: ForeignKeyMap,
      config: BatchConfig
    ): Promise<void>;
  };
  // usually this is creating them. set the destinationId on each when done
  updateByForeignKeyAndSetDestinationIds: {
    (client: any, fkMap: ForeignKeyMap, config: BatchConfig): Promise<void>;
  };
  // make sure these user are in these groups (keys of map are group names)
  addToGroups: {
    (
      client: any,
      groupMap: GroupNameListMap,
      destIdMap: DestinationIdMap,
      config: BatchConfig
    ): Promise<void>;
  };
  // make sure these users are not in these groups (keys of map are group names)
  removeFromGroups: {
    (
      client: any,
      groupMap: GroupNameListMap,
      destIdMap: DestinationIdMap,
      config: BatchConfig
    ): Promise<void>;
  };
  // mess with the keys (lowercase emails, for example)
  normalizeForeignKeyValue?: {
    (keyValue: any): string;
  };
  // mess with the names of groups (tags with no spaces, for example)
  normalizeGroupName?: {
    (groupName: string): string;
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

  const client = await functions.getClient(config);

  const fkMap: ForeignKeyMap = {};
  for (const exportedProfile of exports) {
    try {
      sortExport(exportedProfile, fkMap, functions, config);
      setGroupNames(exportedProfile, functions);
    } catch (error) {
      // if just one of them is missing foreign key or something, move on
      exportedProfile.error = error;
    }
  }

  await functions.setDestinationIds(client, fkMap, config);

  await deleteExports(client, exports, functions, config);
  await updateByIds(client, exports, functions, config);
  await updateByForeignKey(client, exports, functions, config);

  // so now, all the exports that don't have an error and where not deleted should have a destinationId
  // use those ids to update the groups
  await updateGroups(client, exports, functions, config);

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
};

async function updateGroups(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const removal: GroupNameListMap = {};
  const addition: GroupNameListMap = {};
  const destIdMap: DestinationIdMap = {};

  for (const exportedProfile of exports) {
    if (exportedProfile.error) {
      continue;
    }
    if (exportedProfile.action === BatchAction.Delete) {
      continue;
    }

    const { destinationId } = exportedProfile;
    if (!destinationId) {
      try {
        throw new Error(
          `profile does not have a destination id: ${exportedProfile.foreignKeyValue}`
        );
      } catch (error) {
        exportedProfile.error = error;
      }
    }

    destIdMap[exportedProfile.destinationId] = exportedProfile;

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
    await functions.removeFromGroups(client, removal, destIdMap, config);
  }

  if (Object.keys(addition).length > 0) {
    await functions.addToGroups(client, addition, destIdMap, config);
  }
}

async function updateByForeignKey(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const userMap: ForeignKeyMap = {};
  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    userMap[exportedProfile.foreignKeyValue] = exportedProfile;
  }

  if (Object.keys(userMap).length === 0) {
    return;
  }

  await functions.updateByForeignKeyAndSetDestinationIds(
    client,
    userMap,
    config
  );

  for (const key in userMap) {
    userMap[key].processed = true;
  }
}

async function updateByIds(
  client: any,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const userMap: ForeignKeyMap = {};
  const destIdMap: DestinationIdMap = {};

  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      continue;
    }
    userMap[exportedProfile.foreignKeyValue] = exportedProfile;
    destIdMap[exportedProfile.destinationId] = exportedProfile;
  }

  if (Object.keys(userMap).length === 0) {
    return;
  }

  await functions.updateByDestinationIds(client, destIdMap, userMap, config);

  for (const key in userMap) {
    userMap[key].processed = true;
  }
}

async function deleteExports(
  client,
  exports: BatchExport[],
  functions: BatchFunctions,
  config: BatchConfig
) {
  const userMap: ForeignKeyMap = {};
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
    userMap[exportedProfile.foreignKeyValue] = exportedProfile;
    destIdMap[exportedProfile.destinationId] = exportedProfile;
  }

  if (Object.keys(userMap).length === 0) {
    return;
  }

  await functions.deleteByDestinationIds(client, destIdMap, userMap, config);

  for (const key in userMap) {
    userMap[key].processed = true;
  }
}

// puts added and removed on export
function setGroupNames(
  exportedProfile: BatchExport,
  functions: BatchFunctions
) {
  // build up groups situation of group names to addition and removal
  let oldGroups = exportedProfile.oldGroups || [];
  let newGroups = exportedProfile.newGroups || [];
  if (functions.normalizeGroupName) {
    oldGroups = oldGroups.map((name) => functions.normalizeGroupName(name));
    newGroups = newGroups.map((name) => functions.normalizeGroupName(name));
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
  fkMap: ForeignKeyMap,
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
    newValue = functions.normalizeForeignKeyValue(newValue);
    if (oldValue) {
      oldValue = functions.normalizeForeignKeyValue(newValue);
    }
  }
  if (!newValue || newValue.toString().length === 0) {
    throw new Error(`${foreignKey} normalized to no value`);
  }

  newValue = newValue.toString();
  exportedProfile.foreignKeyValue = newValue;
  fkMap[newValue] = exportedProfile;

  // record other one if applicable
  if (oldValue) {
    oldValue = oldValue.toString();
    if (oldValue !== oldValue) {
      exportedProfile.oldForeignKeyValue = oldValue;
      fkMap[oldValue] = exportedProfile;
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

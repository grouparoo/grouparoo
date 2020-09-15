import {
  ExportedProfile,
  App,
  SimpleAppOptions,
  Destination,
  SimpleDestinationOptions,
  ErrorWithProfileGuid,
} from "@grouparoo/core";
import { setgroups } from "process";

enum BatchAction {
  Delete = "DELETE",
  ForeignKeyChange = "FOREIGNKEYCHANGE",
  Update = "UPDATE",
}

export interface BatchExport extends ExportedProfile {
  profileGuid: string;
  foreignKeyValue?: string;
  oldForeignKeyValue?: string;
  destinationId?: any;
  addedGroups?: string[];
  removedGroups?: string[];
  action?: BatchAction;
  result?: any; // result from find
  processed?: boolean;
  error?: any;
}

export declare type ForeignKeyMap = { [value: string]: BatchExport };
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

export interface ProfileBatchProfilesPluginMethod {
  (
    exports: ExportedProfile[],
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
export const exportProfilesInBatch: ProfileBatchProfilesPluginMethod = async (
  exports,
  config,
  functions
) => {
  const exportsWithGuid: BatchExport[] = [];
  for (const exportedProfile of exports) {
    const profileGuid = exportedProfile.profile.guid;
    const info: BatchExport = Object.assign({ profileGuid }, exportedProfile);
    exportsWithGuid.push(info);
  }

  // TODO: use input.batchSize
  return exportBatch(exportsWithGuid, config, functions);
};

interface BatchFunctions {
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
    (client: any, fkMap: ForeignKeyMap): Promise<void>;
  };
  // update these users by destinationId
  updateByDestinationIds: {
    (client: any, fkMap: ForeignKeyMap): Promise<void>;
  };
  // usually this is creating them. set the destinationId on each when done
  updateByForeignKeyAndSetDestinationIds: {
    (client: any, fkMap: ForeignKeyMap): Promise<void>;
  };
  // make sure these user are in these groups (keys of map are group names)
  addToGroups: {
    (client: any, groupMap: GroupNameListMap): Promise<void>;
  };
  // make sure these users are not in these groups (keys of map are group names)
  removeFromGroups: {
    (client: any, groupMap: GroupNameListMap): Promise<void>;
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
export const exportBatch: ExportBatchProfilesPluginMethod = async (
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

  await deleteExports(client, exports, functions);
  await updateByIds(client, exports, functions);
  await updateByForeignKey(client, exports, functions);

  // so now, all the exports that don't have an error and where not deleted should have a destinationId
  // use those ids to update the groups
  await updateGroups(client, exports, functions);

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
  functions: BatchFunctions
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
    await functions.removeFromGroups(client, removal);
  }

  if (Object.keys(addition).length > 0) {
    await functions.addToGroups(client, addition);
  }
}

async function updateByForeignKey(
  client,
  exports: BatchExport[],
  functions: BatchFunctions
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

  await functions.updateByForeignKeyAndSetDestinationIds(client, userMap);

  for (const key in userMap) {
    userMap[key].processed = true;
  }
}

async function updateByIds(
  client: any,
  exports: BatchExport[],
  functions: BatchFunctions
) {
  const userMap: ForeignKeyMap = {};
  for (const exportedProfile of exports) {
    if (exportedProfile.processed || exportedProfile.error) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      continue;
    }
    userMap[exportedProfile.foreignKeyValue] = exportedProfile;
  }

  if (Object.keys(userMap).length === 0) {
    return;
  }

  await functions.updateByDestinationIds(client, userMap);

  for (const key in userMap) {
    userMap[key].processed = true;
  }
}

async function deleteExports(
  client,
  exports: BatchExport[],
  functions: BatchFunctions
) {
  const userMap: ForeignKeyMap = {};
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
  }

  if (Object.keys(userMap).length === 0) {
    return;
  }

  await functions.deleteByDestinationIds(client, userMap);

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

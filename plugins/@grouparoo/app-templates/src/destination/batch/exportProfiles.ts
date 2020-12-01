import { ErrorWithProfileGuid } from "@grouparoo/core";
import {
  BatchAction,
  BatchGroupMode,
  BatchExport,
  BuildBatchExportMethod,
  ProfileBatchProfilesPluginMethod,
  ExportBatchProfilesPluginMethod,
  BatchMethods,
  BatchConfig,
  GroupNameListMap,
  DestinationIdMap,
  ForeignKeyMap,
  GetForeignKeyMapMethod,
} from "./types";

export const buildBatchExports: BuildBatchExportMethod = (exports) => {
  const batchExports: BatchExport[] = [];
  for (const exportedProfile of exports) {
    const info: BatchExport = Object.assign({}, exportedProfile);
    batchExports.push(info);
  }
  return batchExports;
};

export const exportProfilesInBatch: ProfileBatchProfilesPluginMethod = async (
  exports,
  config,
  methods
) => {
  return exportOneBatch(exports, config, methods);
};

const exportOneBatch: ExportBatchProfilesPluginMethod = async (
  exports,
  config,
  methods
) => {
  if (exports.length === 0) {
    return { success: true };
  }

  const client = config.connection || (await methods.getClient({ config }));

  for (const exportedProfile of exports) {
    try {
      setGroupNames(exportedProfile, methods, config);
      sortExport(exportedProfile, methods, config);
    } catch (error) {
      // if just one of them is missing foreign key or something, move on
      exportedProfile.error = error;
    }
  }

  await lookupDestinationIds(client, exports, methods, config);

  await deleteExports(client, exports, methods, config);
  await updateByIds(client, exports, methods, config);
  await createByForeignKey(client, exports, methods, config);

  verifyAllProcessed(exports);

  // so now, all the exports that don't have an error and where not deleted should have a destinationId
  // use those ids to update the groups
  await updateGroups(client, exports, methods, config);

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
  methods: BatchMethods,
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
    await batchGroups(client, GroupAction.Remove, removal, methods, config);
  }

  if (Object.keys(addition).length > 0) {
    await batchGroups(client, GroupAction.Add, addition, methods, config);
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
  methods: BatchMethods,
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
    if (config.groupMode === BatchGroupMode.WithinGroup) {
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
      currentGroupMap[name].push(user);
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
      await methods.addToGroups({
        client,
        users: Object.values(destIdMap),
        groupMap,
        destIdMap,
        config,
      });
    } else if (action === GroupAction.Remove) {
      await methods.removeFromGroups({
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
  methods: BatchMethods,
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
    const getByForeignKey = functionToGetForeignKey(fkMap, methods, config);

    await methods.createByForeignKeyAndSetDestinationIds({
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
  methods: BatchMethods,
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
    const getByForeignKey = functionToGetForeignKey(fkMap, methods, config);

    await methods.updateByDestinationIds({
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
  methods: BatchMethods,
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
    const getByForeignKey = functionToGetForeignKey(fkMap, methods, config);

    await methods.deleteByDestinationIds({
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
  methods: BatchMethods,
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
    const getByForeignKey = functionToGetForeignKey(fkMap, methods, config);
    await methods.findAndSetDestinationIds({
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
  methods: BatchMethods,
  config: BatchConfig
) {
  // build up groups situation of group names to addition and removal
  let oldGroups = exportedProfile.oldGroups || [];
  let newGroups = exportedProfile.newGroups || [];
  if (methods.normalizeGroupName) {
    oldGroups = oldGroups.map((groupName) =>
      methods.normalizeGroupName({ groupName, config })
    );
    newGroups = newGroups.map((groupName) =>
      methods.normalizeGroupName({ groupName, config })
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
  fkMap: ForeignKeyMap,
  methods: BatchMethods,
  config: BatchConfig
): GetForeignKeyMapMethod {
  const func: GetForeignKeyMapMethod = function (key) {
    if (methods.normalizeForeignKeyValue) {
      key = methods.normalizeForeignKeyValue({ keyValue: key, config });
    }
    key = fixupKey(key);
    return fkMap[key];
  };
  return func;
}

// returns what to do for each case
function sortExport(
  exportedProfile: BatchExport,
  methods: BatchMethods,
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
  if (methods.normalizeForeignKeyValue) {
    newValue = methods.normalizeForeignKeyValue({
      keyValue: newValue,
      config,
    });
    if (oldValue) {
      oldValue = methods.normalizeForeignKeyValue({
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

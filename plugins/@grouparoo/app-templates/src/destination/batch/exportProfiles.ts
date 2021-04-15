import { Errors } from "@grouparoo/core";
import { BatchSyncModeData } from "./types";
import { setGroupNames, checkErrors } from "../shared/batch";
import {
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
      assignForeignKeys(exportedProfile, methods, config);
    } catch (error) {
      // if just one of them is missing foreign key or something, move on
      exportedProfile.error = error;
    }
  }

  // If oldFK != newFK, look them up by old FK first...
  await lookupDestinationIds(client, exports, methods, config, "old");
  // Then override the FK with newFK if it also exists in the destination...
  // Note: If newFK does not exist, the oldFK will be used
  await lookupDestinationIds(client, exports, methods, config, "new");

  assignActions(exports, config);

  await deleteExports(client, exports, methods, config);
  await updateByIds(client, exports, methods, config);
  await createByForeignKey(client, exports, methods, config);

  verifyAllProcessed(exports);

  // so now, all the exports that don't have an error and where not deleted should have a destinationId
  // use those ids to update the groups
  await updateGroups(client, exports, methods, config);

  return checkErrors(exports);
};

function verifyAllProcessed(exports: BatchExport[]) {
  for (const exportedProfile of exports) {
    try {
      verifyProcessed(exportedProfile);
    } catch (error) {
      exportedProfile.error = error;
    }
  }
}

function verifyProcessed(exportedProfile: BatchExport) {
  const {
    destinationId,
    processed,
    error,
    shouldCreate,
    shouldUpdate,
    shouldDelete,
  } = exportedProfile;

  let needProcessed = false;
  let needDestinationId = false;

  if (error) {
    return;
  }

  if (shouldCreate || shouldUpdate) {
    needProcessed = true;
    needDestinationId = true;
  }
  if (shouldDelete) {
    needProcessed = true;
  }

  if (needProcessed && !processed) {
    throw new Error(
      `profile has not processed: ${exportedProfile.foreignKeyValue}`
    );
  }

  if (needDestinationId && !destinationId) {
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
    if (!exportedProfile.shouldGroups) {
      continue;
    }
    if (!exportedProfile.destinationId) {
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
      if (currentCount >= config.batchSize) {
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
    if (!exportedProfile.shouldCreate) {
      continue;
    }
    if (!exportedProfile.foreignKeyValue) {
      throw new Error(`cannot create without foreignKeyValue`);
    }

    if (currentCount >= config.batchSize) {
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
    if (!exportedProfile.shouldUpdate) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      throw new Error(
        `cannot update without destinationId: ${exportedProfile.foreignKeyValue}`
      );
    }

    if (currentCount >= config.batchSize) {
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
    if (!exportedProfile.shouldDelete) {
      continue;
    }
    if (!exportedProfile.destinationId) {
      // if trying to delete someone that doesn't exist, just inform the user
      try {
        throw new Errors.InfoError(
          `destinationId not found to delete: ${exportedProfile.foreignKeyValue}`
        );
      } catch (error) {
        exportedProfile.error = error;
      }
      continue;
    }

    if (currentCount >= config.batchSize) {
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
  config: BatchConfig,
  fkType: "old" | "new"
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

    let foreignKeyValue: string;
    switch (fkType) {
      case "new":
        foreignKeyValue = exportedProfile.foreignKeyValue;
        break;
      case "old":
        foreignKeyValue = exportedProfile.oldForeignKeyValue;
        break;
      default:
        throw new Error(`Unknown foreign key type: ${fkType}`);
    }

    if (!foreignKeyValue) continue;

    if (currentCount >= config.findSize) {
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

function assignForeignKeys(
  exportedProfile: BatchExport,
  methods: BatchMethods,
  config: BatchConfig
) {
  const { oldProfileProperties, newProfileProperties } = exportedProfile;

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
    }
  }

  return exportedProfile;
}

function assignActions(exports: BatchExport[], config: BatchConfig) {
  for (const exportedProfile of exports) {
    assignAction(exportedProfile, config);
  }
}

function assignAction(exportedProfile: BatchExport, config: BatchConfig) {
  const { toDelete, destinationId } = exportedProfile;
  const { syncMode, syncOperations } = config;

  const mode = syncOperations || BatchSyncModeData[syncMode];
  if (!mode) {
    throw new Error("Unknown sync mode.");
  }

  let skippedMessage = null;

  // all shouldX are falsy to start with

  if (toDelete) {
    // semantic: delete
    if (mode.delete) {
      exportedProfile.shouldDelete = true;
    } else {
      // just remove the groups
      exportedProfile.shouldGroups = true;
      if (destinationId) {
        skippedMessage =
          "Destination not deleting. Removing profile from groups.";
      } else {
        skippedMessage =
          "Destination not deleting, though profile was not found.";
      }
    }
  } else if (destinationId) {
    // semantic: update
    if (mode.update) {
      exportedProfile.shouldUpdate = true;
      exportedProfile.shouldGroups = true;
    } else {
      skippedMessage = "Destination not updating. No changes made.";
    }
  } else {
    // semantic: create
    if (mode.create) {
      exportedProfile.shouldCreate = true;
      exportedProfile.shouldGroups = true;
    } else {
      skippedMessage = "Destination not creating. No changes made.";
    }
  }

  exportedProfile.skippedMessage = skippedMessage;
}

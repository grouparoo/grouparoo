import { ForeignKeyMap } from "../batch";
import { setGroupNamesAll, checkErrors } from "../shared/batch";
import {
  RecordGroupRecordsPluginMethod,
  GroupExport,
  ExportedRecord,
  GroupConfig,
  GroupMethods,
  GroupNameListMap,
  GroupSizeMode,
} from "./types";

export const exportRecordsInGroups: RecordGroupRecordsPluginMethod = async (
  exports,
  config,
  methods
) => {
  if (exports.length === 0) {
    return { success: true };
  }

  const client = config.connection || (await methods.getClient({ config }));

  const users: GroupExport[] = createGroupExports(exports, methods, config);
  setGroupNamesAll(users, methods, config);

  await updateGroups(client, users, methods, config);

  return checkErrors(users);
};

function convertExportedRecord(exportedRecord: ExportedRecord): GroupExport {
  const user: GroupExport = Object.assign({}, exportedRecord);
  return user;
}

function addToMap(
  user: GroupExport,
  userMap: { [fkValue: string]: GroupExport }
) {
  if (!user) {
    return;
  }

  const fkValue = user.foreignKeyValue;
  if (!fkValue) {
    return;
  }

  const current = userMap[fkValue];
  if (!current) {
    userMap[fkValue] = user;
    return;
  }

  // have to deal with overlapping ones
  const bothOldGroups = Array.from(
    new Set(current.oldGroups.concat(user.oldGroups))
  );
  const bothNewGroups = Array.from(
    new Set(current.newGroups.concat(user.newGroups))
  );

  // take the "new" one
  if (current.type === "new" && user.type !== "new") {
    current.oldGroups = bothOldGroups;
    userMap[fkValue] = current;
    return;
  }
  if (user.type === "new" && current.type !== "new") {
    user.oldGroups = bothOldGroups;
    userMap[fkValue] = user;
    return;
  }

  // if one already has an error, take the one without
  if (!current.error && user.error) {
    current.oldGroups = bothOldGroups;
    userMap[fkValue] = current;
    return;
  }
  if (!user.error && current.error) {
    user.oldGroups = bothOldGroups;
    userMap[fkValue] = user;
    return;
  }

  // somehow both are new or both old
  // let's say the later one is newer. i think that's how it works.
  user.oldGroups = bothOldGroups;
  user.newGroups = bothNewGroups;
  userMap[fkValue] = user;
  return;
}

function createGroupExports(
  exportedRecords: ExportedRecord[],
  methods: GroupMethods,
  config: GroupConfig
): GroupExport[] {
  const userMap: { [fkValue: string]: GroupExport } = {};
  const errors: GroupExport[] = [];
  for (const exportedRecord of exportedRecords) {
    try {
      const { newUser, oldUser } = separateForeignKeys(
        exportedRecord,
        methods,
        config
      );
      addToMap(newUser, userMap);
      addToMap(oldUser, userMap);
    } catch (error) {
      // if just one of them is missing foreign key or something, move on
      const user = convertExportedRecord(exportedRecord);
      user.error = error;
      errors.push(user);
    }
  }
  return errors.concat(Object.values(userMap));
}

function separateForeignKeys(
  exportedRecord: ExportedRecord,
  methods: GroupMethods,
  config: GroupConfig
): { newUser: GroupExport; oldUser: GroupExport } {
  const { oldRecordProperties, newRecordProperties } = exportedRecord;

  const { foreignKey } = config;
  let newValue = newRecordProperties[foreignKey];
  let oldValue = oldRecordProperties[foreignKey];
  if (!newValue) {
    throw new Error(`newRecordProperties[${foreignKey}] is a required mapping`);
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

  const newUser = convertExportedRecord(exportedRecord);
  newValue = newValue.toString();
  newUser.foreignKeyValue = newValue;
  newUser.type = "new";

  // record other one if applicable
  let oldUser = null;
  if (oldValue) {
    oldValue = oldValue.toString();
    if (newValue !== oldValue && oldValue.length > 0) {
      oldUser = convertExportedRecord(exportedRecord);
      oldUser.foreignKeyValue = oldValue;
      oldUser.type = "old";
      oldUser.toDelete = true;
    }
  }

  return { newUser, oldUser };
}

async function updateGroups(
  client,
  users: GroupExport[],
  methods: GroupMethods,
  config: GroupConfig
) {
  const { syncOperations } = config;
  let skipped = false;

  const removal: GroupNameListMap = {};
  const addition: GroupNameListMap = {};

  for (const user of users) {
    if (user.error) {
      continue;
    }

    let skipMessage = null;

    // build up groups situation of group names to addition and removal
    if (syncOperations.delete) {
      for (const list of user.removedGroups) {
        removal[list] = removal[list] || [];
        removal[list].push(user);
      }
    } else if (user.removedGroups.length > 0) {
      const message = "Destination is not removing.";
      skipMessage = skipMessage ? `${skipMessage} ${message}` : message;
    }

    if (syncOperations.create) {
      for (const list of user.addedGroups) {
        addition[list] = addition[list] || [];
        addition[list].push(user);
      }
    } else if (user.addedGroups.length > 0) {
      const message = "Destination is not adding.";
      skipMessage = skipMessage ? `${skipMessage} ${message}` : message;
    }

    if (skipMessage) {
      user.skippedMessage = skipMessage;
    }
  }

  if (Object.keys(removal).length > 0) {
    await batchGroups(client, GroupAction.Remove, removal, methods, config);
  }

  if (Object.keys(addition).length > 0) {
    await batchGroups(client, GroupAction.Add, addition, methods, config);
  }
}

// TODO: might have to merge foreign keys because removing _and_ adding

enum GroupAction {
  Add = "ADD",
  Remove = "REMOVE",
}
async function batchGroups(
  client: any,
  action: GroupAction,
  groupMap: GroupNameListMap,
  methods: GroupMethods,
  config: GroupConfig
) {
  let currentGroupMap: GroupNameListMap = {};
  let currentForeignKeyMap: ForeignKeyMap = {};
  let currentCount = 0;
  let hasData = false;

  const batches: {
    groupMap: GroupNameListMap;
    foreignKeyMap: ForeignKeyMap;
  }[] = [];

  for (const name in groupMap) {
    if (config.groupMode === GroupSizeMode.WithinGroup) {
      // the count is per group
      currentCount = 0;
    }
    const users = groupMap[name] || [];
    for (const user of users) {
      if (currentCount >= config.batchSize) {
        batches.push({
          groupMap: currentGroupMap,
          foreignKeyMap: currentForeignKeyMap,
        });
        currentGroupMap = {};
        currentForeignKeyMap = {};
        currentCount = 0;
        hasData = false;
      }

      currentGroupMap[name] = currentGroupMap[name] || [];
      currentGroupMap[name].push(user);
      currentForeignKeyMap[user.foreignKeyValue] = user;
      currentCount++;
      hasData = true;
    }
  }

  if (hasData) {
    batches.push({
      groupMap: currentGroupMap,
      foreignKeyMap: currentForeignKeyMap,
    });
  }

  for (const { groupMap, foreignKeyMap } of batches) {
    if (action === GroupAction.Add) {
      await methods.addToGroups({
        client,
        users: Object.values(foreignKeyMap),
        groupMap,
        foreignKeyMap,
        config,
      });
    } else if (action === GroupAction.Remove) {
      await methods.removeFromGroups({
        client,
        users: Object.values(foreignKeyMap),
        groupMap,
        foreignKeyMap,
        config,
      });
    } else {
      throw new Error(`Unknown GroupAction: ${action}`);
    }
  }
}

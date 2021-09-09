import { ErrorWithRecordId } from "@grouparoo/core";
import { log } from "actionhero";

export interface MethodNormalizeGroupName {
  // mess with the names of groups (tags with no spaces, for example)
  (argument: { groupName: string; config: any }): string;
}

export interface GroupNameExport {
  oldGroups?: string[];
  newGroups?: string[];
  addedGroups?: string[];
  removedGroups?: string[];
  toDelete?: boolean;
}

export function setGroupNames(
  exportedRecord: GroupNameExport,
  methods: {
    normalizeGroupName?: MethodNormalizeGroupName;
  },
  config: any
) {
  // build up groups situation of group names to addition and removal
  let oldGroups = exportedRecord.oldGroups || [];
  let newGroups = exportedRecord.newGroups || [];
  if (exportedRecord.toDelete) {
    // if anyone asks, removing from all groups as part of deletion
    oldGroups = Array.from(new Set(oldGroups.concat(newGroups)));
    newGroups = [];
  }
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

  exportedRecord.addedGroups = added;
  exportedRecord.removedGroups = removed;
}

export function setGroupNamesAll(
  exportedRecord: GroupNameExport[],
  methods: {
    normalizeGroupName?: MethodNormalizeGroupName;
  },
  config: any
) {
  for (const user of exportedRecord) {
    setGroupNames(user, methods, config);
  }
}

export interface ErrorCheckExport {
  recordId: string;
  skippedMessage?: string;
  error?: any;
}

export function checkErrors(exportedRecords: ErrorCheckExport[]): {
  success: boolean;
  errors: ErrorWithRecordId[];
} {
  // assuming semantics here of success is only true if there are zero errors
  let errors: ErrorWithRecordId[] = null; // for ones that go wrong
  let success = true;
  for (const exportedRecord of exportedRecords) {
    let { error, skippedMessage } = exportedRecord;
    if (error) {
      success = false;
      errors = errors || [];
      if (typeof error === "string") {
        error = new Error(error);
      }
      error.recordId = exportedRecord.recordId;
      errors.push(error);
      log(error?.stack || error, "error");
    } else if (skippedMessage) {
      success = false;
      errors = errors || [];
      const skip = <ErrorWithRecordId>new Error(skippedMessage);
      skip.recordId = exportedRecord.recordId;
      skip.errorLevel = "info";
      errors.push(skip);
    }
  }

  return { success, errors };
}

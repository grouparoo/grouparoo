import { ErrorWithProfileId } from "@grouparoo/core";
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
  exportedProfile: GroupNameExport,
  methods: {
    normalizeGroupName?: MethodNormalizeGroupName;
  },
  config: any
) {
  // build up groups situation of group names to addition and removal
  let oldGroups = exportedProfile.oldGroups || [];
  let newGroups = exportedProfile.newGroups || [];
  if (exportedProfile.toDelete) {
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

  exportedProfile.addedGroups = added;
  exportedProfile.removedGroups = removed;
}

export function setGroupNamesAll(
  exportedProfile: GroupNameExport[],
  methods: {
    normalizeGroupName?: MethodNormalizeGroupName;
  },
  config: any
) {
  for (const user of exportedProfile) {
    setGroupNames(user, methods, config);
  }
}

export interface ErrorCheckExport {
  profileId: string;
  skippedMessage?: string;
  error?: any;
}

export function checkErrors(exportedProfiles: ErrorCheckExport[]): {
  success: boolean;
  errors: ErrorWithProfileId[];
} {
  // assuming semantics here of success is only true if there are zero errors
  let errors: ErrorWithProfileId[] = null; // for ones that go wrong
  let success = true;
  for (const exportedProfile of exportedProfiles) {
    let { error, skippedMessage } = exportedProfile;
    if (error) {
      success = false;
      errors = errors || [];
      if (typeof error === "string") {
        error = new Error(error);
      }
      error.profileId = exportedProfile.profileId;
      errors.push(error);
      log(error?.stack || error, "error");
    } else if (skippedMessage) {
      errors = errors || [];
      const skip = <ErrorWithProfileId>new Error(skippedMessage);
      skip.profileId = exportedProfile.profileId;
      skip.errorLevel = "info";
      errors.push(skip);
    }
  }

  return { success, errors };
}

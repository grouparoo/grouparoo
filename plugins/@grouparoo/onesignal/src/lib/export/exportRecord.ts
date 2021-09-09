import { ExportRecordPluginMethod, Errors } from "@grouparoo/core";
import { HTTPError } from "onesignal-node";
import { connect } from "../connect";

export const exportRecord: ExportRecordPluginMethod = async ({
  appOptions,
  syncOperations,
  export: {
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const extUserId = newRecordProperties["external_user_id"];
  if (!extUserId) {
    throw new Error(
      `newRecordProperties[external_user_id] is a required mapping`
    );
  }

  const payload: any = { tags: {} };

  // set profile properties, including old ones.
  const newKeys = Object.keys(newRecordProperties);
  const oldKeys = Object.keys(oldRecordProperties);
  const allKeys = new Set([...newKeys, ...oldKeys]);

  if (toDelete) {
    throw new Errors.InfoError("Destination sync mode does not delete.");
  }

  for (const key of allKeys) {
    if (key === "external_user_id") {
      // not doing this one, it's not a tag
      continue;
    }

    const value = newRecordProperties[key];
    const normalizedKey = normalizeTagKey(key);
    payload.tags[normalizedKey] = formatVar(value);
  }

  // Groups are managed as tags
  // If user is in group "High Value", the attribute "in_high_value" will be set to "true"
  for (const group of newGroups) {
    const groupTag = getGroupTag(group);
    payload.tags[groupTag] = true;
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupTag = getGroupTag(group);
      payload.tags[groupTag] = null;
    }
  }

  try {
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing devices."
      );
    }
    await client.editTagsWithExternalUserIdDevice(extUserId, payload);
    return { success: true };
  } catch (error) {
    if (error instanceof HTTPError && error.statusCode === 404) {
      throw new Errors.InfoError(
        "OneSignal destination does not create new devices."
      );
    }
    throw error;
  }
};

function formatVar(value) {
  if (value === undefined) {
    return null;
  }

  // Dates are stored as unix timestamps (int)
  if (value instanceof Date) {
    return Math.floor(value.getTime() / 1000);
  }

  return value;
}

function normalizeTagKey(key: string) {
  // Only alphanumeric chars and underscores
  return key
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_");
}

function getGroupTag(groupName: string) {
  const normalizedName = normalizeTagKey(groupName);
  return `in_${normalizedName}`;
}

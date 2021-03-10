import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  export: {
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  if (Object.keys(oldProfileProperties).length === 0) {
    // TODO CREATE
    return { success: false };
  }

  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const extUserId = newProfileProperties["external_user_id"];

  if (!extUserId) {
    throw new Error(
      `newProfileProperties[external_user_id] is a required mapping`
    );
  }

  if (toDelete) {
    // TODO Delete requires a device ID, but we have an external user id that can map to multiple devices
    // do we delete all devices?
    return { success: false };
  }

  const payload: any = { tags: {} };

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = new Set([...newKeys, ...oldKeys]);

  for (const key of allKeys) {
    if (key === "external_user_id") {
      // not doing this one, it's not a tag
      continue;
    }

    const value = newProfileProperties[key];
    payload.tags[key] = formatVar(value);
  }

  // Groups are managed as tags
  // If user is in group "High Value", the attribute "in_high_value" will be set to 1
  for (const group of newGroups) {
    const groupAttribute = getGroupAttribute(group);
    payload.tags[groupAttribute] = 1;
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupAttribute = getGroupAttribute(group);
      payload.tags[groupAttribute] = null;
    }
  }

  await client.editTagsWithExternalUserIdDevice(extUserId, payload);
  return { success: true };
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

function getGroupAttribute(groupName: string) {
  const normalizedName = groupName.toLowerCase().replace(/ /g, "_");
  return `in_${normalizedName}`;
}

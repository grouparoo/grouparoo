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
  // TODO

  /*
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const customerId = newProfileProperties["customer_id"];
  const oldCustomerId = oldProfileProperties["customer_id"];

  if (!customerId) {
    throw new Error(`newProfileProperties[customer_id] is a required mapping`);
  }

  if (oldCustomerId !== undefined && customerId !== oldCustomerId) {
    // Must delete old customer if ID has changed
    await client.destroy(oldCustomerId);
  }

  if (toDelete) {
    await client.destroy(customerId);
    return { success: true };
  }

  const payload: any = {};

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = new Set([...newKeys, ...oldKeys]);

  for (const key of allKeys) {
    if (key === "customer_id") {
      // not doing this one
      continue;
    }

    const value = newProfileProperties[key];
    payload[key] = formatVar(value);
  }

  // Groups are managed as customer attributes
  // If user is in group "High Value", the attribute "In High Value" will be set to true
  for (const group of newGroups) {
    const groupAttribute = getGroupAttribute(group);
    payload[groupAttribute] = true;
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupAttribute = getGroupAttribute(group);
      payload[groupAttribute] = null;
    }
  }

  await client.identify(customerId, payload);
*/
  return { success: false };
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
  return `In ${groupName}`;
}

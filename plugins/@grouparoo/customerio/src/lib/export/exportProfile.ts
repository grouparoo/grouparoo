import { Errors, ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  syncOperations,
  export: {
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const customerId = newProfileProperties["customer_id"];
  const oldCustomerId = oldProfileProperties["customer_id"];
  let newCustomer = null;

  if (!customerId) {
    throw new Error(`newProfileProperties[customer_id] is a required mapping`);
  }
  newCustomer = await client.getCustomer(customerId);

  if (oldCustomerId !== undefined && customerId !== oldCustomerId) {
    // Must delete old customer if ID has changed
    await deleteCustomer(client, syncOperations, oldCustomerId);
  }

  if (toDelete) {
    await deleteCustomer(client, syncOperations, customerId, true);
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

  if (!newCustomer && !syncOperations.create) {
    throw new Errors.InfoError(
      "Destination sync mode does not create new profiles."
    );
  } else if (newCustomer && !syncOperations.update) {
    throw new Errors.InfoError(
      "Destination sync mode does not update existing profiles."
    );
  }

  await client.identify(customerId, payload);
  return { success: true };
};

async function deleteCustomer(
  client,
  syncOperations,
  customerId,
  doThrow = false
) {
  if (syncOperations.delete) {
    await client.destroy(customerId);
  } else if (doThrow) {
    throw new Errors.InfoError("Destination sync mode does not delete.");
  }
}

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

import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { VeroClient } from "../client";
import { handleGroupChanges } from "./listMethods";
import { getKnownFields } from "./destinationMappingOptions";

export const exportRecord = async (args) => {
  try {
    return await handleCustomerChanges(args);
  } catch (error) {
    // look for the rate limit exceeded status code.
    if (error?.response?.status === 429) {
      const retryIn = Math.floor(Math.random() * 10) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

const handleCustomerChanges: ExportRecordPluginMethod = async ({
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

  if (!newRecordProperties["id"]) {
    throw new Error(`newRecordProperties[id] is a required mapping`);
  }

  const client = await connect(appOptions);

  const newID = newRecordProperties["id"];
  const oldID = oldRecordProperties["id"];

  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }
    await client.deleteUser(oldID ?? newID);
    return { success: true };
  }

  if (!syncOperations.create || !syncOperations.update) {
    throw new Errors.InfoError(
      "Destination sync mode does not create new records and update existing records."
    );
  }

  if (oldID && oldID !== newID) {
    await client.changeUserId(oldID, newID);
  }

  const payload = await makePayload(
    client,
    oldRecordProperties,
    newRecordProperties
  );

  await client.createOrUpdateUser(payload);

  await handleGroupChanges(client, oldGroups, newGroups, newRecordProperties);

  return { success: true };
};

export async function makePayload(
  client: VeroClient,
  oldRecordProperties: Record<string, any>,
  newRecordProperties: Record<string, any>
) {
  const payload: any = {};

  const knownFields = getKnownFields();
  const knownFieldsKeys = knownFields.map((field) => field.key);

  // set record properties, including old ones
  const allFields = new Set([
    ...Object.keys(newRecordProperties),
    ...Object.keys(oldRecordProperties),
  ]);

  for (const fieldName of allFields) {
    const value = newRecordProperties[fieldName];
    if (knownFieldsKeys.includes(fieldName)) {
      payload[fieldName] = formatVar(value);
    } else {
      payload.data ??= {};
      payload.data[fieldName] = formatVar(value);
    }
  }

  return payload;
}

function formatVar(value) {
  if (value === undefined) {
    return null;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

import { getKnownFieldMap } from "./destinationMappingOptions";
import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { handleGroupsChanges } from "./listMethods";

export const handlePersonChanges: ExportRecordPluginMethod = async ({
  appId,
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

  const newEmail = newRecordProperties["email"];
  const oldEmail = oldRecordProperties["email"];

  if (!newEmail) {
    throw new Error(`newRecordProperties[email] is a required mapping`);
  }

  const newFoundId = await client.findProfileIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findProfileIdByEmail(oldEmail);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }
    if (foundId) {
      await client.dataPrivacy.requestProfileDeletion({
        identifier: foundId,
        id_type: "person_id",
      });
    }
    return { success: true };
  }
  const payload = await makePayload(oldRecordProperties, newRecordProperties);
  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }
    await client.profiles.updateProfile({
      profileId: foundId,
      properties: payload,
    });
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }

    // Create new Person
    await client.public.identify({
      email: newEmail,
      properties: payload,
      post: true,
    });
  }

  await handleGroupsChanges(
    client,
    { appId, appOptions },
    newEmail,
    oldGroups,
    newGroups
  );
  return { success: true };
};

export const exportRecord = async (args) => {
  try {
    return await handlePersonChanges(args);
  } catch (error) {
    // look for the rate limit exceeded status code.
    if (error?.statusCode === 429) {
      const retryIn = Math.floor(Math.random() * 10) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

export async function makePayload(oldRecordProperties, newRecordProperties) {
  const payload: any = {};

  // set record properties, including old ones
  const newFields = Object.keys(newRecordProperties);
  const oldFields = Object.keys(oldRecordProperties);
  const allFields = new Set([...newFields, ...oldFields]);

  // get fields
  const fieldKeys = await getKnownFieldMap();
  for (const fieldName of allFields) {
    const value = newRecordProperties[fieldName];
    const klaviyoKey = fieldKeys[fieldName];
    const key = klaviyoKey ? klaviyoKey : fieldName;

    const formattedValue = formatVar(value);
    if (!formattedValue) {
      payload.$unset ??= [];
      payload.$unset.push(key);
    } else {
      payload[key] = formattedValue;
    }
  }

  return payload;
}

function formatVar(value) {
  if (value === undefined) {
    return null;
  }
  if (typeof value === "string" && value.trim() === "") {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

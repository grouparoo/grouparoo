import { ExportProfilePluginMethod, Errors } from "@grouparoo/core";
import EloquaClient from "../client/client";
import { connect } from "../connect";
import { getContactFields } from "./destinationMappingOptions";

export const exportProfile: ExportProfilePluginMethod = async (args) => {
  try {
    return await handleProfileChanges(args);
  } catch (error) {
    // look for the rate limit exceeded status code.
    if (error?.response?.status === 429) {
      const retryIn = Math.floor(Math.random() * 10) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

const handleProfileChanges: ExportProfilePluginMethod = async ({
  appId,
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

  const newEmail = newProfileProperties["emailAddress"];
  const oldEmail = oldProfileProperties["emailAddress"];

  const newContact = await client.contacts.getByEmail(newEmail);

  let oldContact = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldContact = await client.contacts.getByEmail(oldEmail);
  }

  const foundContact = newContact || oldContact;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete profiles."
      );
    }

    if (foundContact) {
      await client.contacts.delete(foundContact.id);
    }

    return { success: true };
  }

  if (!newProfileProperties["emailAddress"]) {
    throw new Error(`newProfileProperties[emailAddress] is a required mapping`);
  }

  const payload = await makePayload(
    client,
    oldProfileProperties,
    newProfileProperties
  );

  if (foundContact) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing profiles."
      );
    }
    payload.id = foundContact.id;
    await client.contacts.update(foundContact.id, payload);
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new profiles."
      );
    }
    // Create new Person
    await client.contacts.create(payload);
  }

  return { success: true };
};

async function makePayload(
  client: EloquaClient,
  oldProfileProperties: {
    [key: string]: any;
  },
  newProfileProperties: {
    [key: string]: any;
  }
) {
  const payload: any = {};
  // payload["fieldValues"] = [];

  // set profile properties, including old ones
  const newFields = Object.keys(newProfileProperties);
  const oldFields = Object.keys(oldProfileProperties);
  const allFields = new Set([...newFields, ...oldFields]);

  // get fields
  const fields = await getContactFields(client);
  for (const fieldName of allFields) {
    const value = newProfileProperties[fieldName];
    if (fieldName === "emailAddress") {
      payload[fieldName] = formatVar(value);
      continue;
    }
    const field = getField(fields, fieldName);
    if (!field) {
      continue; // field not found.
    }
    if (field.isPrimary) {
      payload[fieldName] = formatVar(value);
      continue;
    }
    // payload["fieldValues"].push({
    //   id: field.id,
    //   value: formatVar(value),
    // });
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

function getField(fields: any, key: string) {
  for (const field of fields) {
    if (field.key === key) {
      return field;
    }
  }
  return null;
}

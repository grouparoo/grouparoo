import { ExportRecordPluginMethod, Errors } from "@grouparoo/core";
import { PipedriveClient } from "../../client";
import { connect } from "../../connect";
import {
  PipedriveCacheData,
  getKnownPersonFieldMap,
} from "./destinationMappingOptions";
import { getGroupFieldKey } from "./listMethods";

export const exportRecord: ExportRecordPluginMethod = async (args) => {
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

const handleProfileChanges: ExportRecordPluginMethod = async ({
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
  const cacheData: PipedriveCacheData = { appId, appOptions };

  const newEmail = newRecordProperties["Email"];
  const oldEmail = oldRecordProperties["Email"];

  const newFoundId = await client.findPersonIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findPersonIdByEmail(oldEmail);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await client.persons.delete(foundId);
    }

    return { success: true };
  }

  if (!newRecordProperties["Email"]) {
    throw new Error(`newRecordProperties[Email] is a required mapping`);
  }

  if (!newRecordProperties["Name"]) {
    throw new Error(`newRecordProperties[Name] is a required mapping`);
  }

  const payload = await makePayload(
    client,
    cacheData,
    oldRecordProperties,
    newRecordProperties,
    oldGroups,
    newGroups
  );

  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }

    await client.persons.update(foundId, payload);
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }
    // Create new Person
    await client.persons.create(payload);
  }

  return { success: true };
};

async function makePayload(
  client: PipedriveClient,
  cacheData: PipedriveCacheData,
  oldRecordProperties: {
    [key: string]: any;
  },
  newRecordProperties: {
    [key: string]: any;
  },
  oldGroups: string[],
  newGroups: string[]
) {
  const payload: any = {};

  // set record properties, including old ones
  const newFields = Object.keys(newRecordProperties);
  const oldFields = Object.keys(oldRecordProperties);
  const allFields = new Set([...newFields, ...oldFields]);

  // get fields
  const fieldKeys = await getKnownPersonFieldMap(client, cacheData);

  for (const fieldName of allFields) {
    const value = newRecordProperties[fieldName];
    const pipedriveKey = fieldKeys[fieldName];

    if (!pipedriveKey) {
      continue; // unknown key
    }

    payload[pipedriveKey] = formatVar(value);
  }

  // Set group fields
  for (const group of newGroups) {
    const groupKey = await getGroupFieldKey(client, cacheData, group, true);
    payload[groupKey] = "true";
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupKey = await getGroupFieldKey(client, cacheData, group);
      if (groupKey) {
        payload[groupKey] = null;
      }
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

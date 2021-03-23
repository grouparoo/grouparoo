import { ExportProfilePluginMethod } from "@grouparoo/core";
import { PipedriveClient } from "../client";
import { connect } from "../connect";
import {
  PipedriveCacheData,
  getKnownPersonFieldMap,
} from "./destinationMappingOptions";
import { getGroupFieldKey } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async ({
  appId,
  appOptions,
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
  const cacheData: PipedriveCacheData = { appId, appOptions };

  const newEmail = newProfileProperties["Email"];
  const oldEmail = oldProfileProperties["Email"];

  const newFoundId = await client.findPersonIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findPersonIdByEmail(oldEmail);
  }

  if (toDelete) {
    const idToDelete = oldFoundId || newFoundId;
    if (idToDelete) {
      await client.deletePerson(idToDelete);
    }

    return { success: true };
  }

  const payload = await makePayload(
    client,
    cacheData,
    oldProfileProperties,
    newProfileProperties,
    oldGroups,
    newGroups
  );

  const foundId = newFoundId || oldFoundId;
  if (foundId) {
    // Update existing Person
    await client.updatePerson(foundId, payload);
  } else {
    // Create new Person
    await client.createPerson(payload);
  }

  return { success: true };
};

async function makePayload(
  client: PipedriveClient,
  cacheData: PipedriveCacheData,
  oldProfileProperties: {
    [key: string]: any;
  },
  newProfileProperties: {
    [key: string]: any;
  },
  oldGroups: string[],
  newGroups: string[]
) {
  if (!newProfileProperties["Email"]) {
    throw new Error(`newProfileProperties[Email] is a required mapping`);
  }

  if (!newProfileProperties["Name"]) {
    throw new Error(`newProfileProperties[Name] is a required mapping`);
  }

  const payload: any = {};

  // set profile properties, including old ones
  const newFields = Object.keys(newProfileProperties);
  const oldFields = Object.keys(oldProfileProperties);
  const allFields = new Set([...newFields, ...oldFields]);

  // get fields
  const fieldKeys = await getKnownPersonFieldMap(client, cacheData);

  for (const fieldName of allFields) {
    const value = newProfileProperties[fieldName];
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

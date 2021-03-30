import { ExportProfilePluginMethod } from "@grouparoo/core";
import { PipedriveClient } from "../client";
import { connect } from "../connect";
import {
  PipedriveCacheData,
  getKnownPersonFieldMap,
} from "./destinationMappingOptions";
import { getGroupFieldKey } from "./listMethods";

class InfoError extends Error {
  errorLevel: string;

  constructor(message) {
    super(message);
    this.errorLevel = "info";
  }
}

export const exportProfile: ExportProfilePluginMethod = async ({
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
  const cacheData: PipedriveCacheData = { appId, appOptions };

  const newEmail = newProfileProperties["Email"];
  const oldEmail = oldProfileProperties["Email"];

  const newFoundId = await client.findPersonIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findPersonIdByEmail(oldEmail);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      // only clear groups if syncMode does not allow deletion
      newGroups = [];
    } else {
      if (foundId) {
        await client.deletePerson(foundId);
      }

      return { success: true };
    }
  }

  const payload = await makePayload(
    client,
    cacheData,
    oldProfileProperties,
    newProfileProperties,
    oldGroups,
    newGroups
  );

  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      if (toDelete) {
        throw new InfoError("Destination sync mode does not delete profiles.");
      }

      throw new InfoError(
        "Destination sync mode does not update existing profiles."
      );
    }

    await client.updatePerson(foundId, payload);
  } else if (!toDelete) {
    if (!syncOperations.create) {
      throw new InfoError(
        "Destination sync mode does not create new profiles."
      );
    }
    // Create new Person
    await client.createPerson(payload);
  }

  if (toDelete && !syncOperations.delete) {
    throw new InfoError(
      "Destination sync mode does not delete profiles. Only group membership has been cleared."
    );
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

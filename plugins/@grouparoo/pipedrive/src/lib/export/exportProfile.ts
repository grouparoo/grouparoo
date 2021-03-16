import { ExportProfilePluginMethod } from "@grouparoo/core";
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

  const oldEmail = oldProfileProperties["Email"];
  const foundId = await findPersonId(client, oldEmail);

  if (toDelete) {
    if (!foundId) {
      throw new Error(`Person with email ${oldEmail} was not found to delete.`);
    }

    await client.PersonsController.deleteAPerson(foundId);
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

  if (foundId) {
    // Update existing Person
    payload.id = foundId;
    await client.PersonsController.updateAPerson(payload);
  } else {
    // Create new Person
    await client.PersonsController.addAPerson({ body: payload });
  }

  return { success: true };
};

async function makePayload(
  client: any,
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
    const groupKey = await getGroupFieldKey(client, cacheData, group);
    payload[groupKey] = "true";
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupKey = await getGroupFieldKey(client, cacheData, group);
      payload[groupKey] = null;
    }
  }

  return payload;
}

async function findPersonId(
  client: any,
  email: string
): Promise<number | null> {
  if (!email) return null;

  const {
    data,
  } = await client.SearchResultsController.getPerformASearchUsingASpecificFieldValue(
    {
      term: email,
      itemType: "person",
      fieldType: "personField",
      exactMatch: true,
      fieldKey: "email",
      returnItemIds: true,
    }
  );

  if (data.length == 0) return null;
  return data[0].id;
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

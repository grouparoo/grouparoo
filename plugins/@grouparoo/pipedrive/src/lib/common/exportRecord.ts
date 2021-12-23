import { PipedriveClient } from "../client";
import {
  getKnownFieldMap,
  PipedriveCacheData,
} from "./destinationMappingOptions";
import { getGroupFieldKey } from "./listMethods";
import { EntityType } from "./configMapping";
import { ExportRecordPluginMethod } from "@grouparoo/core";

export const getExportRecordWithErrorHandling: (
  callback: Function
) => ExportRecordPluginMethod = (callback: Function) => async (args) => {
  try {
    return await callback(args);
  } catch (error) {
    // look for the rate limit exceeded status code.
    let retryIn = Math.floor(Math.random() * 10) + 1;

    if (error?.response?.status === 429) {
      const dailyRequestsLeftStr =
        error.response.headers["x-daily-requests-left"];
      if (dailyRequestsLeftStr) {
        const dailyRequestsLeft = parseInt(dailyRequestsLeftStr);
        if (dailyRequestsLeft < 3) {
          retryIn = 24 * 60 * 60; // 1 day
        }
      }
      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

export async function makePayload(
  client: PipedriveClient,
  type: EntityType,
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
  const fieldKeys = await getKnownFieldMap(client, type, cacheData);

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
    const groupKey = await getGroupFieldKey(
      client,
      type,
      cacheData,
      group,
      true
    );
    payload[groupKey] = "true";
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupKey = await getGroupFieldKey(client, type, cacheData, group);
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

import { CloseioClient } from "../client";
import * as dot from "dot-object";
import {
  CloseioCacheData,
  getCustomFields,
  getKnownFields,
} from "./destinationMappingOptions";
import { EntityType } from "./configMapping";
import { getGroupFieldKey } from "./listMethods";
import { ExportRecordPluginMethod } from "@grouparoo/core";

export const getExportRecordWithErrorHandling: (
  callback: Function
) => ExportRecordPluginMethod = (callback: Function) => async (args) => {
  try {
    return await callback(args);
  } catch (error) {
    console.log(error);

    if (error?.response?.status === 429) {
      // look for the rate limit exceeded status code.
      const retryIn = Math.floor(Math.random() * 10) + 1;

      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

export const makePayload = async (
  client: CloseioClient,
  type: EntityType,
  cacheData: CloseioCacheData,
  oldRecordProperties: Record<string, any>,
  newRecordProperties: Record<string, any>,
  oldGroups: string[],
  newGroups: string[]
) => {
  const knownFields = getKnownFields(type);
  const customFields = await getCustomFields(client, type, cacheData);

  const knownFieldsMap = Object.fromEntries(
    knownFields.map((field) => [field.key, field])
  );

  const customFieldsMap = Object.fromEntries(
    customFields.map((field) => [field.key, field])
  );

  const allKeys = new Set([
    ...Object.keys(oldRecordProperties),
    ...Object.keys(newRecordProperties),
  ]);

  const knownFieldsData: Record<string, any> = {};
  const customFieldsData: Record<string, any> = {};

  for (const key of allKeys) {
    const value = formatVar(
      newRecordProperties[key] !== undefined ? newRecordProperties[key] : null
    );
    if (knownFieldsMap[key]) {
      knownFieldsData[knownFieldsMap[key].closeioKey] = value;
    } else if (customFieldsMap[key]) {
      customFieldsData["custom." + customFieldsMap[key].closeioKey] = value;
    }
  }

  const payload = {
    ...dot.object(knownFieldsData),
    ...customFieldsData,
  };

  // Set group fields
  for (const group of newGroups) {
    const groupKey = await getGroupFieldKey(
      client,
      type,
      cacheData,
      group,
      true
    );
    payload[`custom.${groupKey}`] = "true";
  }

  for (const group of oldGroups) {
    if (!newGroups.includes(group)) {
      const groupKey = await getGroupFieldKey(client, type, cacheData, group);
      if (groupKey) {
        payload[`custom.${groupKey}`] = null;
      }
    }
  }

  return payload;
};

function formatVar(value) {
  if (value === undefined) {
    return null;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

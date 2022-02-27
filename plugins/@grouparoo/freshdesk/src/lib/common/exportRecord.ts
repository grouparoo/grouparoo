import { ExportRecordPluginMethod } from "@grouparoo/core";
import { KnownFreshdeskField } from "./destinationMappingOptions";

export const exportRecordWithErrorHandling: {
  (callback: ExportRecordPluginMethod): ExportRecordPluginMethod;
} = (callback) => {
  return async (args) => {
    try {
      return await callback(args);
    } catch (error) {
      // look for the rate limit exceeded status code.
      if (error?.response?.status === 429) {
        const retryIn = Math.floor(Math.random() * 10) + 1;
        return { error, success: false, retryDelay: 1000 * retryIn };
      }
      throw error;
    }
  };
};

export function makePayload(
  knownFieldsMap: Record<string, KnownFreshdeskField>,
  oldRecordProperties: Record<string, any>,
  newRecordProperties: Record<string, any>,
  groups?: string[]
) {
  const payload: any = {};

  // Set record properties, including old ones
  const allFields = new Set([
    ...Object.keys(newRecordProperties),
    ...Object.keys(oldRecordProperties),
  ]);

  for (const fieldName of allFields) {
    const value = newRecordProperties[fieldName];
    if (knownFieldsMap.hasOwnProperty(fieldName)) {
      const field = knownFieldsMap[fieldName];
      const formattedValue = formatVar(value);
      payload[field.freshdeskKey] = field.toArray
        ? formattedValue !== null
          ? [formattedValue]
          : []
        : formattedValue;
    }
  }

  // Add groups as tags
  if (Array.isArray(groups)) {
    // Tags have a maximum length of 32 characters per tag.
    payload.tags = groups.map((groupName) => groupName.slice(0, 32));
  }

  return payload;
}

function formatVar(value) {
  if (value === undefined) {
    return null;
  }

  if (value instanceof Date) {
    const year = value.getFullYear();
    const month = (value.getMonth() + 1).toString().padStart(2, "0");
    const day = value.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return value.toString();
}

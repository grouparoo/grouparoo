import { CloseioClient } from "../client";
import { CloseioCacheData, getAllFields } from "./destinationMappingOptions";
import { EntityType } from "./configMapping";
import { objectCache } from "@grouparoo/core";

export const GROUP_FIELD_PREFIX = "In Group:";

function makeGroupFieldName(groupName: string) {
  return `${GROUP_FIELD_PREFIX} ${groupName}`;
}

// gets called if the group field key is not cached
async function ensureGroupField(
  client: CloseioClient,
  type: EntityType,
  cacheData: CloseioCacheData,
  groupName: string,
  createIfNotExists: boolean
): Promise<string> {
  const fieldName = makeGroupFieldName(groupName);

  // see if it's already there
  let closeioFieldMap = await getAllFields(client, type, cacheData);
  let fieldKey = closeioFieldMap[fieldName];
  if (fieldKey) {
    return fieldKey;
  }

  // maybe it's just not cached yet
  closeioFieldMap = await getAllFields(client, type, cacheData, true);
  fieldKey = closeioFieldMap[fieldName];
  if (fieldKey) {
    return fieldKey;
  }

  // need to create it
  if (!createIfNotExists) return null;

  const { id } = await client.closeio._post(`/custom_field/${type}/`, {
    name: fieldName,
    type: "text",
  });

  return id;
}

export async function getGroupFieldKey(
  client: CloseioClient,
  type: EntityType,
  cacheData: CloseioCacheData,
  groupName: string,
  createIfNotExists?: boolean
): Promise<string> {
  groupName = groupName.trim();

  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getGroupFieldKey", type, groupName, appOptions];
  const write = createIfNotExists; // don't cache nulls
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, write },
    async () => {
      return ensureGroupField(
        client,
        type,
        cacheData,
        groupName,
        createIfNotExists
      );
    }
  );
}

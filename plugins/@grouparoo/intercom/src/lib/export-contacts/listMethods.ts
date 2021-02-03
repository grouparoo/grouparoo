import { objectCache } from "@grouparoo/core";
import { SimpleAppOptions } from "@grouparoo/core";

export interface IntercomCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}
export interface TagIdMap {
  [id: string]: string;
}

export interface IntercomTag {
  id: string;
  name: string;
}

export async function getTagId(
  client: any,
  cacheData: IntercomCacheData,
  tagName: string,
  tagIdMap: TagIdMap = {}
): Promise<string> {
  const cachedId = findTagId(tagIdMap, tagName);
  if (cachedId) {
    return cachedId;
  }

  // otherwise map it
  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getListId", tagName, appOptions];
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      return ensureTag(client, cacheData, tagName);
    }
  );
}

export async function getTagIdMap(
  client: any,
  cacheData: IntercomCacheData,
  update = false
): Promise<TagIdMap> {
  // see if it's already there
  const allTags = await getTags(client, cacheData, update);
  const out: TagIdMap = {};
  for (const tag of allTags) {
    const normName = normalizeTagName(tag.name);
    out[tag.id] = normName;
  }
  return out;
}

async function getTags(
  client: any,
  cacheData: IntercomCacheData,
  update = false
): Promise<IntercomTag[]> {
  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getTags", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return fetchTags(client);
    }
  );
}

// gets called if the lists are not cached
async function fetchTags(client: any): Promise<IntercomTag[]> {
  const { body } = await client.tags.list();
  return body.data;
}

export function normalizeTagName(tagName) {
  return tagName.toLowerCase().trim();
}

function findTagId(tagIdMap: TagIdMap, tagName: string): string {
  tagName = normalizeTagName(tagName);

  for (const tagId in tagIdMap) {
    const normName = tagIdMap[tagId];
    if (tagName === normName) {
      return tagId;
    }
  }
  return null;
}

// gets called if the list if is not cached
async function ensureTag(
  client: any,
  cacheData: IntercomCacheData,
  tagName: string
): Promise<string> {
  let tagIdMap: TagIdMap, tagId: string;

  // see if it's already there
  tagIdMap = await getTagIdMap(client, cacheData);
  tagId = findTagId(tagIdMap, tagName);
  if (tagId) {
    return tagId;
  }

  // maybe it's just not cached yet
  tagIdMap = await getTagIdMap(client, cacheData, true);
  tagId = findTagId(tagIdMap, tagName);
  if (tagId) {
    return tagId;
  }

  // need to create it
  const { body } = await client.tags.create({ name: tagName });
  return body.id;
}

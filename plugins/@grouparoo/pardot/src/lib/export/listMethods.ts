import { objectCache, CacheKey } from "@grouparoo/core";
import { SimpleAppOptions } from "@grouparoo/core";
import PardotClient from "../client";

export interface PardotCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

export async function getListId(
  client: PardotClient,
  cacheData: PardotCacheData,
  listName: string,
  createIfNotExists: boolean
): Promise<number | null> {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const { appId, appOptions } = cacheData;
  const cacheKey: CacheKey = ["getListId", listName, appOptions];
  const listId = await objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      let pardotList = await client.getListByName(listName);
      if (pardotList) {
        return pardotList.id;
      }

      // Create if not cached
      // No need to do so if we're just removing groups
      if (!createIfNotExists) return null;

      pardotList = await client.createList(listName);
      return pardotList.id;
    }
  );
  return listId;
}

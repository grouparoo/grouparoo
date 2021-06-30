import {
  CacheKey,
  objectCache,
  objectCacheInvalidate,
  SimpleAppOptions,
} from "@grouparoo/core";
import EloquaClient from "../client/client";

export async function getListId(
  client: EloquaClient,
  listName: string,
  appId: string,
  appOptions: SimpleAppOptions,
  createIfNotExists: boolean
): Promise<number | null> {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey: CacheKey = ["getListId", listName, appOptions];
  return await objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      let eloquaList = await client.lists.getByName(listName);
      if (eloquaList) {
        return eloquaList.id;
      }

      // Create if not cached
      // No need to do so if we're just removing groups
      if (!createIfNotExists) return null;

      eloquaList = await client.lists.create({ name: listName });
      return eloquaList.id;
    }
  );
}

export async function getContact(
  client: EloquaClient,
  email: string,
  appId: string,
  appOptions: SimpleAppOptions
): Promise<any | null> {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey: CacheKey = ["getContactId", email, appOptions];
  return await objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      return await client.contacts.getByEmail(email);
    }
  );
}

export async function invalidate(appId: string): Promise<void> {
  await objectCacheInvalidate({ objectId: appId });
}

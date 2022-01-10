import { api, cache, env } from "actionhero";
import { waitForLock } from "./locks";
import crypto from "crypto";

export type CacheKey =
  | { [keyName: string]: CacheKey }
  | CacheKey[]
  | string
  | number
  | boolean
  | Date;

export interface ObjectCacheMethod {
  (
    argument: {
      objectId: string;
      cacheKey: CacheKey;
      cacheDurationMs?: number;
      lock?: boolean; // send false to no lock
      read?: boolean; // send false to not use cache
      write?: boolean; // send false to not write to cache
      passthru?: boolean; // send true to not read or write or lock
    },
    methodToGetValue: { (): Promise<any> }
  ): Promise<any>;
}

export interface ObjectCacheInvalidateMethod {
  (argument: { objectId: string }): Promise<void>;
}

async function getCacheValue({
  valueKey,
  read,
}: {
  valueKey: string;
  read: boolean;
}) {
  if (!read) {
    return { cached: false, value: undefined };
  }
  try {
    const cached = await cache.load(valueKey);
    return { cached: true, value: cached.value };
  } catch (error) {
    const message = (error?.message || "").toString();
    if (message === "Object not found" || message === "Object expired") {
      return { cached: false, value: undefined };
    }
    throw error;
  }
}

function makeObjectKey({ objectId }: { objectId: string }) {
  objectId = (objectId || "").toString().trim();
  if (!objectId) {
    throw new Error(`objectId required`);
  }

  return `objectcache:${objectId}`;
}

function makeCacheString(cacheKey: CacheKey) {
  if (cacheKey === null || cacheKey === undefined) {
    return "";
  }
  if (typeof cacheKey === "object") {
    const type = cacheKey.constructor.name;
    if (type === "Date") {
      const date: Date = <Date>cacheKey;
      return date.toISOString();
    } else if (type === "Array") {
      const array: CacheKey[] = cacheKey;
      let buffer = "";
      for (let i = 0; i < array.length; i++) {
        const value = makeCacheString(array[i]);
        buffer += `|${i}:${value}`;
      }
      return buffer;
    } else if (type === "Object") {
      const keys = Object.keys(cacheKey);
      let buffer = "";
      for (const key of keys) {
        //@ts-ignore
        const value = makeCacheString(cacheKey[key]);
        buffer += `/${key}:${value}`;
      }
      return buffer;
    }
  }
  return cacheKey.toString();
}

export function makeBaseCacheKey({
  objectId,
  cacheKey,
}: {
  objectId: string;
  cacheKey: CacheKey;
}): string {
  const objectKey = makeObjectKey({ objectId });

  const data = makeCacheString(cacheKey);
  if (!data) {
    throw new Error(`cacheKey required`);
  }
  const calculatedKey = crypto.createHash("md5").update(data).digest("hex");
  return `${objectKey}:${calculatedKey}`;
}

function useRedis() {
  const running = !!api?.redis?.clients;
  if (!running && env === "test") return false;

  return true;
}

export const objectCacheInvalidate: ObjectCacheInvalidateMethod = async ({
  objectId,
}) => {
  if (!useRedis()) {
    return;
  }

  const client = cache.client();
  const objectKey = makeObjectKey({ objectId });
  const prefix = `${cache.redisPrefix}${objectKey}`;
  const keys = await client.keys(prefix + "*");
  const jobs: Promise<number>[] = [];
  keys.forEach((key: string) => {
    jobs.push(client.del(key));
  });
  await Promise.all(jobs);
};

export const objectCache: ObjectCacheMethod = async (
  {
    objectId,
    cacheKey,
    cacheDurationMs = 1000 * 60 * 1,
    lock = true,
    read = true,
    write = true,
    passthru = false,
  },
  methodToGetValue
) => {
  if (!useRedis()) {
    passthru = true;
  }

  if (passthru) {
    read = false;
    write = false;
    lock = false;
  }

  const baseKey = makeBaseCacheKey({ objectId, cacheKey });
  const valueKey = `${baseKey}:value`;
  const lockKey = `${baseKey}:lock`;

  let { value, cached } = await getCacheValue({ valueKey, read });
  if (cached) {
    return value;
  }

  let releaseLock: Function = null;
  try {
    if (lock) {
      releaseLock = (await waitForLock(lockKey)).releaseLock;

      let { value, cached } = await getCacheValue({ valueKey, read });
      if (cached) {
        return value;
      }
    }

    const value = await methodToGetValue();
    if (write) {
      await cache.save(valueKey, value, cacheDurationMs);
    }
    return value;
  } finally {
    if (releaseLock) {
      await releaseLock();
    }
  }
};

import { api, cache } from "actionhero";
import { waitForLock } from "./locks";
import crypto from "crypto";

export type CacheKey =
  | { [keyName: string]: any }
  | string
  | number
  | boolean
  | Date;
export interface ObjectCacheMethod {
  (
    argument: {
      objectGuid: string;
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
  (argument: { objectGuid: string }): Promise<void>;
}

async function getCacheValue({
  valueKey,
  read,
}): Promise<{ cached: boolean; value: any }> {
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

function makeObjectKey({ objectGuid }) {
  objectGuid = (objectGuid || "").toString().trim();
  if (!objectGuid) {
    throw new Error(`objectGuid required`);
  }

  // TODO: validate if real guid?

  return `objectcache:${objectGuid}`;
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
    } else if (type === "Object") {
      const keys = Object.keys(cacheKey);
      let buffer = "";
      for (const key of keys) {
        const value = makeCacheString(cacheKey[key]);
        buffer += `/${key}:${value}`;
      }
      return buffer;
    }
  }
  return cacheKey.toString();
}

function makeBaseKey({ objectGuid, cacheKey }): string {
  const objectKey = makeObjectKey({ objectGuid });

  const data = makeCacheString(cacheKey);
  if (!data) {
    throw new Error(`cacheKey required`);
  }
  const calculatedKey = crypto.createHash("md5").update(data).digest("hex");
  return `${objectKey}:${calculatedKey}`;
}

function useRedis() {
  const running = !!api?.redis?.clients;
  if (!running && process.env.NODE_ENV === "test") {
    return false;
  }
  return true;
}

export const objectCacheInvalidate: ObjectCacheInvalidateMethod = async ({
  objectGuid,
}) => {
  if (!useRedis()) {
    return;
  }

  const client = cache.client();
  const objectKey = makeObjectKey({ objectGuid });
  const prefix = `${cache.redisPrefix}${objectKey}`;
  const keys = await client.keys(prefix + "*");
  const jobs = [];
  keys.forEach((key: string) => {
    jobs.push(client.del(key));
  });
  await Promise.all(jobs);
};

export const objectCache: ObjectCacheMethod = async (
  {
    objectGuid,
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

  const baseKey = makeBaseKey({ objectGuid, cacheKey });
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

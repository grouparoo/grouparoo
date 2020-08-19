import { api, cache as parentCache } from "actionhero";
import { waitForLock as parentWaitForLock } from "@grouparoo/core";

export interface CacheOptionsMethod {
  (
    argument: {
      cacheKey: string;
      lockKey?: string;
      cacheDuration?: number;
      force?: boolean;
    },
    methodToGetValue: Function
  ): Promise<any>;
}

export const cache: CacheOptionsMethod = async (
  { cacheKey, lockKey, cacheDuration = 1000, force },
  methodToGetValue
) => {
  const hasRedis = !!api?.redis?.clients;
  if (!hasRedis && process.env.NODE_ENV === "test") {
    return await methodToGetValue();
  }

  if (force) await parentCache.destroy(cacheKey);

  try {
    const cached = await parentCache.load(cacheKey);
    return cached.value;
  } catch (error) {
    if (
      error.message.toString() !== "Object not found" &&
      error.message.toString() !== "Object expired"
    ) {
      throw error;
    }
    let releaseLock: Function = null;
    if (lockKey) {
      releaseLock = (await parentWaitForLock(lockKey)).releaseLock;
    }

    try {
      const value = await methodToGetValue();
      await parentCache.save(cacheKey, value, cacheDuration);
      return value;
    } finally {
      if (releaseLock) {
        await releaseLock();
      }
    }
  }
};

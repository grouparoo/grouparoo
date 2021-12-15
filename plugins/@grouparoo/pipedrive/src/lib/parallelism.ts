import { AppParallelismMethod, objectCache } from "@grouparoo/core";

const DEFAULT_VALUE = 10;

export const parallelism: AppParallelismMethod = async ({
  app,
  appOptions,
}) => {
  const cachedValue = await objectCache(
    {
      objectId: app.id,
      cacheKey: ["pipedrive:parallelism", appOptions],
      cacheDurationMs: 2000, // 2 seconds
      write: false, // Read-only
    },
    async () => null
  );

  if (cachedValue === null) {
    return DEFAULT_VALUE;
  }

  return parseInt(cachedValue);
};

import { cache } from "./cache";

export async function describeObject(conn, objectName, force = false) {
  const { id, organizationId } = conn.userInfo;
  const uniqKey = `salesforce:objects:${objectName}:${organizationId}:${id}`;

  const cacheKey = `${uniqKey}:key`;
  const lockKey = `${uniqKey}:lock`;
  const cacheDuration = 1000 * 60 * 30; // 30 minutes
  return cache({ cacheKey, lockKey, cacheDuration, force }, async () => {
    return conn.sobject(objectName).describe();
  });
}

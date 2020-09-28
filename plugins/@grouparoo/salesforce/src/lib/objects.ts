import { cache } from "./cache";
import { cacheKeyFromClient } from "./connect";

export async function describeObject(conn, objectName, force = false) {
  const uniqKey = cacheKeyFromClient(conn);
  const cacheKey = `${uniqKey}:describe-${objectName}:key`;
  const lockKey = `${uniqKey}:describe-${objectName}:lock`;
  const cacheDuration = 1000 * 60 * 30; // 30 minutes
  return cache({ cacheKey, lockKey, cacheDuration, force }, async () => {
    return conn.sobject(objectName).describe();
  });
}

export async function getFieldMap(
  conn,
  objectName,
  force = false
): Promise<{ [fieldName: string]: any }> {
  const objectInfo = await describeObject(conn, objectName, true);
  const fields: { [fieldName: string]: any } = {};
  for (const field of objectInfo.fields) {
    const key = field.name;
    fields[key] = field;
  }
  return fields;
}

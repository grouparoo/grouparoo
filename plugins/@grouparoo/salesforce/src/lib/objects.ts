import { cache } from "./cache";

export async function describeObject(conn, objectName, force = false) {
  const { id, organizationId } = conn.userInfo;
  const uniqKey = `salesforce:objects:${organizationId}:${objectName}:${id}`;

  const cacheKey = `${uniqKey}:key`;
  const lockKey = `${uniqKey}:lock`;
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

import { objectCache, SimpleAppOptions } from "@grouparoo/core";
export interface SalesforceCacheData {
  appGuid: string;
  appOptions: SimpleAppOptions;
}

export async function describeObject(
  conn: any,
  cacheData: SalesforceCacheData,
  objectName: string,
  passthru = false
) {
  const { appGuid, appOptions } = cacheData;
  const cacheKey = ["describeObject", objectName, appOptions];
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  return objectCache(
    { objectGuid: appGuid, cacheKey, cacheDurationMs, passthru },
    async () => {
      return conn.sobject(objectName).describe();
    }
  );
}

export async function getFieldMap(
  conn,
  cacheData: SalesforceCacheData,
  objectName
): Promise<{ [fieldName: string]: any }> {
  const objectInfo = await describeObject(conn, cacheData, objectName);
  const fields: { [fieldName: string]: any } = {};
  for (const field of objectInfo.fields) {
    const key = field.name;
    fields[key] = field;
  }
  return fields;
}

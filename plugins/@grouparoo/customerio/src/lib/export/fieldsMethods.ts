import { objectCache } from "@grouparoo/core";

export async function getFields(client, appId, appOptions, update = false) {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getFields", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return client.getUserFields();
    }
  );
}

export async function getFieldId(
  client,
  appId,
  appOptions,
  fieldName
): Promise<string> {
  fieldName = (fieldName || "").toString().trim();
  if (fieldName.length === 0) {
    return "Grouparoo Default";
  }
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getFieldId", fieldName, appOptions];
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      return ensureField(client, appId, appOptions, fieldName);
    }
  );
}

// gets called if the list if is not cached
async function ensureField(
  client,
  appId,
  appOptions,
  fieldName
): Promise<string> {
  let allLists, listId;

  // see if it's already there
  allLists = await getFields(client, appId, appOptions);
  listId = filterFields(allLists, fieldName);
  if (listId) {
    return listId;
  }
  // maybe it's just not cached yet
  allLists = await getFields(client, appId, appOptions, true);
  listId = filterFields(allLists, fieldName);
  return listId;
}

function filterFields(allFields, fieldName) {
  allFields = allFields || [];
  const matchingList = allFields.filter((field) => field.name === fieldName)[0];
  if (matchingList) {
    return matchingList.id;
  }
  return null;
}

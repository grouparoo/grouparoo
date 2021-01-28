import { objectCache } from "@grouparoo/core";

async function getLists(client, appGuid, appOptions, update = false) {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getLists", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectGuid: appGuid, cacheKey, cacheDurationMs, read },
    async () => {
      return client.lists.get();
    }
  );
}

async function getListId(
  client,
  appGuid,
  appOptions,
  groupName
): Promise<string> {
  groupName = (groupName || "").toString().trim();
  if (groupName.length === 0) {
    return `Iterable empty groupName`;
  }
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getListId", groupName, appOptions];
  return objectCache(
    { objectGuid: appGuid, cacheKey, cacheDurationMs },
    async () => {
      return ensureList(client, appGuid, appOptions, groupName);
    }
  );
}

// gets called if the list if is not cached
async function ensureList(
  client,
  appGuid,
  appOptions,
  groupName
): Promise<string> {
  let allLists, listId;

  // see if it's already there
  let listsResponse = await getLists(client, appGuid, appOptions);
  allLists = listsResponse.lists;
  listId = filterLists(allLists, groupName);
  if (listId) {
    return listId;
  }
  // maybe it's just not cached yet
  listsResponse = await getLists(client, appGuid, appOptions, true);
  allLists = listsResponse.lists;
  listId = filterLists(allLists, groupName);
  if (listId) {
    return listId;
  }
  const response = await client.lists.create({ name: groupName });
  return response.listId;
}

function filterLists(allLists, groupName) {
  allLists = allLists || [];
  const matchingList = allLists.filter((list) => list.name === groupName)[0];
  if (matchingList) {
    return matchingList.id;
  }
  return null;
}

export async function addToList(client, appGuid, appOptions, email, groupName) {
  const listId = await getListId(client, appGuid, appOptions, groupName);
  await client.lists.subscribe({ listId, subscribers: [{ email }] });
}

export async function removeFromList(
  client,
  appGuid,
  appOptions,
  email,
  groupName
) {
  const listId = await getListId(client, appGuid, appOptions, groupName);
  await client.lists.unsubscribe({ listId, subscribers: [{ email }] });
}

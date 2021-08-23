import { objectCache } from "@grouparoo/core";

async function getLists(client, appId, appOptions, update = false) {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getLists", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      // return client.getLists();
      return [];
    }
  );
}

async function getListId(
  client,
  appId,
  appOptions,
  groupName
): Promise<string> {
  groupName = (groupName || "").toString().trim();
  if (groupName.length === 0) {
    return `Empty groupName`;
  }

  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getListId", groupName, appOptions];
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      return ensureList(client, appId, appOptions, groupName);
    }
  );
}

function filterLists(lists, groupName) {
  lists = lists || [];
  const matchingList = lists.filter((list) => list.name === groupName)[0];
  if (matchingList) {
    return matchingList.listId;
  }
  return null;
}

// gets called if the list if is not cached
async function ensureList(
  client,
  appId,
  appOptions,
  groupName
): Promise<string> {
  let lists, listId;

  // see if it's already there
  lists = await getLists(client, appId, appOptions);
  listId = filterLists(lists, groupName);
  if (listId) {
    return listId;
  }

  // maybe it's just not cached yet
  lists = await getLists(client, appId, appOptions, true);
  listId = filterLists(lists, groupName);
  if (listId) {
    return listId;
  }

  // need to create it
  // TODO: create list

  return "response.data.listId";
}

export async function addToList(client, appId, appOptions, email, groupName) {
  const listId = await getListId(client, appId, appOptions, groupName);
  // await client.addContactToList(listId, email);
}

export async function removeFromList(
  client,
  appId,
  appOptions,
  email,
  groupName
) {
  const listId = await getListId(client, appId, appOptions, groupName);
  // await client.removeContactFromList(listId, email);
}

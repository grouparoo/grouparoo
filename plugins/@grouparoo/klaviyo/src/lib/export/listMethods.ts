import { KlaviyoClient } from "../client";
import { objectCache, SimpleAppOptions } from "@grouparoo/core";

export interface KlaviyoCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

export async function handleGroupsChanges(
  client: KlaviyoClient,
  cacheData: KlaviyoCacheData,
  email: string,
  oldGroups: string[],
  newGroups: string[]
) {
  const { appId, appOptions } = cacheData;

  // Unsubscribe from old groups
  for (const groupName of oldGroups) {
    if (!newGroups.includes(groupName)) {
      await removeFromList(client, appId, appOptions, email, groupName);
    }
  }

  // Subscribe to new groups
  for (const groupName of newGroups) {
    if (!oldGroups.includes(groupName)) {
      await addToList(client, appId, appOptions, email, groupName);
    }
  }
}

async function getLists(
  client: KlaviyoClient,
  appId: string,
  appOptions: SimpleAppOptions,
  update = false
) {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getLists", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return client.getListMapByName();
    }
  );
}

async function getListId(
  client,
  appId,
  appOptions,
  groupName,
  createIfNotExists = true
): Promise<string> {
  groupName = (groupName || "").toString().trim();
  if (groupName.length === 0) {
    return "Grouparoo Default";
  }
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getListId", groupName, appOptions];
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      return ensureList(
        client,
        appId,
        appOptions,
        groupName,
        createIfNotExists
      );
    }
  );
}

// gets called if the list if is not cached
async function ensureList(
  client,
  appId,
  appOptions,
  groupName,
  createIfNotExists = true
): Promise<string> {
  let listId, listsResponse;

  // see if it's already there
  listsResponse = await getLists(client, appId, appOptions);
  listId = listsResponse[groupName];
  if (listId) {
    return listId;
  }

  // maybe it's just not cached yet
  listsResponse = await getLists(client, appId, appOptions, true);
  listId = listsResponse[groupName];
  if (listId) {
    return listId;
  }

  if (createIfNotExists) {
    const response = await client.lists.createList(groupName);
    return response.list_id;
  }

  return null;
}

export async function addToList(client, appId, appOptions, email, groupName) {
  const listId = await getListId(client, appId, appOptions, groupName);
  await client.lists.addMembersToList({
    listId,
    profiles: [{ email }],
  });
}

export async function removeFromList(
  client,
  appId,
  appOptions,
  email,
  groupName
) {
  const listId = await getListId(client, appId, appOptions, groupName, false);
  if (listId) {
    await client.lists.removeMembersFromList({
      listId,
      emails: [email],
    });
  }
}

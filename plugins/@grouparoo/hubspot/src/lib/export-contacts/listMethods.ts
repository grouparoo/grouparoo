import { objectCache, SimpleAppOptions } from "@grouparoo/core";
import { HubspotClient } from "../client/client";

async function getLists(
  client: HubspotClient,
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
      return client.getLists();
    }
  );
}

async function getListId(
  client: HubspotClient,
  appId: string,
  appOptions: SimpleAppOptions,
  groupName: string
): Promise<string> {
  groupName = (groupName || "").toString().trim();
  if (groupName.length === 0) {
    return `Hubspot empty groupName`;
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

function filterLists(
  hubspotLists: { name: string; listId: string }[],
  groupName: string
) {
  hubspotLists = hubspotLists || [];
  const matchingList = hubspotLists.filter(
    (list) => list.name === groupName
  )[0];
  if (matchingList) {
    return matchingList.listId;
  }
  return null;
}

// gets called if the list if is not cached
async function ensureList(
  client: HubspotClient,
  appId: string,
  appOptions: SimpleAppOptions,
  groupName: string
): Promise<string> {
  let hubspotLists, listId;

  // see if it's already there
  hubspotLists = await getLists(client, appId, appOptions);
  listId = filterLists(hubspotLists, groupName);
  if (listId) {
    return listId;
  }

  // maybe it's just not cached yet
  hubspotLists = await getLists(client, appId, appOptions, true);
  listId = filterLists(hubspotLists, groupName);
  if (listId) {
    return listId;
  }

  // need to create it
  ({ listId } = await client.createList(groupName));

  return listId;
}

export async function addToList(
  client: HubspotClient,
  appId: string,
  appOptions: SimpleAppOptions,
  email: string,
  groupName: string
) {
  const listId = await getListId(client, appId, appOptions, groupName);
  await client.addContactToList(listId, email);
}

export async function removeFromList(
  client: HubspotClient,
  appId: string,
  appOptions: SimpleAppOptions,
  email: string,
  groupName: string
) {
  const listId = await getListId(client, appId, appOptions, groupName);
  await client.removeContactFromList(listId, email);
}

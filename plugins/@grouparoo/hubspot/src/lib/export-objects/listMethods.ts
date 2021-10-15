import { objectCache } from "@grouparoo/core";
import Axios from "axios";

async function getLists(client, appId, appOptions, update = false) {
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
  client,
  appId,
  appOptions,
  groupName
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

function filterLists(hubspotLists, groupName) {
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
  client,
  appId,
  appOptions,
  groupName
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
  const url = `https://api.hubapi.com/contacts/v1/lists?hapikey=${appOptions.hapikey}`;
  const { data }: { data: Record<string, any> } = await Axios({
    method: "POST",
    url,
    headers: { "Content-Type": "application/json" },
    data: {
      name: groupName,
    },
  });

  return data.listId;
}

export async function addToList(client, appId, appOptions, email, groupName) {
  const listId = await getListId(client, appId, appOptions, groupName);
  await client.addContactToList(listId, email);
}

export async function removeFromList(
  client,
  appId,
  appOptions,
  email,
  groupName
) {
  const listId = await getListId(client, appId, appOptions, groupName);
  await client.removeContactFromList(listId, email);
}

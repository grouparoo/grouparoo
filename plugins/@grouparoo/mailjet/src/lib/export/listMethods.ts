import { MailjetClient } from "../client";
import { objectCache, SimpleAppOptions } from "@grouparoo/core";

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

async function getListId(client, appId, appOptions, listName): Promise<string> {
  listName = (listName || "").toString().trim();
  if (listName.length === 0) {
    return `Mailjet empty groupName`;
  }

  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getListId", listName, appOptions];
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      return ensureList(client, appId, appOptions, listName);
    }
  );
}

function filterLists(mailjetLists, listName) {
  mailjetLists = mailjetLists || [];
  const matchingList = mailjetLists.filter(
    (list) => list["Name"] === listName
  )[0];
  if (matchingList) {
    return matchingList.ID;
  }
  return null;
}

// gets called if the list if is not cached
async function ensureList(
  client,
  appId,
  appOptions,
  listName
): Promise<string> {
  let mailjetLists, listId;

  // see if it's already there
  mailjetLists = await getLists(client, appId, appOptions);
  listId = filterLists(mailjetLists, listName);
  if (listId) {
    return listId;
  }

  // maybe it's just not cached yet
  mailjetLists = await getLists(client, appId, appOptions, true);
  listId = filterLists(mailjetLists, listName);
  if (listId) {
    return listId;
  }

  // need to create it
  const list = await client.createList(listName);
  if (list) {
    return list.ID;
  }

  return null;
}

export async function addToList(
  client: MailjetClient,
  appId: string,
  appOptions: SimpleAppOptions,
  email: string,
  listName: string
) {
  const listId = await getListId(client, appId, appOptions, listName);
  if (listId) {
    await client.addContactToList(listId, email);
  }
}

export async function removeFromList(
  client: MailjetClient,
  appId: string,
  appOptions: SimpleAppOptions,
  email: string,
  listName: string
) {
  const listId = await getListId(client, appId, appOptions, listName);
  if (listId) {
    await client.removeContactFromList(listId, email);
  }
}

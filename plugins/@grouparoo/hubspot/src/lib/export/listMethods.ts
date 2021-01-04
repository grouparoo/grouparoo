import { objectCache } from "@grouparoo/core";
import Axios from "axios";

async function getLists(appGuid, appOptions, update = false) {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getLists", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectGuid: appGuid, cacheKey, cacheDurationMs, read },
    async () => {
      return fetchLists(appOptions);
    }
  );
}

// gets called if the lists are not cached
async function fetchLists(appOptions) {
  // TODO: This is not paginated, it will need to be
  // https://legacydocs.hubspot.com/docs/methods/lists/get_static_lists
  const url = `https://api.hubapi.com/contacts/v1/lists/static?hapikey=${appOptions.hapikey}&count=999`;

  const { data } = await Axios({
    method: "GET",
    url,
    headers: { "Content-Type": "application/json" },
  });
  return data.lists;
}

async function getListId(appGuid, appOptions, groupName): Promise<string> {
  groupName = (groupName || "").toString().trim();
  if (groupName.length === 0) {
    return `Hubspot empty groupName`;
  }

  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getListId", groupName, appOptions];
  return objectCache(
    { objectGuid: appGuid, cacheKey, cacheDurationMs },
    async () => {
      return ensureList(appGuid, appOptions, groupName);
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
async function ensureList(appGuid, appOptions, groupName): Promise<string> {
  let hubspotLists, listId;

  // see if it's already there
  hubspotLists = await getLists(appGuid, appOptions);
  listId = filterLists(hubspotLists, groupName);
  if (listId) {
    return listId;
  }

  // maybe it's just not cached yet
  hubspotLists = await getLists(appGuid, appOptions, true);
  listId = filterLists(hubspotLists, groupName);
  if (listId) {
    return listId;
  }

  // need to create it
  const url = `https://api.hubapi.com/contacts/v1/lists?hapikey=${appOptions.hapikey}`;
  const response = await Axios({
    method: "POST",
    url,
    headers: { "Content-Type": "application/json" },
    data: {
      name: groupName,
    },
  });

  return response.data.listId;
}

export async function addToList(appGuid, appOptions, email, groupName) {
  const listId = await getListId(appGuid, appOptions, groupName);
  const url = `https://api.hubapi.com/contacts/v1/lists/${listId}/add?hapikey=${appOptions.hapikey}`;

  try {
    await Axios({
      method: "POST",
      url,
      headers: { "Content-Type": "application/json" },
      data: {
        emails: [email],
      },
    });
  } catch (error) {
    if (error?.response?.data?.errorType === "LIST_EXISTS") {
      // ok
    } else {
      throw error;
    }
  }
}

export async function removeFromList(appGuid, appOptions, email, groupName) {
  const listId = await getListId(appGuid, appOptions, groupName);
  const url = `https://api.hubapi.com/contacts/v1/lists/${listId}/remove?hapikey=${appOptions.hapikey}`;

  await Axios({
    method: "POST",
    url,
    headers: { "Content-Type": "application/json" },
    data: {
      emails: [email],
    },
  });
}

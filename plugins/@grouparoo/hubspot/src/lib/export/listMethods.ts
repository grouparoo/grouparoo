import { cache } from "actionhero";
import Axios from "axios";

const cacheKey = "grouparoo:hubspot:lists";
const cacheDuration = 1000 * 60; // 1 minute

export async function getLists(appOptions, force = false) {
  // TODO: This is not paginated, it will need to be
  // https://legacydocs.hubspot.com/docs/methods/lists/get_static_lists
  const url = `https://api.hubapi.com/contacts/v1/lists/static?hapikey=${appOptions.hapikey}&count=999`;

  if (force) await cache.destroy(cacheKey);

  try {
    const cachedLists = await cache.load(cacheKey);
    return cachedLists.value;
  } catch (error) {
    if (
      error.message.toString() !== "Object not found" &&
      error.message.toString() !== "Object expired"
    )
      throw error;

    const { data } = await Axios({
      method: "GET",
      url,
      headers: { "Content-Type": "application/json" },
    });

    await cache.save(cacheKey, data.lists, cacheDuration);
    return data.lists;
  }
}

export async function ensureGroupContactListExists(appOptions, groupName) {
  const url = `https://api.hubapi.com/contacts/v1/lists?hapikey=${appOptions.hapikey}`;
  const hubspotLists = await getLists(appOptions);

  const found =
    hubspotLists.filter((list) => list.name === groupName).length === 1;
  if (found) return;

  await Axios({
    method: "POST",
    url,
    headers: { "Content-Type": "application/json" },
    data: {
      name: groupName,
    },
  });

  await getLists(appOptions, true);
}

export async function addToList(appOptions, email, groupName) {
  await ensureGroupContactListExists(appOptions, groupName);

  const hubspotLists = await getLists(appOptions);
  const list = hubspotLists.filter((list) => list.name === groupName)[0];
  const url = `https://api.hubapi.com/contacts/v1/lists/${list.listId}/add?hapikey=${appOptions.hapikey}`;

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

export async function removeFromList(appOptions, email, groupName) {
  const hubspotLists = await getLists(appOptions);
  const list = hubspotLists.filter((list) => list.name === groupName)[0];
  if (!list) return;

  const url = `https://api.hubapi.com/contacts/v1/lists/${list.listId}/remove?hapikey=${appOptions.hapikey}`;

  await Axios({
    method: "POST",
    url,
    headers: { "Content-Type": "application/json" },
    data: {
      emails: [email],
    },
  });
}

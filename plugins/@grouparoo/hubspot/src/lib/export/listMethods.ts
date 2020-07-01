import { cache } from "actionhero";
import { waitForLock } from "@grouparoo/core";
import Axios, { AxiosError } from "axios";

const cacheKey = "grouparoo:hubspot:lists";
const cacheDuration = 1000 * 60; // 1 minute
const lockKey = "grouparoo:hubspot:getLists";

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
    ) {
      throw error;
    }

    try {
      const { data } = await Axios({
        method: "GET",
        url,
        headers: { "Content-Type": "application/json" },
      });
      await cache.save(cacheKey, data.lists, cacheDuration);
      return data.lists;
    } catch (error) {
      throwBetterAxiosError(error);
    }
  }
}

export async function ensureGroupContactListExists(
  appOptions,
  groupName
): Promise<string> {
  const { releaseLock } = await waitForLock(lockKey);

  const hubspotLists = await getLists(appOptions);

  const matchingList = hubspotLists.filter(
    (list) => list.name === groupName
  )[0];
  if (matchingList) {
    await releaseLock();
    return matchingList.listId;
  }

  try {
    const url = `https://api.hubapi.com/contacts/v1/lists?hapikey=${appOptions.hapikey}`;

    await Axios({
      method: "POST",
      url,
      headers: { "Content-Type": "application/json" },
      data: {
        name: groupName,
      },
    });
    await getLists(appOptions, true);
    await releaseLock();
    return ensureGroupContactListExists(appOptions, groupName);
  } catch (error) {
    await releaseLock();
    throwBetterAxiosError(error);
  }
}

export async function addToList(appOptions, email, groupName) {
  const listId = await ensureGroupContactListExists(appOptions, groupName);
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
      throwBetterAxiosError(error);
    }
  }
}

export async function removeFromList(appOptions, email, groupName) {
  const listId = await ensureGroupContactListExists(appOptions, groupName);
  const url = `https://api.hubapi.com/contacts/v1/lists/${listId}/remove?hapikey=${appOptions.hapikey}`;

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
    throwBetterAxiosError(error);
  }
}

function throwBetterAxiosError(error: AxiosError) {
  if (error?.response?.data)
    throw new Error(
      `Hubspot API Error: ${JSON.stringify(error?.response?.data)}`
    );

  throw error;
}

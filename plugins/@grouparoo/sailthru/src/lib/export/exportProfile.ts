import { ExportProfilePluginMethod } from "@grouparoo/core";
import Sailthru from "../client";

import { log } from "actionhero";

// https://getstarted.sailthru.com/developers/api/user/

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  export: {
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  const client = new Sailthru(appOptions);
  const email = newProfileProperties.email;

  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  const sid = await client.findSid(newProfileProperties, oldProfileProperties);

  if (toDelete) {
    await deleteUser(
      client,
      newProfileProperties,
      oldProfileProperties,
      sid,
      1
    );
    return { success: true };
  }

  const payload: any = {
    id: sid,
    key: "sid",
    keys: {
      email: email,
    },
    keysconflict: "merge",
    lists: {},
    vars: {},
  };

  if (!payload.id) {
    // new user, use email
    payload.id = email;
    payload.key = "email";
  }

  // TODO: extid if that's a thing

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const key of allKeys) {
    if (key === "email") {
      // not doing this one
      continue;
    }
    const value = newProfileProperties[key]; // includes clearing out removed ones
    payload.vars[key] = formatVar(value);
  }

  // TODO: make "job" to remove these
  // const removedKeys = oldKeys.filter((k) => !newKeys.includes(k));

  // add new lists
  for (const newGroup of newGroups) {
    const listName = formatList(newGroup);
    await ensureList(client, listName, false);
    payload.lists[listName] = 1;
  }

  const removedLists = oldGroups.filter((k) => !newGroups.includes(k));
  // remove list I'm not on anymore
  for (const removedGroup of removedLists) {
    const listName = formatList(removedGroup);
    payload.lists[listName] = 0;
  }

  await client.updateUser(payload);

  return { success: true };
};

function formatVar(value) {
  if (value === undefined) {
    return null;
  }
  // TODO: how to format date, etc
  return value;
}

function formatList(name) {
  // some things not possible
  let updated = name.replace("$", "-");
  return updated;
}

const MAX_DELETE_ATTEMPTS = 5;
async function sleep(time = 1000) {
  // don't sleep as much in tests bc intermittent timeout issues
  if (process.env.NODE_ENV === "test") {
    time = 1;
  }
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
async function deleteEmail(client, email) {
  try {
    await client.deleteEmail(email);
    return true;
  } catch (err) {
    if (err.statusCode === 404 && err.error === 99) {
      return true;
    }
    log(`Error deleting ${email}`, "error", err);
  }
  return false;
}
async function deleteUser(
  client: Sailthru,
  newProfileProperties: { [key: string]: any },
  oldProfileProperties: { [key: string]: any },
  cachedSid: string,
  attemptNum: number
) {
  const sid =
    cachedSid ||
    (await client.findSid(newProfileProperties, oldProfileProperties));
  const email = newProfileProperties.email;

  if (attemptNum > MAX_DELETE_ATTEMPTS) {
    if (!(await deleteEmail(client, email))) {
      throw `Max attempts to deleted reached sid:${sid} email:${email}`;
    }
    return true;
  }

  if (sid) {
    // delete them!
    await client.deleteSid(sid);
  } else {
    // one more time for good measure
    await deleteEmail(client, email);
    return true;
  }

  // try again just to make sure
  attemptNum++;
  await sleep(1000);
  await deleteUser(
    client,
    newProfileProperties,
    oldProfileProperties,
    null, // look up by email again
    attemptNum
  );
  return false;
}
async function ensureList(client, name, make) {
  // sailthru has a race condition that will have it make many lists
  // with the same name if they are sent at the same time on profiles
  const list = await client.getList(name);
  if (!list) {
    // now we have to make it.
    if (make) {
      await client.createList(name);
    } else {
      // wait some amount of milliseconds and see if someone else made it
      const randMilli = Math.random() * 4000;
      await sleep(randMilli);
      await ensureList(client, name, true);
    }
  }

  return true;
}

import {
  Profile,
  App,
  Destination,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import Sailthru from "../client";

import { log } from "actionhero";

// https://getstarted.sailthru.com/developers/api/user/

export async function exportProfile(
  app: App,
  appOptions: SimpleAppOptions,
  destination: Destination,
  destinationOptions: SimpleDestinationOptions,
  profile: Profile,
  oldProfileProperties: { [key: string]: any },
  newProfileProperties: { [key: string]: any },
  oldGroups: Array<string>,
  newGroups: Array<string>,
  toDelete: boolean
) {
  const client = new Sailthru(appOptions);
  const email = newProfileProperties.email;

  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  const sid = await client.findSid(newProfileProperties, oldProfileProperties);

  if (toDelete) {
    if (sid) {
      // otherwise, not found anyway
      await client.deleteSid(sid);
    } else {
      // ok, where were they? try this.
      try {
        await client.deleteEmail(email);
      } catch (err) {
        log(`Error deleting ${email}`, "error", err);
      }
    }
    return;
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
    payload.lists[listName] = 1;
  }

  const removedLists = oldGroups.filter((k) => !newGroups.includes(k));
  // remove list I'm not on anymore
  for (const removedGroup of removedLists) {
    const listName = formatList(removedGroup);
    payload.lists[listName] = 0;
  }

  await client.updateUser(payload);

  return true;
}

function formatVar(value) {
  if (!value) {
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

import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import {
  getBuiltInFields,
  getRequiredFields,
  getUserFields,
} from "./destinationMappingOptions";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  toDelete,
  newProfileProperties,
  oldProfileProperties,
  newGroups,
  oldGroups,
}) => {
  const client = await connect(appOptions);
  let email = newProfileProperties.email;

  console.log("exportProfile", newProfileProperties);

  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  // zendesk does this itself
  email = email.toLowerCase().trim();

  const user = await findUser(
    client,
    newProfileProperties,
    oldProfileProperties
  );

  if (toDelete) {
    if (user) {
      // this does a soft delete
      await client.users.delete(user.id);

      // TODO: should we fully delete it? (see test for how to set it up)
      // this might delete tickets
      // await client.deleted_users.delete(id);

      // Note: From Documentation
      // You can permanently delete 700 users every 10 minutes.
      // The rate limiting mechanism behaves as described in Rates Limits in the API introduction.
      // Zendesk recommends that you obey the Retry-After header values.
    }
    return { success: true };
  }

  const payload: any = { verified: true };

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  const fields = await getFields(client);
  for (const key of allKeys) {
    const value = newProfileProperties[key]; // includes clearing out removed ones
    const field = fields[key];
    if (!field) {
      // TODO: need to handle these changing out from under?
      throw `unknown zendesk field: ${key}`;
    }
    const formatted = formatVar(value, field);
    if (field.custom) {
      payload.user_fields = payload.user_fields || {};
      payload.user_fields[key] = formatted;
    } else {
      payload[key] = formatted;
    }
  }

  console.log("current user", user);
  if (user) {
    console.log("actual current user", await client.users.show(user.id));
  }

  // tags need to be formatted
  const newTags = newGroups.map((groupName) => makeTagName(groupName));
  const oldTags = oldGroups.map((groupName) => makeTagName(groupName));
  const removedTags = oldTags.filter((k) => !newTags.includes(k));
  // get the current tags if there was a user
  const currentTags = user?.tags || [];
  for (const tagName of currentTags) {
    // add it to newTags if it's not there already or in removedTags
    if (removedTags.includes(tagName)) {
      // it got removed, don't add it back
      continue;
    }
    if (!newTags.includes(tagName)) {
      // it is from zendesk directly, add it back
      newTags.push(tagName);
    }
  }
  payload.tags = newTags.sort();

  // do the update

  // it needs a "name" property on the user record
  if (payload.hasOwnProperty("name")) {
    // grouparoo is handling the name, default it
    if ((payload.name || "").trim().length === 0) {
      payload.name = email;
    }
  } else {
    // grouparoo is not handling the name
    if (!user || (user.name || "").trim().length === 0) {
      // still needs one to be created
      payload.name = email;
    }
  }

  let updated;
  if (user) {
    console.log("user.update", payload);
    updated = await client.users.update(user.id, { user: payload });
  } else {
    console.log("user.createOrUpdate", payload);
    updated = await client.users.createOrUpdate({ user: payload });
  }

  if (updated.email !== email) {
    console.log("updating email", `${updated.email} -> ${email}`);
    // have to make this the primary
    // https://developer.zendesk.com/rest_api/docs/support/users#email-address
    await makeEmailPrimary(client, updated.id, email);
  }

  return { success: true };
};

async function searchForUser(client, findBy: any) {
  let email = findBy.email;
  let response;
  if (email) {
    email = email.toLowerCase().trim();
    // TODO: i want this to be const query = `email:${email}`;
    // the doc says that should work but it doesn't seem to.
    // response = await client.search.query(`type:user email:${email}`);
    //should also work but there seems to be a caching problem
    const query = `${email}`;
    response = await client.users.search({ query });
  } else {
    // likely external_id
    response = await client.users.search(findBy);
  }

  let found = null;
  for (const user of response) {
    if (user.active) {
      if (email) {
        // this verifies the email is as expected because the search is looser
        const userEmail = user.email || "";
        if (userEmail.toLowerCase().trim() !== email) {
          console.log(`email somehow doesn't match: ${userEmail} <> ${email}`);
          continue;
        }
      }
      if (!found) {
        // not deleted
        found = user;
      } else {
        throw `more than one id result! ${JSON.stringify(findBy)}: ${
          user.id
        } and ${found.id}`;
      }
    }
  }
  return found;
}
export async function findUser(
  client,
  newProfileProperties,
  oldProfileProperties
) {
  const external_id = newProfileProperties.external_id;
  const newEmail = newProfileProperties.email;
  const oldEmail = oldProfileProperties.email;

  let found = null;
  if (!found && external_id) {
    found = await searchForUser(client, { external_id });
  }
  if (!found) {
    found = await searchForUser(client, { email: newEmail });
  }
  if (!found && oldEmail && oldEmail !== newEmail) {
    found = await searchForUser(client, { email: oldEmail });
  }
  return found;
}

async function getFields(client) {
  const required = getRequiredFields();
  const builtIn = getBuiltInFields();
  const custom = await getUserFields(client);

  const out = {};
  for (const field of required) {
    out[field.key] = {
      type: field.type,
      custom: false,
    };
  }
  for (const field of builtIn) {
    out[field.key] = {
      type: field.type,
      custom: false,
    };
  }
  for (const field of custom) {
    out[field.key] = {
      type: field.type,
      custom: true,
    };
  }
  return out;
}

function formatVar(value, field) {
  if (!value) {
    return null;
  }
  // TODO: how to format date, etc
  return value;
}
function makeTagName(groupName) {
  // tags can't have spaces and have to be lowercase
  let tagName = groupName.toLowerCase();
  tagName = tagName.replace(/[^a-z]/g, "_");
  return tagName;
}

async function makeEmailPrimary(client, userId, newEmail) {
  const list = await client.useridentities.list(userId);
  let identityId = null;
  for (const identity of list) {
    if (identity.type !== "email") {
      continue;
    }
    if (identity.value.toLowerCase().trim() === newEmail) {
      identityId = identity.id;
      break;
    }
  }
  if (identityId) {
    await client.useridentities.makePrimary(userId, identityId);
  } else {
    throw `identity email not found: ${userId} ${newEmail}`;
  }
}

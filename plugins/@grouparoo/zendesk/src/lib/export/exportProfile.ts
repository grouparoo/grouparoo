import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import {
  getBuiltInFields,
  getRequiredFields,
  getUserFields,
} from "./destinationMappingOptions";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  try {
    const client = await connect(appOptions);
    let external_id = newProfileProperties.external_id;
    let email = newProfileProperties.email;

    const dateValue = newProfileProperties.date_field;

    if (!external_id) {
      throw new Error(
        `newProfileProperties[external_id] is a required mapping`
      );
    }

    // zendesk does this itself
    if (email) {
      email = email.toLowerCase().trim();
    }

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
    const rootFields = await getRootFields(client);
    for (const key of allKeys) {
      const value = newProfileProperties[key]; // includes clearing out removed ones
      const root = rootFields[key];
      const formatted = formatVar(value);
      if (root) {
        payload[key] = formatted;
      } else {
        // otherwise, it's a user_field
        payload.user_fields = payload.user_fields || {};
        payload.user_fields[key] = formatted;
      }
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
        payload.name = getDefaultName(payload);
      }
    } else {
      // grouparoo is not handling the name
      if (!user || (user.name || "").trim().length === 0) {
        // still needs one to be created
        payload.name = getDefaultName(payload);
      }
    }

    let updated;
    if (user) {
      updated = await client.users.update(user.id, { user: payload });
    } else {
      updated = await client.users.createOrUpdate({ user: payload });
    }

    if (email && updated.email !== email) {
      // have to make this the primary
      // https://developer.zendesk.com/rest_api/docs/support/users#email-address
      await makeEmailPrimary(client, updated.id, email);
    }

    return { success: true };
  } catch (error) {
    // https://develop.zendesk.com/hc/en-us/articles/360001074328-Best-practices-for-avoiding-rate-limiting

    // headers
    // X-Rate-Limit: 700
    // X-Rate-Limit-Remaining: 699

    // The response contains the following key information:
    // error.statusCode = 429;
    // error.retryAfter = retryAfter;
    if (error?.statusCode === 429) {
      let retryIn = error.retryAfter; // seconds
      if (!retryIn || retryIn < 0) {
        retryIn = 60; // per minute
      }
      // add some random time to that to spread it out
      retryIn += Math.floor(Math.random() * 30) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }

    throw error;
  }
};

export async function searchForUser(client, findBy: any) {
  const response = await client.users.search(findBy);
  let found = null;
  for (const user of response) {
    if (user.active) {
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
  const newId = newProfileProperties.external_id;
  const oldId = oldProfileProperties.external_id;

  let found = null;
  if (!found && newId) {
    found = await searchForUser(client, { external_id: newId });
  }
  if (!found && oldId && oldId !== newId) {
    found = await searchForUser(client, { external_id: oldId });
  }
  return found;
}

async function getRootFields(client) {
  const required = getRequiredFields();
  const builtIn = getBuiltInFields();

  const out = {};
  for (const field of required) {
    out[field.key] = true;
  }
  for (const field of builtIn) {
    out[field.key] = true;
  }
  return out;
}

function formatVar(value) {
  if (!value) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  } else {
    return value;
  }
}

function getDefaultName(payload) {
  const priority = ["alias", "email", "external_id"];
  for (const key of priority) {
    const value = (payload[key] || "").toString().trim();
    if (value.length > 0) {
      return value;
    }
  }
  return "Unknown";
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

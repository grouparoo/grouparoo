import {
  DestinationSyncOperations,
  Errors,
  ExportRecordPluginMethod,
} from "@grouparoo/core";
import { connect } from "../connect";
import {
  getBuiltInFields,
  getRequiredFields,
} from "./destinationMappingOptions";

export const exportRecord: ExportRecordPluginMethod = async ({
  appOptions,
  syncOperations,
  export: {
    toDelete,
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
  },
}) => {
  try {
    const client = await connect(appOptions);
    let external_id = newRecordProperties.external_id;
    let email = newRecordProperties.email;

    if (!external_id) {
      throw new Error(`newRecordProperties[external_id] is a required mapping`);
    }

    // zendesk does this itself
    if (email) {
      email = email.toLowerCase().trim();
    }

    const user = await findUser(
      client,
      newRecordProperties,
      oldRecordProperties
    );

    // tags need to be formatted
    const newTags = newGroups.map((groupName) => makeTagName(groupName));
    const oldTags = oldGroups.map((groupName) => makeTagName(groupName));

    if (toDelete) {
      if (user) {
        // this does a soft delete
        if (syncOperations.delete) {
          await client.users.delete(user.id);
        } else {
          throw new Errors.InfoError(
            "Destination sync mode does not allow removing records."
          );
        }

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

    // set record properties, including old ones
    const newKeys = Object.keys(newRecordProperties);
    const oldKeys = Object.keys(oldRecordProperties);
    const allKeys = oldKeys.concat(newKeys);
    const rootFields = await getRootFields(client);
    for (const key of allKeys) {
      const value = newRecordProperties[key]; // includes clearing out removed ones
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
      if (!syncOperations.update) {
        throw new Errors.InfoError(
          "Destination sync mode does not allow updating existing records."
        );
      }
      updated = await client.users.update(user.id, { user: payload });
    } else {
      if (!syncOperations.create) {
        throw new Errors.InfoError(
          "Destination sync mode does not allow creating new records."
        );
      }
      updated = await client.users.createOrUpdate({ user: payload });
    }

    if (email && updated.email !== email) {
      // have to make this the primary
      // https://developer.zendesk.com/rest_api/docs/support/users#email-address
      if (!syncOperations.update) {
        throw new Errors.InfoError(
          "Destination sync mode does not allow updating existing records."
        );
      }
      await makeEmailPrimary(client, updated.id, email);
    }

    return { success: true };
  } catch (error) {
    const errorMessage = error?.result?.toString();
    error.message = errorMessage || error.message;
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
  const { email } = findBy;
  if (email) {
    findBy = { query: email };
  }
  const response = await client.users.search(findBy);
  for (const user of response) {
    if (user.active) {
      // not deleted
      if (!email) {
        // searching by external_id
        return user;
      }
      // otherwise, make sure it's the email and not just in the text somewhere
      if (
        email.toLowerCase().trim() === (user.email || "").toLowerCase().trim()
      ) {
        return user;
      }
    }
  }
  return null;
}
export async function findUser(
  client,
  newRecordProperties,
  oldRecordProperties
) {
  const newId = newRecordProperties.external_id;
  const oldId = oldRecordProperties.external_id;
  const newEmail = (newRecordProperties.email || "").toLowerCase().trim();
  const oldEmail = (oldRecordProperties.email || "").toLowerCase().trim();

  let found = null;
  if (newId) {
    found = await searchForUser(client, { external_id: newId });
  }
  if (!found && oldId && oldId !== newId) {
    found = await searchForUser(client, { external_id: oldId });
  }
  if (!found && newEmail && newEmail !== "") {
    found = await searchForUser(client, { email: newEmail });
  }
  if (!found && oldEmail && oldEmail !== "" && oldEmail !== newEmail) {
    found = await searchForUser(client, { email: oldEmail });
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
  if (value === undefined) {
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

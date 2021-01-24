import {
  ExportProfilePluginMethod,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import {
  CreationMode,
  RemovalMode,
  destinationOptions,
} from "./destinationOptions";
import { getKnownAttributeMap } from "./destinationMappingOptions";
import {
  getTagId,
  normalizeTagName,
  IntercomCacheData,
  getTagIdMap,
} from "./listMethods";

interface IntercomContact {
  id: string;
  role: string;
  tags: {
    data: { id: string }[];
  };
}

class InfoError extends Error {
  errorLevel: string;

  constructor(message) {
    super(message);
    this.errorLevel = "info";
  }
}

export const exportProfile: ExportProfilePluginMethod = async (args) => {
  try {
    // TODO: issues with it taking a bit of time to show up in search. maybe retry if synced recently
    return sendProfile(args);
  } catch (error) {
    // https://developers.intercom.com/intercom-api-reference/reference#rate-limiting

    // From the tests
    // assert.strictEqual(err.statusCode, 429);
    // assert.strictEqual(err.body.request_id, 'b2i3mhcboc6pcbe33q80');
    // assert.deepStrictEqual(err.message, 'Exceeded rate limit of 83 in 10_seconds');
    // assert.strictEqual(err.headers['x-request-id'], 'b2i3mhcboc6pcbe33q80');
    // assert.strictEqual(err.headers['x-ratelimit-reset'], '1522849880');

    if (error?.statusCode === 429) {
      const headers = error.headers || {};
      const now = new Date().getTime();
      const resetEpoch = headers["x-ratelimit-reset"] || 0;
      let retryIn = now - resetEpoch;
      if (retryIn <= 0) {
        retryIn = 60;
      }

      // add some random time to that to spread it out
      retryIn += Math.floor(Math.random() * 30) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }

    throw error;
  }
};

export const sendProfile: ExportProfilePluginMethod = async ({
  appGuid,
  appOptions,
  destinationOptions,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  const client = await connect(appOptions);
  const external_id = cleanExternalId(newProfileProperties.external_id);
  const email = cleanEmail(newProfileProperties.email);
  const cacheData: IntercomCacheData = { appGuid, appOptions };

  if (!external_id && !email) {
    throw new Error(`external_id or email is a required mapping`);
  }

  const found = await findContact(
    client,
    newProfileProperties,
    oldProfileProperties
  );

  if (toDelete) {
    await deleteUser(
      client,
      destinationOptions,
      cacheData,
      found,
      oldGroups,
      newGroups
    );
    return { success: true };
  }

  // do the update
  const payload = await makePayload(
    client,
    cacheData,
    { email, external_id },
    oldProfileProperties,
    newProfileProperties
  );
  const contact = await createOrUpdateUser(
    client,
    destinationOptions,
    found ? found.id : null,
    payload
  );

  if (!contact) {
    throw new Error(`Unknown intercom id: ${external_id} ${email}`);
  }

  if (oldGroups.length > 0 || newGroups.length > 0) {
    await updateTags(client, cacheData, contact, oldGroups, newGroups);
  }

  return { success: true };
};

function cleanEmail(email) {
  return trimLower(email);
}

function cleanExternalId(external_id) {
  if (!external_id) {
    return null;
  }
  external_id = external_id.trim();
  if (external_id.length === 0) {
    return null;
  }
  return external_id;
}

function cleanTagName(groupName) {
  return groupName.trim();
}

function trimLower(value) {
  if (!value) {
    return null;
  }
  value = value.toLowerCase().trim();
  if (value.length === 0) {
    return null;
  }
  return value;
}

function filterUser(users: IntercomContact[], key: string, value) {
  const check = trimLower(value);
  if (!check) {
    return null;
  }
  for (const user of users) {
    const value = trimLower(user[key]);
    if (!value) {
      continue;
    }
    if (value === check) {
      return user;
    }
  }
  return null;
}

export async function findContact(
  client,
  newProfileProperties,
  oldProfileProperties
): Promise<IntercomContact> {
  const newId = cleanExternalId(newProfileProperties.external_id);
  let oldId = cleanExternalId(oldProfileProperties.external_id);
  const newEmail = cleanEmail(newProfileProperties.email);
  let oldEmail = cleanEmail(oldProfileProperties.email);

  if (oldId && oldId === newId) {
    oldId = null; // same
  }
  if (oldEmail && oldEmail === newEmail) {
    oldEmail = null; // same
  }

  const query = {
    operator: "OR",
    value: [],
  };

  if (newId) {
    query.value.push({
      field: "external_id",
      operator: "=",
      value: newId,
    });
  }
  if (oldId) {
    query.value.push({
      field: "external_id",
      operator: "=",
      value: oldId,
    });
  }
  if (newEmail) {
    query.value.push({
      field: "email",
      operator: "=",
      value: newEmail,
    });
  }
  if (oldEmail) {
    query.value.push({
      field: "email",
      operator: "=",
      value: oldEmail,
    });
  }
  if (query.value.length === 0) {
    throw new Error("Nothing to search for existing Intercom contact");
  }

  const { body } = await client.contacts.search(query);
  const users: IntercomContact[] = body.data;

  if (!users || users.length === 0) {
    return null;
  }

  let found: IntercomContact = null;
  // favor external_id match
  if (!found && newId) {
    found = filterUser(users, "external_id", newId);
  }
  if (!found && oldId) {
    found = filterUser(users, "external_id", oldId);
  }
  if (!found && newEmail) {
    found = filterUser(users, "email", newEmail);
  }
  if (!found && oldEmail) {
    found = filterUser(users, "email", oldEmail);
  }
  if (!found) {
    found = users[0];
  }
  return found;
}

async function deleteUser(
  client: any,
  destinationOptions: SimpleDestinationOptions,
  cacheData: IntercomCacheData,
  user: IntercomContact,
  oldGroups: string[],
  newGroups: string[]
) {
  if (!user) {
    return;
  }

  const { removalMode } = destinationOptions;
  switch (removalMode) {
    case RemovalMode.Archive:
      return client.contacts.archive(user.id);
    case RemovalMode.Delete:
      return client.contacts.delete(user.id);
    case RemovalMode.Skip:
      // not removing contact, but is clearing all tags grouparoo is in charge of
      oldGroups = Array.from(new Set(oldGroups.concat(newGroups)));
      newGroups = [];
      await updateTags(client, cacheData, user, oldGroups, newGroups);
      throw new InfoError("Destination is not removing contacts.");
    default:
      throw new Error(`Unknown removalMode: ${removalMode}`);
  }
}

function formatVar(value) {
  if (!value) {
    return null;
  }
  if (value instanceof Date) {
    // sent in epoch seconds
    return Math.round(value.getTime() / 1000.0);
  } else {
    return value;
  }
}

async function makePayload(
  client: any,
  cacheData: IntercomCacheData,
  { email, external_id },
  oldProfileProperties: {
    [key: string]: any;
  },
  newProfileProperties: {
    [key: string]: any;
  }
) {
  const payload: any = { external_id, email };

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);

  const knownAttributes = await getKnownAttributeMap(client, cacheData);
  for (const key of allKeys) {
    if (["email", "external_id"].includes(key)) {
      continue; // already there
    }
    if (!knownAttributes[key]) {
      continue; // unknown key
    }
    const value = newProfileProperties[key]; // includes clearing out removed ones
    const formatted = formatVar(value);

    const pieces = key.split("."); // for example, custom_attributes.my_field
    if (pieces.length > 1 && pieces[0] === "custom_attributes") {
      pieces.shift(); // remove it
      const customKey = pieces.join(".");
      payload.custom_attributes = payload.custom_attributes || {};
      payload.custom_attributes[customKey] = formatted;
    } else {
      payload[key] = formatted;
    }
  }
  return payload;
}

function addCreationPayload(
  payload: any,
  destinationOptions: SimpleDestinationOptions
) {
  const { creationMode } = destinationOptions;
  const external_id = payload.external_id || null;
  let role = null;
  switch (creationMode) {
    case CreationMode.User:
      role = "user";
      break;
    case CreationMode.Lead:
      role = "lead";
      break;
    case CreationMode.Lifecycle:
      if (external_id) {
        role = "user";
      } else {
        role = "lead";
      }
      break;
    case CreationMode.Enrich:
      // not updating
      throw new InfoError("Destination is not creating contacts.");
    default:
      throw new Error(`Unknown creationMode: ${creationMode}`);
  }
  return Object.assign({}, payload, { role });
}

function addUpdatePayload(
  payload: any,
  destinationOptions: SimpleDestinationOptions
) {
  const { creationMode } = destinationOptions;
  const external_id = payload.external_id || null;
  const extra: any = {};
  switch (creationMode) {
    case CreationMode.User:
    case CreationMode.Lead:
    case CreationMode.Enrich:
      // no changes
      break;
    case CreationMode.Lifecycle:
      // make sure it's the right one
      if (external_id) {
        extra.role = "user";
      }
      // but note: can't convert user back to lead
      break;

    default:
      throw new Error(`Unknown creationMode: ${creationMode}`);
  }
  return Object.assign({}, payload, extra);
}

async function createOrUpdateUser(
  client: any,
  destinationOptions: SimpleDestinationOptions,
  destinationId: string,
  payload: any,
  attemptedDestinationIds: string[] = []
): Promise<IntercomContact> {
  try {
    if (destinationId) {
      payload = addUpdatePayload(payload, destinationOptions);
      attemptedDestinationIds.push(destinationId);
      const { body } = await client.contacts.update(destinationId, payload);
      return body;
    } else {
      payload = addCreationPayload(payload, destinationOptions);
      const { body } = await client.contacts.create(payload);
      return body;
    }
  } catch (error) {
    if (error?.statusCode === 409) {
      // Conflict - Multiple existing users match this email address - must be more specific using user_id
      const errors = error?.body?.errors || [];
      for (const e of errors) {
        // E.g. 'An archived contact matching those details already exists with id=5ff25dc6ec394ef8296e873f'
        // E.g. 'A contact matching those details already exists with id=5ff2b0a47543cba3058e8b79'
        const idRegex = /id=(\w+)/g;
        const archivedRegex = /archived/g;

        const message = e.message || "";
        const idMatch = idRegex.exec(message);
        if (idMatch) {
          const conflictDestinationId = idMatch[1];
          if (
            conflictDestinationId &&
            !attemptedDestinationIds.includes(conflictDestinationId)
          ) {
            // was it an archived match?
            if (archivedRegex.exec(message)) {
              try {
                await client.contacts.unarchive(conflictDestinationId);
              } catch (err) {
                const message = err.message;
                err.message = `Error unarchiving. It may be a permanently deleted contact with the same external id (${payload.external_id}) and email (${payload.email}): ${message}`;

                throw err;
              }
            }

            // try again
            return await createOrUpdateUser(
              client,
              destinationOptions,
              conflictDestinationId,
              payload,
              attemptedDestinationIds
            );
          }
        }
      }
    }
    throw error;
  }
}

async function updateTags(
  client: any,
  cacheData: IntercomCacheData,
  user: IntercomContact,
  oldGroups: string[],
  newGroups: string[]
) {
  const newTags = newGroups.map((groupName) => cleanTagName(groupName));
  const oldTags = oldGroups.map((groupName) => cleanTagName(groupName));
  const removedTags = oldTags.filter((k) => !newTags.includes(k));

  const currentTags: { [name: string]: string } = {};
  let refetched = false;
  let tagIdMap = await getTagIdMap(client, cacheData);

  for (const tag of user.tags.data) {
    let normName = tagIdMap[tag.id];
    if (!normName && !refetched) {
      tagIdMap = await getTagIdMap(client, cacheData, true);
      refetched = true;
      normName = tagIdMap[tag.id];
    }
    if (!normName) {
      throw new Error(`Current tag not found: ${tag.id}`);
    }
    currentTags[normName] = tag.id;
  }
  for (const tagName of removedTags) {
    const normName = normalizeTagName(tagName);
    const tagId = currentTags[normName];
    if (tagId) {
      await client.contacts.untag(user.id, tagId);
    }
    // else not currently tagged as that
  }
  for (const tagName of newTags) {
    const normName = normalizeTagName(tagName);
    let tagId = currentTags[normName];
    if (!tagId) {
      tagId = await getTagId(client, cacheData, tagName, tagIdMap);
      await client.contacts.tag(user.id, tagId);
    }
    // else already tagged
  }
}

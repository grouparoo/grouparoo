import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import {
  getTagId,
  normalizeTagName,
  IntercomCacheData,
  IntercomTag,
  getTagIdMap,
} from "./listMethods";

interface IntercomContact {
  id: string;
  tags: {
    data: { id: string }[];
  };
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

  let destinationId = await findDestinationId(
    client,
    newProfileProperties,
    oldProfileProperties
  );

  if (toDelete) {
    if (destinationId) {
      // this does a soft delete
      await client.users.archive(destinationId);
    }
    return { success: true };
  }

  // do the update
  const payload = makePayload(
    { email, external_id },
    oldProfileProperties,
    newProfileProperties
  );
  const user = await createOrUpdateUser(client, destinationId, payload);

  if (!user) {
    throw new Error(`Unknown intercom id: ${external_id} ${email}`);
  }

  if (oldGroups.length > 0 || newGroups.length > 0) {
    await updateTags(client, cacheData, user, oldGroups, newGroups);
  }

  return { success: true };
};

function cleanEmail(email) {
  if (!email) {
    return null;
  }
  email = email.toLowerCase().trim();
  if (email.length === 0) {
    return null;
  }
  return email;
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

export async function findDestinationId(
  client,
  newProfileProperties,
  oldProfileProperties
): Promise<string> {
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
  const users = body.data;

  if (!users || users.length === 0) {
    return null;
  }

  if (users.length > 1) {
    // TODO: how to pick if more than one?
    throw new Error("more than one found!");
  }
  return users[0].id;
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

function makePayload(
  { email, external_id },
  oldProfileProperties: {
    [key: string]: any;
  },
  newProfileProperties: {
    [key: string]: any;
  }
) {
  const role = "user"; // OR "lead"
  const payload: any = { role, external_id, email };

  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = oldKeys.concat(newKeys);
  for (const key of allKeys) {
    if (["email", "external_id"].includes(key)) {
      continue; // already there
    }
    const value = newProfileProperties[key]; // includes clearing out removed ones
    const formatted = formatVar(value);

    // TODO: make sure custom attribute still actually exists

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

async function createOrUpdateUser(
  client: any,
  destinationId: string,
  payload: any,
  attemptedDestinationIds: string[] = []
): Promise<IntercomContact> {
  try {
    console.log({ destinationId, payload });
    if (destinationId) {
      attemptedDestinationIds.push(destinationId);
      const { body } = await client.contacts.update(destinationId, payload);
      // console.log({ updated: body });
      return body;
    } else {
      const { body } = await client.contacts.create(payload);
      // console.log({ created: body });
      return body;
    }
  } catch (error) {
    console.log({ errorCreate: error });
    if (error?.statusCode === 409) {
      // Conflict - Multiple existing users match this email address - must be more specific using user_id
      const errors = error?.body?.errors || [];
      console.log({ errors });
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
            console.log({ conflictDestinationId });
            // was it an archived match?
            if (archivedRegex.exec(message)) {
              await client.contacts.unarchive(conflictDestinationId);
              // console.log({ unarchive: body });
            }

            // try again
            return await createOrUpdateUser(
              client,
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

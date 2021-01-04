import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import {} from "./destinationMappingOptions";

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
  // TODO: need something here?
  // let tagName = groupName.toLowerCase();
  // tagName = tagName.replace(/[^a-z]/g, "_");
  return groupName;
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
): Promise<string> {
  try {
    let updated;
    console.log({ payload });
    if (destinationId) {
      attemptedDestinationIds.push(destinationId);
      const { body } = await client.contacts.update(destinationId, payload);
      console.log({ updated: body });
      return body.id;
    } else {
      const { body } = await client.contacts.create(payload);
      console.log({ created: body });
      return body.id;
    }
  } catch (error) {
    console.log({ errorCreate: error });
    if (error?.statusCode === 409) {
      // Conflict - Multiple existing users match this email address - must be more specific using user_id
      const errors = error?.body?.errors || [];
      console.log({ errors });
      for (const e of errors) {
        const idRegex = /id=(\w+)/g;
        const archivedRegex = /archived/g;
        // 'An archived contact matching those details already exists with id=5ff25dc6ec394ef8296e873f'
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

export const sendProfile: ExportProfilePluginMethod = async ({
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
  destinationId = await createOrUpdateUser(client, destinationId, payload);

  // tags need to be formatted
  // TODO: check and compare current tags
  // TODO: minimize http requests
  // TODO: will have to make tags with mutex

  // const newTags = newGroups.map((groupName) => cleanTagName(groupName));
  // const oldTags = oldGroups.map((groupName) => cleanTagName(groupName));
  // const removedTags = oldTags.filter((k) => !newTags.includes(k));
  // // get the current tags if there was a user
  // const currentTags = user?.tags || [];
  // for (const tagName of currentTags) {
  //   // add it to newTags if it's not there already or in removedTags
  //   if (removedTags.includes(tagName)) {
  //     // it got removed, don't add it back
  //     continue;
  //   }
  //   if (!newTags.includes(tagName)) {
  //     // it is from zendesk directly, add it back
  //     newTags.push(tagName);
  //   }
  // }
  // payload.tags = newTags.sort();

  return { success: true };
};

export async function findDestinationId(
  client,
  newProfileProperties,
  oldProfileProperties
) {
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
  console.log({ findDestinationId: users });

  if (!users || users.length == 0) {
    return null;
  }

  // TODO: how to pick if more than one?
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

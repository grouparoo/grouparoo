import { Errors, ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async (args) => {
  try {
    return sendProfile(args);
  } catch (error) {
    if (error?.response?.status === 429) {
      const retryIn = Math.floor(Math.random() * 10) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

export const sendProfile: ExportProfilePluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);
  const email = newProfileProperties["email"]; // this is how we will identify profiles
  const currentEmail = oldProfileProperties["email"];
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  const { user: newUser } = await client.users.get({ email });
  let oldUser = null;
  if (currentEmail && currentEmail !== email) {
    const oldUserRes = await client.users.get({ email: currentEmail });
    oldUser = oldUserRes.user;
  }

  if (toDelete) {
    const userToDelete = newUser || oldUser;
    if (userToDelete) {
      if (!syncOperations.delete) {
        throw new Errors.InfoError(
          "Destination sync mode does not delete profiles."
        );
      }
      await client.users.delete({ email: userToDelete.email });
    }
    return { success: true };
  } else {
    // create the user and set properties
    const deletePropertiesPayload = {};
    const newPropertyKeys = Object.keys(newProfileProperties);
    Object.keys(oldProfileProperties)
      .filter((k) => !newPropertyKeys.includes(k))
      .forEach((k) => (deletePropertiesPayload[k] = null));

    const dataFields = Object.assign(
      {},
      deletePropertiesPayload,
      newProfileProperties
    );
    let formattedDataFields = {};

    for (const key of Object.keys(dataFields)) {
      if (key !== "email") {
        formattedDataFields[key] = formatVar(dataFields[key]);
      }
    }

    formattedDataFields = formatPayloadKeys(formattedDataFields);

    const payload = Object.assign(
      { email },
      { dataFields: formattedDataFields }
    );

    // We need to change the email on the old user
    // if someone with the new email already exists, leave the old one alone
    if (oldUser && !newUser) {
      const emailPayload = { currentEmail, newEmail: email };
      if (newProfileProperties.userId) {
        emailPayload["currentUserId"] = newProfileProperties.userId;
      }
      try {
        if (!syncOperations.update) {
          throw new Errors.InfoError(
            "Destination sync mode does not update existing profiles."
          );
        }
        await client.users.updateEmail(emailPayload);
      } catch (err) {
        const message = err?.response?.data?.msg || "";
        if (!message.match(/user does not exist/i)) {
          throw err;
        }
      }
    }

    if (!newUser && !syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new profiles."
      );
    } else if (newUser && !syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing profiles."
      );
    }

    payload["mergeNestedObjects"] = true;
    await client.users.update(payload);

    // add to lists
    for (const groupToAdd of newGroups) {
      await addToList(client, appId, appOptions, email, groupToAdd);
    }
    // remove from lists
    for (const group of oldGroups) {
      if (!newGroups.includes(group))
        await removeFromList(client, appId, appOptions, email, group);
    }

    return { success: true };
  }
};

function formatVar(value) {
  if (value === undefined || value === null) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

function formatPayloadKeys(payload) {
  const keys = Object.keys(payload);
  for (const key of keys) {
    if (key.includes(".")) {
      payload = parseDotNotation(payload, key, payload[key]);
    }
  }
  return payload;
}

function parseDotNotation(payload, originalKey, value) {
  let currentObj = payload;
  const subKeys = originalKey.split(".");
  for (let i = 0; i < subKeys.length - 1; ++i) {
    const key = subKeys[i];
    currentObj[key] = currentObj[key] || {};
    currentObj = currentObj[key];
  }
  currentObj[subKeys[subKeys.length - 1]] = value;
  delete payload[originalKey];

  return payload;
}

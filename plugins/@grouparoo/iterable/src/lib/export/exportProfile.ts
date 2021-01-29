import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async (args) => {
  try {
    return sendProfile(args);
  } catch (error) {
    if (error?.response?.status === 429) {
      return { error, success: false, retryDelay: 1000 * 11 }; // the most common rate-limit error from hubspot is in 10-second intervals
    } else {
      throw error;
    }
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
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }
  const client = await connect(appOptions);
  const email = newProfileProperties["email"]; // this is how we will identify profiles
  const currentEmail = oldProfileProperties["email"];
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  if (toDelete) {
    if (currentEmail && currentEmail !== email) {
      await client.users.delete(currentEmail);
    } else {
      await client.users.delete(email);
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
    const formattedDataFields = {};
    for (const key of Object.keys(dataFields)) {
      if (key !== "email") {
        formattedDataFields[key] = formatVar(dataFields[key]);
      }
    }
    const payload = Object.assign(
      { email },
      { dataFields: formattedDataFields }
    );

    if (currentEmail && currentEmail !== email) {
      const oldUser = await getUser(client, currentEmail);
      if (oldUser) {
        const emailPayload = { currentEmail, newEmail: email };
        if (newProfileProperties.userId) {
          emailPayload["currentUserId"] = newProfileProperties.userId;
        }
        await client.users.updateEmail(emailPayload);
      }
    }

    await client.users.update(payload);
    const currentUser = await getUser(client, email);

    // add to lists
    for (const groupToAdd of newGroups) {
      await addToList(client, appGuid, appOptions, currentUser, groupToAdd);
    }

    // remove from lists
    for (const group of oldGroups) {
      if (!newGroups.includes(group))
        await removeFromList(client, appGuid, appOptions, currentUser, group);
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
  } else {
    return value;
  }
}

async function getUser(client, email): Promise<any> {
  const userResponse = await client.users.get({ email });
  if ("user" in userResponse) {
    return userResponse.user;
  }
  return null;
}

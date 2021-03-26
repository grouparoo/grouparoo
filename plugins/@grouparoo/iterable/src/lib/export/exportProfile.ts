import { ExportProfilePluginMethod } from "@grouparoo/core";
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

  const { user: newUser } = await client.users.get({ email });
  let oldUser = null;
  if (currentEmail && currentEmail !== email) {
    const oldUserRes = await client.users.get({ email: currentEmail });
    oldUser = oldUserRes.user;
  }

  if (toDelete) {
    const userToDelete = newUser || oldUser;
    if (userToDelete) {
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

    // We need to change the email on the old user
    // if someone with the new email already exists, leave the old one alone
    if (oldUser && !newUser) {
      const emailPayload = { currentEmail, newEmail: email };
      if (newProfileProperties.userId) {
        emailPayload["currentUserId"] = newProfileProperties.userId;
      }
      try {
        await client.users.updateEmail(emailPayload);
      } catch (err) {
        const message = err?.response?.data?.msg || "";
        if (!message.match(/user does not exist/i)) {
          throw err;
        }
      }
    }

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

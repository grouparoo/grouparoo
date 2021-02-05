import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";

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

  if (toDelete) {
    let userToDelete = null;
    if (currentEmail && currentEmail !== email) {
      userToDelete = client.getUser(currentEmail);
    } else {
      userToDelete = client.getUser(email);
    }
    if (userToDelete) {
      await client.deleteUsers([userToDelete["id"]]);
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
      formattedDataFields[key] = formatVar(dataFields[key]);
    }

    // TODO: handle email changing.

    await client.addOrUpdateUser(formattedDataFields);

    // TODO: handle lists.

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

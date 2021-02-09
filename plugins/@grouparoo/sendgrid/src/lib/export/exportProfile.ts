import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { getListId, removeFromList } from "./listMethods";

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
  const oldEmail = oldProfileProperties["email"];
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  const user = await client.getUser(email);

  if (toDelete) {
    let userToDelete = null;
    if (oldEmail && oldEmail !== email) {
      userToDelete = client.getUser(oldEmail);
    } else {
      userToDelete = user;
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
      .forEach((k) => (deletePropertiesPayload[k] = ""));

    const dataFields = Object.assign(
      {},
      deletePropertiesPayload,
      newProfileProperties
    );
    let formattedDataFields = {};
    for (const key of Object.keys(dataFields)) {
      formattedDataFields[key] = formatVar(dataFields[key]);
    }

    let listsToAdd = [];
    let existingLists = user?.["list_ids"] || [];

    // change email
    if (!user && oldEmail && oldEmail !== email) {
      const oldUser = await client.getUser(oldEmail);
      if (oldUser) {
        formattedDataFields = Object.assign({}, oldUser, formattedDataFields);
        formattedDataFields["id"] = undefined;
        formattedDataFields["_metadata"] = undefined;
        listsToAdd = oldUser["list_ids"] || [];
        existingLists = oldUser["list_ids"] || [];
        await client.deleteUsers([oldUser.id]);
      }
    }

    // add to lists
    for (const groupToAdd of newGroups) {
      const listId = await getListId(client, appId, appOptions, groupToAdd);
      if (!existingLists.includes(listId)) {
        listsToAdd.push(listId);
      }
    }
    await client.addOrUpdateUser(formattedDataFields, listsToAdd);

    // remove from lists
    if (user) {
      for (const group of oldGroups) {
        if (!newGroups.includes(group)) {
          await removeFromList(client, appId, appOptions, user["id"], group);
        }
      }
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

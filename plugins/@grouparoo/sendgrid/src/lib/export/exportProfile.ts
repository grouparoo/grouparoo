import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { getListId, removeFromList } from "./listMethods";
import { isReservedField } from "./destinationMappingOptions";
import { getFieldId } from "./fieldsMethods";
import { log } from "actionhero";
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
  let email = cleanEmail(newProfileProperties["email"]); // this is how we will identify profiles
  let oldEmail = cleanEmail(oldProfileProperties["email"]);
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }
  const user = await client.getUser(email);
  let oldUser = null;
  if (oldEmail && oldEmail !== email) {
    oldUser = await client.getUser(oldEmail);
  }

  if (toDelete) {
    let userToDelete = user || oldUser;
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
    const formattedDataFields = {};
    formattedDataFields["custom_fields"] = {};
    for (const key of Object.keys(dataFields)) {
      if (isReservedField(key)) {
        formattedDataFields[key] = formatVar(dataFields[key]);
      } else {
        const customFieldId = await getFieldId(client, appId, appOptions, key);
        if (customFieldId) {
          formattedDataFields["custom_fields"][customFieldId] = formatVar(
            dataFields[key]
          );
        } else {
          log(
            `trying to add the nonexistent custom field "${key}" to a Sendgrid Contact.`
          );
        }
      }
    }

    // change email
    if (oldUser) {
      await client.deleteUsers([oldUser.id]);
    }

    const listsToAdd = [];
    const existingLists = user?.["list_ids"] || [];
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
          await removeFromList(client, appId, appOptions, user, group);
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

function cleanEmail(value) {
  if (!value) {
    return null;
  }
  value = value.toString().toLowerCase().trim();
  if (value.length === 0) {
    return null;
  }
  return value;
}

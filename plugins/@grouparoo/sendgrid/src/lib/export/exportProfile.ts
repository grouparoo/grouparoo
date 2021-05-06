import { Errors, ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { getListId } from "./listMethods";
import { isReservedField, isReadOnlyField } from "./destinationMappingOptions";
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
  syncOperations,
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
  const email = cleanEmail(newProfileProperties["email"]); // this is how we will identify profiles
  const oldEmail = cleanEmail(oldProfileProperties["email"]);
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }
  const user = await client.getUser(email);
  let oldUser = null;
  if (oldEmail && oldEmail !== email) {
    oldUser = await client.getUser(oldEmail);
  }

  if (toDelete) {
    const userToDelete = user || oldUser;
    if (userToDelete) {
      await deleteUser(client, syncOperations, userToDelete, true);
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
      } else if (!isReadOnlyField(key)) {
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
      await deleteUser(client, syncOperations, oldUser);
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

    if (!user && !syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new profiles."
      );
    } else if (user && !syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing profiles."
      );
    }
    await client.addOrUpdateUser(formattedDataFields, listsToAdd);
    // remove from lists
    if (user) {
      for (const group of oldGroups) {
        if (!newGroups.includes(group)) {
          const listId = await getListId(client, appId, appOptions, group);
          if (listId && existingLists.includes(listId)) {
            await client.unsubscribe(listId, user.id);
          }
        }
      }
    }

    return { success: true };
  }
};

async function deleteUser(
  client,
  syncOperations,
  userToDelete,
  doThrow = false
) {
  if (syncOperations.delete) {
    await client.deleteUsers([userToDelete.id]);
  } else if (doThrow) {
    throw new Errors.InfoError("Destination sync mode does not delete.");
  }
}

function formatVar(value) {
  if (value === undefined || value === null) {
    return "";
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

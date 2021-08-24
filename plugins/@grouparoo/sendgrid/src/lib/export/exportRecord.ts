import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { getListId } from "./listMethods";
import { isReservedField, isReadOnlyField } from "./destinationMappingOptions";
import { getFieldId } from "./fieldsMethods";
import { log } from "actionhero";

export const exportRecord: ExportRecordPluginMethod = async (args) => {
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

export const sendProfile: ExportRecordPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  destinationOptions,
  export: {
    toDelete,
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
  },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }
  const client = await connect(appOptions);
  const email = cleanEmail(newRecordProperties["email"]); // this is how we will identify records
  const oldEmail = cleanEmail(oldRecordProperties["email"]);
  if (!email) {
    throw new Error(`newRecordProperties[email] is a required mapping`);
  }
  const user = await client.getUser(email);
  let oldUser = null;
  if (oldEmail && oldEmail !== email) {
    oldUser = await client.getUser(oldEmail);
  }

  if (toDelete) {
    const userToDelete = user || oldUser;
    if (userToDelete) {
      await deleteUser(
        client,
        appId,
        appOptions,
        syncOperations,
        userToDelete,
        oldGroups,
        true
      );
    }
    return { success: true };
  } else {
    // create the user and set properties
    const deletePropertiesPayload = {};
    const newPropertyKeys = Object.keys(newRecordProperties);
    Object.keys(oldRecordProperties)
      .filter((k) => !newPropertyKeys.includes(k))
      .forEach((k) => (deletePropertiesPayload[k] = ""));

    const dataFields = Object.assign(
      {},
      deletePropertiesPayload,
      newRecordProperties
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
      await deleteUser(
        client,
        appId,
        appOptions,
        syncOperations,
        oldUser,
        oldGroups
      );
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
        "Destination sync mode does not create new records."
      );
    } else if (user && !syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
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
  appId,
  appOptions,
  syncOperations,
  userToDelete,
  oldGroups,
  doThrow = false
) {
  if (syncOperations.delete) {
    await client.deleteUsers([userToDelete.id]);
  } else if (doThrow) {
    throw new Errors.InfoError("Destination sync mode does not delete.");
  } else {
    if (syncOperations.update) {
      // clear groups
      const existingLists = userToDelete?.["list_ids"] || [];
      for (const group of oldGroups) {
        const listId = await getListId(client, appId, appOptions, group);
        if (listId && existingLists.includes(listId)) {
          await client.unsubscribe(listId, userToDelete.id);
        }
      }
    }
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

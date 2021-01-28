import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async ({
  appGuid,
  appOptions,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }
  const client = await connect(appOptions);

  const email = newProfileProperties["email"]; // this is how we will identify profiles
  const currentEmail = oldProfileProperties["email"];
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  // Remove email from profile properties to avoid duplicates.
  delete oldProfileProperties.email;
  delete newProfileProperties.email;

  try {
    if (toDelete) {
      await client.users.delete(email);
    } else {
      // create the user and set properties
      const deletePropertiesPayload = {};
      const newPropertyKeys = Object.keys(newProfileProperties);
      Object.keys(oldProfileProperties)
        .filter((k) => !newPropertyKeys.includes(k))
        .forEach((k) => (deletePropertiesPayload[k] = null));

      const dataFields = Object.assign(
        {},
        newProfileProperties,
        deletePropertiesPayload
      );
      const formattedDataFields = {};
      for (const key of Object.keys(dataFields)) {
        formattedDataFields[key] = formatVar(dataFields[key]);
      }
      const payload = Object.assign(
        { email },
        { dataFields: formattedDataFields }
      );

      await client.users.update(payload);

      // add to lists
      for (const groupToAdd of newGroups) {
        await addToList(client, appGuid, appOptions, email, groupToAdd);
      }

      // remove from lists
      for (const group of oldGroups) {
        if (!newGroups.includes(group))
          await removeFromList(client, appGuid, appOptions, email, group);
      }

      if (currentEmail && currentEmail !== email) {
        const emailPayload = { currentEmail, newEmail: email };
        if (newProfileProperties.userId) {
          emailPayload["currentUserId"] = newProfileProperties.userId;
        }
        await client.users.updateEmail(emailPayload);
      }
    }

    return { success: true };
  } catch (error) {
    if (error?.response?.status === 429) {
      return { error, success: false, retryDelay: 1000 * 11 }; // the most common rate-limit error from hubspot is in 10-second intervals
    } else {
      throw error;
    }
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

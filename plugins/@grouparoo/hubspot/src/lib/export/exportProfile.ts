import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async ({
  appId,
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
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  try {
    let contact;
    try {
      contact = await client.contacts.getByEmail(email);
    } catch (error) {
      if (!error.toString().match(/Request failed with status code 404/)) {
        throw error;
      }
    }

    if (toDelete) {
      if (contact) {
        await client.contacts.deleteContact(contact.vid);
      }
    } else {
      // create the contact and set properties
      const deletePropertiesPayload = {};

      const newPropertyKeys = Object.keys(newProfileProperties);
      Object.keys(oldProfileProperties)
        .filter((k) => !newPropertyKeys.includes(k))
        .forEach((k) => (deletePropertiesPayload[k] = ""));

      const payload = Object.assign(
        { email },
        newProfileProperties,
        deletePropertiesPayload
      );
      await client.contacts.createOrUpdateContact(payload);

      // add to lists
      for (const i in newGroups) {
        const group = newGroups[i];
        await addToList(appId, appOptions, email, group);
      }

      // remove from lists
      for (const i in oldGroups) {
        const group = oldGroups[i];
        if (!newGroups.includes(group))
          await removeFromList(appId, appOptions, email, group);
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

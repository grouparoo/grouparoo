import { ExportProfilePluginMethod, Errors } from "@grouparoo/core";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async ({
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
  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const email = newProfileProperties["email"]; // this is how we will identify profiles
  const oldEmail = oldProfileProperties["email"];
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  try {
    let contact;
    let oldContact;
    contact = await client.getContactByEmail(email);
    if (oldEmail && oldEmail !== email) {
      oldContact = await client.getContactByEmail(oldEmail);
    }
    if (toDelete) {
      const contactToDelete = contact || oldContact;
      if (contactToDelete) {
        if (!syncOperations.delete) {
          // only clear groups
          if (syncOperations.update) {
            for (const group of oldGroups) {
              await removeFromList(
                client,
                appId,
                appOptions,
                contactToDelete.properties.email.value,
                group
              );
            }
          }

          throw new Errors.InfoError(
            "Destination sync mode does not allow removing profiles."
          );
        }

        await client.deleteContact(contactToDelete.vid);
      }
      return { success: true };
    } else {
      // create the contact and set properties
      const deletePropertiesPayload = {};

      const newPropertyKeys = Object.keys(newProfileProperties);
      Object.keys(oldProfileProperties)
        .filter((k) => !newPropertyKeys.includes(k))
        .forEach((k) => (deletePropertiesPayload[k] = null));

      const payload = Object.assign(
        { email },
        newProfileProperties,
        deletePropertiesPayload
      );
      const formattedDataFields = {};
      for (const key of Object.keys(payload)) {
        formattedDataFields[key] = formatVar(payload[key]);
      }

      const sortedDataFields = {};
      Object.keys(formattedDataFields)
        .sort()
        .forEach(function (v, i) {
          sortedDataFields[v] = formattedDataFields[v];
        });

      if (contact && !syncOperations.update) {
        throw new Errors.InfoError(
          "Destination sync mode does not allow updating existing profiles."
        );
      }

      if (!contact && !syncOperations.create) {
        throw new Errors.InfoError(
          "Destination sync mode does not allow creating new profiles."
        );
      }

      // change email
      if (oldContact && syncOperations.delete) {
        // Because hubspot changes FK by deleting the old one,
        // if sync mode does not delete we will leave the old one orphaned
        await client.deleteContact(oldContact.vid);
      }

      await client.createOrUpdateContact(sortedDataFields);

      // add to lists
      for (const i in newGroups) {
        const group = newGroups[i];
        await addToList(client, appId, appOptions, email, group);
      }

      // remove from lists
      for (const i in oldGroups) {
        const group = oldGroups[i];
        if (!newGroups.includes(group))
          await removeFromList(client, appId, appOptions, email, group);
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
    value.setUTCHours(0, 0, 0, 0); //Must be midnight.
    return value.getTime();
  } else {
    return value;
  }
}

import {
  ExportProfilePluginMethod,
  Errors,
  SimpleAppOptions,
  DestinationSyncOperations,
} from "@grouparoo/core";
import { connect } from "../connect";
import { MailjetClient } from "../client";
import { addToList, removeFromList } from "./listMethods";

const deleteContactOrClearGroups = async (
  client: MailjetClient,
  appId: string,
  appOptions: SimpleAppOptions,
  syncOperations: DestinationSyncOperations,
  contact: any,
  groups: string[]
) => {
  if (syncOperations.delete) {
    await client.deleteContact(contact.id);
  } else {
    if (syncOperations.update) {
      // clear groups
      const email = contact.properties.email.value;
      for (const group of groups) {
        await removeFromList(client, appId, appOptions, email, group);
      }
    }
  }
};

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
      if (!syncOperations.delete) {
        throw new Error(
          "Destination sync mode does not allow removing profiles"
        );
      }
      const contactToDelete = contact || oldContact;
      if (contactToDelete) {
        await client.deleteContact(contactToDelete.id);
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
      if (oldContact) {
        await deleteContactOrClearGroups(
          client,
          appId,
          appOptions,
          syncOperations,
          oldContact,
          oldGroups
        );
      }

      // await client.createOrUpdateContact(sortedDataFields);

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
      return { error, success: false, retryDelay: 1000 * 10 };
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

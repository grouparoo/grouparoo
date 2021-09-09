import {
  ExportRecordPluginMethod,
  Errors,
  SimpleAppOptions,
  DestinationSyncOperations,
} from "@grouparoo/core";
import { HubspotClient } from "../client";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

const deleteContactOrClearGroups = async (
  client: HubspotClient,
  appId: string,
  appOptions: SimpleAppOptions,
  syncOperations: DestinationSyncOperations,
  contact: any,
  groups: string[]
) => {
  if (syncOperations.delete) {
    await client.deleteContact(contact.vid);
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

export const exportRecord: ExportRecordPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  export: {
    toDelete,
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
  },
}) => {
  // if we received no mapped data... just exit
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const email = newRecordProperties["email"]; // this is how we will identify records
  const oldEmail = oldRecordProperties["email"];
  if (!email) {
    throw new Error(`newRecordProperties[email] is a required mapping`);
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
          "Destination sync mode does not allow removing records"
        );
      }
      const contactToDelete = contact || oldContact;
      if (contactToDelete) {
        await client.deleteContact(contactToDelete.vid);
      }
      return { success: true };
    } else {
      // create the contact and set properties
      const deletePropertiesPayload = {};

      const newPropertyKeys = Object.keys(newRecordProperties);
      Object.keys(oldRecordProperties)
        .filter((k) => !newPropertyKeys.includes(k))
        .forEach((k) => (deletePropertiesPayload[k] = null));

      const payload = Object.assign(
        { email },
        newRecordProperties,
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
          "Destination sync mode does not allow updating existing records."
        );
      }

      if (!contact && !syncOperations.create) {
        throw new Errors.InfoError(
          "Destination sync mode does not allow creating new records."
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

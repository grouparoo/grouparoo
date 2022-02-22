import {
  ExportRecordPluginMethod,
  Errors,
  SimpleAppOptions,
  DestinationSyncOperations,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { HubspotClient } from "../client/client";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";
import { checkOptionsIntegrity } from "./destinationMappingOptions";

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
  destinationOptions,
  syncOperations,
  export: {
    toDelete,
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
  },
}) => {
  checkOptionsIntegrity(destinationOptions);
  // if we received no mapped data... just exit
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }
  const client = await connect(appOptions);

  const email = newRecordProperties["email"]; // this is how we will identify records
  const oldEmail = oldRecordProperties["email"];
  const companyKey = destinationOptions?.companyKey?.toString();
  const companyRecordField = destinationOptions?.companyRecordField?.toString();
  if (!email) {
    throw new Error(`newRecordProperties[email] is a required mapping`);
  }
  if (companyKey && !newRecordProperties[companyRecordField]) {
    throw new Error(
      `newRecordProperties[${companyRecordField}] is a required mapping`
    );
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

      // handle associations.
      if (companyKey) {
        const oldCompanyKeyValue = oldRecordProperties[companyRecordField];
        const newCompanyKeyValue = newRecordProperties[companyRecordField];
        if (!contact) {
          contact = await client.getContactByEmail(email);
        }
        await syncAssociations(
          client,
          contact,
          companyKey.toString(),
          companyRecordField.toString(),
          oldCompanyKeyValue,
          newCompanyKeyValue
        );
      }

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
    if (error?.status === 429) {
      return { error, success: false, retryDelay: 1000 * 11 }; // the most common rate-limit error from hubspot is in 10-second intervals
    } else {
      throw error;
    }
  }
};

async function syncAssociations(
  client: HubspotClient,
  contact: any,
  companyKey: string,
  companyRecordField: string,
  oldCompanyKeyValue: string,
  newCompanyKeyValue: string
) {
  if (oldCompanyKeyValue && newCompanyKeyValue !== oldCompanyKeyValue) {
    const oldCompanyId = await getCompanyId(
      client,
      companyKey,
      oldCompanyKeyValue
    );
    if (oldCompanyId) {
      await client.objects.disassociate(contact.vid, oldCompanyId);
    }
  }
  const companyId = await getCompanyId(client, companyKey, newCompanyKeyValue);
  if (companyId) {
    await client.objects.associate(contact.vid, companyId);
  }
}

async function getCompanyId(client, companyKey, companyKeyValue) {
  if (companyKey === "hs_object_id") {
    return companyKeyValue;
  }
  const company = (
    await client.objects.searchObjects("COMPANY", companyKey, [companyKeyValue])
  )[0];
  return company?.id.toString();
}

function formatVar(value) {
  if (value === undefined || value === null) {
    return null; // null string clears the value
  }
  if (value instanceof Date) {
    value.setUTCHours(0, 0, 0, 0); //Must be midnight.
    return value.getTime();
  } else {
    return value;
  }
}

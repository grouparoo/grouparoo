import { getKnownFieldMap } from "./destinationMappingOptions";
import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";

async function handleGroupsChanges(client, email, oldGroups, newGroups) {
  const listMapByName = await client.getListMapByName();

  // Unsubscribe from old groups
  for (const groupName of oldGroups) {
    // Only if the group exists
    if (listMapByName.hasOwnProperty(groupName)) {
      await client.lists.removeMembersFromList({
        listId: listMapByName[groupName],
        emails: [email],
      });

      const result = await client.lists.getAllMembers({
        groupId: listMapByName[groupName],
      });
      if (result.records.length === 0) {
        await client.lists.deleteList(listMapByName[groupName]);
      }
    }
  }

  // Subscribe to new groups
  for (const groupName of newGroups) {
    // Create list if not exists
    if (!listMapByName.hasOwnProperty(groupName)) {
      const { list_id } = await client.lists.createList(groupName);
      listMapByName[groupName] = list_id;
    }

    await client.lists.addMembersToList({
      listId: listMapByName[groupName],
      profiles: [{ email }],
    });
  }
}

export const handlePersonChanges: ExportRecordPluginMethod = async ({
  appOptions,
  syncOperations,
  export: {
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const newEmail = newRecordProperties["email"];
  const oldEmail = oldRecordProperties["email"];

  if (!newEmail) {
    throw new Error(`newRecordProperties[email] is a required mapping`);
  }

  const newFoundId = await client.findPersonIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findPersonIdByEmail(oldEmail);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }
    if (foundId) {
      await client.dataPrivacy.requestProfileDeletion({
        identifier: foundId,
        id_type: "person_id",
      });
    }
    return { success: true };
  }
  const payload = await makePayload(oldRecordProperties, newRecordProperties);
  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }
    await client.profiles.updateProfile({
      profileId: foundId,
      properties: payload,
    });
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }

    // Create new Person
    await client.public.identify({
      email: newEmail,
      properties: payload,
      post: true,
    });
  }
  await handleGroupsChanges(client, newEmail, oldGroups, newGroups);
  return { success: true };
};

export const exportRecord = async (args) => {
  try {
    return await handlePersonChanges(args);
  } catch (error) {
    // look for the rate limit exceeded status code.
    if (error?.response?.status === 429) {
      const retryIn = Math.floor(Math.random() * 10) + 1;
      return { error, success: false, retryDelay: 1000 * retryIn };
    }
    throw error;
  }
};

export async function makePayload(oldRecordProperties, newRecordProperties) {
  const payload = {};

  // set record properties, including old ones
  const newFields = Object.keys(newRecordProperties);
  const oldFields = Object.keys(oldRecordProperties);
  const allFields = new Set([...newFields, ...oldFields]);

  // get fields
  const fieldKeys = await getKnownFieldMap();
  for (const fieldName of allFields) {
    const value = newRecordProperties[fieldName];
    const klaviyoKey = fieldKeys[fieldName];

    payload[klaviyoKey ? klaviyoKey : fieldName] =
      formatVar(value) ?? "[deleted]";
  }

  return payload;
}

function formatVar(value) {
  if (value === undefined) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

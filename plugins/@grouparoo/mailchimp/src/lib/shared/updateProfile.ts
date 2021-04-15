import {
  ExportedProfile,
  DestinationSyncOperations,
  Errors,
} from "@grouparoo/core";

export interface UpdateProfileMethod {
  (argument: {
    syncOperations: DestinationSyncOperations;
    client: any;
    listId: string;
    mailchimpId: string;
    noCreate: boolean;
    noDelete: boolean;
    email_address: string;
    export: ExportedProfile;
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    error?: Error;
  }>;
}

export const updateProfile: UpdateProfileMethod = async ({
  syncOperations,
  client,
  listId,
  mailchimpId,
  noCreate,
  noDelete,
  email_address,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  if (!mailchimpId) {
    throw new Error("mailchimpId is required");
  }
  if (toDelete) {
    if (noDelete) {
      return { success: true };
    }
    await deleteContactOrClearGroups(
      client,
      listId,
      mailchimpId,
      oldGroups,
      newGroups,
      syncOperations,
      true
    );
    return { success: true };
  }
  let exists = false;
  let existingTagNames = [];

  // the way to "erase" a merge_var in mailchimp is by setting the value to "", regardless of the merge_var type
  const mergeFields = {};
  for (const k in newProfileProperties) {
    mergeFields[k] =
      newProfileProperties[k] === null || newProfileProperties[k] === undefined
        ? ""
        : newProfileProperties[k];
  }

  // delete old merge tags
  for (const k in oldProfileProperties) {
    // "" is how you delete something from mailchimp
    if (newProfileProperties[k] === undefined) mergeFields[k] = "";
  }

  // mailchimp cannot handle boolean types directly
  for (const k in mergeFields) {
    if (typeof mergeFields[k] === "boolean") {
      mergeFields[k] = mergeFields[k].toString();
    }
  }

  try {
    const response = await client.get(
      `/lists/${listId}/members/${mailchimpId}`
    );
    if (response["unique_email_id"] && response["status"] !== "archived") {
      exists = true;
    }

    // mailchimp changes the case of tags...
    existingTagNames = response.tags.map((t) => normalizeGroupName(t.name));
  } catch (error) {
    // TODO: just letting this go for now.
    // is there a specific error if the user doesn't exist?
    // looks like "The requested resource could not be found"
  }

  if (noCreate && !exists) {
    // only doing updates
    return { success: true };
  }

  // update merge_variables
  const payload: any = {
    status: "subscribed",
    merge_fields: mergeFields,
  };
  if (email_address) {
    payload.email_address = email_address;
  }

  const method = exists ? "put" : "post";
  const route = exists
    ? `/lists/${listId}/members/${mailchimpId}`
    : `/lists/${listId}/members`;

  if (exists && !syncOperations.update) {
    throw new Errors.InfoError(
      "Destination sync mode does not allow updating existing profiles."
    );
  }

  if (!exists && !syncOperations.create) {
    throw new Errors.InfoError(
      "Destination sync mode does not allow creating new profiles."
    );
  }

  try {
    await client[method](route, payload);

    const tagPayload = [];

    // add new tags
    const lowerCaseNewGroups = newGroups.map((g) => normalizeGroupName(g));
    const lowerCaseOldGroups = oldGroups.map((g) => normalizeGroupName(g));

    for (const i in lowerCaseNewGroups) {
      const tag = lowerCaseNewGroups[i];
      if (!existingTagNames.includes(tag)) {
        tagPayload.push({ name: tag, status: "active" });
      }
    }

    // remove old tags
    for (const i in lowerCaseOldGroups) {
      const tag = lowerCaseOldGroups[i];
      if (!lowerCaseNewGroups.includes(tag) && existingTagNames.includes(tag)) {
        tagPayload.push({ name: tag, status: "inactive" });
      }
    }

    await client.post(`/lists/${listId}/members/${mailchimpId}/tags`, {
      tags: tagPayload,
    });
  } catch (error) {
    const errorMessage = error?.response?.body?.detail || "";
    // in case of strict validation cases the error must be set to info level.
    if (errorMessage.includes("looks fake or invalid")) {
      error.errorLevel = "info";
    }
    if (error.errors) {
      // sometimes there are multiple errors that mailchimp puts in error.errors (which are json objects)
      error.message = `${error.message} | ${error.errors
        .map((e) => JSON.stringify(e))
        .join(", ")}`;

      // just in case of one of the multiple errors message is the one related to the email strict validation.
      if (error.message!.includes("looks fake or invalid")) {
        error.errorLevel = "info";
      }
    }
    throw error;
  }

  return { success: true };
};

function normalizeGroupName(group: any) {
  return String(group).toLocaleLowerCase();
}

export async function deleteContactOrClearGroups(
  client,
  listId,
  mailchimpId,
  oldGroups,
  newGroups,
  syncOperations: DestinationSyncOperations,
  doThrow: boolean = false
) {
  try {
    await clearGroups(client, listId, mailchimpId, oldGroups, newGroups);
    if (syncOperations.delete) {
      await client.delete(`/lists/${listId}/members/${mailchimpId}`);
    }
  } catch (error) {
    if (error?.status !== 405 && error?.status !== 404) {
      throw error;
    }
  }

  if (doThrow && !syncOperations.delete) {
    throw new Errors.InfoError(
      "Destination sync mode does not allow removing profiles."
    );
  }
}

export async function clearGroups(
  client,
  listId,
  mailchimpId,
  oldGroups,
  newGroups
) {
  try {
    let tagsToRemove = Array.from(new Set(oldGroups.concat(newGroups)));
    await client.post(`/lists/${listId}/members/${mailchimpId}/tags`, {
      tags: tagsToRemove.map((g) => ({
        name: normalizeGroupName(g),
        status: "inactive",
      })),
    });
  } catch (error) {
    if (error?.status !== 405 && error?.status !== 404) {
      throw error;
    }
  }
}

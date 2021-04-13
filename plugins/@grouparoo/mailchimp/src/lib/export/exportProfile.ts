import { Errors, ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { generateMailchimpId } from "../shared/generateMailchimpId";
import { clearGroups, updateProfile } from "../shared/updateProfile";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  destinationOptions,
  export: profileToExport,
  syncOperations,
}) => {
  const client = await connect(appOptions);

  const {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    oldGroups,
    newGroups,
  } = profileToExport;

  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const listId = destinationOptions.listId?.toString();

  const email_address = newProfileProperties["email_address"]; // this is a required key for mailchimp
  if (!email_address) {
    throw new Error(
      `newProfileProperties[email_address] is a required mapping`
    );
  }
  const mailchimpId = generateMailchimpId(email_address);
  // consider if the the email address has changed
  if (
    !toDelete &&
    oldProfileProperties["email_address"] &&
    email_address !== oldProfileProperties["email_address"]
  ) {
    const oldMailchimpId = generateMailchimpId(
      oldProfileProperties["email_address"]
    );
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not allow updating existing profiles."
      );
    }
    try {
      // this will update the email of existing member only if the new email (email_address) do not exists yet.
      await client.put(`/lists/${listId}/members/${oldMailchimpId}`, {
        email_address,
        status: "subscribed",
        merge_fields: { email_address },
      });
    } catch (error) {
      // Another user with the new email address (email_address) already exists,
      // so we need to delete the old one and let the updateProfile reuse the existing one.
      await clearGroups(client, listId, oldMailchimpId, oldGroups, newGroups);
    }
  }

  return updateProfile({
    syncOperations,
    client,
    listId,
    mailchimpId,
    email_address,
    noDelete: false,
    noCreate: false,
    export: profileToExport,
  });
};

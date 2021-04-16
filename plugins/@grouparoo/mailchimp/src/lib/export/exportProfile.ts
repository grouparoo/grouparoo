import { Errors, ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { generateMailchimpId } from "../shared/generateMailchimpId";
import { clearGroups, getUser, updateProfile } from "../shared/updateProfile";

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
    oldProfileProperties["email_address"] &&
    email_address !== oldProfileProperties["email_address"]
  ) {
    const oldMailchimpId = generateMailchimpId(
      oldProfileProperties["email_address"]
    );
    const oldUserResponse = await getUser(client, listId, oldMailchimpId);
    const userResponse = await getUser(client, listId, mailchimpId);
    if (toDelete && !oldUserResponse && !userResponse) {
      return { success: true };
    }
    if (!userResponse && !syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not allow creating new profiles."
      );
    } else if (userResponse && !syncOperations.update) {
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
      let toThrow = true;
      if (error.errors && error.errors.length > 0) {
        for (const errorDetails of error.errors!) {
          if (
            errorDetails.message!.match(
              /is already in this list with a status of "subscribed"/i
            )
          ) {
            // Another user with the new email address (email_address) already exists,
            // so we need to delete the old one and let the updateProfile reuse the existing one.
            await clearGroups(
              client,
              listId,
              oldMailchimpId,
              oldGroups,
              newGroups
            );
            toThrow = false;
            break;
          }
        }
      } else if (
        error.message &&
        error.message.match(
          /is already a list member. Use PUT to insert or update list members./i
        )
      ) {
        toThrow = false;
      }
      if (toThrow) {
        console.log(error);
        throw error;
      }
    }
  }

  return updateProfile({
    syncOperations,
    client,
    listId,
    mailchimpId,
    email_address,
    export: profileToExport,
  });
};

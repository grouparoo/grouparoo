import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { generateMailchimpId } from "../shared/generateMailchimpId";
import { updateProfile } from "../shared/updateProfile";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  destinationOptions,
  export: profileToExport,
}) => {
  const client = await connect(appOptions);

  const {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
  } = profileToExport;

  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const { listId } = destinationOptions;

  const email_address = newProfileProperties["email_address"]; // this is a required key for mailchimp
  if (!email_address) {
    throw new Error(
      `newProfileProperties[email_address] is a required mapping`
    );
  }

  // consider if the the email address has changed
  if (
    !toDelete &&
    oldProfileProperties["email_address"] &&
    email_address !== oldProfileProperties["email_address"]
  ) {
    const oldMailchimpId = generateMailchimpId(
      oldProfileProperties["email_address"]
    );
    await client.put(`/lists/${listId}/members/${oldMailchimpId}`, {
      email_address,
      status: "subscribed",
      merge_fields: { email_address },
    });
  }

  const mailchimpId = generateMailchimpId(email_address);
  return updateProfile({
    client,
    listId,
    mailchimpId,
    email_address,
    noDelete: false,
    noCreate: false,
    export: profileToExport,
  });
};

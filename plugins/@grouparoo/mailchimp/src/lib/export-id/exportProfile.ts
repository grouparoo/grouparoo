import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { updateProfile } from "../shared/updateProfile";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  destinationOptions,
  export: profileToExport,
  syncOperations,
}) => {
  const client = await connect(appOptions);

  const { newProfileProperties } = profileToExport;

  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const listId = destinationOptions.listId?.toString();

  const mailchimpId = newProfileProperties["mailchimp_id"]; // this is a required key for mailchimp
  if (!mailchimpId) {
    throw new Error(`newProfileProperties[mailchimp_id] is a required mapping`);
  }

  return updateProfile({
    syncOperations,
    client,
    listId,
    mailchimpId,
    noDelete: true,
    noCreate: true,
    email_address: newProfileProperties["email_address"],
    export: profileToExport,
  });
};

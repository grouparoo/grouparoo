import { ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { updateProfile } from "../shared/updateProfile";

export const exportRecord: ExportRecordPluginMethod = async ({
  appOptions,
  destinationOptions,
  export: profileToExport,
  syncOperations,
}) => {
  const client = await connect(appOptions);

  const { newRecordProperties } = profileToExport;

  // if we received no mapped data... just exit
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  const listId = destinationOptions.listId?.toString();

  const mailchimpId = newRecordProperties["mailchimp_id"]; // this is a required key for mailchimp
  if (!mailchimpId) {
    throw new Error(`newRecordProperties[mailchimp_id] is a required mapping`);
  }

  return updateProfile({
    syncOperations,
    client,
    listId,
    mailchimpId,
    email_address: newRecordProperties["email_address"],
    export: profileToExport,
  });
};

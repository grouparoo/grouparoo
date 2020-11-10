import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
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
  if (toDelete) {
    // this destination is only updating existing records and not deleting
    // TODO: we could clear out "other" (non external id) variables. Is that better?
    return { success: true };
  }

  const { listId, mergeVarMatch } = destinationOptions;

  const matchData = newProfileProperties[mergeVarMatch]; // this is a required key for mailchimp
  if (!matchData) {
    throw new Error(
      `newProfileProperties[${mergeVarMatch}] is a required mapping`
    );
  }

  // find the mailchimp contact
  const mailchimpId = await findMailchimpId({
    client,
    listId,
    fieldName: mergeVarMatch,
    value: matchData,
  });

  return updateProfile({
    client,
    listId,
    mailchimpId,
    email_address: null,
    export: profileToExport,
  });
};

async function findMailchimpId({
  client,
  listId,
  fieldName,
  value,
}): Promise<string> {
  // https://mailchimp.com/developer/api/marketing/search-members/search-members/
  // https://stackoverflow.com/questions/48895250/search-members-using-mailchimp-api-3-0-by-merge-field
  // It doesn't look like this going to work! :-(
  // My tests also show the API is not working even on merge1 and merge2 (first and last name)

  const query = "";
  const response = await client.get(`/search-members`, {
    query,
    list_id: listId,
  });
  return null;
}

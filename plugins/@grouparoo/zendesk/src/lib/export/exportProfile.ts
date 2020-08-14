import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  destinationOptions,
  toDelete,
  newProfileProperties,
  oldProfileProperties,
  newGroups,
}) => {
  /*
const client = await connect(appOptions);
  let response;

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

  if (toDelete) {
    response = await client.delete(
      `/lists/${listId}/members/${generateMailchimpId(email_address)}`
    );
    return { success: response.statusCode === 200 };
  } else {
    let exists = false;
    let existingTagNames = [];

    // consider if the the email address has changed
    if (
      oldProfileProperties["email_address"] &&
      email_address !== oldProfileProperties["email_address"]
    ) {
      await client.put(
        `/lists/${listId}/members/${generateMailchimpId(
          oldProfileProperties["email_address"]
        )}`,
        {
          email_address,
          status: "subscribed",
          merge_fields: { email_address },
        }
      );
    }

    // the way to "erase" a merge_var in mailchimp is by setting the value to "", regardless of the merge_var type
    const mergeFields = {};
    for (const k in newProfileProperties) {
      mergeFields[k] =
        newProfileProperties[k] === null ||
        newProfileProperties[k] === undefined
          ? ""
          : newProfileProperties[k];
    }

    try {
      const getResponse = await client.get(
        `/lists/${listId}/members/${generateMailchimpId(email_address)}`
      );
      if (getResponse.unique_email_id) {
        exists = true;
      }

      // mailchimp changes the case of tags...
      existingTagNames = getResponse.tags.map((t) =>
        t.name.toLocaleLowerCase()
      );

      // delete old merge tags
      for (const k in getResponse.merge_fields) {
        mergeFields[k] =
          newProfileProperties[k] === null ||
          newProfileProperties[k] === undefined
            ? ""
            : newProfileProperties[k];
      }
    } catch (error) {}

    // update merge_variables
    const payload = {
      email_address,
      status: "subscribed",
      merge_fields: mergeFields,
    };

    const method = exists ? "put" : "post";
    const route = exists
      ? `/lists/${listId}/members/${generateMailchimpId(email_address)}`
      : `/lists/${listId}/members`;

    await client[method](route, payload);

    const tagPayload = [];

    // add new tags
    const lowerCaseNewGroups = newGroups.map((g) => g.toLocaleLowerCase());
    for (const i in lowerCaseNewGroups) {
      const tag = lowerCaseNewGroups[i];
      if (!existingTagNames.includes(tag)) {
        tagPayload.push({ name: tag, status: "active" });
      }
    }

    // remove old tags
    for (const i in existingTagNames) {
      const existingTag = existingTagNames[i];
      if (!lowerCaseNewGroups.includes(existingTag)) {
        tagPayload.push({ name: existingTag, status: "inactive" });
      }
    }

    await client.post(
      `/lists/${listId}/members/${generateMailchimpId(email_address)}/tags`,
      { tags: tagPayload }
    );

    return { success: true };
  }
  */
  return { success: true };
};

import { connect } from "./../connect";
import {
  App,
  Destination,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";

export async function destinationPreview(
  app: App,
  appOptions: SimpleAppOptions,
  destination: Destination,
  destinationOptions: SimpleDestinationOptions
) {
  const response = [];

  const client = await connect(appOptions);
  const { members } = await client.get(
    `/lists/${destinationOptions.listId}/members`
  );
  members.forEach((member) => {
    const combinedMergeFields = Object.assign(
      { email_address: member.email_address },
      member.merge_fields
    );

    response.push(combinedMergeFields);
  });

  if (response.length === 0) {
    const { merge_fields: mergeFields } = await client.get(
      `/lists/${destinationOptions.listId}/merge-fields`
    );

    const emptyRow = { email_address: "(no data)" };
    mergeFields.forEach((mergeField) => {
      emptyRow[mergeField.tag] = "(no data)";
    });
    response.push(emptyRow);
  }

  return response;
}

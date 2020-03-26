import { Schedule, App, SimpleAppOptions } from "@grouparoo/core";
import { connect } from "./connect";

export async function columns(
  schedule: Schedule,
  app: App,
  options: SimpleAppOptions
) {
  const columns = ["email_address"]; // we need a 'virtual' column for email address as this is the 'key' to Mailchimp
  const rows = [];
  const client = await connect(options);

  const { merge_fields: mergeFields } = await client.get(
    `/lists/${options.listId}/merge-fields`
  );
  mergeFields.forEach((mergeField) => {
    columns.push(mergeField.tag);
  });

  const { members } = await client.get(`/lists/${options.listId}/members`);
  members.forEach((member) => {
    const combinedMergeFields = Object.assign(
      { email_address: member.email_address },
      member.merge_fields
    );
    rows.push(combinedMergeFields);
  });

  return { columns, rows: rows.slice(0, 10) };
}

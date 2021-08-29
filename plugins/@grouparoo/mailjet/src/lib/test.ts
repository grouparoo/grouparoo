import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";
import { MailjetClient } from "./client";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client: MailjetClient = await connect(appOptions);
  const lists = await client.getLists();
  const success = !!lists;
  const message = success ? `${lists.length} Mailjet lists available` : null;
  return { success, message };
};

import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const { lists } = await client.get("/lists");
  const success = lists ? true : false;
  const message = success ? `${lists.length} Mailchimp lists available` : null;

  return { success, message };
};

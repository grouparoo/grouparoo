import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";
import { BrazeClient } from "./client/client";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client: BrazeClient = await connect(appOptions);
  const templates = await client.templates.get();
  const success = !!templates;
  const message = success
    ? `${templates.length} Braze email templates available`
    : null;
  return { success, message };
};

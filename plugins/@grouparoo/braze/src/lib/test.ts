import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";
import { BrazeClient } from "./client/client";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client: BrazeClient = await connect(appOptions);
  const { campaigns = [] } = await client.campaigns.get();
  const success = !!campaigns;
  const message = success ? `${campaigns.length} Braze campaigns found.` : null;
  return { success, message };
};

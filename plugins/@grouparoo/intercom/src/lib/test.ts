import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const { body } = await client.counts.appCounts();

  const success = body["type"] == "count.hash";
  if (!success) {
    throw new Error(`Unknown response: ${JSON.stringify(body)}`);
  }

  const users = body["user"]["count"];
  const leads = body["lead"]["count"];
  const message = `Connected. Users: ${users} Leads: ${leads}`;
  return { success: true, message };
};

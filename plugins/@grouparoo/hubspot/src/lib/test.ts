import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const { portalId } = await client.account.getAccountDetails();
  const success = portalId > 0;
  const message = success ? `Connected to account ${portalId}` : null;

  return { success, message };
};

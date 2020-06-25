import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const { portalId } = await client.account.getAccountDetails();

  if (portalId) {
    return true;
  } else {
    return false;
  }
};

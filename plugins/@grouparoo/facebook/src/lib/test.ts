import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const { AdAccount } = client.sdk;

  const fields = [AdAccount.Fields.name];
  const params = {};
  const adAccount = client.adAccount();
  const result = await adAccount.get(fields, params);
  const name = result[AdAccount.Fields.name];
  if (!name) {
    const message = `Could not determine account name`;
    return { success: false, message };
  } else {
    const message = `Connected to ad account: ${name}`;
    return { success: true, message };
  }
};

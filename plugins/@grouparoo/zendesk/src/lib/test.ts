import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const response = await client.users.auth();

  const success = response.id ? true : false;
  const message = success ? `Logged in user: ${response.name}` : null;
  return { success, message };
};

import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const conn = await connect(appOptions);
  const identity = await conn.identity();
  const message = `Logged in as ${identity.display_name}`;

  return { success: true, message };
};

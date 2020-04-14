import { connect } from "./connect";
import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const rows = await client.asyncQuery("SELECT 'grouparoo' as message");
  await client.asyncEnd();
  const isValid = rows[0].message === "grouparoo";
  return isValid;
};

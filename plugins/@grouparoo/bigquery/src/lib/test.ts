import { connect } from "./connect";
import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const response = await client.query('SELECT "grouparoo" as message');
  const isValid = response[0][0].message === "grouparoo";
  return isValid;
};

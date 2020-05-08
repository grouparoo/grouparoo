import { connect } from "./connect";
import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const query = 'SELECT "grouparoo" as message';
  const options = { query };
  const response = await client.query(options);
  const isValid = response[0][0].message === "grouparoo";
  return isValid;
};

import { connect } from "./connect";
import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const response = await client.query("SELECT $1::text as message", [
    "grouparoo",
  ]);
  await client.end();
  const isValid = response.rows[0].message === "grouparoo";
  return isValid;
};

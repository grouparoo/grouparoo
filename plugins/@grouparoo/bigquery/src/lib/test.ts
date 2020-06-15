import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const query = 'SELECT "grouparoo" as message';
  const options = { query };
  const response = await connection.query(options);
  const isValid = response[0][0].message === "grouparoo";
  return isValid;
};

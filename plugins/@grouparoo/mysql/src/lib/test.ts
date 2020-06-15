import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const rows = await connection.asyncQuery("SELECT 'grouparoo' as message");
  const isValid = rows[0].message === "grouparoo";
  return isValid;
};

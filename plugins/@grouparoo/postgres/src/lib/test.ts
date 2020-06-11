import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const response = await connection.query("SELECT $1::text as message", [
    "grouparoo",
  ]);
  const isValid = response.rows[0].message === "grouparoo";
  return isValid;
};

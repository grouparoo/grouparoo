import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const response = await connection.run(
    `SELECT count(*) FROM sqlite_master WHERE type = 'table' AND name != 'android_metadata' AND name != 'sqlite_sequence';`
  );

  const success = response ? true : false;
  const message = "Connection to SQLite database successful.";

  return { success, message };
};

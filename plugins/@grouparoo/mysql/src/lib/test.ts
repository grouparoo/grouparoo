import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const rows = await connection.asyncQuery("SELECT 'grouparoo' as message");
  const success = rows[0].message === "grouparoo";
  const tableRows = await connection.asyncQuery("SHOW TABLES");
  const message = `Found ${tableRows.length} tables in this database`;

  return { success, message };
};

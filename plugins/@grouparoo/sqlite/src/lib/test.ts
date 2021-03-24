import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const genericError = {
    success: false,
    message: "Could not connect to database.",
  };

  // Return if we don't have a connection object.
  if (!connection) return genericError;

  const query = `SELECT count(*) FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`;
  const res = await connection.asyncQuery(query);

  // Return if we didn't get the shape we were expecting.
  if (!res || !res[0]) return genericError;

  const numTables = parseInt(res[0]["count(*)"]) || 0;
  return { success: true, message: `Connected! Found ${numTables} tables.` };
};

import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ appOptions, connection }) => {
  const schema = appOptions.schema || "PUBLIC";

  const response = await connection.execute("SELECT (1+1) as TEST");
  const success = response[0].TEST === 2;

  if (!success) {
    throw new Error(`Snowflake query problem.`);
  }

  const schemaCount = await connection.execute(
    "SELECT COUNT(SCHEMA_NAME) AS NUM FROM INFORMATION_SCHEMA.SCHEMATA where SCHEMA_NAME=:1",
    [schema]
  );

  if (schemaCount[0].NUM === 0) {
    throw new Error(`Schema "${schema}" not found.`);
  }

  const tableCount = await connection.execute(
    "SELECT COUNT(TABLE_NAME) AS NUM FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA=:1",
    [schema]
  );

  const message = `Found ${tableCount[0].NUM} tables in this database`;
  return { success, message };
};

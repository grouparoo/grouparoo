import { TestPluginMethod } from "@grouparoo/core";
import format from "pg-format";

export const test: TestPluginMethod = async ({ connection, appOptions }) => {
  const response = await connection.query("SELECT $1::text as message", [
    "grouparoo",
  ]);
  const success = response.rows[0].message === "grouparoo";

  const rowCountResponse = await connection.query(
    format(
      `select count(*) as __count from information_schema.tables where table_schema = %L`,
      appOptions.schema || "public"
    )
  );
  const message = `Found ${rowCountResponse.rows[0].__count} tables in this database and schema`;

  return { success, message };
};

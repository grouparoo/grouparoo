import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getRows } from "./getRows";

export function getConnection() {
  return buildConnection({
    apps: ["snowflake", "snowflake-keypair"],
    name: "snowflake-import-query",
    displayName: "Snowflake Query Import",
    description: "Import or update records via a custom Snowflake query.",
    executeQuery,
    getRows,
  });
}

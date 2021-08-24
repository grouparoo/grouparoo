import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getChangedRows } from "./getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "snowflake",
    name: "snowflake-query-import",
    description: "Import or update records via a custom Snowflake query.",
    executeQuery,
    getChangedRows,
  });
}

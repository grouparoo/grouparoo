import { buildConnection } from "@grouparoo/app-templates/src/source/query";
import { executeQuery } from "./executeQuery";

export function getConnection() {
  return buildConnection({
    app: "snowflake",
    name: "snowflake-query-import",
    description: "Import or update profiles via a custom Snowflake query.",
    executeQuery,
  });
}

import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getChangedRows } from "./getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "postgres",
    name: "postgres-query-import",
    description: "Import or update Profiles via a custom Postgres query.",
    executeQuery,
    getChangedRows,
  });
}

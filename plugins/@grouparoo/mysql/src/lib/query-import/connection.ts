import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getChangedRows } from "./getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "mysql",
    name: "mysql-query-import",
    displayName: "MySQL Query Import",
    description: "Import or update Records via a custom MySQL query.",
    executeQuery,
    getChangedRows,
  });
}

import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getChangedRows } from "./getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "sqlite",
    name: "sqlite-import-query",
    displayName: "SQLite Query Import",
    description: "Import or update Records via a custom SQLite query.",
    executeQuery,
    getChangedRows,
  });
}

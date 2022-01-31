import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getRows } from "./getRows";

export function getConnection() {
  return buildConnection({
    apps: ["sqlite"],
    name: "sqlite-import-query",
    displayName: "SQLite Query Import",
    description: "Import or update Records via a custom SQLite query.",
    executeQuery,
    getRows,
  });
}

import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getRows } from "./getRows";

export function getConnection() {
  return buildConnection({
    apps: ["mysql"],
    name: "mysql-import-query",
    displayName: "MySQL Query Import",
    description: "Import or update Records via a custom MySQL query.",
    executeQuery,
    getRows,
  });
}

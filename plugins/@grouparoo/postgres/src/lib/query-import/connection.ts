import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getRows } from "./getRows";

export function getConnection() {
  return buildConnection({
    apps: ["postgres"],
    name: "postgres-import-query",
    displayName: "Postgres Query Import",
    description: "Import or update Records via a custom Postgres query.",
    executeQuery,
    getRows,
  });
}

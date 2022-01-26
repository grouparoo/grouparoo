import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getRows } from "./getRows";

export function getConnection() {
  return buildConnection({
    apps: ["bigquery"],
    name: "bigquery-import-query",
    displayName: "BigQuery Query Import",
    description: "Import or update records via a custom Bigquery query.",
    executeQuery,
    getRows,
  });
}

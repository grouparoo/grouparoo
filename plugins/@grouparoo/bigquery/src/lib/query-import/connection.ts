import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getChangedRows } from "./getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "bigquery",
    name: "bigquery-import-query",
    displayName: "BigQuery Query Import",
    description: "Import or update records via a custom Bigquery query.",
    executeQuery,
    getChangedRows,
  });
}

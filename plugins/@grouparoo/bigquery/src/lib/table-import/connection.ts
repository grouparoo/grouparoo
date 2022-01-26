import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getRows } from "./getRows";
import { getPropertyValue } from "./getPropertyValue";
import { getPropertyValues } from "./getPropertyValues";
import { getRowCount } from "./getRowCount";

export function getConnection() {
  return buildConnection({
    apps: ["bigquery"],
    name: "bigquery-import-table",
    displayName: "BigQuery Table Import",
    description: "Import or update Records from a Bigquery database table.",
    tableOptionDescription: "The table to scan for new and changed Records.",
    getSampleRows,
    getColumns,
    getTables,
    getRows,
    getPropertyValue,
    getPropertyValues,
    getRowCount,
  });
}

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
    apps: ["postgres"],
    name: "postgres-import-table",
    displayName: "Postgres Table Import",
    description: "Import or update Records from a Postgres database table.",
    tableOptionDescription: "The table to scan",
    getSampleRows,
    getColumns,
    getTables,
    getRows,
    getPropertyValue,
    getPropertyValues,
    getRowCount,
  });
}

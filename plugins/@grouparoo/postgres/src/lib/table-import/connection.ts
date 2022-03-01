import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "../shared/getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getRows } from "../shared/getRows";
import { getPropertyValue } from "../shared/getPropertyValue";
import { getPropertyValues } from "../shared/getPropertyValues";
import { getRowCount } from "../shared/getRowCount";

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

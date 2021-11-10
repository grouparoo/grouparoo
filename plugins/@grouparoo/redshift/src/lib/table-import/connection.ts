import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "@grouparoo/postgres/dist/lib/table-import/getSampleRows";
import { getColumns } from "@grouparoo/postgres/dist/lib/table-import/getColumns";
import { getTables } from "@grouparoo/postgres/dist/lib/table-import/getTables";
import { getChangedRows } from "@grouparoo/postgres/dist/lib/table-import/getChangedRows";
import { getPropertyValue } from "@grouparoo/postgres/dist/lib/table-import/getPropertyValue";
import { getPropertyValues } from "@grouparoo/postgres/dist/lib/table-import/getPropertyValues";
import { getChangedRowCount } from "@grouparoo/postgres/dist/lib/table-import/getChangedRowCount";

export function getConnection() {
  return buildConnection({
    apps: ["redshift"],
    name: "redshift-import-table",
    displayName: "Redshift Table Import",
    description: "Import or update Records from a Redshift database table.",
    tableOptionDescription: "The table to scan",
    getSampleRows,
    getColumns,
    getTables,
    getChangedRows,
    getPropertyValue,
    getPropertyValues,
    getChangedRowCount,
  });
}

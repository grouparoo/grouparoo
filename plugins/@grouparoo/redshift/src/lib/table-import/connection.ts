import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "@grouparoo/postgres/dist/lib/shared/getSampleRows";
import { getColumns } from "@grouparoo/postgres/dist/lib/table-import/getColumns";
import { getTables } from "@grouparoo/postgres/dist/lib/table-import/getTables";
import { getRows } from "@grouparoo/postgres/dist/lib/shared/getRows";
import { getPropertyValue } from "@grouparoo/postgres/dist/lib/shared/getPropertyValue";
import { getPropertyValues } from "@grouparoo/postgres/dist/lib/shared/getPropertyValues";
import { getRowCount } from "@grouparoo/postgres/dist/lib/shared/getRowCount";

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
    getRows,
    getPropertyValue,
    getPropertyValues,
    getRowCount,
  });
}

import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "@grouparoo/postgres/dist/lib/table-import/getSampleRows";
import { getColumns } from "@grouparoo/postgres/dist/lib/table-import/getColumns";
import { getTables } from "@grouparoo/postgres/dist/lib/table-import/getTables";
import { getChangedRows } from "@grouparoo/postgres/dist/lib/table-import/getChangedRows";
import { getPropertyValue } from "@grouparoo/postgres/dist/lib/table-import/getPropertyValue";
import { getChangedRowCount } from "@grouparoo/postgres/dist/lib/table-import/getChangedRowCount";

export function getConnection() {
  return buildConnection({
    app: "redshift",
    name: "redshift-table-import",
    description: "Import or update Profiles from a Redshift database table.",
    tableOptionDescription: "The table to scan",
    getSampleRows,
    getColumns,
    getTables,
    getChangedRows,
    getPropertyValue,
    getChangedRowCount,
  });
}

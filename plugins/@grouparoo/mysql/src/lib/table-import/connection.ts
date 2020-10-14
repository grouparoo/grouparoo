import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getChangedRows } from "./getChangedRows";
import { getPropertyValue } from "./getPropertyValue";
import { getChangedRowCount } from "./getChangedRowCount";

export function getConnection() {
  return buildConnection({
    app: "mysql",
    name: "mysql-table-import",
    description: "Import or update Profiles from a MySQL database table.",
    tableOptionDescription: "The table to scan",
    getSampleRows,
    getColumns,
    getTables,
    getChangedRows,
    getPropertyValue,
    getChangedRowCount,
  });
}

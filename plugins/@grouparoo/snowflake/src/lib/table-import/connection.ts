import { buildConnection as buildTableConnection } from "@grouparoo/app-templates/src/source/table";
import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getChangedRows } from "./getChangedRows";
import { getPropertyValue } from "./getPropertyValue";
import { getChangedRowCount } from "./getChangedRowCount";

export function getConnection() {
  return buildTableConnection({
    app: "snowflake",
    name: "snowflake-table-import",
    description: "Import or update Profiles from a Snowflake database table.",
    tableOptionDescription: "The table to scan",
    getSampleRows,
    getColumns,
    getTables,
    getChangedRows,
    getPropertyValue,
    getChangedRowCount,
  });
}

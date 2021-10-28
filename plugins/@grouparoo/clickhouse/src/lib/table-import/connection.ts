import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "@grouparoo/mysql/dist/lib/table-import/getSampleRows";
import { getTables } from "@grouparoo/mysql/dist/lib/table-import/getTables";
import { getChangedRows } from "@grouparoo/mysql/dist/lib/table-import/getChangedRows";
import { getPropertyValue } from "@grouparoo/mysql/dist/lib/table-import/getPropertyValue";
import { getPropertyValues } from "@grouparoo/mysql/dist/lib/table-import/getPropertyValues";
import { getChangedRowCount } from "@grouparoo/mysql/dist/lib/table-import/getChangedRowCount";

import { getColumns } from "./getColumns";

export function getConnection() {
  return buildConnection({
    app: "clickhouse",
    name: "clickhouse-import-table",
    displayName: "ClickHouse Table Import",
    description: "Import or update Records from a ClickHouse database table.",
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

import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "@grouparoo/mysql/dist/lib/table-import/getSampleRows";
import { getTables } from "@grouparoo/mysql/dist/lib/table-import/getTables";

import { getColumns } from "./getColumns";
import { getRows } from "./getRows";
import { getPropertyValue } from "./getPropertyValue";
import { getPropertyValues } from "./getPropertyValues";
import { getRowCount } from "./getRowCount";

export function getConnection() {
  return buildConnection({
    apps: ["clickhouse"],
    name: "clickhouse-import-table",
    displayName: "ClickHouse Table Import",
    description: "Import or update Records from a ClickHouse database table.",
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

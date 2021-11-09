import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "@grouparoo/mysql/dist/lib/query-import/executeQuery";
import { getChangedRows } from "@grouparoo/mysql/dist/lib/query-import/getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "clickhouse",
    name: "clickhouse-import-query",
    displayName: "ClickHouse Query Import",
    description: "Import or update Records via a custom ClickHouse query.",
    executeQuery,
    getChangedRows,
  });
}

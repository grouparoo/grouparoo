import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "@grouparoo/mysql/dist/lib/query-import/executeQuery";
import { getRows } from "@grouparoo/mysql/dist/lib/query-import/getRows";

export function getConnection() {
  return buildConnection({
    apps: ["clickhouse"],
    name: "clickhouse-import-query",
    displayName: "ClickHouse Query Import",
    description: "Import or update Records via a custom ClickHouse query.",
    executeQuery,
    getRows,
  });
}

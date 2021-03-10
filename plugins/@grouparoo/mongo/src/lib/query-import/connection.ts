import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getChangedRows } from "./getChangedRows";

export function getConnection() {
  return buildConnection({
    app: "mongodb",
    name: "mongodb-query-import",
    description: "Import or update profiles via a custom MongoDB query.",
    executeQuery,
    getChangedRows,
  });
}

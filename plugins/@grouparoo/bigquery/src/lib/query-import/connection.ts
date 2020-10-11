import { buildConnection } from "@grouparoo/app-templates/src/source/query";
import { executeQuery } from "./executeQuery";

export function getConnection() {
  return buildConnection({
    app: "bigquery",
    name: "bigquery-query-import",
    description: "Import or update profiles via a custom Bigquery query.",
    executeQuery,
  });
}

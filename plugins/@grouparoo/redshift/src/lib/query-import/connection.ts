import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "@grouparoo/postgres/dist/lib/query-import/executeQuery";

export function getConnection() {
  return buildConnection({
    app: "redshift",
    name: "redshift-import-query",
    displayName: "Redshift Query Import",
    description: "Import or update Records via a custom Redshift query.",
    executeQuery,
  });
}

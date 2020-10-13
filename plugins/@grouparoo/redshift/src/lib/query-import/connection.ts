import { buildConnection } from "@grouparoo/app-templates/src/source/query";
import { executeQuery } from "@grouparoo/postgres/dist/lib/query-import/executeQuery";

export function getConnection() {
  return buildConnection({
    app: "redshift",
    name: "redshift-query-import",
    description: "Import or update Profiles via a custom Redshift query.",
    executeQuery,
  });
}

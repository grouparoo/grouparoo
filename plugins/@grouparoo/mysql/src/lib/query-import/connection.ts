import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";

export function getConnection() {
  return buildConnection({
    app: "mysql",
    name: "mysql-query-import",
    description: "Import or update Profiles via a custom MySQL query.",
    executeQuery,
  });
}

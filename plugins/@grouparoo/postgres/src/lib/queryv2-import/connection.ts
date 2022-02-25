import { buildConnection } from "@grouparoo/app-templates/dist/source/queryv2";
import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getRows } from "./getRows";
import { getPropertyValue } from "./getPropertyValue";
import { getPropertyValues } from "./getPropertyValues";
import { getRowCount } from "./getRowCount";

export function getConnection() {
  return buildConnection({
    apps: ["postgres"],
    name: "postgres-import-queryv2",
    displayName: "Postgres Query Import (v2)",
    description: "Import or update Records from a Postgres database table.",
    getSampleRows,
    getColumns,
    getRows,
    getPropertyValue,
    getPropertyValues,
    getRowCount,
  });
}

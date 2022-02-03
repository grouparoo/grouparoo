import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getRows } from "./getRows";
import { getPropertyValue } from "./getPropertyValue";
import { getPropertyValues } from "./getPropertyValues";
import { getRowCount } from "./getRowCount";

export function getConnection() {
  return buildConnection({
    apps: ["mongo"],
    name: "mongo-import-table",
    displayName: "MongoDB Table Import",
    description:
      "Import or update Records from a Mongo DB database collection.",
    tableOptionDescription: "The collection to scan",
    tableOptionDisplayName: "Collection",
    getSampleRows,
    getColumns,
    getTables,
    getRows,
    getPropertyValue,
    getPropertyValues,
    getRowCount,
  });
}

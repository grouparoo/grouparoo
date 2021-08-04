import { buildConnection } from "@grouparoo/app-templates/dist/source/table";
import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getChangedRows } from "./getChangedRows";
import { getPropertyValue } from "./getPropertyValue";
import { getPropertyValues } from "./getPropertyValues";
import { getChangedRowCount } from "./getChangedRowCount";

export function getConnection() {
  return buildConnection({
    app: "mongo",
    name: "mongo-table-import",
    description:
      "Import or update Profiles from a Mongo DB database collection.",
    tableOptionDescription: "The collection to scan",
    tableOptionDisplayName: "Collection",
    getSampleRows,
    getColumns,
    getTables,
    getChangedRows,
    getPropertyValue,
    getPropertyValues,
    getChangedRowCount,
  });
}

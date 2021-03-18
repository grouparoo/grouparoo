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
    name: "mongo-collection-import",
    description:
      "Import or update Profiles from a Mongo DB database collection.",
    tableOptionDescription: "The table to scan",
    sourceOptions: {
      options: [
        {
          key: "fields",
          displayName: "Fields",
          required: true,
          description: "Comma separated list of fields",
        },
      ],
    },
    getSampleRows,
    getColumns,
    getTables,
    getChangedRows,
    getPropertyValue,
    getPropertyValues,
    getChangedRowCount,
  });
}

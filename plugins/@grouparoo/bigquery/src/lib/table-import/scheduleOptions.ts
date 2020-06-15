import { PluginConnectionScheduleOption } from "@grouparoo/core";
import { getColumns, supportedEquality, getSampleRows } from "../util";

export const scheduleOptions: PluginConnectionScheduleOption[] = [
  {
    key: "column",
    required: true,
    description: "which column to scan for changes",
    type: "list",
    options: async ({ connection, sourceOptions }) => {
      const { table } = sourceOptions;
      const columns = await getColumns(connection, table);
      const rows = await getSampleRows(connection, table, columns);

      // only handle columns that support >=
      const choices = [];

      Object.keys(columns).map((colName) => {
        const column = columns[colName];
        const ops = supportedEquality(column);
        if (ops.includes("greater than")) {
          choices.push(colName);
        }
      });

      return choices.map((col) => {
        return {
          key: col,
          examples: rows.map((row) => row[col]),
        };
      });
    },
  },
];

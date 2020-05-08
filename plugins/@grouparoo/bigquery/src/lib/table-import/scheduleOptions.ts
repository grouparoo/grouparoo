import { PluginConnectionScheduleOption } from "@grouparoo/core";
import { connect } from "../connect";
import { getColumns, supportedEquality, getSampleRows } from "../util";

export const scheduleOptions: PluginConnectionScheduleOption[] = [
  {
    key: "column",
    required: true,
    description: "which column to scan for changes",
    type: "list",
    options: async ({ appOptions, sourceOptions }) => {
      const { table } = sourceOptions;
      const client = await connect(appOptions);
      const columns = await getColumns(client, table);
      const rows = await getSampleRows(client, table, columns);

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

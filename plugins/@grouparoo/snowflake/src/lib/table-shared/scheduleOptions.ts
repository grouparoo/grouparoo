import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  FilterOperation,
  columnNameKey,
  tableNameKey,
} from "./pluginMethods";
import { PluginConnectionScheduleOption } from "@grouparoo/core";

export interface GetScheduleOptionsMethod {
  (argument: {
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
  }): PluginConnectionScheduleOption[];
}

export const getScheduleOptions: GetScheduleOptionsMethod = ({
  getSampleRows,
  getColumns,
}) => {
  return [
    {
      key: columnNameKey,
      required: true,
      description: "which column to scan for changes",
      type: "list",
      options: async ({ connection, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey];
        const columns = await getColumns({ connection, tableName });
        const rows = await getSampleRows({ connection, tableName, columns });

        // only handle columns that support >=
        const choices = [];
        Object.keys(columns).map((colName) => {
          const { filterOperations } = columns[colName];
          if (filterOperations.includes(FilterOperation.GreaterThanOrEqual)) {
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
};

import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  columnNameKey,
  tableNameKey,
} from "./pluginMethods";
import { getSortableColumnExamples } from "./getExamples";
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
      options: async ({ connection, appOptions, appId, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey]?.toString();
        return getSortableColumnExamples({
          connection,
          appOptions,
          appId,
          tableName,
          getSampleRows,
          getColumns,
        });
      },
    },
  ];
};

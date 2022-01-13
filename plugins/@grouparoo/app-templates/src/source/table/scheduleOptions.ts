import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  columnNameKey,
  tableNameKey,
} from "./pluginMethods";
import { getSortableColumnExamples } from "./getExamples";
import { PluginConnectionScheduleOption } from "@grouparoo/core";
import { GetScheduleOptionsMethodInputs } from "../shared/types";

export interface GetScheduleOptionsMethod {
  (
    args: GetScheduleOptionsMethodInputs,
    argument: {
      getSampleRows: GetSampleRowsMethod;
      getColumns: GetColumnDefinitionsMethod;
    }
  ): Promise<PluginConnectionScheduleOption[]>;
}

export const getScheduleOptions: GetScheduleOptionsMethod = async (
  args,
  { getSampleRows, getColumns }
) => {
  return [
    {
      key: columnNameKey,
      required: true,
      description: "the column used to sort your data (ORDER BY, ASC)",
      type: "list",
      options: async ({ connection, appOptions, appId, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey]?.toString();
        return getSortableColumnExamples({
          connection,
          appOptions,
          sourceOptions,
          appId,
          tableName,
          getSampleRows,
          getColumns,
        });
      },
    },
  ];
};

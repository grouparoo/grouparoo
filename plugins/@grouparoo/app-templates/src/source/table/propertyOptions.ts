import { PluginConnectionPropertyOption } from "@grouparoo/core";
import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  AggregationMethod,
  aggregationMethodKey,
  sortColumnKey,
  columnNameKey,
  tableNameKey,
} from "./pluginMethods";
import { getColumnExamples } from "./getExamples";
import { GetPropertyOptionsMethodInputs } from "../shared/types";

export interface GetPropertyOptionsMethod {
  (
    args: GetPropertyOptionsMethodInputs,
    argument: {
      getSampleRows: GetSampleRowsMethod;
      getColumns: GetColumnDefinitionsMethod;
    }
  ): Promise<PluginConnectionPropertyOption[]>;
}

const aggregationOptions = {
  [AggregationMethod.Exact]: { description: "use the value directly" },
  [AggregationMethod.Average]: { description: "take the average" },
  [AggregationMethod.Count]: { description: "count the occurrences" },
  [AggregationMethod.Sum]: { description: "add it up" },
  [AggregationMethod.Min]: { description: "find the smallest value" },
  [AggregationMethod.Max]: { description: "find the largest value" },
  [AggregationMethod.MostRecentValue]: {
    description: "use the value of the newest record",
  },
  [AggregationMethod.LeastRecentValue]: {
    description: "use the value of the oldest record",
  },
};

export const getPropertyOptions: GetPropertyOptionsMethod = async (
  { propertyOptions },
  { getSampleRows, getColumns }
) => {
  return [
    {
      key: columnNameKey,
      displayName: "Column Name",
      required: true,
      description: "where the data comes from",
      type: "typeahead",
      options: async ({ connection, appOptions, appId, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey]?.toString();
        return getColumnExamples({
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
    {
      key: aggregationMethodKey,
      displayName: "Aggregation Method",
      required: true,
      description: "how we combine the data",
      type: "list",
      options: async () => {
        const out = [];
        for (const key in aggregationOptions) {
          out.push(Object.assign({ key }, aggregationOptions[key]));
        }
        return out;
      },
    },
    {
      key: sortColumnKey,
      displayName: "Sort Column",
      required: [
        AggregationMethod.MostRecentValue as string,
        AggregationMethod.LeastRecentValue as string,
      ].includes(propertyOptions[aggregationMethodKey]?.toString())
        ? true
        : false,
      description:
        "which column to sort by for most and least recent properties",
      type: "typeahead",
      options: async ({ connection, appOptions, appId, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey]?.toString();
        return getColumnExamples({
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

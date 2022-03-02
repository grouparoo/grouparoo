import {
  AggregationMethod,
  PluginConnectionPropertyOption,
} from "@grouparoo/core";
import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  aggregationMethodKey,
  sortColumnKey,
  columnNameKey,
  tableNameKey,
  sourceQueryKey,
} from "./pluginMethods";
import { getColumnExamples } from "./getExamples";
import { GetPropertyOptionsMethodInputs } from "../shared/types";

export interface GetPropertyOptionsMethod {
  (
    args: GetPropertyOptionsMethodInputs,
    argument: {
      useAggregations: boolean;
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
  { useAggregations, getSampleRows, getColumns }
) => {
  const propertyOptionOptions: PluginConnectionPropertyOption[] = [];

  propertyOptionOptions.push({
    key: columnNameKey,
    displayName: "Column Name",
    required: true,
    description: "where the data comes from",
    primary: true,
    type: "typeahead",
    options: async ({ connection, appOptions, appId, sourceOptions }) => {
      const tableName = sourceOptions[tableNameKey]?.toString();
      const sourceQuery = sourceOptions[sourceQueryKey]?.toString();
      return getColumnExamples({
        connection,
        appOptions,
        sourceOptions,
        appId,
        tableName,
        sourceQuery,
        getSampleRows,
        getColumns,
      });
    },
  });

  if (useAggregations) {
    propertyOptionOptions.push({
      key: aggregationMethodKey,
      displayName: "Aggregation Method",
      required: true,
      description: "how we combine the data",
      type: "list",
      options: async () => {
        const out: PluginConnectionPropertyOption[] = [];
        for (const key in aggregationOptions) {
          const isDefault = key === AggregationMethod.Exact ? true : false;
          out.push(
            Object.assign({ key, default: isDefault }, aggregationOptions[key])
          );
        }
        return out;
      },
    });

    if (
      [
        AggregationMethod.MostRecentValue as string,
        AggregationMethod.LeastRecentValue as string,
      ].includes(propertyOptions[aggregationMethodKey]?.toString())
    ) {
      propertyOptionOptions.push({
        key: sortColumnKey,
        displayName: "Sort Column",
        required: true,
        description:
          "which column to sort by for most and least recent properties",
        type: "typeahead",
        options: async ({ connection, appOptions, appId, sourceOptions }) => {
          const tableName = sourceOptions[tableNameKey]?.toString();
          const sourceQuery = sourceOptions[sourceQueryKey]?.toString();
          return getColumnExamples({
            connection,
            appOptions,
            sourceOptions,
            appId,
            tableName,
            sourceQuery,
            getSampleRows,
            getColumns,
          });
        },
      });
    }
  }

  return propertyOptionOptions;
};

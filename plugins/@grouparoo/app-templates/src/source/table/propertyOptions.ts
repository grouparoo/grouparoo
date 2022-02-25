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
      aggregationOptions?: AggregationMethod[];
      getSampleRows: GetSampleRowsMethod;
      getColumns: GetColumnDefinitionsMethod;
    }
  ): Promise<PluginConnectionPropertyOption[]>;
}

const aggregationOptionMap: Record<
  AggregationMethod,
  { key: string; description: string }
> = {
  [AggregationMethod.Exact]: {
    key: AggregationMethod.Exact,
    description: "use the value directly",
  },
  [AggregationMethod.Average]: {
    key: AggregationMethod.Average,
    description: "take the average",
  },
  [AggregationMethod.Count]: {
    key: AggregationMethod.Count,
    description: "count the occurrences",
  },
  [AggregationMethod.Sum]: {
    key: AggregationMethod.Sum,
    description: "add it up",
  },
  [AggregationMethod.Min]: {
    key: AggregationMethod.Min,
    description: "find the smallest value",
  },
  [AggregationMethod.Max]: {
    key: AggregationMethod.Max,
    description: "find the largest value",
  },
  [AggregationMethod.MostRecentValue]: {
    key: AggregationMethod.MostRecentValue,
    description: "use the value of the newest record",
  },
  [AggregationMethod.LeastRecentValue]: {
    key: AggregationMethod.LeastRecentValue,
    description: "use the value of the oldest record",
  },
};

export const getPropertyOptions: GetPropertyOptionsMethod = async (
  { propertyOptions },
  { aggregationOptions, getSampleRows, getColumns }
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

  if (!aggregationOptions)
    aggregationOptions = Object.keys(
      aggregationOptionMap
    ) as AggregationMethod[];

  propertyOptionOptions.push({
    key: aggregationMethodKey,
    displayName: "Aggregation Method",
    required: true,
    description: "how we combine the data",
    type: "list",
    options: async () => {
      const out = [];
      for (const aggMethod of aggregationOptions) {
        const isDefault = aggMethod === AggregationMethod.Exact ? true : false;
        out.push({
          ...aggregationOptionMap[aggMethod],
          default: isDefault,
        });
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

  return propertyOptionOptions;
};

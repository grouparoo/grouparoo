import {
  UniquePropertyBootstrapOptions,
  AggregationMethod,
} from "@grouparoo/core";
import { aggregationMethodKey } from "./pluginMethods";

export interface GetUniquePropertyBootstrapOptionsMethod {
  ({}: { useAggregations?: boolean }): UniquePropertyBootstrapOptions;
}

export const getUniquePropertyBootstrapOptions: GetUniquePropertyBootstrapOptionsMethod =
  ({ useAggregations }) => {
    const uniquePropertyBootstrapOptions: UniquePropertyBootstrapOptions =
      async ({ mappedColumn }) => {
        const columnName = mappedColumn;
        const options = {
          column: columnName,
        };

        if (useAggregations)
          options[aggregationMethodKey] = AggregationMethod.Exact;

        return options;
      };
    return uniquePropertyBootstrapOptions;
  };

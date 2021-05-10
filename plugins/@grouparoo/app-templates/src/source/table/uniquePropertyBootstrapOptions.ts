import { UniquePropertyBootstrapOptions } from "@grouparoo/core";
import { aggregationMethodKey, AggregationMethod } from "./pluginMethods";

export interface GetUniquePropertyBootstrapOptionsMethod {
  (): UniquePropertyBootstrapOptions;
}

export const getUniquePropertyBootstrapOptions: GetUniquePropertyBootstrapOptionsMethod =
  () => {
    const uniquePropertyBootstrapOptions: UniquePropertyBootstrapOptions =
      async ({ mappedColumn }) => {
        const columnName = mappedColumn;
        const options = {
          [aggregationMethodKey]: AggregationMethod.Exact,
          column: columnName,
        };

        return options;
      };
    return uniquePropertyBootstrapOptions;
  };

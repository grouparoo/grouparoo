import { UniqueProfilePropertyRuleBootstrapOptions } from "@grouparoo/core";
import { aggregationMethodKey, AggregationMethod } from "./pluginMethods";

export const uniqueProfilePropertyRuleBootstrapOptions: UniqueProfilePropertyRuleBootstrapOptions = async ({
  mappedColumn,
}) => {
  const columnName = mappedColumn;
  const options = {
    [aggregationMethodKey]: AggregationMethod.Exact,
    column: columnName,
  };

  return options;
};

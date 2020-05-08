import { UniqueProfilePropertyRuleBootstrapOptions } from "@grouparoo/core";

export const uniqueProfilePropertyRuleBootstrapOptions: UniqueProfilePropertyRuleBootstrapOptions = async ({
  mappedColumn,
}) => {
  const options = { "aggregation method": "exact", column: mappedColumn };

  return options;
};

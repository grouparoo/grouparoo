import {
  App,
  Source,
  SimpleAppOptions,
  SimpleSourceOptions,
  SourceMapping,
} from "@grouparoo/core";

export async function uniqueProfilePropertyRuleBootstrapOptions(
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions,
  mappedColumn: string
) {
  const options = { "aggregation method": "exact", column: mappedColumn };

  return options;
}

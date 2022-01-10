import { SourceFilterMethodResponseRow } from "../classes/plugin";

export const FilterOpsDescriptions = {
  eq: "equals",
  ne: "does not equal",
  exists: "exists with any value",
  notExists: "does not exist",
  gt: "greater than",
  gte: "greater than or equal to",
  lt: "less than",
  lte: "less than or equal to",
  substring: "contains",
  notSubstring: "does not contain",
} as const;

export function buildPropertyFilterDictionary(
  options: SourceFilterMethodResponseRow[]
) {
  const propertyFilterDictionary: { [key: string]: string } = {};

  for (const option of options) {
    for (const op of option.ops) {
      if (!propertyFilterDictionary[op])
        propertyFilterDictionary[op] = FilterOpsDescriptions[op];
    }
  }
  return propertyFilterDictionary;
}

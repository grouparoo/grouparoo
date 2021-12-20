import { SourceFilterMethodResponseRow } from "../classes/plugin";

export const filterOpsDescriptions = {
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
};

export function buildPropertyFilterDictionary(
  options: SourceFilterMethodResponseRow[]
) {
  const propertyFilterDictionary: { [key: string]: string } = {};

  for (const option of options) {
    for (const op of option.ops) {
      if (!propertyFilterDictionary[op])
        propertyFilterDictionary[op] = filterOpsDescriptions[op];
    }
  }
  return propertyFilterDictionary;
}

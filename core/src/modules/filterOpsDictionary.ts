import { config } from "actionhero";
import { SourceFilterMethodResponseRow } from "../classes/plugin";

const _filterOpsDescriptions = {
  eq: "equals",
  ne: "does not equal",
  exists: "exists",
  notExists: "does not exist",
  gt: "greater than",
  gte: "greater than or equal to",
  lt: "less than",
  lte: "less than or equal to",
  substring: "is a substring of",
  notSubstring: "is not a substring of",
};

export interface PropertyFilterOp {
  op: string;
  description: string;
}

export function buildPropertyFilterOptions(
  options: SourceFilterMethodResponseRow[],
  cfg?: any
) {
  const propertyFilterOpsList: PropertyFilterOp[] = [];

  for (const option of options) {
    for (const op of option.ops) {
      propertyFilterOpsList.push({
        op: op,
        description: _filterOpsDescriptions[op],
      });
    }
  }
  console.log(propertyFilterOpsList);
  return propertyFilterOpsList;
}

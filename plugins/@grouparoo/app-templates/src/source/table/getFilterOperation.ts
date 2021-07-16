import { FilterOperation } from "@grouparoo/core";

export function getFilterOperation(op): FilterOperation {
  // op is one of the values
  const operations = Object.keys(FilterOperation);
  for (const key of operations) {
    const value = FilterOperation[key];
    if (value === op) {
      return value;
    }
  }
  throw `filter operation not found: ${op}`;
}

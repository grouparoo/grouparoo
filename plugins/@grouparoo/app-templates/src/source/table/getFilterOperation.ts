import {
  FilterOperation,
  SourceFilterMethodResponseRow,
} from "@grouparoo/core";

export function getFilterOperation(
  op: SourceFilterMethodResponseRow["ops"][number]
): FilterOperation {
  const value = Object.values(FilterOperation).find((v) => v === op);
  if (value) {
    return value;
  }
  throw `filter operation not found: ${op}`;
}

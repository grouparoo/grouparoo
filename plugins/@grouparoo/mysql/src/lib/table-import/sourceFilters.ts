import { SourceFilterMethod } from "@grouparoo/core";
import { sourcePreview } from "./sourcePreview";

export const sourceFilters: SourceFilterMethod = async (args) => {
  const options = [];
  const rows = await sourcePreview(args);

  Object.keys(rows[0]).map((col) => {
    const ops = ["equals", "does not equal"];
    const value =
      rows[0][col] ||
      rows[1][col] ||
      rows[2][col] ||
      rows[3][col] ||
      rows[4][col];

    if (typeof value === "string") {
      ops.push("contains");
      ops.push("does not contain");
    } else if (typeof value === "number") {
      ops.push("greater than");
      ops.push("less than");
    } else if (value instanceof Date) {
      ops.push("greater than");
      ops.push("less than");
    }

    options.push({
      key: col,
      ops: ops,
      canHaveRelativeMatch: false,
    });
  });

  return options;
};

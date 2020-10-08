import { SourceFilterMethod } from "@grouparoo/core";
import { tablePreview } from "./sourcePreview";

export const sourceFilters: SourceFilterMethod = async ({
  connection,
  sourceOptions,
}) => {
  const options = [];
  const rows = await tablePreview({ connection, sourceOptions });

  Object.keys(rows[0]).map((col) => {
    const ops = ["equals", "does not equal"];
    const rowWithValue = rows.filter((row) => row[col] !== undefined)[0];
    const value = rowWithValue ? rowWithValue[col] : undefined;

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

import { SourceFilterMethod } from "@grouparoo/core";
import { getColumns, supportedEquality } from "../util";

export const sourceFilters: SourceFilterMethod = async ({
  connection,
  sourceOptions,
  appOptions,
}) => {
  const { table } = sourceOptions;
  const columns = await getColumns(connection, table);

  const options = [];

  Object.keys(columns).map((colName) => {
    const column = columns[colName];
    const ops = supportedEquality(column);
    options.push({
      key: colName,
      ops: ops,
      canHaveRelativeMatch: false,
    });
  });
  return options;
};

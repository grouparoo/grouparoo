import { SourceFilterMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { getColumns, supportedEquality } from "../util";

export const sourceFilters: SourceFilterMethod = async ({
  sourceOptions,
  appOptions,
}) => {
  const { table } = sourceOptions;
  const client = await connect(appOptions);
  const columns = await getColumns(client, table);

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

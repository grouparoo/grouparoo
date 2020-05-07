import { connect } from "../connect";
import { plugin, NextFilterPluginMethod } from "@grouparoo/core";
import { castResult } from "../util";

export const nextFilter: NextFilterPluginMethod = async ({
  appOptions,
  sourceOptions,
  scheduleOptions,
}) => {
  let filter = {};
  if (!scheduleOptions.column) {
    return filter;
  }

  const { table } = sourceOptions;
  const { column } = scheduleOptions;
  const query = `SELECT MAX(\`${column}\`) AS \`max\` FROM \`${table}\``;

  const client = await connect(appOptions);
  const options = { query };
  const [rows] = await client.query(options);

  if (rows.length === 0) {
    return filter;
  }

  filter[column] = castResult(rows[0].max);
  return filter;
};

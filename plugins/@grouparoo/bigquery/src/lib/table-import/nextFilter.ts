import { NextFilterPluginMethod } from "@grouparoo/core";

export function getFilterValue(result) {
  if (result === null || result === undefined) {
    throw `no filter value result`;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof result === "object") {
    if (result.hasOwnProperty("value")) {
      return result.value;
    } else {
      throw `unknown object`;
    }
  }

  // otherwise, regular value
  return result;
}

export const nextFilter: NextFilterPluginMethod = async ({
  connection,
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

  const options = { query };
  const [rows] = await connection.query(options);

  if (rows.length === 0) {
    return filter;
  }

  filter[column] = getFilterValue(rows[0].max);
  return filter;
};

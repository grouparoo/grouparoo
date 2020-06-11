import { plugin, NextFilterPluginMethod } from "@grouparoo/core";

export const nextFilter: NextFilterPluginMethod = async ({
  connection,
  appOptions,
  sourceOptions,
  scheduleOptions,
}) => {
  let filter = {};
  if (!scheduleOptions.column) {
    return filter;
  }

  const table = sourceOptions.table;
  const query = `SELECT MAX(??) as max FROM ??`;
  const rows = await connection.asyncQuery(query, [
    scheduleOptions.column,
    table,
  ]);

  filter[scheduleOptions.column] = rows[0].max;

  if (filter[scheduleOptions.column] instanceof Date) {
    filter[scheduleOptions.column] = plugin.expandDates(
      filter[scheduleOptions.column]
    ).sql;
  }

  return filter;
};

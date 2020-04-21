import { connect } from "../connect";
import { plugin, NextFilterPluginMethod } from "@grouparoo/core";

export const nextFilter: NextFilterPluginMethod = async ({
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

  const client = await connect(appOptions);
  const rows = await client.asyncQuery(query, [scheduleOptions.column, table]);
  await client.asyncEnd();

  filter[scheduleOptions.column] = rows[0].max;

  if (filter[scheduleOptions.column] instanceof Date) {
    filter[scheduleOptions.column] = plugin.expandDates(
      filter[scheduleOptions.column]
    ).sql;
  }

  return filter;
};

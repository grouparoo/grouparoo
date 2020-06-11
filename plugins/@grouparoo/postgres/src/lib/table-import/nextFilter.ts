import format from "pg-format";
import { plugin, NextFilterPluginMethod } from "@grouparoo/core";

export const nextFilter: NextFilterPluginMethod = async ({
  connection,
  sourceOptions,
  scheduleOptions,
}) => {
  let filter = {};
  if (!scheduleOptions.column) {
    return filter;
  }

  const table = sourceOptions.table;
  const query = format(
    `SELECT MAX(%I) as max FROM %I`,
    scheduleOptions.column,
    table
  );

  const response = await connection.query(query);

  filter[scheduleOptions.column] = response.rows[0].max;

  if (filter[scheduleOptions.column] instanceof Date) {
    filter[scheduleOptions.column] = plugin.expandDates(
      filter[scheduleOptions.column]
    ).sql;
  }

  return filter;
};

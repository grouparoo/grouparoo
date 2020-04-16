import format from "pg-format";
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
  const query = format(
    `SELECT MAX(%I) as max FROM %I`,
    scheduleOptions.column,
    table
  );

  const client = await connect(appOptions);
  const response = await client.query(query);
  await client.end();

  filter[scheduleOptions.column] = response.rows[0].max;

  if (filter[scheduleOptions.column] instanceof Date) {
    filter[scheduleOptions.column] = plugin.expandDates(
      filter[scheduleOptions.column]
    ).sql;
  }

  return filter;
};

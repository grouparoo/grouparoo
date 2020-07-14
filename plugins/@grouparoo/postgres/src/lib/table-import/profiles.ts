import format from "pg-format";
import { validateQuery } from "../validateQuery";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";

export const profiles: ProfilesPluginMethod = async ({
  connection,
  run,
  sourceMapping,
  scheduleOptions,
  source,
  limit,
  highWaterMark,
  sourceOffset,
}) => {
  let importsCount = 0;
  const { table } = await source.parameterizedOptions(run);
  const sortColumn = scheduleOptions.column;

  const where = highWaterMark[sortColumn]
    ? format("%I >= %L", sortColumn, highWaterMark[sortColumn])
    : null;

  const query = where
    ? validateQuery(
        format(
          `SELECT * FROM %I WHERE %s ORDER BY %I ASC LIMIT %L OFFSET %L`,
          table,
          where,
          sortColumn,
          limit,
          sourceOffset
        )
      )
    : validateQuery(
        format(
          `SELECT * FROM %I ORDER BY %I ASC LIMIT %L OFFSET %L`,
          table,
          sortColumn,
          limit,
          sourceOffset
        )
      );

  const response = await connection.query(query);
  for (const i in response.rows) {
    await plugin.createImport(sourceMapping, run, response.rows[i]);
    importsCount++;
  }

  let nextSourceOffset = 0;
  let nextHighWaterMark = highWaterMark;
  const lastRow = response.rows
    ? response.rows[response.rows.length - 1]
    : null;

  if (lastRow) {
    if (
      highWaterMark[sortColumn] &&
      formatHighWaterMark(lastRow[sortColumn]) !== highWaterMark[sortColumn]
    ) {
      nextHighWaterMark[sortColumn] = formatHighWaterMark(lastRow[sortColumn]);
    } else if (
      highWaterMark[sortColumn] &&
      formatHighWaterMark(lastRow[sortColumn]) === highWaterMark[sortColumn]
    ) {
      nextSourceOffset = parseInt(sourceOffset.toString()) + limit;
    } else {
      nextHighWaterMark[sortColumn] = formatHighWaterMark(lastRow[sortColumn]);
    }
  }

  return {
    importsCount,
    highWaterMark: nextHighWaterMark,
    sourceOffset: nextSourceOffset,
  };
};

function formatHighWaterMark(value: any) {
  if (value instanceof Date) {
    return (
      value.toISOString().split("T")[0] +
      " " +
      value.toTimeString().split(" ")[0]
    );
  } else {
    return value.toString();
  }
}

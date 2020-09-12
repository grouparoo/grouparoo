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
  const highWaterMarkColumnName = "__hmw";
  const mappingColumn = Object.keys(sourceMapping)[0];

  const where = highWaterMark[sortColumn]
    ? format("%I >= %L", sortColumn, highWaterMark[sortColumn])
    : null;

  const query = where
    ? validateQuery(
        format(
          `SELECT *, %I::text AS %I FROM %I WHERE %s ORDER BY %I ASC, %I ASC LIMIT %L OFFSET %L`,
          sortColumn,
          highWaterMarkColumnName,
          table,
          where,
          sortColumn,
          mappingColumn,
          limit,
          sourceOffset
        )
      )
    : validateQuery(
        format(
          `SELECT *, %I::text AS %I FROM %I ORDER BY %I ASC, %I ASC LIMIT %L OFFSET %L`,
          sortColumn,
          highWaterMarkColumnName,
          table,
          sortColumn,
          mappingColumn,
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
    const currentValue = highWaterMark[sortColumn];
    const newValue = lastRow[highWaterMarkColumnName];

    if (currentValue && newValue === currentValue) {
      nextSourceOffset = parseInt(sourceOffset.toString()) + limit;
    } else {
      nextHighWaterMark[sortColumn] = newValue;
    }
  }

  return {
    importsCount,
    highWaterMark: nextHighWaterMark,
    sourceOffset: nextSourceOffset,
  };
};

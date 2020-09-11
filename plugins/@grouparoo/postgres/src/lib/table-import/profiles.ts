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
  const highwaterMarkColumnName = "__hmw";
  const mappingColumn = Object.keys(sourceMapping)[0];

  const where = highWaterMark[sortColumn]
    ? format("%I >= %L", sortColumn, highWaterMark[sortColumn])
    : null;

  const query = where
    ? validateQuery(
        format(
          `SELECT *, %I::text AS %I FROM %I WHERE %s ORDER BY %I ASC, %I ASC LIMIT %L OFFSET %L`,
          sortColumn,
          highwaterMarkColumnName,
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
          highwaterMarkColumnName,
          table,
          sortColumn,
          mappingColumn,
          limit,
          sourceOffset
        )
      );

  console.log({ query, highWaterMark, sourceOffset, limit });
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
    console.log({ lastRow });
    const currentValue = highWaterMark[sortColumn];
    const newValue = formatHighWaterMark(lastRow[highwaterMarkColumnName]);

    if (currentValue && newValue === currentValue) {
      nextSourceOffset = parseInt(sourceOffset.toString()) + limit;
    } else {
      nextHighWaterMark[sortColumn] = newValue;
    }
    console.log({ nextHighWaterMark });
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

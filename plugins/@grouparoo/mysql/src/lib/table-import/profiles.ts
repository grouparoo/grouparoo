import { validateQuery } from "../validateQuery";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";

export const profiles: ProfilesPluginMethod = async ({
  connection,
  sourceMapping,
  run,
  source,
  scheduleOptions,
  highWaterMark,
  sourceOffset,
  limit,
}) => {
  let importsCount = 0;
  const { table } = await source.parameterizedOptions(run);
  const sortColumn = scheduleOptions.column;

  const where = highWaterMark[sortColumn]
    ? `\`${sortColumn}\` >= "${highWaterMark[sortColumn]}"`
    : null;

  const query = `SELECT * FROM ?? ${
    where ? ` WHERE ${where} ` : ""
  } ORDER BY ?? ASC LIMIT ? OFFSET ?`;

  validateQuery(query);

  const rows = await connection.asyncQuery(query, [
    table,
    sortColumn,
    limit,
    parseInt(sourceOffset.toString()),
  ]);
  for (const i in rows) {
    await plugin.createImport(sourceMapping, run, rows[i]);
    importsCount++;
  }

  let nextSourceOffset = 0;
  let nextHighWaterMark = highWaterMark;
  const lastRow = rows[rows.length - 1];

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

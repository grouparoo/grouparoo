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
  const highWaterMarkColumnName = "__hmw";
  const mappingColumn = Object.keys(sourceMapping)[0];

  const where = highWaterMark[sortColumn]
    ? `\`${sortColumn}\` >= "${highWaterMark[sortColumn]}"`
    : null;

  const query = `SELECT *, CAST(?? as CHAR) as ?? FROM ?? ${
    where ? ` WHERE ${where} ` : ""
  } ORDER BY ?? ASC, ?? ASC LIMIT ? OFFSET ?`;

  validateQuery(query);

  const rows = await connection.asyncQuery(query, [
    sortColumn,
    highWaterMarkColumnName,
    table,
    sortColumn,
    mappingColumn,
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

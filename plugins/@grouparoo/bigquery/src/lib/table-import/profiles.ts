import { validateQuery } from "../validateQuery";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";
import { getColumns, makeWhereClause, castRow } from "../util";

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

  const hasHighWaterMark = Object.keys(highWaterMark).length === 1;
  const filterCol = hasHighWaterMark ? Object.keys(highWaterMark)[0] : null;
  const filterVal = hasHighWaterMark ? Object.values(highWaterMark)[0] : null;

  const columns = await getColumns(connection, table);

  const params = [];
  const types = [];
  let query = `SELECT * FROM \`${table}\``;

  if (filterCol) {
    query += " WHERE";
    query += makeWhereClause(
      columns,
      filterCol,
      null,
      ">=",
      filterVal,
      params,
      types
    );
  }
  query += ` ORDER BY \`${sortColumn}\` ASC`;
  query += ` LIMIT ${limit} OFFSET ${sourceOffset}`;
  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await connection.query(options);
  for (const row of rows) {
    const result = castRow(row);
    await plugin.createImport(sourceMapping, run, result);
    importsCount++;
  }

  const response = await connection.query(query);
  for (const i in response.rows) {
    await plugin.createImport(sourceMapping, run, response.rows[i]);
    importsCount++;
  }

  let nextSourceOffset = 0;
  let nextHighWaterMark = {};
  const lastRow = response.rows[response.rows.length - 1];
  if (
    lastRow &&
    highWaterMark[sortColumn] &&
    formatHighWaterMark(lastRow[sortColumn]) !== highWaterMark[sortColumn]
  ) {
    nextHighWaterMark[sortColumn] = formatHighWaterMark(lastRow[sortColumn]);
  } else if (
    lastRow &&
    formatHighWaterMark(lastRow[sortColumn]) === highWaterMark[sortColumn]
  ) {
    nextHighWaterMark[sortColumn] = formatHighWaterMark(lastRow[sortColumn]);
    nextSourceOffset = parseInt(sourceOffset.toString()) + limit;
  } else if (lastRow) {
    nextHighWaterMark[sortColumn] = formatHighWaterMark(lastRow[sortColumn]);
    nextSourceOffset = parseInt(sourceOffset.toString()) + limit;
  } else if (highWaterMark) {
    nextHighWaterMark = highWaterMark;
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

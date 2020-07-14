import { validateQuery } from "../validateQuery";
import { BigQueryTimestamp } from "@google-cloud/bigquery";
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
  const mappingColumn = Object.keys(sourceMapping)[0];

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
  query += ` ORDER BY \`${sortColumn}\` ASC, \`${mappingColumn}\` ASC`;
  query += ` LIMIT ${limit} OFFSET ${sourceOffset}`;
  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await connection.query(options);
  for (const row of rows) {
    const result = castRow(row);
    await plugin.createImport(sourceMapping, run, result);
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
  } else if (value instanceof BigQueryTimestamp) {
    const jsDate = new Date(value.value);
    return (
      jsDate.toISOString().split("T")[0] +
      " " +
      jsDate.toTimeString().split(" ")[0]
    );
  } else {
    return value.toString();
  }
}

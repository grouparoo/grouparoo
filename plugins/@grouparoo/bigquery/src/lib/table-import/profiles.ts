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
  const highWaterMarkColumnName = "__hmw";
  const mappingColumn = Object.keys(sourceMapping)[0];

  const hasHighWaterMark = Object.keys(highWaterMark).length === 1;
  const filterCol = hasHighWaterMark ? Object.keys(highWaterMark)[0] : null;
  const filterVal = hasHighWaterMark ? Object.values(highWaterMark)[0] : null;

  const columns = await getColumns(connection, table);

  const params = [];
  const types = [];
  let query = `SELECT *, SAFE_CAST(\`${sortColumn}\` as STRING) as \`${highWaterMarkColumnName}\` FROM \`${table}\``;

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

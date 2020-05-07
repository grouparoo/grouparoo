import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";
import { getColumns, makeWhereClause, castResult } from "../util";

export const profiles: ProfilesPluginMethod = async ({
  schedule,
  run,
  appOptions,
  sourceMapping,
  source,
  limit,
  highWaterMark,
  filter,
}) => {
  let importsCount = 0;
  const offset = highWaterMark ? parseInt(highWaterMark.toString()) : 0;

  const { column } = await schedule.getOptions();
  const { table } = await source.parameterizedOptions(run);

  const hasFilter = Object.keys(filter).length === 1;
  const filterCol = hasFilter ? Object.keys(filter)[0] : null;
  const filterVal = hasFilter ? Object.values(filter)[0] : null;

  const client = await connect(appOptions);
  const columns = await getColumns(client, table);

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
  query += ` ORDER BY \`${column}\` ASC`;
  query += ` LIMIT ${limit} OFFSET ${offset}`;
  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await client.query(options);
  for (const row of rows) {
    const result = {};
    for (const key of Object.keys(row)) {
      result[key] = castResult(row[key]);
    }
    await plugin.createImport(sourceMapping, run, result);
    importsCount++;
  }

  const nextHighWaterMark = offset + limit;
  return { importsCount, nextHighWaterMark };
};

import { makeWhereClause, castRow } from "../util";
import { validateQuery } from "../validateQuery";
import { getColumnsInternal } from "./getColumns";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
  ColumnDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export const getChangedRows: GetChangedRowsMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
  limit,
  sourceOffset,
  highWaterMarkAndSortColumnASC,
  secondarySortColumnASC,
  matchConditions,
  highWaterMarkKey,
  incremental,
}) => {
  const params = [];
  const types = [];
  const columns = await getColumnsInternal({ connection, tableName });

  let query = `SELECT *, SAFE_CAST(\`${highWaterMarkAndSortColumnASC}\` as STRING) as \`${highWaterMarkKey}\` FROM \`${tableName}\``;

  if (incremental) {
    query += await makeHighwaterWhereClause(
      columns,
      highWaterMarkCondition,
      params,
      types
    );
  }

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(columns, condition, params, types);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  query += ` ORDER BY \`${highWaterMarkAndSortColumnASC}\` ASC, \`${secondarySortColumnASC}\` ASC`;
  query += ` LIMIT ${limit} OFFSET ${sourceOffset}`;
  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await connection.query(options);
  const results: DataResponseRow[] = rows.map((row) => castRow(row));
  return results;
};

export async function makeHighwaterWhereClause(
  columns: ColumnDefinitionMap,
  highWaterMarkCondition: MatchCondition,
  params: any[],
  types: any[]
): Promise<string> {
  let query = "";

  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeWhereClause(columns, highWaterMarkCondition, params, types);
  }
  return query;
}

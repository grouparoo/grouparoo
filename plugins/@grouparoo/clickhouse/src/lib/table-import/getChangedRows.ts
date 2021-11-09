import { validateQuery } from "@grouparoo/mysql/dist/lib/validateQuery";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";
import { ColumnDefinitionMap } from "@grouparoo/app-templates/dist/source/table";

import { makeWhereClause } from "./util";
import { getColumns } from "./getColumns";

export const getChangedRows: GetChangedRowsMethod = async ({
  connection,
  appOptions,
  appId,
  tableName,
  highWaterMarkCondition,
  limit,
  sourceOffset,
  highWaterMarkAndSortColumnASC,
  secondarySortColumnASC,
  matchConditions,
  highWaterMarkKey,
}) => {
  const columns = await getColumns({
    connection,
    appOptions,
    appId,
    tableName,
  });
  const params = [];
  let query = `SELECT *, CAST(?? as CHAR) as ?? FROM ??`;
  params.push(highWaterMarkAndSortColumnASC);
  params.push(highWaterMarkKey);
  params.push(tableName);

  query += await makeHighwaterWhereClause(
    columns,
    highWaterMarkCondition,
    params
  );

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(columns, condition, params);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  query += ` ORDER BY ?? ASC, ?? ASC LIMIT ? OFFSET ?`;
  params.push(highWaterMarkAndSortColumnASC);
  params.push(secondarySortColumnASC);
  params.push(limit);
  params.push(sourceOffset);

  validateQuery(query);

  const out: DataResponseRow[] = [];
  const rows = await connection.asyncQuery(query, params);
  rows.forEach((row) => out.push(row));
  return out;
};

export async function makeHighwaterWhereClause(
  columns: ColumnDefinitionMap,
  highWaterMarkCondition: MatchCondition,
  params
): Promise<string> {
  let query = "";

  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeWhereClause(columns, highWaterMarkCondition, params);
  }
  return query;
}

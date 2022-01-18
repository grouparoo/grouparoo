import { validateQuery } from "@grouparoo/mysql/dist/lib/validateQuery";
import {
  GetChangedRowsMethod,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";
import { ColumnDefinitionMap } from "@grouparoo/app-templates/dist/source/table";
import { MySQLConnection } from "@grouparoo/mysql/dist/lib/connect";

import { makeWhereClause } from "./util";
import { getColumns } from "./getColumns";

export const getChangedRows: GetChangedRowsMethod<MySQLConnection> = async ({
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
  incremental,
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

  if (incremental) {
    query += await makeHighwaterWhereClause(
      columns,
      highWaterMarkCondition,
      params
    );
  }

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
  return await connection.asyncQuery(query, params);
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

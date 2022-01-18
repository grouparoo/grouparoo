import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
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
  let query = `SELECT *, CAST(?? as CHAR) as ?? FROM ??`;
  params.push(highWaterMarkAndSortColumnASC);
  params.push(highWaterMarkKey);
  params.push(tableName);

  if (incremental) {
    query += await makeHighwaterWhereClause(highWaterMarkCondition, params);
  }

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(condition, params);
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
  highWaterMarkCondition: MatchCondition,
  params
): Promise<string> {
  let query = "";

  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeWhereClause(highWaterMarkCondition, params);
  }
  return query;
}

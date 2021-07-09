import { makeWhereClause, castRow } from "./util";
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
}) => {
  const params = [];
  let query = `SELECT *, CAST("${highWaterMarkAndSortColumnASC}" as STRING) as "${highWaterMarkKey}" FROM "${tableName}"`;

  query += await makeHighwaterWhereClause(highWaterMarkCondition, params);

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(condition, params);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  query += ` ORDER BY "${highWaterMarkAndSortColumnASC}" ASC, "${secondarySortColumnASC}" ASC`;
  query += ` LIMIT ${limit} OFFSET ${sourceOffset}`;
  validateQuery(query);

  const rows = await connection.execute(query, params);
  const results: DataResponseRow[] = rows.map((row) => castRow(row));
  return results;
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

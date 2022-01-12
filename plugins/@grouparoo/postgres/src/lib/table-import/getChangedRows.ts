import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
  DataResponse,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";

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
  let query = `SELECT *, %I::text AS %I FROM %I`;
  params.push(highWaterMarkAndSortColumnASC);
  params.push(highWaterMarkKey);
  params.push(tableName);

  query += await makeHighwaterWhereClause(highWaterMarkCondition, params);

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(condition, params);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  query += ` ORDER BY %I ASC, %I ASC LIMIT %L OFFSET %L`;
  params.push(highWaterMarkAndSortColumnASC);
  params.push(secondarySortColumnASC);
  params.push(limit);
  params.push(sourceOffset);

  validateQuery(query);

  const out: DataResponseRow[] = [];
  const { rows } = await connection.query(format(query, ...params));
  rows.forEach((row: any) => out.push(row));
  return out;
};

export async function makeHighwaterWhereClause(
  highWaterMarkCondition: MatchCondition,
  params: (DataResponse | DataResponse[])[]
): Promise<string> {
  let query = "";

  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeWhereClause(highWaterMarkCondition, params);
  }
  return query;
}

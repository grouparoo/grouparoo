import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetRowsMethod,
  DataResponseRow,
  MatchCondition,
  DataResponse,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";
import { PostgresPoolClient } from "../connect";

export const getRows: GetRowsMethod<PostgresPoolClient> = async ({
  connection,
  sourceQuery,
  highWaterMarkCondition,
  limit,
  sourceOffset,
  highWaterMarkAndSortColumnASC,
  secondarySortColumnASC,
  matchConditions,
  sourceOptions,
  highWaterMarkKey,
  incremental,
}) => {
  const params = [];
  let query = `WITH __userQuery AS (${sourceQuery}) SELECT *, %I::text AS %I FROM __userQuery`;
  params.push(highWaterMarkAndSortColumnASC);
  params.push(highWaterMarkKey);

  if (incremental) {
    query += await makeHighwaterWhereClause(highWaterMarkCondition, params);
  }

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
  const { rows } = await connection.query<DataResponseRow>(
    format(query, ...params)
  );
  rows.forEach((row) => out.push(row));
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

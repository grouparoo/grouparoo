import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetPropertyValueMethod,
  DataResponse,
  AggregationMethod,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";
import { PostgresPoolClient } from "../connect";

export const getPropertyValue: GetPropertyValueMethod<
  PostgresPoolClient
> = async ({
  connection,
  sourceQuery,
  columnName,
  matchConditions,
  aggregationMethod,
}) => {
  if (aggregationMethod !== AggregationMethod.Exact) {
    throw new Error(
      `${aggregationMethod} is not a supported aggregation method`
    );
  }

  const params: string[] = [columnName];
  let query = `WITH __userQuery AS (${sourceQuery}) SELECT %I as __result FROM __userQuery WHERE`;

  let addAnd = false;
  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(condition, params);
    if (addAnd) {
      query += ` AND`;
    }
    query += ` ${filterClause}`;
    addAnd = true;
  }

  query += ` LIMIT 1`;

  validateQuery(query);

  let response: DataResponse[];
  console.log("Q", format(query, ...params));
  try {
    const { rows } = await connection.query<{ __result: DataResponse }>(
      format(query, ...params)
    );
    if (rows && rows.length > 0) {
      response = [rows[0].__result];
    }
  } catch (error) {
    throw new Error(
      `Error with Postgres SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return response;
};

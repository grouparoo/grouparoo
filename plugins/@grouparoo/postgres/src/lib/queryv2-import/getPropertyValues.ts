import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetPropertyValuesMethod,
  DataResponse,
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";

export const getPropertyValues: GetPropertyValuesMethod = async ({
  connection,
  sourceQuery,
  columnNames,
  tablePrimaryKeyCol,
  matchConditions,
  aggregationMethod,
  primaryKeys,
}) => {
  const responses: Record<string, Record<string, DataResponse[]>> = {};
  const columnList = columnNames.map((col) => `"${col}"`).join(", ");

  if (primaryKeys.length === 0) return responses;

  if (aggregationMethod !== AggregationMethod.Exact) {
    throw new Error(
      `${aggregationMethod} is not a supported aggregation method`
    );
  }

  const params: (string | string[])[] = [];
  let query = `WITH __userQuery AS (${sourceQuery}) SELECT "${tablePrimaryKeyCol}" as __pk, ${columnList} FROM __userQuery WHERE`;

  const conditions = [
    ...matchConditions,
    {
      columnName: tablePrimaryKeyCol,
      filterOperation: FilterOperation.In,
      values: primaryKeys,
    },
  ];

  let addAnd = false;
  for (const condition of conditions) {
    const filterClause = makeWhereClause(condition, params);
    if (addAnd) query += ` AND`;
    query += ` ${filterClause}`;
    addAnd = true;
  }

  validateQuery(query);
  console.log("QQ", format(query, ...params));

  try {
    const {
      rows,
    }: {
      rows: Record<string, DataResponse>[];
    } = await connection.query(format(query, ...params));
    for (const row of rows) {
      const pk = row.__pk.toString();
      responses[pk] ??= {};
      for (const col in row) {
        responses[pk][col] ??= [];
        if (responses[pk][col].length === 0) {
          responses[pk][col].push(row[col]);
        }
      }
    }
  } catch (error) {
    throw new Error(
      `Error with Postgres SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return responses;
};

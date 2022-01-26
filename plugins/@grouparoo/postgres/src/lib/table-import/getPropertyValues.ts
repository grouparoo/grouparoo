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
  tableName,
  columnNames,
  sortColumn,
  tablePrimaryKeyCol,
  matchConditions,
  isArray,
  aggregationMethod,
  primaryKeys,
}) => {
  const responses: Record<string, Record<string, DataResponse[]>> = {};
  const columnList = columnNames.map((col) => `"${col}"`).join(", ");
  const orderBys = [];
  const groupByColumns: string[] = [];
  let aggFunc = null;

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      if (sortColumn) {
        orderBys.push(`"${sortColumn}" ASC`);
      }
      break;
    case AggregationMethod.Average:
      aggFunc = `COALESCE(AVG(${columnList}), 0) as ${columnList}`;
      break;
    case AggregationMethod.Count:
      aggFunc = `COUNT(${columnList})::integer as ${columnList}`;
      break;
    case AggregationMethod.Sum:
      aggFunc = `COALESCE(SUM(${columnList}), 0) as ${columnList}`;
      break;
    case AggregationMethod.Min:
      aggFunc = `MIN(${columnList}) as ${columnList}`;
      break;
    case AggregationMethod.Max:
      aggFunc = `MAX(${columnList}) as ${columnList}`;
      break;
    case AggregationMethod.MostRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBys.push(`"${sortColumn}" DESC`);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBys.push(`"${sortColumn}" ASC`);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params: (string | string[])[] = [];
  let ranked = false;
  let query = `SELECT "${tablePrimaryKeyCol}" as __pk`;

  if (aggFunc) {
    query += `, ${aggFunc}`;
    groupByColumns.push(tablePrimaryKeyCol);
  } else {
    query += `, ${columnList}`;
    if (!isArray && orderBys.length > 0) {
      const order = `ORDER BY ${orderBys.join(", ")}`;
      query += `, ROW_NUMBER() OVER (PARTITION BY "${tablePrimaryKeyCol}" ${order}) AS __rownum`;
      ranked = true;
    }
  }

  query += ` FROM %I WHERE`;
  params.push(tableName);

  let addAnd = false;

  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(condition, params);
    if (addAnd) query += ` AND`;
    query += ` ${filterClause}`;
    addAnd = true;
  }

  const inClause = makeWhereClause(
    {
      columnName: tablePrimaryKeyCol,
      filterOperation: FilterOperation.In,
      values: primaryKeys,
    },
    params
  );
  if (addAnd) query += ` AND`;
  query += ` ${inClause}`;
  addAnd = true;

  if (groupByColumns.length > 0) {
    query += ` GROUP BY %I`;
    params.push(groupByColumns);
  }
  if (!ranked && orderBys.length > 0) {
    query += ` ORDER BY ${orderBys.join(", ")}`;
  }

  if (ranked) {
    // -- Ranked example
    // SELECT * FROM
    //  (SELECT  "user_id" as __pk, "created_at",
    //              ROW_NUMBER() OVER (PARTITION BY "user_id" ORDER BY "created_at" DESC) AS __rownum
    //        FROM demo.purchases
    //        WHERE  "state" = 'successful' AND "user_id" IN ('1','2','3','4')
    //   ) AS __ranked
    // WHERE __ranked.__rownum = 1;

    query = `SELECT * FROM (${query}) AS __ranked WHERE __ranked.__rownum = 1`;
  }

  validateQuery(query);

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
        if (isArray || (responses[pk][col].length === 0 && !isArray)) {
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

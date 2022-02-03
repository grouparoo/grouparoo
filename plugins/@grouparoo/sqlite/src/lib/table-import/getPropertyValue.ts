import { makeWhereClause } from "./util";
import {
  GetPropertyValueMethod,
  AggregationMethod,
} from "@grouparoo/app-templates/dist/source/table";
import SQLiteQueryBuilder from "../queryBuilder";
import { SQLiteConnection } from "../sqlite";

export const getPropertyValue: GetPropertyValueMethod<
  SQLiteConnection
> = async ({
  connection,
  tableName,
  columnName,
  sortColumn,
  matchConditions,
  aggregationMethod,
  isArray,
}) => {
  let aggSelect = `"${columnName}"`;
  let orderBy = "";
  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      if (sortColumn) {
        orderBy = `"${sortColumn}" ASC`;
      }
      break;
    case AggregationMethod.Average:
      aggSelect = `COALESCE(AVG(${aggSelect}), 0)`;
      break;
    case AggregationMethod.Count:
      aggSelect = `COUNT(CAST(${aggSelect} as INT))`;
      break;
    case AggregationMethod.Sum:
      aggSelect = `COALESCE(SUM(${aggSelect}), 0)`;
      break;
    case AggregationMethod.Min:
      aggSelect = `MIN(${aggSelect})`;
      break;
    case AggregationMethod.Max:
      aggSelect = `MAX(${aggSelect})`;
      break;
    case AggregationMethod.MostRecentValue:
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      orderBy = `"${sortColumn}" DESC`;
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      orderBy = `"${sortColumn}" ASC`;
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const queryBuilder: SQLiteQueryBuilder = new SQLiteQueryBuilder(
    `SELECT ${aggSelect} as __result FROM "${tableName}" WHERE`
  );

  let addAnd = false;
  for (const condition of matchConditions) {
    if (addAnd) queryBuilder.push("AND");
    makeWhereClause(condition, queryBuilder);
    addAnd = true;
  }

  if (orderBy.length > 0) queryBuilder.push(`ORDER BY ${orderBy}`);
  if (!isArray) queryBuilder.push("LIMIT 1");

  const [query, params] = queryBuilder.build();

  try {
    const rows = await connection.asyncQuery(query, params);
    return rows.map((row) => row.__result);
  } catch (error) {
    throw new Error(
      `Error with SQLite SQL Statement: Query - \`${query}\` [${params}], Error - ${error}`
    );
  }
};

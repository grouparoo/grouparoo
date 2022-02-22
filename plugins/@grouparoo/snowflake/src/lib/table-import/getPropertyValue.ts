import { makeWhereClause, castValue } from "../shared/util";
import { validateQuery } from "../validateQuery";
import {
  GetPropertyValueMethod,
  DataResponse,
  AggregationMethod,
} from "@grouparoo/app-templates/dist/source/table";

export const getPropertyValue: GetPropertyValueMethod = async ({
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
      aggSelect = `COUNT(${aggSelect})`;
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

  const params = [];
  let query = `SELECT ${aggSelect} as "__RESULT" FROM "${tableName}" WHERE`;
  let addAnd = false;

  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(condition, params);
    if (addAnd) query += ` AND`;
    query += ` ${filterClause}`;
    addAnd = true;
  }

  if (orderBy.length > 0) query += ` ORDER BY ${orderBy}`;
  if (!isArray) query += ` LIMIT 1`;

  validateQuery(query);

  let response: DataResponse[];
  try {
    const rows = await connection.execute(query, params);

    if (rows && rows.length > 0) {
      if (!isArray) {
        response = [castValue(rows[0].__RESULT)];
      } else {
        response = rows.map((row) => castValue(row.__RESULT));
      }
    }
  } catch (error) {
    throw new Error(
      `Error with Snowflake SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return response;
};

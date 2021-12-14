import { makeWhereClause, castValue } from "../util";
import { validateQuery } from "../validateQuery";
import { getColumnsInternal } from "./getColumns";
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
  let aggSelect = `\`${columnName}\``;
  let orderBy = "";

  const columns = await getColumnsInternal({ connection, tableName });

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      if (sortColumn) {
        orderBy = `\`${sortColumn}\` ASC`;
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
      orderBy = `\`${sortColumn}\` DESC`;
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      orderBy = `\`${sortColumn}\` ASC`;
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params = [];
  const types = [];
  let query = `SELECT ${aggSelect} as __result FROM \`${tableName}\` WHERE`;
  let addAnd = false;

  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(columns, condition, params, types);
    if (addAnd) {
      query += ` AND`;
    }
    query += ` ${filterClause}`;
    addAnd = true;
  }

  if (orderBy.length > 0) query += ` ORDER BY ${orderBy}`;
  if (!isArray) query += ` LIMIT 1`;

  validateQuery(query);

  const options = { query, params, types };

  let response: DataResponse[];
  try {
    const [rows] = await connection.query(options);
    if (rows && rows.length > 0) {
      if (!isArray) {
        response = [castValue(rows[0].__result)];
      } else {
        response = rows.map((row) => castValue(row.__result));
      }
    }
  } catch (error) {
    throw new Error(
      `Error with BigQuery SQL Statement: Query - \`${options.query}\`, Error - ${error}`
    );
  }

  return response;
};

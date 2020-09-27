import { getColumns } from "./getColumns";
import { makeWhereClause, castValue } from "./util";
import { validateQuery } from "./validateQuery";
import {
  GetPropertyValueMethod,
  FilterOperation,
  DataResponse,
} from "../table";

export const getPropertyValue: GetPropertyValueMethod = async ({
  connection,
  tableName,
  columnName,
  sortColumn,
  matchConditions,
  aggregationMethod,
  isArray,
}) => {
  const columns = await getColumns({ connection, tableName });
  let aggSelect = `\`${columnName}\``;
  let orderBy = "";
  switch (aggregationMethod) {
    case "exact":
      if (sortColumn) {
        orderBy = `"${sortColumn}" ASC`;
      }
      break;
    case "average":
      aggSelect = `COALESCE(AVG(${aggSelect}), 0)`;
      break;
    case "count":
      aggSelect = `COUNT(${aggSelect})`;
      break;
    case "sum":
      aggSelect = `COALESCE(SUM(${aggSelect}), 0)`;
      break;
    case "min":
      aggSelect = `MIN(${aggSelect})`;
      break;
    case "max":
      aggSelect = `MAX(${aggSelect})`;
      break;
    case "most recent value":
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      orderBy = `\`${sortColumn}\` DESC`;
      break;
    case "least recent value":
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
    const { columnName, value, filterOperation } = condition;
    let sqlOp;
    let match = value;
    let transform = null;
    switch (filterOperation) {
      case FilterOperation.Equal:
        sqlOp = `=`;
        break;
      case FilterOperation.NotEqual:
        sqlOp = `!=`;
        break;
      case FilterOperation.Contain:
        sqlOp = `LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        transform = "LOWER";
        break;
      case FilterOperation.NotContain:
        sqlOp = `NOT LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        transform = "LOWER";
        break;
      case FilterOperation.GreaterThan:
        sqlOp = `>`;
        break;
      case FilterOperation.GreaterThanOrEqual:
        sqlOp = `>=`;
        break;
      case FilterOperation.LessThan:
        sqlOp = `<`;
        break;
      case FilterOperation.LessThanOrEqual:
        sqlOp = `<=`;
        break;
      default:
        throw new Error(`${filterOperation} is not a known sql operation`);
    }

    const filterClause = makeWhereClause(
      columns,
      columnName,
      transform,
      sqlOp,
      match,
      params,
      types
    );
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
      `Error with BigQuery SQL Statement: Query - \`${options}\`, Error - ${error}`
    );
  }

  return response;
};

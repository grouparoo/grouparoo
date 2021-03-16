import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetPropertyValuesMethod,
  DataResponse,
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";

export const getPropertyValues: GetPropertyValuesMethod = async ({
  connection,
  tableName,
  columnName,
  sortColumn,
  tablePrimaryKeyCol,
  tableMappingCol,
  matchConditions,
  isArray,
  aggregationMethod,
  primaryKeys,
}) => {
  let responses: { [key: string]: DataResponse[] } = {};
  let aggSelect = `"${columnName}"`;
  let orderBy = "";
  let groupByColumns = [tablePrimaryKeyCol];

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      groupByColumns.push(columnName);
      if (sortColumn) {
        orderBy = `"${sortColumn}" ASC`;
        groupByColumns.push(sortColumn);
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
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `"${sortColumn}" DESC`;
      groupByColumns.push(columnName);
      groupByColumns.push(sortColumn);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `"${sortColumn}" ASC`;
      groupByColumns.push(columnName);
      groupByColumns.push(sortColumn);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  let query = `SELECT ${aggSelect} as __result, "${tablePrimaryKeyCol}" as __pk FROM ${tableName} WHERE`;
  let addAnd = false;

  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(condition);
    if (addAnd) query += ` AND`;
    query += ` ${filterClause}`;
    addAnd = true;
  }

  const inClause = makeWhereClause({
    columnName: tablePrimaryKeyCol,
    filterOperation: FilterOperation.In,
    values: primaryKeys,
  });
  if (addAnd) query += ` AND`;
  query += ` ${inClause}`;
  addAnd = true;

  if (groupByColumns.length > 0) {
    query += ` GROUP BY ${groupByColumns}`;
  }
  if (orderBy.length > 0) {
    query += ` ORDER BY ${orderBy}`;
  }

  validateQuery(query);

  console.log(">>>>> ", "getPropertyValues: ", query);

  try {
    const rows: Array<{
      __pk: string;
      __result: any;
    }> = await connection.asyncQuery(query);

    rows.forEach((row) => {
      if (!responses[row.__pk]) responses[row.__pk] = [];
      if (isArray || (responses[row.__pk].length === 0 && !isArray)) {
        responses[row.__pk].push(row.__result);
      }
    });
  } catch (error) {
    throw new Error(
      `Error with Postgres SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return responses;
};

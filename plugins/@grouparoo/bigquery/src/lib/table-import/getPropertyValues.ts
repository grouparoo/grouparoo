import { makeWhereClause, castValue } from "../util";
import { validateQuery } from "../validateQuery";
import { getColumnsInternal } from "./getColumns";
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
  let aggSelect = `\`${columnName}\``;
  let orderBy = "";
  let groupByColumns = [tablePrimaryKeyCol];
  const columns = await getColumnsInternal({ connection, tableName });

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      groupByColumns.push(columnName);
      if (sortColumn) {
        orderBy = `\`${sortColumn}\` ASC`;
        groupByColumns.push(sortColumn);
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
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `\`${sortColumn}\` DESC`;
      groupByColumns.push(columnName);
      groupByColumns.push(sortColumn);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `\`${sortColumn}\` ASC`;
      groupByColumns.push(columnName);
      groupByColumns.push(sortColumn);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params = [];
  const types = [];
  let query = `SELECT ${aggSelect} as __result, \`${tablePrimaryKeyCol}\` as __pk FROM \`${tableName}\` WHERE`;
  let addAnd = false;

  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(columns, condition, params, types);
    if (addAnd) query += ` AND`;
    query += ` ${filterClause}`;
    addAnd = true;
  }

  const inClause = makeWhereClause(
    columns,
    {
      columnName: tablePrimaryKeyCol,
      filterOperation: FilterOperation.In,
      values: primaryKeys,
    },
    params,
    types
  );
  if (addAnd) query += ` AND`;
  query += ` ${inClause}`;
  // for BigQuery need to indicate that the type of the IN-clause array is an array of numbers or strings, ie: `[INT64]` rather than `INT64`
  types.push([types.pop()]);
  addAnd = true;

  if (groupByColumns.length > 0) {
    query += ` GROUP BY ${groupByColumns.map((c) => `\`${c}\``).join(", ")}`;
  }
  if (orderBy.length > 0) {
    query += ` ORDER BY ${orderBy}`;
  }

  validateQuery(query);
  const options = { query, params, types };

  try {
    const [rows]: [Array<{ __pk: string; __result: any }>] =
      await connection.query(options);

    rows.forEach((row) => {
      if (!responses[row.__pk]) responses[row.__pk] = [];
      if (isArray || (responses[row.__pk].length === 0 && !isArray)) {
        responses[row.__pk].push(castValue(row.__result));
      }
    });
  } catch (error) {
    throw new Error(
      `Error with Postgres SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return responses;
};

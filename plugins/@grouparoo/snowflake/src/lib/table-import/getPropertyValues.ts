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
  columnNames,
  sortColumn,
  tablePrimaryKeyCol,
  tableMappingCol,
  matchConditions,
  isArray,
  aggregationMethod,
  primaryKeys,
}) => {
  let responses: { [key: string]: { [column: string]: DataResponse[] } } = {};
  let aggSelect = columnNames.map((col) => `"${col}"`).join(", ");
  let orderBy = "";
  let groupByColumns = [tablePrimaryKeyCol];

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      groupByColumns.push(...columnNames);
      if (sortColumn) {
        orderBy = `"${sortColumn}" ASC`;
        groupByColumns.push(sortColumn);
      }
      break;
    case AggregationMethod.Average:
      aggSelect = `COALESCE(AVG(${aggSelect}), 0) as ${aggSelect}`;
      break;
    case AggregationMethod.Count:
      aggSelect = `COUNT(${aggSelect}) as ${aggSelect}`;
      break;
    case AggregationMethod.Sum:
      aggSelect = `COALESCE(SUM(${aggSelect}), 0) as ${aggSelect}`;
      break;
    case AggregationMethod.Min:
      aggSelect = `MIN(${aggSelect}) as ${aggSelect}`;
      break;
    case AggregationMethod.Max:
      aggSelect = `MAX(${aggSelect}) as ${aggSelect}`;
      break;
    case AggregationMethod.MostRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `"${sortColumn}" DESC`;
      groupByColumns.push(columnNames[0]);
      groupByColumns.push(sortColumn);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `"${sortColumn}" ASC`;
      groupByColumns.push(columnNames[0]);
      groupByColumns.push(sortColumn);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params: Array<any> = [];
  let query = `SELECT ${aggSelect}, "${tablePrimaryKeyCol}" as "__pk" FROM "${tableName}" WHERE`;
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
    query += ` GROUP BY ${groupByColumns.map((c) => `"${c}"`).join(", ")}`;
  }

  if (orderBy.length > 0) {
    query += ` ORDER BY ${orderBy}`;
  }

  validateQuery(query);

  try {
    const rows: Array<{ [column: string]: DataResponse }> =
      await connection.execute(query, params);

    for (const row of rows) {
      const pk = row.__pk.toString();
      responses[pk] = {};
      for (const col in row) {
        responses[pk][col] = [];
        if (isArray || (responses[pk][col].length === 0 && !isArray)) {
          responses[pk][col].push(row[col]);
        }
      }
    }
  } catch (error) {
    throw new Error(
      `Error with Snowflake SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return responses;
};

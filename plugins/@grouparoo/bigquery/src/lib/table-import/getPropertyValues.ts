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
  let aggSelect = columnNames.map((col) => `\`${col}\``).join(", ");
  let orderBy = "";
  let groupByColumns = [tablePrimaryKeyCol];
  const columns = await getColumnsInternal({ connection, tableName });

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      groupByColumns.push(...columnNames);
      if (sortColumn) {
        orderBy = `\`${sortColumn}\` ASC`;
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
      orderBy = `\`${sortColumn}\` DESC`;
      groupByColumns.push(columnNames[0]);
      groupByColumns.push(sortColumn);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `\`${sortColumn}\` ASC`;
      groupByColumns.push(columnNames[0]);
      groupByColumns.push(sortColumn);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params = [];
  const types = [];
  tablePrimaryKeyCol.includes(aggSelect)
    ? (aggSelect = "")
    : (aggSelect = aggSelect + ",");
  let query = `SELECT ${aggSelect}\`${tablePrimaryKeyCol}\` as __pk FROM \`${tableName}\` WHERE`;
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
    const [rows]: [Array<{ [column: string]: DataResponse }>] =
      await connection.query(options);

    for (const row of rows) {
      const pk = row.__pk.toString();
      responses[pk] = {};
      for (const col in row) {
        responses[pk][col] = [];
        if (isArray || (responses[pk][col].length === 0 && !isArray)) {
          responses[pk][col].push(castValue(row[col]));
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

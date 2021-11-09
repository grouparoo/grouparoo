import { validateQuery } from "@grouparoo/mysql/dist/lib/validateQuery";
import {
  GetPropertyValuesMethod,
  DataResponse,
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";

import { makeWhereClause } from "./util";
import { getColumns } from "./getColumns";

const AGG_COL_SUFFIX = "__grouparoo_agg";

export const getPropertyValues: GetPropertyValuesMethod = async ({
  connection,
  appOptions,
  appId,
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

  if (primaryKeys.length === 0) return responses;

  const columns = await getColumns({
    connection,
    appOptions,
    appId,
    tableName,
  });

  const aggName =
    aggregationMethod && columnNames.length === 1
      ? `${columnNames.join("_")}${AGG_COL_SUFFIX}`
      : "";

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      groupByColumns.push(...columnNames);
      if (sortColumn) {
        orderBy = `"${sortColumn}" ASC`;
        groupByColumns.push(sortColumn);
      }
      break;
    case AggregationMethod.Average:
      aggSelect = `COALESCE(AVG(${aggSelect}), 0) as ${aggName}`;
      break;
    case AggregationMethod.Count:
      aggSelect = `COUNT(${aggSelect}) as ${aggName}`;
      break;
    case AggregationMethod.Sum:
      aggSelect = `COALESCE(SUM(${aggSelect}), 0) as ${aggName}`;
      break;
    case AggregationMethod.Min:
      aggSelect = `MIN(${aggSelect}) as ${aggName}`;
      break;
    case AggregationMethod.Max:
      aggSelect = `MAX(${aggSelect}) as ${aggName}`;
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

  const params: Array<any> = [tableName];
  let query = `SELECT ${aggSelect}, \`${tablePrimaryKeyCol}\` as __pk FROM ?? WHERE`;
  let addAnd = false;

  for (const condition of matchConditions) {
    const filterClause = makeWhereClause(columns, condition, params);
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
    params
  );
  if (addAnd) query += ` AND`;
  query += ` ${inClause}`;
  addAnd = true;

  if (groupByColumns.length > 0) {
    query += ` GROUP BY ??`;
    params.push(groupByColumns);
  }
  if (orderBy.length > 0) {
    query += ` ORDER BY ${orderBy}`;
  }

  validateQuery(query);

  try {
    const rows: Array<{ [column: string]: DataResponse }> =
      await connection.asyncQuery(query, params);

    for (const row of rows) {
      const pk = row.__pk.toString();
      responses[pk] = {};
      for (const col in row) {
        const responseCol = col.replace(AGG_COL_SUFFIX, "");
        responses[pk][responseCol] = [];
        if (isArray || (responses[pk][responseCol].length === 0 && !isArray)) {
          responses[pk][responseCol].push(row[col]);
        }
      }
    }
  } catch (error) {
    throw new Error(
      `Error with MySQL SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return responses;
};

import { validateQuery } from "@grouparoo/mysql/dist/lib/validateQuery";
import {
  GetPropertyValuesMethod,
  DataResponse,
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";
import { MySQLConnection } from "@grouparoo/mysql/dist/lib/connect";

import { makeWhereClause } from "./util";
import { getColumns } from "./getColumns";

const AGG_COL_SUFFIX = "__grouparoo_agg";

type ClickHouseGetPropertyValuesMethod =
  GetPropertyValuesMethod<MySQLConnection>;

export const getPropertyValues: ClickHouseGetPropertyValuesMethod = async ({
  connection,
  appOptions,
  appId,
  tableName,
  columnNames,
  sortColumn,
  tablePrimaryKeyCol,
  matchConditions,
  isArray,
  aggregationMethod,
  primaryKeys,
}) => {
  let responses: Record<string, Record<string, DataResponse[]>> = {};
  let columnList = columnNames.map((col) => `\`${col}\``).join(", ");
  let aggFunc: string;
  const orderBys: string[] = [];
  const groupByColumns: string[] = [];

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
      if (sortColumn) {
        orderBys.push(`\`${sortColumn}\` ASC`);
      }
      break;
    case AggregationMethod.Average:
      aggFunc = `COALESCE(AVG(${columnList}), 0) as ${aggName}`;
      break;
    case AggregationMethod.Count:
      aggFunc = `COUNT(${columnList}) as ${aggName}`;
      break;
    case AggregationMethod.Sum:
      aggFunc = `COALESCE(SUM(${columnList}), 0) as ${aggName}`;
      break;
    case AggregationMethod.Min:
      aggFunc = `MIN(${columnList}) as ${aggName}`;
      break;
    case AggregationMethod.Max:
      aggFunc = `MAX(${columnList}) as ${aggName}`;
      break;
    case AggregationMethod.MostRecentValue:
      if (!sortColumn)
        throw new Error(
          "AggregationMethod.MostRecentValue must have a sortColumn"
        );
      orderBys.push(`"${sortColumn}" DESC`);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn)
        throw new Error(
          "AggregationMethod.LeastRecentValue must have a sortColumn"
        );
      orderBys.push(`"${sortColumn}" ASC`);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params: (string | string[])[] = [];
  let ranked = false;
  let query = `SELECT \`${tablePrimaryKeyCol}\` as __pk`;

  if (aggFunc) {
    query += `, ${aggFunc}`;
    groupByColumns.push(tablePrimaryKeyCol);
  } else {
    query += `, ${columnList}`;
    if (!isArray && orderBys.length > 0) {
      const order = `ORDER BY ${orderBys.join(", ")}`;
      query += `, ROW_NUMBER() OVER (PARTITION BY \`${tablePrimaryKeyCol}\` ${order}) AS __rownum`;
      ranked = true;
    }
  }

  query += " FROM ?? WHERE";
  params.push(tableName);

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

  if (addAnd) {
    query += ` AND`;
  }
  query += ` ${inClause}`;

  if (groupByColumns.length > 0) {
    query += ` GROUP BY ??`;
    params.push(groupByColumns);
  }

  if (!ranked && orderBys.length > 0) {
    query += ` ORDER BY ${orderBys.join(", ")}`;
  }

  if (ranked) {
    // -- Ranked example
    // SELECT * FROM
    // (SELECT `user_id` as __pk, `created_at`,
    // ROW_NUMBER() OVER (PARTITION BY `user_id` ORDER BY `created_at` DESC) AS __rownum
    // FROM purchases
    // WHERE `state` = 'successful' AND `user_id` IN ('1','2','3','4')
    // ) AS __ranked
    // WHERE __ranked.__rownum = 1
    query = `SELECT * FROM (${query}) AS __ranked WHERE __ranked.__rownum = 1`;
  }

  validateQuery(query);

  try {
    const rows: Record<string, DataResponse>[] = await connection.asyncQuery(
      query,
      params
    );

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

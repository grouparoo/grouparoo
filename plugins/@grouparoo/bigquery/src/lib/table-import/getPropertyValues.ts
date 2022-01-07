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
  let columnList = columnNames.map((col) => `\`${col}\``).join(", ");
  const orderBys = [];
  const groupByColumns = [];
  let aggFunc = null;

  const columns = await getColumnsInternal({ connection, tableName });

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      if (sortColumn) {
        orderBys.push(`\`${sortColumn}\` ASC`);
      }
      break;
    case AggregationMethod.Average:
      aggFunc = `COALESCE(AVG(${columnList}), 0) as ${columnList}`;
      break;
    case AggregationMethod.Count:
      aggFunc = `COUNT(${columnList}) as ${columnList}`;
      break;
    case AggregationMethod.Sum:
      aggFunc = `COALESCE(SUM(${columnList}), 0) as ${columnList}`;
      break;
    case AggregationMethod.Min:
      aggFunc = `MIN(${columnList}) as ${columnList}`;
      break;
    case AggregationMethod.Max:
      aggFunc = `MAX(${columnList}) as ${columnList}`;
      break;
    case AggregationMethod.MostRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBys.push(`\`${sortColumn}\` DESC`);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBys.push(`\`${sortColumn}\` ASC`);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params: any[] = [];
  const types = [];
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

  query += ` FROM \`${tableName}\` WHERE`;

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
  const options = { query, params, types };

  try {
    const [rows]: [{ [column: string]: DataResponse }[]] =
      await connection.query(options);

    for (const row of rows) {
      const pk = row.__pk.toString();
      responses[pk] ??= {};
      for (const col in row) {
        responses[pk][col] ??= [];
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

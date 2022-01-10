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
  let columnList = columnNames.map((col) => `\`${col}\``).join(", ");
  const orderBys = [];
  const groupByColumns = [];
  let aggFunc = null;

  const mysqlVersion = await connection.getMajorVersion();

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
  let ranked = false;
  let query = `SELECT \`${tablePrimaryKeyCol}\` as __pk`;

  if (aggFunc) {
    query += `, ${aggFunc}`;
    groupByColumns.push(tablePrimaryKeyCol);
  } else {
    query += `, ${columnList}`;
    if (!isArray && orderBys.length > 0 && mysqlVersion >= 8) {
      // windowing function only supported in 8+
      // when available, this makes it so it only returns one row per primary key
      // otherwise, it will ORDER BY below and just be less efficient
      const order = `ORDER BY ${orderBys.join(", ")}`;
      query += `, ROW_NUMBER() OVER (PARTITION BY \`${tablePrimaryKeyCol}\` ${order}) AS __rownum`;
      ranked = true;
    }
  }

  query += ` FROM ?? WHERE`;
  params.push(tableName);

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
    const rows: { [column: string]: DataResponse }[] =
      await connection.asyncQuery(query, params);

    for (const row of rows) {
      const pk = row.__pk.toString();
      responses[pk] ??= {};
      for (const col in row) {
        responses[pk][col] ??= [];
        if (isArray || (responses[pk][col].length === 0 && !isArray)) {
          responses[pk][col].push(row[col]);
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

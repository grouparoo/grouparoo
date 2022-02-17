import { makeWhereClause } from "../shared/util";
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
  let columnList = columnNames.map((col) => `"${col}"`).join(", ");
  const orderBys = [];
  let groupByColumns = [];
  let aggFunc = null;

  if (primaryKeys.length === 0) return responses;

  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      if (sortColumn) {
        orderBys.push(`"${sortColumn}" ASC`);
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
      orderBys.push(`"${sortColumn}" DESC`);
      break;
    case AggregationMethod.LeastRecentValue:
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBys.push(`"${sortColumn}" ASC`);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params: any[] = [];
  let ranked = false;
  let query = `SELECT "${tablePrimaryKeyCol}" as "__PK"`;

  if (aggFunc) {
    query += `, ${aggFunc}`;
    groupByColumns.push(tablePrimaryKeyCol);
  } else {
    query += `, ${columnList}`;
    if (!isArray && orderBys.length > 0) {
      const order = `ORDER BY ${orderBys.join(", ")}`;
      query += `, ROW_NUMBER() OVER (PARTITION BY "${tablePrimaryKeyCol}" ${order}) AS __ROWNUM`;
      ranked = true;
    }
  }

  query += ` FROM "${tableName}" WHERE`;

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
  if (!ranked && orderBys.length > 0) {
    query += ` ORDER BY ${orderBys.join(", ")}`;
  }

  if (ranked) {
    // -- Ranked example
    // SELECT * FROM
    //  (SELECT  "USER_ID" as "__PK", "CREATED_AT",
    //              ROW_NUMBER() OVER (PARTITION BY "USER_ID" ORDER BY "created_at" DESC) AS __ROWNUM
    //        FROM demo.purchases
    //        WHERE  "STATE" = 'successful' AND "USER_ID" IN ('1','2','3','4')
    //   ) AS __RANKED
    // WHERE __RANKED.__ROWNUM = 1;

    query = `SELECT * FROM (${query}) AS __RANKED WHERE __RANKED.__ROWNUM = 1`;
  }

  validateQuery(query);

  try {
    const rows: { [column: string]: DataResponse }[] = await connection.execute(
      query,
      params
    );

    for (const row of rows) {
      const pk = row.__PK.toString();
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
      `Error with Snowflake SQL Statement: Query - \`${query}\`, Error - ${error}`
    );
  }

  return responses;
};

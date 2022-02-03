import { makeWhereClause } from "./util";
import { GetRowsMethod } from "@grouparoo/app-templates/dist/source/table";
import SQLiteQueryBuilder from "../queryBuilder";
import { SQLiteConnection } from "../sqlite";

export const getRows: GetRowsMethod<SQLiteConnection> = async ({
  connection,
  tableName,
  highWaterMarkCondition,
  limit,
  sourceOffset,
  highWaterMarkAndSortColumnASC,
  secondarySortColumnASC,
  matchConditions,
  highWaterMarkKey,
  incremental,
}) => {
  // Begin with SELECT statement.
  const queryBuilder = new SQLiteQueryBuilder(
    `SELECT *, "${highWaterMarkAndSortColumnASC}" AS "${highWaterMarkKey}" FROM "${tableName}"`
  );

  // Add WHERE clause, if there is a condition for the HWM.
  if (incremental && highWaterMarkCondition) {
    queryBuilder.push(`WHERE`);
    makeWhereClause(highWaterMarkCondition, queryBuilder);
  }

  // Add additional WHERE clauses for Filters on the schedule
  for (const [idx, condition] of matchConditions.entries()) {
    queryBuilder.push(highWaterMarkCondition || idx > 0 ? "AND" : "WHERE");
    makeWhereClause(condition, queryBuilder);
  }

  // Add ORDER, LIMIT, and OFFSET clauses.
  queryBuilder.push(
    `ORDER BY "${highWaterMarkAndSortColumnASC}" ASC, "${secondarySortColumnASC}" ASC LIMIT ${limit} OFFSET ${sourceOffset}`
  );

  // Run the query and return the result.
  return await connection.asyncQuery(...queryBuilder.build());
};

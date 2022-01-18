import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";

export const getChangedRows: GetChangedRowsMethod = async ({
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
}: {
  highWaterMarkCondition: MatchCondition;
  [key: string]: any;
}) => {
  // Begin with SELECT statement.
  let query = `SELECT *, ${highWaterMarkAndSortColumnASC} AS ${highWaterMarkKey} FROM "${tableName}"`;

  // Add WHERE clause, if there is a condition for the HWM.
  if (incremental && highWaterMarkCondition) {
    query += ` WHERE ${makeWhereClause(highWaterMarkCondition)}`;
  }

  // Add additional WHERE clauses for Filters on the schedule
  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(condition);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  // Add ORDER, LIMIT, and OFFSET clauses.
  query += ` ORDER BY ${highWaterMarkAndSortColumnASC} ASC, ${secondarySortColumnASC} ASC LIMIT ${limit} OFFSET ${sourceOffset}`;

  // Ensure we don't have any extraneous characters, multiple queries, etc.
  validateQuery(query);

  // Run the query and return the result.
  const out: DataResponseRow[] = await connection.asyncQuery(query);
  return out;
};

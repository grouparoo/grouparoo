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
  highWaterMarkKey,
}: {
  highWaterMarkCondition: MatchCondition;
  [key: string]: any;
}) => {
  // Begin with SELECT statement.
  let query = `SELECT *, ${highWaterMarkAndSortColumnASC} AS ${highWaterMarkKey} FROM ${tableName}`;

  // Add WHERE clause, if there is a condition for the HWM.
  if (highWaterMarkCondition) {
    query += ` WHERE ${makeWhereClause(highWaterMarkCondition)}`;
  }

  // Add ORDER, LIMIT, and OFFSET clauses.
  query += ` ORDER BY ${highWaterMarkAndSortColumnASC} ASC, ${secondarySortColumnASC} ASC LIMIT ${limit} OFFSET ${sourceOffset}`;

  // Ensure we don't have any extraneous characters, multiple queries, etc.
  validateQuery(query);

  console.log(">>>>> ", "getChangedRows: ", query);

  // Run the query and return the result.
  const out: DataResponseRow[] = await connection.asyncQuery(query);
  return out;
};

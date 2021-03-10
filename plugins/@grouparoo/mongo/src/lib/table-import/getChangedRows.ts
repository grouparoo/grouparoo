import { makeFindQuery, castRow } from "./util";
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
}) => {
  let query = `SELECT *, CAST("${highWaterMarkAndSortColumnASC}" as STRING) as "${highWaterMarkKey}" FROM "${tableName}"`;
  query += await makeHighwaterWhereClause(highWaterMarkCondition);
  query += ` ORDER BY "${highWaterMarkAndSortColumnASC}" ASC, "${secondarySortColumnASC}" ASC`;
  query += ` LIMIT ${limit} OFFSET ${sourceOffset}`;
  validateQuery(query);

  const rows = await connection.execute(query);
  const results: DataResponseRow[] = rows.map((row) => castRow(row));
  return results;
};

export async function makeHighwaterWhereClause(
  highWaterMarkCondition: MatchCondition
): Promise<string> {
  let query = "";

  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeFindQuery(highWaterMarkCondition);
  }
  return query;
}

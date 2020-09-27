import { getColumns } from "./getColumns";
import { makeWhereClause, castRow } from "./util";
import { validateQuery } from "./validateQuery";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
} from "../table";

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
  const params = [];
  const types = [];
  let query = `SELECT *, SAFE_CAST(\`${highWaterMarkAndSortColumnASC}\` as STRING) as \`${highWaterMarkKey}\` FROM \`${tableName}\``;
  query += await makeHighwaterWhereClause(
    connection,
    tableName,
    highWaterMarkCondition,
    params,
    types
  );
  query += ` ORDER BY \`${highWaterMarkAndSortColumnASC}\` ASC, \`${secondarySortColumnASC}\` ASC`;
  query += ` LIMIT ${limit} OFFSET ${sourceOffset}`;
  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await connection.query(options);
  const results: DataResponseRow[] = rows.map((row) => castRow(row));
  return results;
};

export async function makeHighwaterWhereClause(
  connection,
  tableName: string,
  highWaterMarkCondition: MatchCondition,
  params,
  types
): Promise<string> {
  let query = "";

  const columns = await getColumns({ connection, tableName });
  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeWhereClause(
      columns,
      highWaterMarkCondition.columnName,
      null,
      highWaterMarkCondition.filterOperation,
      highWaterMarkCondition.value,
      params,
      types
    );
  }
  return query;
}

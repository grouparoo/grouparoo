import { makeWhereClause, castRow } from "../util";
import { validateQuery } from "./validateQuery";
import { getColumnsInternal } from "./getColumns";
import { ColumnDefinitionMap } from "../../../../app-templates/dist/source/table/pluginMethods";
import {
  GetChangedRowsMethod,
  DataResponseRow,
  MatchCondition,
} from "@grouparoo/app-templates/src/source/table";

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
  const columns = await getColumnsInternal({ connection, tableName });

  let query = `SELECT *, SAFE_CAST(\`${highWaterMarkAndSortColumnASC}\` as STRING) as \`${highWaterMarkKey}\` FROM \`${tableName}\``;
  query += await makeHighwaterWhereClause(
    columns,
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
  columns: ColumnDefinitionMap,
  highWaterMarkCondition: MatchCondition,
  params: Array<any>,
  types: Array<any>
): Promise<string> {
  let query = "";

  if (highWaterMarkCondition) {
    query += " WHERE";
    query += makeWhereClause(columns, highWaterMarkCondition, params, types);
  }
  return query;
}

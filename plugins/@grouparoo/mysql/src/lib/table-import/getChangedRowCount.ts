import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { validateQuery } from "../validateQuery";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  const params = [];
  let query = `SELECT COUNT(*) AS __count FROM ??`;
  params.push(tableName);

  query += await makeHighwaterWhereClause(highWaterMarkCondition, params);
  validateQuery(query);

  const rows = await connection.asyncQuery(query, params);
  const total = parseInt(rows[0]["__count"], 10);
  return total;
};

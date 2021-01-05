import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { validateQuery } from "../validateQuery";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  const params = [];
  let query = `SELECT COUNT (*) AS __COUNT FROM "${tableName}"`;
  query += await makeHighwaterWhereClause(highWaterMarkCondition, params);
  validateQuery(query);

  const rows = await connection.execute(query, params);
  const total = parseInt(rows[0]["__COUNT"]);
  return total;
};

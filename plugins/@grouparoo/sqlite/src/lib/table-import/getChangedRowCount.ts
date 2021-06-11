import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  let query = `SELECT COUNT(*) AS __count FROM "${tableName}"`;

  if (highWaterMarkCondition) {
    query += ` WHERE ${makeWhereClause(highWaterMarkCondition)}`;
  }

  validateQuery(query);
  const rows = await connection.asyncQuery(query);
  const total = parseInt(rows[0]["__count"]);

  return total;
};

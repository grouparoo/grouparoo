import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { validateQuery } from "../validateQuery";
import format from "pg-format";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  const params = [];
  let query = `SELECT COUNT(*) AS __count FROM %I`;
  params.push(tableName);

  query += await makeHighwaterWhereClause(highWaterMarkCondition, params);
  validateQuery(query);

  const { rows } = await connection.query(format(query, ...params));
  const total = parseInt(rows[0]["__count"]);
  return total;
};

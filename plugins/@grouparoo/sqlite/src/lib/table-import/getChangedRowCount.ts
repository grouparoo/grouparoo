import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeWhereClause } from "./util";
import { validateQuery } from "../validateQuery";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  matchConditions,
  highWaterMarkCondition,
  incremental,
}) => {
  let query = `SELECT COUNT(*) AS __count FROM "${tableName}"`;

  if (incremental && highWaterMarkCondition) {
    query += ` WHERE ${makeWhereClause(highWaterMarkCondition)}`;
  }

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(condition);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  validateQuery(query);
  const rows = await connection.asyncQuery(query);
  const total = parseInt(rows[0]["__count"]);

  return total;
};

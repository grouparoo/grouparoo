import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { validateQuery } from "../validateQuery";
import { makeWhereClause } from "./util";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  matchConditions,
  highWaterMarkCondition,
  incremental,
}) => {
  const params = [];
  let query = `SELECT COUNT(*) AS __count FROM ??`;
  params.push(tableName);

  if (incremental) {
    query += await makeHighwaterWhereClause(highWaterMarkCondition, params);
  }

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(condition, params);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  validateQuery(query);

  const rows = await connection.asyncQuery(query, params);
  const total = parseInt(rows[0]["__count"]);
  return total;
};

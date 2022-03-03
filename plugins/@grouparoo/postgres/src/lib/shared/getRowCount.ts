import { GetRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getRows";
import { validateQuery } from "../validateQuery";
import format from "pg-format";
import { makeFromClause, makeWhereClause } from "./util";

export const getRowCount: GetRowCountMethod = async ({
  incremental,
  connection,
  tableName,
  sourceQuery,
  matchConditions,
  highWaterMarkCondition,
}) => {
  const params: string[] = [];
  const from = makeFromClause({ tableName, sourceQuery }, params);
  let query = `SELECT COUNT(*) AS __count ${from}`;

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

  const { rows } = await connection.query(format(query, ...params));
  const total = parseInt(rows[0]["__count"]);
  return total;
};

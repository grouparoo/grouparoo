import {
  GetRowCountMethod,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getRows";
import { validateQuery } from "../validateQuery";
import format from "pg-format";
import { makeWhereClause } from "./util";
import { PostgresPoolClient } from "../connect";

export const getRowCount: GetRowCountMethod = async ({
  incremental,
  connection,
  tableName,
  sourceQuery,
  matchConditions,
  highWaterMarkCondition,
  sourceOptions,
}) => {
  const params: string[] = [];
  let query = `WITH __userQuery AS (${sourceQuery}) SELECT COUNT(*) AS __count FROM __userQuery`;

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

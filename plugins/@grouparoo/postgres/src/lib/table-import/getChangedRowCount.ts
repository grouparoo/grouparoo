import {
  GetChangedRowCountMethod,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { validateQuery } from "../validateQuery";
import format from "pg-format";
import { makeWhereClause } from "./util";
import { PostgresPoolClient } from "../connect";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  matchConditions,
  highWaterMarkCondition,
}: {
  highWaterMarkCondition: MatchCondition;
  connection: PostgresPoolClient;
  tableName: string;
  matchConditions: MatchCondition[];
}) => {
  const params = [];
  let query = `SELECT COUNT(*) AS __count FROM %I`;
  params.push(tableName);

  query += await makeHighwaterWhereClause(highWaterMarkCondition, params);

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

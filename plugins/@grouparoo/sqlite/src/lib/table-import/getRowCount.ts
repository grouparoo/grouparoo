import { GetRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeWhereClause } from "./util";
import SQLiteQueryBuilder from "../queryBuilder";
import { SQLiteConnection } from "../sqlite";

export const getRowCount: GetRowCountMethod<SQLiteConnection> = async ({
  connection,
  tableName,
  matchConditions,
  highWaterMarkCondition,
  incremental,
}) => {
  const queryBuilder = new SQLiteQueryBuilder(
    `SELECT COUNT(*) AS __count FROM "${tableName}"`
  );

  if (incremental && highWaterMarkCondition) {
    queryBuilder.push("WHERE");
    makeWhereClause(highWaterMarkCondition, queryBuilder);
  }

  for (const [idx, condition] of matchConditions.entries()) {
    queryBuilder.push(highWaterMarkCondition || idx > 0 ? "AND" : "WHERE");
    makeWhereClause(condition, queryBuilder);
  }

  const rows = await connection.asyncQuery(...queryBuilder.build());
  const total = parseInt(rows[0]["__count"]);

  return total;
};

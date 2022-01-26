import { GetRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getRows";
import { getColumnsInternal } from "./getColumns";
import { validateQuery } from "../validateQuery";
import { makeWhereClause } from "../util";

export const getRowCount: GetRowCountMethod = async ({
  connection,
  tableName,
  matchConditions,
  highWaterMarkCondition,
  incremental,
}) => {
  const params = [];
  const types = [];
  const columns = await getColumnsInternal({ connection, tableName });
  let query = `SELECT COUNT (*) AS __count FROM \`${tableName}\``;

  if (incremental) {
    query += await makeHighwaterWhereClause(
      columns,
      highWaterMarkCondition,
      params,
      types
    );
  }

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(columns, condition, params, types);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await connection.query(options);
  const total = parseInt(rows[0]["__count"]);
  return total;
};

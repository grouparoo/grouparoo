import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { validateQuery } from "@grouparoo/mysql/dist/lib/validateQuery";

import { makeHighwaterWhereClause } from "./getChangedRows";
import { getColumns } from "./getColumns";
import { makeWhereClause } from "./util";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  appOptions,
  appId,
  tableName,
  matchConditions,
  highWaterMarkCondition,
  incremental,
}) => {
  const columns = await getColumns({
    connection,
    appOptions,
    appId,
    tableName,
  });
  const params = [];
  let query = `SELECT COUNT(*) AS __count FROM ??`;
  params.push(tableName);

  if (incremental) {
    query += await makeHighwaterWhereClause(
      columns,
      highWaterMarkCondition,
      params
    );
  }

  for (const [idx, condition] of matchConditions.entries()) {
    const filterClause = makeWhereClause(columns, condition, params);
    query += ` ${
      highWaterMarkCondition || idx > 0 ? "AND" : "WHERE"
    } ${filterClause}`;
  }

  validateQuery(query);

  const rows = await connection.asyncQuery(query, params);
  const total = parseInt(rows[0]["__count"]);
  return total;
};

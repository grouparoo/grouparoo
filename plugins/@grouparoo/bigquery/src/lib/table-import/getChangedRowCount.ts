import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { getColumnsInternal } from "./getColumns";
import { validateQuery } from "./validateQuery";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  const params = [];
  const types = [];
  const columns = await getColumnsInternal({ connection, tableName });
  let query = `SELECT COUNT (*) AS __count FROM \`${tableName}\``;
  query += await makeHighwaterWhereClause(
    columns,
    highWaterMarkCondition,
    params,
    types
  );
  validateQuery(query);

  const options = { query, params, types };
  const [rows] = await connection.query(options);
  const total = parseInt(rows[0]["__count"]);
  return total;
};

import { GetChangedRowCountMethod } from "../table";
import { makeHighwaterWhereClause } from "./getChangedRows";
import { validateQuery } from "./validateQuery";
import { castRow } from "./util";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  const params = [];
  const types = [];
  let query = `SELECT COUNT (*) AS __count FROM \`${tableName}\``;
  query += await makeHighwaterWhereClause(
    connection,
    tableName,
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

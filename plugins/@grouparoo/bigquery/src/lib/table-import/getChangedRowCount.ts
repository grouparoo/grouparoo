import { GetChangedRowCountMethod } from "@grouparoo/app-templates/src/source/table";
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

// export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
//   source,
//   highWaterMark,
//   connection,
//   run,
// }) => {
//   const { table } = await source.parameterizedOptions(run);
//   const hasHighWaterMark = Object.keys(highWaterMark).length === 1;
//   const filterCol = hasHighWaterMark ? Object.keys(highWaterMark)[0] : null;
//   const filterVal = hasHighWaterMark ? Object.values(highWaterMark)[0] : null;
//   const columns = await getColumns(connection, table);
//   const params = [];
//   const types = [];

//   let query = `SELECT COUNT (*) AS __count FROM \`${table}\``;
//   if (filterCol) {
//     query += " WHERE";
//     query += makeWhereClause(
//       columns,
//       filterCol,
//       null,
//       ">=",
//       filterVal,
//       params,
//       types
//     );
//   }

//   const options = { query, params, types };
//   const [rows] = await connection.query(options);
//   const result = castRow(rows[0]);
//   const total = parseInt(result["__count"]);

//   const percentComplete =
//     total > 0 ? Math.floor((run.profilesImported / total) * 100) : 100;

//   return percentComplete;
// };

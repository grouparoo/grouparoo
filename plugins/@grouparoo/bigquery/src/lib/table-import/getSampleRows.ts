import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/src/source/table";
import { validateQuery } from "./validateQuery";
import { castRow } from "../util";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  tableName,
}) => {
  const out: DataResponseRow[] = [];

  const query = `SELECT * FROM \`${tableName}\` LIMIT 10`;
  validateQuery(query);

  const options = { query };
  const [rows] = await connection.query(options);
  rows.map((row) => out.push(castRow(row)));

  return out;
};

// export async function getSampleRows(
//   connection,
//   tableName,
//   columns?
// ): Promise<Array<{ [colName: string]: any }>> {
//   const escapedTableName = tableName;
//   const query = `SELECT * FROM \`${escapedTableName}\` LIMIT 10`;
//   validateQuery(query);

//   const options = { query };
//   const [rows] = await connection.query(options);

//   const response = [];
//   if (rows.length > 0) {
//     rows.map((row) => response.push(castRow(row)));
//   } else {
//     // use columns for preview
//     if (!columns) {
//       columns = await getColumns(connection, tableName);
//       const sample = {};
//       Object.keys(columns).forEach((colName) => {
//         sample[colName] = castValue(null);
//       });
//       response.push(sample);
//     }
//   }

//   return response;
// }

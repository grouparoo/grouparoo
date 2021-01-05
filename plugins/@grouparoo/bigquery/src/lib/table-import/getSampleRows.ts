import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";
import { validateQuery } from "../validateQuery";
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

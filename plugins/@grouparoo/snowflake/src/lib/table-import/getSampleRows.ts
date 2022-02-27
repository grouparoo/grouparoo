import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";
import { validateQuery } from "../validateQuery";
import { castRow } from "../shared/util";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  tableName,
}) => {
  const out: DataResponseRow[] = [];
  const query = `SELECT * FROM "${tableName}" LIMIT 10`;
  validateQuery(query);

  const params = [];
  const rows = await connection.execute(query, params);
  rows.forEach((row) => out.push(castRow(row)));

  return out;
};

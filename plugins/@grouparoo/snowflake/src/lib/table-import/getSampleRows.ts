import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/src/source/table";
import { validateQuery } from "./validateQuery";
import { getColumns } from "./getColumns";
import { castRow, castValue } from "./util";

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

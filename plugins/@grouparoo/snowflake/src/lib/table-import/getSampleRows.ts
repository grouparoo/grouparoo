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
  columns,
}) => {
  const out: DataResponseRow[] = [];
  const query = `SELECT * FROM "${tableName}" LIMIT 10`;
  validateQuery(query);

  const params = [];
  const rows = await connection.execute(query, params);

  if (rows.length > 0) {
    rows.forEach((row) => out.push(castRow(row)));
  } else {
    // use columns for preview
    if (!columns) {
      columns = await getColumns({ connection, tableName });
    }
    const sample = {};
    Object.keys(columns).forEach((colName) => {
      sample[colName] = castValue(null);
    });
    out.push(sample);
  }

  return out;
};

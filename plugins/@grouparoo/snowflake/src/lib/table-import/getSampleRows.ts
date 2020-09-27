import { GetSampleRowsMethod, DataResponseRow } from "../table";

import { validateQuery } from "./validateQuery";
import { getColumns } from "./getColumns";
import { castRow, castValue } from "./util";

// TODO: maybe have a way to generate this method too with `queryRows` and a `castValue` input methods
export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  tableName,
  columns,
}) => {
  const out: DataResponseRow[] = [];
  const query = `SELECT * FROM \`${tableName}\` LIMIT 10`;
  validateQuery(query);

  const options = { query };
  const [rows] = await connection.query(options);

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

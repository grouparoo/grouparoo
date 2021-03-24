import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  tableName,
}) => {
  const query = `SELECT * FROM ${tableName} WHERE id IN (SELECT id FROM ${tableName} ORDER BY RANDOM() LIMIT 10)`;
  const out: DataResponseRow[] = await connection.asyncQuery(query);

  return out;
};

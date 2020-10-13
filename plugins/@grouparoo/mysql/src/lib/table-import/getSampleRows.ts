import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  tableName,
}) => {
  const out: DataResponseRow[] = [];

  // For large datasets, `order by RAND()` is actually very slow in MySQL
  // To that end, we would need to pick numbers at random in JS and select just the rows we want, one at a time, as we cannot use functions in the OFFSET in MySQL.
  // We also cannot assume that our source has an incremental & unique primary key.
  // https://stackoverflow.com/questions/1244555/how-can-i-optimize-mysqls-order-by-rand-function
  // ... But for now we will just show the first 10 rows of the table
  const rows = await connection.asyncQuery(`SELECT * FROM ?? LIMIT 10`, [
    tableName,
  ]);
  rows.forEach((row) => out.push(row));

  return out;
};

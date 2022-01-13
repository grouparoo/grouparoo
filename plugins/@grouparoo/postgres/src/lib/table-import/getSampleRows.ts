import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";
import { PostgresPoolClient } from "../connect";

export const getSampleRows: GetSampleRowsMethod<PostgresPoolClient> = async ({
  connection,
  tableName,
}) => {
  const out: DataResponseRow[] = [];

  // For large datasets, `order by RANDOM()` is actually very slow in Postgres
  // To that end, we would need to pick numbers at random in the Offset as a multiple of the number of rows.
  // We also cannot assume that our source has an incremental & unique primary key.
  // We cannot use TABLESAMPLE as it was only introduced in Postgres 9.5 (redshift for example uses Postgres 8)
  // https://stackoverflow.com/questions/8674718/best-way-to-select-random-rows-postgresql
  // ... But for now we will just show the first 10 rows of the table
  const { rows } = await connection.query<DataResponseRow>(
    format(`SELECT * FROM %I LIMIT 10`, tableName)
  );
  rows.forEach((row) => out.push(row));

  return out;
};

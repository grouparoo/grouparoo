import format from "pg-format";
import {
  SourcePreviewMethod,
  SourcePreviewMethodResponseRow,
} from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  return tablePreview({ connection, sourceOptions });
};

export async function tablePreview({
  connection,
  sourceOptions,
}): Promise<Array<SourcePreviewMethodResponseRow>> {
  const response = [];

  // For large datasets, `order by RANDOM()` is actually very slow in Postgres
  // To that end, we would need to pick numbers at random in the Offset as a multiple of the number of rows.
  // We also cannot assume that our source has an incremental & unique primary key.
  // We cannot use TABLESAMPLE as it was only introduced in Postgres 9.5 (redshift for example uses Postgres 8)
  // https://stackoverflow.com/questions/8674718/best-way-to-select-random-rows-postgresql
  // ... But for now we will just show the first 10 rows of the table

  const { rows } = await connection.query(
    format(`SELECT * FROM %I LIMIT 10`, sourceOptions.table)
  );
  rows.map((row) => response.push(row));

  return response;
}

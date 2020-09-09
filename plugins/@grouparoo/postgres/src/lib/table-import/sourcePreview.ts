import format from "pg-format";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  const response = [];

  // For large datasets, `order by RANDOM()` is actually very slow in Postgres
  // To that end, we are going to pick numbers at random in the Offset as a multiple of the number of rows.
  // We also cannot assume that our source has an incremental & unique primary key.
  // We cannot use TABLESAMPLE as it was only introduced in Postgres 9.5 (redshift for example uses Postgres 8)
  // https://stackoverflow.com/questions/8674718/best-way-to-select-random-rows-postgresql

  const { rows: countRows } = await connection.query(
    format(`SELECT COUNT(1) as __count FROM %I`, sourceOptions.table)
  );
  const count = parseInt(countRows[0]["__count"]);
  const limit = 10;
  let attempts = 0;

  while (attempts < limit) {
    const { rows: recordRows } = await connection.query(
      format(
        `SELECT * FROM %I LIMIT 1 OFFSET floor(random() * %L)`,
        sourceOptions.table,
        count
      )
    );

    response.push(recordRows[0]);
    attempts++;
  }

  return response;
};

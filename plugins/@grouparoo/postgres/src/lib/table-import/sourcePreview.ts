import format from "pg-format";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  const response = [];

  // For large datasets, `order by RANDOM()` is actually very slow in Postgres
  // To that end, we are going to pick numbers at random in JS and select just the rows we want, one at a time.
  // We also cannot assume that our source has an incremental & unique primary key.
  // We cannot use TABLESAMPLE as it was only introduced in Postgres 9.5 (redshift for example uses Postgres 8)
  // https://stackoverflow.com/questions/8674718/best-way-to-select-random-rows-postgresql

  const { rows: countRows } = await connection.query(
    format(`SELECT COUNT(1) as __count FROM %I`, sourceOptions.table)
  );
  const count = parseInt(countRows[0]["__count"]) - 1;
  const offsets = getRandomNumbersInRange(count, 10);

  for (const i in offsets) {
    const { rows: recordRows } = await connection.query(
      format(
        `SELECT * FROM %I LIMIT 1 OFFSET ?`,
        sourceOptions.table,
        offsets[i]
      )
    );
    response.push(recordRows[0]);
  }

  return response;
};

function getRandomNumbersInRange(max: number, size: number) {
  const array: number[] = [];
  let attempts = 0;

  while (array.length < size && attempts < size * 2) {
    var attempt = Math.floor(Math.random() * max) + 1;
    if (!array.includes(attempt)) array.push(attempt);
    attempts++;
  }

  return array;
}

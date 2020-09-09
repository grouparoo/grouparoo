import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  const response = [];

  // For large datasets, `order by RAND()` is actually very slow in MySQL
  // To that end, we are going to pick numbers at random in JS and select just the rows we want, one at a time.
  // We also cannot assume that our source has an incremental & unique primary key.
  // https://stackoverflow.com/questions/1244555/how-can-i-optimize-mysqls-order-by-rand-function

  const countResult = await connection.asyncQuery(
    `SELECT COUNT(1) as __count FROM ??`,
    [sourceOptions.table]
  );
  const count = parseInt(countResult[0]["__count"]) - 1;
  const offsets = getRandomNumbersInRange(count, 10);

  for (const i in offsets) {
    const rowResult = await connection.asyncQuery(
      `SELECT * FROM ?? LIMIT 1 OFFSET ?`,
      [sourceOptions.table, offsets[i]]
    );
    response.push(rowResult[0]);
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

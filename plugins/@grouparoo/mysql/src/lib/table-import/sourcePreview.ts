import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  const response = [];

  const preview = await connection.asyncQuery(
    `SELECT * FROM ?? ORDER BY RAND() LIMIT 10 `,
    [sourceOptions.table]
  );
  preview.map((row) => response.push(row));

  return response;
};

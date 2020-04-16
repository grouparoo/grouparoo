import { connect } from "../connect";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  const response = [];

  const client = await connect(appOptions);
  const preview = await client.asyncQuery(
    `SELECT * FROM ?? ORDER BY RAND() LIMIT 10 `,
    [sourceOptions.table]
  );
  preview.map((row) => response.push(row));
  await client.asyncEnd();
  return response;
};

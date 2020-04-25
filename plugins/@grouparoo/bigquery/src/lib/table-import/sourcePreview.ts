import format from "pg-format";
import { connect } from "../connect";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  const response = [];

  const client = await connect(appOptions);
  const { rows } = await client.query(
    format(`SELECT * FROM %I ORDER BY RANDOM() LIMIT 10`, sourceOptions.table)
  );
  rows.map((row) => response.push(row));
  await client.end();
  return response;
};

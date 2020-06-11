import format from "pg-format";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  const response = [];

  const { rows } = await connection.query(
    format(`SELECT * FROM %I ORDER BY RANDOM() LIMIT 10`, sourceOptions.table)
  );
  rows.map((row) => response.push(row));

  return response;
};

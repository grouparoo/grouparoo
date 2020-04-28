import { connect } from "../connect";
import { SourcePreviewMethod } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  const response = [];
  const client = await connect(appOptions);

  const escapedTableName = sourceOptions.table; // TODO: how to escape?
  const query = `SELECT * FROM \`${escapedTableName}\` ORDER BY RAND() LIMIT 10`;
  validateQuery(query);

  const options = { query };
  const [rows] = await client.query(options);
  rows.map((row) => response.push(row));

  return response;
};

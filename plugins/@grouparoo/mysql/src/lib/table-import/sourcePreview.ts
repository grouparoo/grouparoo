import { connect } from "../connect";
import {
  App,
  Source,
  SimpleAppOptions,
  SimpleSourceOptions,
} from "@grouparoo/core";

export async function sourcePreview(
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions
) {
  const response = [];

  const client = await connect(appOptions);
  const preview = await client.asyncQuery(
    `SELECT * FROM ?? ORDER BY RAND() LIMIT 10 `,
    [sourceOptions.table]
  );
  preview.map((row) => response.push(row));
  await client.asyncEnd();
  return response;
}

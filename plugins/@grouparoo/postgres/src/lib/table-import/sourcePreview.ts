import format from "pg-format";
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
  const { rows } = await client.query(
    format(`SELECT * FROM %I ORDER BY RANDOM() LIMIT 10`, sourceOptions.table)
  );
  rows.map((row) => response.push(row));
  await client.end();
  return response;
}

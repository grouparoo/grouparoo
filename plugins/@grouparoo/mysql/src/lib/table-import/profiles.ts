import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import {
  plugin,
  Schedule,
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  SourceMapping,
  Run,
} from "@grouparoo/core";

export async function profiles(
  schedule: Schedule,
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions,
  sourceMapping: SourceMapping,
  run: Run,
  limit: number,
  filter: { [key: string]: any },
  highWaterMark: number
) {
  let importsCount = 0;
  const offset = highWaterMark || 0;

  const { table } = await source.parameterizedOptions(run);
  const where =
    Object.keys(filter).length === 1
      ? `\`${Object.keys(filter)[0]}\` >= "${Object.values(filter)[0]}"`
      : null;

  const query = `SELECT * FROM ?? ${
    where ? ` WHERE ${where} ` : ""
  } LIMIT ? OFFSET ?`;

  validateQuery(query);

  const client = await connect(appOptions);

  const rows = await client.asyncQuery(query, [table, limit, offset]);
  for (const i in rows) {
    await plugin.createImport(sourceMapping, run, rows[i]);
    importsCount++;
  }

  await client.asyncEnd();

  const nextHighWaterMark = offset + limit;
  return { importsCount, nextHighWaterMark };
}

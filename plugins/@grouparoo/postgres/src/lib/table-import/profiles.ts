import format from "pg-format";
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
      ? format("%I >= %L", Object.keys(filter)[0], Object.values(filter)[0])
      : null;

  const query = where
    ? validateQuery(
        format(
          `SELECT * FROM %I WHERE %s LIMIT %L OFFSET %L`,
          table,
          where,
          limit,
          offset
        )
      )
    : validateQuery(
        format(`SELECT * FROM %I LIMIT %L OFFSET %L`, table, limit, offset)
      );

  const client = await connect(appOptions);

  const response = await client.query(query);
  for (const i in response.rows) {
    await plugin.createImport(sourceMapping, run, response.rows[i]);
    importsCount++;
  }

  await client.end();

  const nextHighWaterMark = offset + limit;
  return { importsCount, nextHighWaterMark };
}

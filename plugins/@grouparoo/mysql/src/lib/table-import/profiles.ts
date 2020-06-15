import { validateQuery } from "../validateQuery";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";

export const profiles: ProfilesPluginMethod = async ({
  connection,
  sourceMapping,
  run,
  source,
  highWaterMark,
  filter,
  limit,
}) => {
  let importsCount = 0;
  const offset = highWaterMark ? parseInt(highWaterMark.toString()) : 0;

  const { table } = await source.parameterizedOptions(run);
  const where =
    Object.keys(filter).length === 1
      ? `\`${Object.keys(filter)[0]}\` >= "${Object.values(filter)[0]}"`
      : null;

  const query = `SELECT * FROM ?? ${
    where ? ` WHERE ${where} ` : ""
  } LIMIT ? OFFSET ?`;

  validateQuery(query);

  const rows = await connection.asyncQuery(query, [table, limit, offset]);
  for (const i in rows) {
    await plugin.createImport(sourceMapping, run, rows[i]);
    importsCount++;
  }

  const nextHighWaterMark = offset + limit;
  return { importsCount, nextHighWaterMark };
};

import { SourceRunPercentCompleteMethod } from "@grouparoo/core";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
  source,
  scheduleOptions,
  highWaterMark,
  connection,
  run,
}) => {
  const { table } = await source.parameterizedOptions(run);
  const sortColumn = scheduleOptions.column;
  const where = highWaterMark[sortColumn]
    ? `\`${sortColumn}\` >= "${highWaterMark[sortColumn]}"`
    : null;

  const rows = await connection.asyncQuery(
    `SELECT COUNT (*) AS __count FROM ?? ${where ? `WHERE ${where}` : ""}`,
    [table]
  );
  const total = parseInt(rows[0].__count);

  const percentComplete =
    total > 0 ? Math.floor((run.profilesImported / total) * 100) : 100;

  return percentComplete;
};

import { validateQuery } from "../validateQuery";
import format from "pg-format";
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
    ? format("%I >= %L", sortColumn, highWaterMark[sortColumn])
    : null;

  const totalResult = await connection.query(
    validateQuery(
      where
        ? format(`SELECT COUNT (*) AS __count FROM %I WHERE %s`, table, where)
        : format(`SELECT COUNT (*) AS __count FROM %I`, table)
    )
  );
  const total = parseInt(totalResult.rows[0].__count);

  const percentComplete =
    total > 0 ? Math.floor((run.profilesImported / total) * 100) : 100;

  return percentComplete;
};

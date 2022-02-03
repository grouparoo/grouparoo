import { GetRowsMethod } from "@grouparoo/app-templates/dist/source/query";
import format from "pg-format";
import type { PostgresPoolClient } from "../connect";

import { validateQuery } from "../validateQuery";

export const getRows: GetRowsMethod<PostgresPoolClient> = async ({
  scheduleOptions,
  limit,
  offset,
  connection,
}) => {
  if (!scheduleOptions?.query || typeof scheduleOptions.query !== "string") {
    throw new Error("query required");
  }

  validateQuery(String(scheduleOptions.query), false);

  const queryWithLimitAndOffset = format(
    `${scheduleOptions.query} LIMIT %L OFFSET %L`,
    limit,
    offset
  );

  const { rows } = await connection.query(queryWithLimitAndOffset);

  return rows;
};

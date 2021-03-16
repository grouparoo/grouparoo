import format from "pg-format";

import { validateQuery } from "../validateQuery";

export const getChangedRows = async ({
  scheduleOptions,
  limit,
  offset,
  connection,
}) => {
  if (!scheduleOptions?.query) {
    throw new Error("query required");
  }

  validateQuery(scheduleOptions.query, false);

  const queryWithLimitAndOffset = `${scheduleOptions.query} LIMIT ${limit} OFFSET ${offset}`;

  const rows = await connection.asyncQuery(queryWithLimitAndOffset);

  return rows;
};

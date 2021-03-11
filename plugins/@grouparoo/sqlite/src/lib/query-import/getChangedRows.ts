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

  const queryWithLimitAndOffset = format(
    `${scheduleOptions.query} LIMIT %L OFFSET %L`,
    limit,
    offset
  );

  const { rows } = await connection.query(queryWithLimitAndOffset);

  return rows;
};

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

  const queryWithLimitAndOffset = `${scheduleOptions.query} LIMIT ? OFFSET ?`;
  const params = [limit, offset];

  const rows = await connection.asyncQuery(queryWithLimitAndOffset, params);
  return rows;
};

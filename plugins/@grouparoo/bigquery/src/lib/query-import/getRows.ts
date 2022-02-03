import { validateQuery } from "../validateQuery";

export const getRows = async ({
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

  const [rows] = await connection.query(queryWithLimitAndOffset);

  return rows;
};

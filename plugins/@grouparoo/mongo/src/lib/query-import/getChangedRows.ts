export const getChangedRows = async ({
  scheduleOptions,
  limit,
  offset,
  connection,
}) => {
  if (!scheduleOptions?.query) {
    throw new Error("query required");
  }
  // const queryWithLimitAndOffset = `${scheduleOptions.query} LIMIT ${limit} OFFSET ${offset}`;
  const rows = null;
  return rows;
};

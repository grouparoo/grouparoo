import format from "pg-format";
import { GetChangedRowsMethod } from "@grouparoo/app-templates/dist/source/query";

import { validateQuery } from "../validateQuery";

export const getChangedRows: GetChangedRowsMethod = async ({
  scheduleOptions,
  limit,
  offset,
  connection,
}) => {
  const queryWithLimitAndOffset = format(
    `${scheduleOptions.query} LIMIT %L OFFSET %L`,
    limit,
    offset
  );

  validateQuery(queryWithLimitAndOffset);
  const { rows } = await connection.query(queryWithLimitAndOffset);

  return rows;
};

import { validateQuery } from "./validateQuery";
import { AppQueryMethod } from "@grouparoo/core";

export const appQuery: AppQueryMethod = async ({
  connection,
  refreshQuery,
}) => {
  validateQuery(refreshQuery);

  const rows = await connection.asyncQuery(refreshQuery); // return [];
  return rows.length > 0 ? rows[0] : [];
};

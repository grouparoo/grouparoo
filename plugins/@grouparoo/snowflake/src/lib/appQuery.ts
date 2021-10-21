import { validateQuery } from "./validateQuery";
import { AppQueryMethod } from "@grouparoo/core";

export const appQuery: AppQueryMethod = async ({
  connection,
  refreshQuery,
}) => {
  try {
    validateQuery(refreshQuery);
  } catch {}

  const rows = await connection.execute(refreshQuery); // return [];
  return rows.length > 0 ? rows[0] : [];
};

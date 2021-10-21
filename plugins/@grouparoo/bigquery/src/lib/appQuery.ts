import { AppQueryMethod } from "@grouparoo/core";
import { validateQuery } from "./validateQuery";

export const appQuery: AppQueryMethod = async ({
  connection,
  refreshQuery,
}) => {
  try {
    validateQuery(refreshQuery);
  } catch {}

  const rows = await connection.query(refreshQuery); // return [];
  return rows.length > 0 ? rows[0] : [];
};

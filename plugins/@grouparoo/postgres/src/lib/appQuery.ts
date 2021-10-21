import { validateQuery } from "./validateQuery";
import { AppQueryMethod } from "@grouparoo/core";
import format from "pg-format";

export const appQuery: AppQueryMethod = async ({
  connection,
  refreshQuery,
}) => {
  validateQuery(refreshQuery);

  const { rows } = await connection.query(format(refreshQuery)); // return [];
  return rows.length > 0 ? rows[0] : [];
};

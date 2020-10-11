import { ExecuteQueryMethod } from "@grouparoo/app-templates/src/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
}) => {
  const options = { query };
  const [rows] = await connection.query(options);
  return rows;
};

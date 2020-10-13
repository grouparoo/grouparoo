import { ExecuteQueryMethod } from "@grouparoo/app-templates/dist/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
}) => {
  return connection.execute(query);
};

import {
  ExecuteQueryMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
}) => {
  const out: DataResponseRow[] = await connection.asyncQuery(query);
  return out;
};

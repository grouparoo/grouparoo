import {
  ExecuteQueryMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/src/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
}) => {
  const out: DataResponseRow[] = [];
  const rows = await connection.asyncQuery(query);
  rows.forEach((row) => out.push(row));
  return out;
};

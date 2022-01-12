import {
  ExecuteQueryMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
}) => {
  const out: DataResponseRow[] = [];
  const { rows } = await connection.query(query);
  rows.forEach((row: any) => out.push(row));
  return out;
};

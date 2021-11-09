import {
  ExecuteQueryMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/query";
import { MySQLConnection } from "../connect";

export const executeQuery: ExecuteQueryMethod<MySQLConnection> = async ({
  connection,
  query,
}) => {
  const out: DataResponseRow[] = [];
  const rows = await connection.asyncQuery(query);
  rows.forEach((row) => out.push(row));
  return out;
};

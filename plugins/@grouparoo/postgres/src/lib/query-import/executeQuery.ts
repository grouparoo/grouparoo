import {
  ExecuteQueryMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/query";
import { PostgresPoolClient } from "../connect";

export const executeQuery: ExecuteQueryMethod<PostgresPoolClient> = async ({
  connection,
  query,
}) => {
  const out: DataResponseRow[] = [];
  const { rows } = await connection.query<DataResponseRow>(query);
  rows.forEach((row) => out.push(row));
  return out;
};

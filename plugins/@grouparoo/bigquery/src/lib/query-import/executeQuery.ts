import {
  ExecuteQueryMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/src/source/query";
import { castRow } from "../util";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
}) => {
  const out: DataResponseRow[] = [];

  const options = { query };
  const [rows] = await connection.query(options);
  rows.map((row) => out.push(castRow(row)));

  return out;
};

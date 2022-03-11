import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
} from "@grouparoo/app-templates/dist/source/queryv2";
import format from "pg-format";
import { PostgresPoolClient } from "../connect";
import { makeFromClause } from "../shared/util";

export const getColumns: GetColumnDefinitionsMethod<
  PostgresPoolClient
> = async ({ connection, sourceQuery }) => {
  const from = makeFromClause({ sourceQuery }, []);
  const { rows } = await connection.query(format(`SELECT * ${from} LIMIT 1`));

  if (rows.length === 0)
    throw new Error("Source query must return at least one row");

  const map: ColumnDefinitionMap = {};
  if (rows.length > 0) {
    const cols = Object.keys(rows[0]);
    for (const col of cols) {
      map[col] = {
        name: col,
        filterOperations: [],
        type: "string",
      };
    }
  }

  return map;
};

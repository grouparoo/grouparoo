import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";
import { PostgresPoolClient } from "../connect";

export const getColumns: GetColumnDefinitionsMethod<
  PostgresPoolClient
> = async ({ connection, sourceQuery }) => {
  // TODO check out using `fields` instead of `rows`
  const { rows } = await connection.query(
    format(
      `WITH __userQuery AS (${sourceQuery}) SELECT * FROM __userQuery LIMIT 1`
    )
  );

  const map: ColumnDefinitionMap = {};
  if (rows.length > 0) {
    const cols = Object.keys(rows[0]);
    for (let col of cols) {
      map[col] = {
        name: col,
        filterOperations: [],
        type: "string",
      };
    }
  }

  return map;
};

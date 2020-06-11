import format from "pg-format";
import { SourceOptionsMethod } from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async ({
  appOptions,
  connection,
}) => {
  const response = { table: { type: "typeahead", options: [] } };

  const { rows } = await connection.query(
    format(
      `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = %L AND table_schema = %L`,
      appOptions.database,
      "public"
    )
  );

  for (const i in rows) {
    const tableName: string = rows[i].table_name;
    response.table.options.push(tableName);
  }

  return response;
};

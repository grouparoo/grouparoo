import format from "pg-format";
import { connect } from "../connect";
import { SourceOptionsMethod } from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async ({ appOptions }) => {
  const response = { table: { type: "list", options: [] } };

  const client = await connect(appOptions);
  const { rows } = await client.query(
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

  await client.end();
  return response;
};

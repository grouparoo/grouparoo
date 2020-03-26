import format from "pg-format";
import { connect } from "../connect";
import { App, SimpleAppOptions } from "@grouparoo/core";

export async function sourceOptions(app: App, appOptions: SimpleAppOptions) {
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
}

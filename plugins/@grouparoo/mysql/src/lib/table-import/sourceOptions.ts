import { connect } from "../connect";
import { SourceOptionsMethod } from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async ({ appOptions }) => {
  const response = { table: { type: "list", options: [] } };

  const client = await connect(appOptions);
  const tables = await client.asyncQuery(
    `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = ?`,
    [appOptions.database]
  );

  for (const i in tables) {
    const tableName: string = tables[i].table_name;
    response.table.options.push(tableName);
  }

  await client.asyncEnd();
  return response;
};

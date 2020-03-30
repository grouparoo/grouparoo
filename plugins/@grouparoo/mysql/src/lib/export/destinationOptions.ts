import { connect } from "../connect";
import { App, SimpleAppOptions } from "@grouparoo/core";

export async function destinationOptions(
  app: App,
  appOptions: SimpleAppOptions
) {
  const response = {
    table: { type: "list", options: [] },
    groupsTable: { type: "list", options: [] },
    primaryKey: { type: "list", options: [] },
    groupForeignKey: { type: "list", options: [] },
    groupColumnName: { type: "list", options: [] },
  };

  const tables = [];
  const columns = [];

  const client = await connect(appOptions);
  const rows = await client.asyncQuery(
    `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = ?`,
    [appOptions.database]
  );

  for (const i in rows) {
    const tableName: string = rows[i].table_name;
    tables.push(tableName);
    const colRows = await client.asyncQuery(
      `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
      [appOptions.database, tableName]
    );
    colRows.map((r) => {
      if (!columns.includes(r.column_name)) {
        columns.push(r.column_name);
      }
    });
  }

  await client.end();

  tables.sort();
  columns.sort();

  response.table.options = tables;
  response.groupsTable.options = tables;
  response.primaryKey.options = columns;
  response.groupForeignKey.options = columns;
  response.groupColumnName.options = columns;

  return response;
}

import format from "pg-format";
import { connect } from "../connect";
import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  appOptions,
}) => {
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
  const { rows } = await client.query(
    format(
      `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = %L AND table_schema = %L`,
      appOptions.database,
      "public"
    )
  );

  for (const i in rows) {
    const tableName: string = rows[i].table_name;
    tables.push(tableName);
    const { rows: colRows } = await client.query(
      format(
        `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_catalog = %L AND table_schema = %L AND table_name = %L`,
        appOptions.database,
        "public",
        tableName
      )
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
};

import format from "pg-format";
import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  connection,
  appOptions,
  destinationOptions,
}) => {
  async function getColumns(tableName: string) {
    const { rows: colRows } = await connection.query(
      format(
        `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_catalog = %L AND table_schema = %L AND table_name = %L`,
        appOptions.database,
        appOptions.schema || "public",
        tableName
      )
    );

    return colRows.map((row) => row.column_name).sort();
  }

  const response = {
    table: { type: "typeahead", options: [] },
    groupsTable: { type: "typeahead", options: [] },
    primaryKey: { type: "pending", options: [] },
    groupForeignKey: { type: "pending", options: [] },
    groupColumnName: { type: "pending", options: [] },
  };

  const tables = [];

  const { rows } = await connection.query(
    format(
      `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = %L AND table_schema = %L`,
      appOptions.database,
      appOptions.schema || "public"
    )
  );

  for (const i in rows) {
    const tableName: string = rows[i].table_name;
    tables.push(tableName);
  }

  tables.sort();

  response.table.options = tables;
  response.groupsTable.options = tables;

  if (destinationOptions.table) {
    response.primaryKey.type = "typeahead";
    response.primaryKey.options = await getColumns(destinationOptions.table);
  }

  if (destinationOptions.groupsTable) {
    response.groupForeignKey.type = "typeahead";
    response.groupColumnName.type = "typeahead";
    response.groupForeignKey.options = await getColumns(
      destinationOptions.groupsTable
    );
    response.groupColumnName.options = await getColumns(
      destinationOptions.groupsTable
    );
  }

  return response;
};

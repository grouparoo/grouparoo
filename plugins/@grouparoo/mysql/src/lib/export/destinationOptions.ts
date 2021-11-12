import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  connection,
  appOptions,
  destinationOptions,
}) => {
  async function getColumns(tableName: string) {
    const colRows: Record<"column_name", string>[] =
      await connection.asyncQuery(
        `SELECT column_name AS column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
        [appOptions.database, tableName]
      );

    return colRows.map((row) => row.column_name).sort();
  }

  const response: DestinationOptionsMethodResponse = {
    table: { type: "typeahead", options: [] },
    groupsTable: { type: "typeahead", options: [] },
    primaryKey: { type: "pending", options: [] },
    groupForeignKey: { type: "pending", options: [] },
    groupColumnName: { type: "pending", options: [] },
  };

  const tables: string[] = [];

  const rows: Record<"table_name", string>[] = await connection.asyncQuery(
    `SELECT table_name AS table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = ?`,
    [appOptions.database]
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
    response.primaryKey.options = await getColumns(
      destinationOptions.table?.toString()
    );
  }

  if (destinationOptions.groupsTable) {
    response.groupForeignKey.type = "typeahead";
    response.groupColumnName.type = "typeahead";
    response.groupForeignKey.options = await getColumns(
      destinationOptions.groupsTable?.toString()
    );
    response.groupColumnName.options = await getColumns(
      destinationOptions.groupsTable?.toString()
    );
  }

  return response;
};

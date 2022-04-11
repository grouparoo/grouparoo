import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  connection,
  destinationOptions,
}) => {
  async function getColumns(tableName: string) {
    const query = `SELECT name from pragma_table_info("${tableName}")`;
    const colRows = await connection.asyncQuery(query);
    return colRows.map((row) => row.name).sort();
  }

  const response: DestinationOptionsMethodResponse = {
    table: { type: "typeahead", options: [] },
    primaryKey: { type: "pending", options: [] },
    groupsTable: { type: "typeahead", options: [] },
    groupForeignKey: { type: "pending", options: [] },
    groupColumnName: { type: "pending", options: [] },
  };

  const query = `SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`;
  const rows = await connection.asyncQuery(query);
  const tables = rows.map((row) => row.name).sort();

  response.table.options = tables;
  response.groupsTable.options = tables;

  if (destinationOptions.table) {
    response.primaryKey.type = "typeahead";
    response.primaryKey.options = await getColumns(
      destinationOptions.table.toString()
    );
  }

  if (destinationOptions.groupsTable) {
    response.groupForeignKey.type = "typeahead";
    response.groupColumnName.type = "typeahead";
    response.groupForeignKey.options = await getColumns(
      destinationOptions.groupsTable.toString()
    );
    response.groupColumnName.options = await getColumns(
      destinationOptions.groupsTable.toString()
    );
  } else {
    delete destinationOptions["groupForeignKey"];
    delete destinationOptions["groupColumnName"];
  }
  return response;
};

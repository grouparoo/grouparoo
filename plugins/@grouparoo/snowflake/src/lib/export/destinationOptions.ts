import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod<any> = async ({
  connection,
  appOptions,
  destinationOptions,
}) => {
  async function getColumns(tableName: string) {
    const schema = connection.schemaName;
    const query = `SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = :1 AND TABLE_NAME = :2`;
    const params = [schema, tableName];

    // Run the query
    const rows = await connection.execute(query, params);
    return rows.map((row) => row.COLUMN_NAME).sort();
  }

  const response: DestinationOptionsMethodResponse = {
    table: { type: "typeahead", options: [] },
    groupsTable: { type: "typeahead", options: [] },
    primaryKey: { type: "pending", options: [] },
    groupForeignKey: { type: "pending", options: [] },
    groupColumnName: { type: "pending", options: [] },
  };

  const tables = [];

  const rows = await connection.execute(
    `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = :1 AND table_schema = :2`,
    [appOptions.database, appOptions.schema || "public"]
  );

  for (const i in rows) {
    const tableName: string = rows[i].TABLE_NAME;
    tables.push(tableName);
  }

  tables.sort();

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

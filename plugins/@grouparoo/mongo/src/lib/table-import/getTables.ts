import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export const getTables: GetTablesMethod = async ({
  connection,
  appOptions,
}) => {
  const map: TableDefinitionMap = {};
  if (connection) {
    // Run the query
    const rows = await connection
      .db(appOptions.database)
      .listCollections()
      .toArray();
    console.log(">>>>>>>>>>>>", connection.db(appOptions.database));
    for (const row of rows) {
      const name = row.name;
      map[name] = { name, data: row };
    }
  }
  return map;
};

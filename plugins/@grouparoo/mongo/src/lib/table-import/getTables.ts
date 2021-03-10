import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export const getTables: GetTablesMethod = async ({ connection }) => {
  const map: TableDefinitionMap = {};
  if (connection) {
    // Run the query
    const rows = await connection.db.listCollections().toArray();
    for (const row of rows) {
      const name = row.name;
      map[name] = { name, data: row };
    }
  }
  return map;
};

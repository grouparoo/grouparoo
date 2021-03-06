import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export const getTables: GetTablesMethod = async ({ connection }) => {
  const schema = connection.schemaName;

  const query = `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = :1`;
  const params = [schema];

  // Run the query
  const rows = await connection.execute(query, params);
  const map: TableDefinitionMap = {};
  for (const row of rows) {
    const name = row.TABLE_NAME;
    map[name] = { name, data: row };
  }
  return map;
};

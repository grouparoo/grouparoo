import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export const getTables: GetTablesMethod = async ({ connection }) => {
  const query = `SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`;
  const rows = await connection.asyncQuery(query);

  const map: TableDefinitionMap = {};
  rows.map(({ name }) => (map[name] = { name }));
  return map;
};

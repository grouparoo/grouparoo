import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export const getTables: GetTablesMethod = async ({
  connection,
  appOptions,
}) => {
  const rows = await connection.asyncQuery(
    `SELECT table_name AS table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = ?`,
    [appOptions.database]
  );

  const map: TableDefinitionMap = {};
  for (const row of rows) {
    const name: string = row.table_name;
    map[name] = { name, data: row };
  }
  return map;
};

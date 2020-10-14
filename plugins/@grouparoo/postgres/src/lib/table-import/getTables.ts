import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";

export const getTables: GetTablesMethod = async ({
  connection,
  appOptions,
}) => {
  const { rows } = await connection.query(
    format(
      `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = %L AND table_schema = %L`,
      appOptions.database,
      appOptions.schema || "public"
    )
  );

  const map: TableDefinitionMap = {};
  for (const row of rows) {
    const name: string = row.table_name;
    map[name] = { name, data: row };
  }
  return map;
};

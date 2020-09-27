import { GetTablesMethod, TableDefinitionMap } from "../table";

export const getTables: GetTablesMethod = async ({ connection }) => {
  const out: TableDefinitionMap = {};

  // TODO: for snowflake
  const tables = await connection.getTables();
  for (const i in tables) {
    const name = tables[i].id;
    out[name] = { name, data: null };
  }

  return out;
};

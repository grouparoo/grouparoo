import { SourceOptionsMethod } from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async ({ connection }) => {
  const response = {
    table: { type: "list", options: [] },
  };

  const [tables] = await connection.getTables();
  for (const i in tables) {
    const tableName = tables[i].id;
    response.table.options.push(tableName);
  }

  return response;
};

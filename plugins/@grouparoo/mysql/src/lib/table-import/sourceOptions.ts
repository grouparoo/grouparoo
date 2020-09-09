import {
  SourceOptionsMethod,
  SourceOptionsMethodResponse,
} from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async ({
  connection,
  appOptions,
}) => {
  const response: SourceOptionsMethodResponse = {
    table: { type: "typeahead", options: [] },
  };

  const tables = await connection.asyncQuery(
    `SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = ?`,
    [appOptions.database]
  );

  for (const i in tables) {
    const tableName: string = tables[i].table_name;
    response.table.options.push(tableName);
  }

  return response;
};

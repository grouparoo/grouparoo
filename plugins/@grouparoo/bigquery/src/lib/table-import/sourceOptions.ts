import { connect } from "../connect";
import { SourceOptionsMethod } from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async ({ appOptions }) => {
  const response = {
    table: { type: "list", options: [] },
  };

  const client = await connect(appOptions);

  const [tables] = await client.getTables();
  for (const i in tables) {
    const tableName = tables[i].id;
    response.table.options.push(tableName);
  }

  return response;
};

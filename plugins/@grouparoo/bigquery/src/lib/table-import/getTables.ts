import {
  GetTablesMethod,
  TableDefinitionMap,
} from "@grouparoo/app-templates/src/source/table";

export const getTables: GetTablesMethod = async ({ connection }) => {
  const map: TableDefinitionMap = {};
  const [tables] = await connection.getTables();
  for (const table of tables) {
    const name = table.id;
    map[name] = { name, data: table };
  }

  return map;
};

// export const sourceOptions: SourceOptionsMethod = async ({ connection }) => {
//   const response: SourceOptionsMethodResponse = {
//     table: { type: "list", options: [] },
//   };

//   const [tables] = await connection.getTables();
//   for (const i in tables) {
//     const tableName = tables[i].id;
//     response.table.options.push(tableName);
//   }

//   return response;
// };

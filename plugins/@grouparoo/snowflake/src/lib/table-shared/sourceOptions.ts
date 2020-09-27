import {
  SourceOptionsMethod,
  SourceOptionsMethodResponse,
} from "@grouparoo/core";
import {
  GetTablesMethod,
  TableDefinitionMap,
  tableNameKey,
} from "./pluginMethods";

export interface GetSourceOptionsMethod {
  (argument: { getTables: GetTablesMethod }): SourceOptionsMethod;
}

export const getSourceOptions: GetSourceOptionsMethod = ({ getTables }) => {
  const sourceOptions: SourceOptionsMethod = async ({ connection }) => {
    const response: SourceOptionsMethodResponse = {
      [tableNameKey]: { type: "list", options: [] },
    };
    const map: TableDefinitionMap = await getTables({ connection });
    for (const tableName in map) {
      response[tableNameKey].options.push(tableName);
    }
    return response;
  };

  return sourceOptions;
};

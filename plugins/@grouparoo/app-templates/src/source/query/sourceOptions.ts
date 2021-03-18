import {
  SourceOptionsMethod,
  SourceOptionsMethodResponse,
} from "@grouparoo/core";

import { GetTablesMethod, TableDefinitionMap, tableNameKey } from "../table";

export interface GetSourceOptionsMethod {
  (argument: { getTables?: GetTablesMethod }): SourceOptionsMethod;
}

export const getSourceOptions: GetSourceOptionsMethod = ({ getTables }) => {
  const sourceOptions: SourceOptionsMethod = async ({
    connection,
    appOptions,
    appId,
  }) => {
    if (!getTables) {
      return {};
    }
    const response: SourceOptionsMethodResponse = {
      [tableNameKey]: { type: "list", options: [] },
    };
    const map: TableDefinitionMap = await getTables({
      connection,
      appOptions,
      appId,
    });
    for (const tableName in map) {
      response[tableNameKey].options.push(tableName);
    }
    return response;
  };
  return sourceOptions;
};

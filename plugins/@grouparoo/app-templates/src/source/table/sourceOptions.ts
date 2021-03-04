import {
  SourceOptionsMethod,
  SourceOptionsMethodResponse,
} from "@grouparoo/core";
import {
  GetTablesMethod,
  TableDefinitionMap,
  tableNameKey,
  SourceOptionsExtra,
} from "./pluginMethods";

export interface GetSourceOptionsMethod {
  (argument: {
    getTables: GetTablesMethod;
    sourceOptions?: SourceOptionsExtra;
  }): SourceOptionsMethod;
}

export const getSourceOptions: GetSourceOptionsMethod = ({
  getTables,
  sourceOptions: extraSourceOptions,
}) => {
  const sourceOptions: SourceOptionsMethod = async ({
    connection,
    appOptions,
    appId,
  }) => {
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

    // TODO later: const getMore = extraSourceOptions?.method

    const extra = extraSourceOptions?.options || [];
    for (const option of extra) {
      response[option.key] = {
        // for now all strings, not lists.
        // we'd need a method to do that or pass in the options
        type: "string",
      };
    }

    return response;
  };

  return sourceOptions;
};

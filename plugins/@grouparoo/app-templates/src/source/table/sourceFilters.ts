import {
  SourceFilterMethod,
  SourceFilterMethodResponseRow,
} from "@grouparoo/core";
import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  tableNameKey,
} from "./pluginMethods";

export interface GetSourceFiltersMethod {
  (argument: { getColumns: GetColumnDefinitionsMethod }): SourceFilterMethod;
}

export const getSourceFilters: GetSourceFiltersMethod = ({ getColumns }) => {
  const sourceFilters: SourceFilterMethod = async ({
    connection,
    appOptions,
    appId,
    sourceOptions,
  }) => {
    const tableName = sourceOptions[tableNameKey]?.toString();
    const map: ColumnDefinitionMap = await getColumns({
      connection,
      appOptions,
      sourceOptions,
      appId,
      tableName,
    });

    const options: SourceFilterMethodResponseRow[] = [];
    for (const columnName in map) {
      const column = map[columnName];
      options.push({
        key: column.name,
        ops: column.filterOperations as SourceFilterMethodResponseRow["ops"], // TODO: there's a type incompatibility between the literal string reposes and the Enum FilterOperation
        canHaveRelativeMatch: false,
      });
    }
    return options;
  };

  return sourceFilters;
};

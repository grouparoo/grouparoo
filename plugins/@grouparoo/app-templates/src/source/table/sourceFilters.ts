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
    sourceOptions,
  }) => {
    const tableName = sourceOptions[tableNameKey];
    const map: ColumnDefinitionMap = await getColumns({
      connection,
      tableName,
    });

    const options: SourceFilterMethodResponseRow[] = [];
    for (const columnName in map) {
      const column = map[columnName];
      options.push({
        key: column.name,
        ops: column.filterOperations,
        canHaveRelativeMatch: false,
      });
    }
    return options;
  };

  return sourceFilters;
};

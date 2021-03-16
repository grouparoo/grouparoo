import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";

const filterOperations = [
  FilterOperation.Equal,
  FilterOperation.NotEqual,
  FilterOperation.GreaterThan,
  FilterOperation.GreaterThanOrEqual,
  FilterOperation.LessThan,
  FilterOperation.LessThanOrEqual,
  FilterOperation.Contain,
  FilterOperation.NotContain,
  FilterOperation.In,
];

const typeMap: { [columnType: string]: ColumnType } = {
  bigint: "integer",
  blob: "string",
  datetime: "date",
  int: "integer",
  integer: "integer",
  num: "float",
  text: "string",
  varchar: "string",
};

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  tableName,
}) => {
  const query = `SELECT name, type from pragma_table_info('${tableName}')`;
  const rows = await connection.asyncQuery(query);

  const map: ColumnDefinitionMap = {};
  rows.map(({ name, type, ...data }) => {
    map[name] = {
      name,
      filterOperations,
      type: typeMap[type],
      data: { name, type, ...data },
    };
  });

  return map;
};

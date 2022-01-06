import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";

const filterOperations = [
  FilterOperation.Exists,
  FilterOperation.NotExists,
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
  boolean: "boolean",
  date: "date",
  datetime: "date",
  email: "email",
  float: "float",
  int: "integer",
  integer: "integer",
  num: "float",
  phoneNumber: "phoneNumber",
  string: "string",
  text: "string",
  url: "url",
  varchar: "string",
};

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  tableName,
}) => {
  const query = `SELECT name, type from pragma_table_info("${tableName}")`;
  const rows = await connection.asyncQuery(query);

  const map: ColumnDefinitionMap = {};
  rows.map(({ name, type, ...data }) => {
    map[name] = {
      name,
      filterOperations,
      type: typeMap[type.toString().toLowerCase()] || "string",
      data: { name, type, ...data },
    };
  });

  return map;
};

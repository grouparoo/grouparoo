import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  tableName,
}) => {
  return getColumnsInternal({ connection, tableName });
};

export const getColumnsInternal = async ({ connection, tableName }) => {
  const query = `SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName`;
  const options = {
    query,
    params: {
      tableName,
    },
  };

  // Run the query
  const [rows] = await connection.query(options);

  const map: ColumnDefinitionMap = {};
  for (const row of rows) {
    const name = row.column_name;
    const { type, filterOperations } = getTypeInfo(row.data_type);
    map[row.column_name] = {
      name,
      type,
      filterOperations,
      data: row,
    };
  }
  return map;
};

const getTypeInfo = function (dataType: string): {
  type: ColumnType;
  filterOperations: FilterOperation[];
} {
  const ops = [
    FilterOperation.Equal,
    FilterOperation.NotEqual,
    FilterOperation.Exists,
    FilterOperation.NotExists,
  ];
  let type: ColumnType = null;
  let compare = false;
  let contains = false;

  switch (dataType) {
    case "DATE":
    case "DATETIME":
      type = "date";
      compare = true;
      break;

    case "TIME":
    case "TIMESTAMP":
      // TODO: time type without date
      compare = true;
      break;

    case "INT64":
      type = "integer";
      compare = true;
      break;

    case "NUMERIC":
    case "FLOAT64":
      type = "float";
      compare = true;
      break;

    case "STRING":
      type = "string";
      contains = true;
      break;

    case "BOOL":
      type = "boolean";
      break;

    case "GEOGRAPHY":
    case "ARRAY":
    case "STRUCT":
    case "BYTES":
    default:
      break;
  }

  if (compare) {
    ops.push(FilterOperation.GreaterThan);
    ops.push(FilterOperation.GreaterThanOrEqual);
    ops.push(FilterOperation.LessThan);
    ops.push(FilterOperation.LessThanOrEqual);
  }
  if (contains) {
    ops.push(FilterOperation.Contain);
    ops.push(FilterOperation.NotContain);
  }
  return { type, filterOperations: ops };
};

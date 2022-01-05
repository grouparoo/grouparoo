import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";
import { cleanupDataType } from "./util";

interface TypeInfo {
  type: ColumnType;
  filterOperations: FilterOperation[];
}

const getTypeInfo = (dataType: string): TypeInfo => {
  const ops = [FilterOperation.Equal, FilterOperation.NotEqual];
  let type: ColumnType = null;
  let compare = false;
  let contains = false;
  let nullable = dataType.toLowerCase().includes("nullable");

  // https://content.clickhouse.com/docs/en/sql-reference/data-types/
  switch (cleanupDataType(dataType).toUpperCase()) {
    // numeric
    case "INT16":
    case "INT32":
    case "INT64":
    case "INT128":
    case "INT256":
    case "UINT8":
    case "UINT16":
    case "UINT32":
    case "UINT64":
    case "UINT128":
    case "UINT256":
      type = "integer";
      compare = true;
      break;

    case "INT8": // This is commonly binary/boolean. Not > or <
      type = "boolean";
      break;

    case "DECIMAL":
    case "DECIMAL32":
    case "DECIMAL64":
    case "DECIMAL128":
    case "DECIMAL256":
    case "FLOAT32":
    case "FLOAT64":
      type = "float";
      compare = true;
      break;

    // date and time
    case "DATE":
    case "DATE32":
    case "DATETIME":
    case "DATETIME32":
    case "DATETIME64":
      type = "date";
      compare = true;
      break;

    // String types
    case "STRING":
    case "FIXEDSTRING":
    case "UUID":
      type = "string";
      contains = true;
      break;

    // Enum types
    case "ENUM":
    case "ENUM8":
    case "ENUM16":
      type = "integer";
      break;

    // structured types
    case "ARRAY":
    case "MAP":
    case "TUPLE":
      break;

    // geo-spatial types
    case "GEOMETRY":
    case "POLYGON":
    case "RING":
    case "POINT":
    case "MULTIPOLYGON":
      break;

    // functions
    case "LowCardinality":
    case "AggregateFunction":
    case "SimpleAggregateFunction":
      break;

    // domains
    case "IPV6":
    case "IPV4":
      break;

    // others?
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

  if (nullable) {
    ops.push(FilterOperation.Exists);
    ops.push(FilterOperation.NotExists);
  }

  return { type, filterOperations: ops };
};

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  appOptions,
  tableName,
}): Promise<ColumnDefinitionMap> => {
  const rows = await connection.asyncQuery(
    `SELECT column_name AS column_name, data_type AS data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
    [appOptions.database, tableName]
  );

  return rows.reduce(
    (map: ColumnDefinitionMap, row: Record<string, string>) => {
      const { data_type, column_name: name } = row;
      const { type, filterOperations } = getTypeInfo(data_type);
      map[name] = {
        name,
        type,
        filterOperations,
        data: row,
      };
      return map;
    },
    {}
  );
};

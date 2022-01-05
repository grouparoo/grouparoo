import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  appOptions,
  tableName,
}) => {
  const rows = await connection.asyncQuery(
    `SELECT column_name AS column_name, data_type AS data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
    [appOptions.database, tableName]
  );

  const map: ColumnDefinitionMap = {};
  for (const row of rows) {
    const name = row.column_name;
    const { type, filterOperations } = getTypeInfo(row.data_type);
    map[name] = {
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

  switch (dataType.toUpperCase()) {
    // https://dev.mysql.com/doc/refman/8.0/en/data-types.html

    // numeric
    case "INTEGER":
    case "SMALLINT":
    case "MEDIUMINT":
    case "BIGINT":
    case "INT":
    case "BIT":
      type = "integer";
      compare = true;
      break;

    case "TINYINT": // This is binary/boolean. Not > or <
      type = "boolean";
      break;

    case "DECIMAL":
    case "NUMERIC":
    case "FLOAT":
    case "REAL":
    case "DOUBLE PRECISION":
    case "DEC":
    case "FIXED":
    case "DOUBLE":
    case "REAL":
      type = "float";
      compare = true;
      break;

    // date and time
    case "DATE":
    case "DATETIME":
    case "TIMESTAMP":
      type = "date";
      compare = true;
      break;

    case "TIME":
    case "YEAR":
      // TODO: time type without date
      compare = true;
      break;

    // String types
    case "CHAR":
    case "VARCHAR":
    case "TINYBLOB":
    case "BLOB":
    case "MEDIUMBLOB":
    case "LONGBLOB":
    case "TINYTEXT":
    case "TEXT":
    case "MEDIUMTEXT":
    case "LONGTEXT":
    case "ENUM":
      type = "string";
      contains = true;
      break;

    case "SET": // not sure about this one
      break;

    // binary types
    case "BINARY":
    case "VARBINARY":
      break;

    // semi-structured types
    case "JSON":
      break;

    // geo-spatial types
    case "GEOMETRY":
    case "POINT":
    case "LINESTRING":
    case "POLYGON":
    case "GEOMETRYCOLLECTION":
    case "MULTILINESTRING":
    case "MULTIPOINT":
    case "MULTIPOLYGON":
      break;

    // other?
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

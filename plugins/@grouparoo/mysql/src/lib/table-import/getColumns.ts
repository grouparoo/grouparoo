import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  appOptions,
  tableName,
}) => {
  const rows = await connection.asyncQuery(
    `SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
    [appOptions.database, tableName]
  );

  const map: ColumnDefinitionMap = {};
  for (const row of rows) {
    const name = row.column_name;
    map[name] = {
      name,
      filterOperations: getFilterOperations(row.data_type),
      data: row,
    };
  }
  return map;
};

const getFilterOperations = function (dataType: string): FilterOperation[] {
  const ops = [FilterOperation.Equal, FilterOperation.NotEqual];
  switch (dataType.toUpperCase()) {
    // https://dev.mysql.com/doc/refman/8.0/en/data-types.html

    // numeric
    case "INTEGER":
    case "SMALLINT":
    case "TINYINT": // This is binary/boolean. Maybe not > or < ?
    case "MEDIUMINT":
    case "BIGINT":
    case "DECIMAL":
    case "NUMERIC":
    case "FLOAT":
    case "REAL":
    case "DOUBLE PRECISION":
    case "INT":
    case "DEC":
    case "FIXED":
    case "DOUBLE":
    case "REAL":
    case "BIT":
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
      break;

    // date and time
    case "DATE":
    case "DATETIME":
    case "TIMESTAMP":
    case "TIME":
    case "YEAR":
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
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
    case "SET": // not sure about this one
      ops.push(FilterOperation.Contain);
      ops.push(FilterOperation.NotContain);
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
  return ops;
};

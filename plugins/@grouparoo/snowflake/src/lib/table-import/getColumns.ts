import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
} from "@grouparoo/app-templates/src/source/table";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  tableName,
}) => {
  const query = `SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = :1`;
  const params = [tableName];

  // Run the query
  const rows = await connection.execute(query, params);
  const map: ColumnDefinitionMap = {};
  for (const row of rows) {
    const name = row.COLUMN_NAME;
    map[name] = {
      name,
      filterOperations: getFilterOperations(row.DATA_TYPE),
      data: row,
    };
  }
  return map;
};

const getFilterOperations = function (dataType: string): FilterOperation[] {
  const ops = [FilterOperation.Equal, FilterOperation.NotEqual];
  switch (dataType) {
    // https://docs.snowflake.com/en/sql-reference/intro-summary-data-types.html

    // numeric types
    case "NUMBER": // Default precision and scale are (38,0).
    case "DECIMAL": // Synonymous with NUMBER.
    case "NUMERIC": // Synonymous with NUMBER.
    case "INT": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "INTEGER": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "BIGINT": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "SMALLINT": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "FLOAT":
    case "FLOAT4":
    case "FLOAT8":
    case "DOUBLE": // Synonymous with FLOAT.
    case "DOUBLE PRECISION": // Synonymous with FLOAT.
    case "REAL": // Synonymous with FLOAT.
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
      break;

    // String types
    case "VARCHAR": // Default (and maximum) is 16,777,216 bytes.
    case "CHAR": // // Synonymous with VARCHAR except default length is VARCHAR(1).
    case "CHARACTER": // Synonymous with VARCHAR except default length is VARCHAR(1).
    case "STRING": // Synonymous with VARCHAR.
    case "TEXT": // Synonymous with VARCHAR.
      ops.push(FilterOperation.Contain);
      ops.push(FilterOperation.NotContain);
      break;

    // binary types
    case "BINARY":
    case "VARBINARY": // Synonymous with BINARY.
      break;

    // logical types
    case "BOOLEAN":
      break;

    // date and time types
    case "DATE":
    case "DATETIME": // Alias for TIMESTAMP_NTZ
    case "TIME":
    case "TIMESTAMP": // Alias for one of the TIMESTAMP variations (TIMESTAMP_NTZ by default).
    case "TIMESTAMP_LTZ": // TIMESTAMP with local time zone; time zone, if provided, is not stored.
    case "TIMESTAMP_NTZ": // TIMESTAMP with no time zone; time zone, if provided, is not stored.
    case "TIMESTAMP_TZ": // TIMESTAMP with time zone.
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
      break;

    // semi-structured types
    case "VARIANT":
    case "OBJECT":
    case "ARRAY":
      break;

    // geo-spatial types
    case "GEOGRAPHY":
      break;

    // other?
    default:
      break;
  }
  return ops;
};

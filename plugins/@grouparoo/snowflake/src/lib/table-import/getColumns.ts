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
  const schema = connection.schemaName;
  const query = `SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = :1 AND TABLE_NAME = :2`;
  const params = [schema, tableName];

  // Run the query
  const rows = await connection.execute(query, params);
  const map: ColumnDefinitionMap = {};
  for (const row of rows) {
    const name = row.COLUMN_NAME;
    const { type, filterOperations } = getTypeInfo(row.DATA_TYPE);
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

  switch (dataType) {
    // https://docs.snowflake.com/en/sql-reference/intro-summary-data-types.html

    // numeric types
    case "NUMBER": // Default precision and scale are (38,0).
    case "DECIMAL": // Synonymous with NUMBER.
    case "NUMERIC": // Synonymous with NUMBER.
      // these can be either integer or float.
      // TODO: see if we can use the (38,4) kind of args to do better
      // for now, mark as float so we don't lose pieces
      type = "float";
      compare = true;
      break;

    case "INT": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "INTEGER": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "BIGINT": // Synonymous with NUMBER except precision and scale cannot be specified.
    case "SMALLINT": // Synonymous with NUMBER except precision and scale cannot be specified.
      type = "integer";
      compare = true;
      break;

    case "FLOAT":
    case "FLOAT4":
    case "FLOAT8":
    case "DOUBLE": // Synonymous with FLOAT.
    case "DOUBLE PRECISION": // Synonymous with FLOAT.
    case "REAL": // Synonymous with FLOAT.
      type = "float";
      compare = true;
      break;

    // String types
    case "VARCHAR": // Default (and maximum) is 16,777,216 bytes.
    case "CHAR": // // Synonymous with VARCHAR except default length is VARCHAR(1).
    case "CHARACTER": // Synonymous with VARCHAR except default length is VARCHAR(1).
    case "STRING": // Synonymous with VARCHAR.
    case "TEXT": // Synonymous with VARCHAR.
      type = "string";
      contains = true;
      break;

    // binary types
    case "BINARY":
    case "VARBINARY": // Synonymous with BINARY.
      break;

    // logical types
    case "BOOLEAN":
      type = "boolean";
      break;

    // date and time types
    case "DATE":
    case "DATETIME": // Alias for TIMESTAMP_NTZ
    case "TIMESTAMP": // Alias for one of the TIMESTAMP variations (TIMESTAMP_NTZ by default).
    case "TIMESTAMP_LTZ": // TIMESTAMP with local time zone; time zone, if provided, is not stored.
    case "TIMESTAMP_NTZ": // TIMESTAMP with no time zone; time zone, if provided, is not stored.
    case "TIMESTAMP_TZ": // TIMESTAMP with time zone.
      type = "date";
      compare = true;
      break;

    case "TIME":
      // TODO: time type without date
      compare = true;
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

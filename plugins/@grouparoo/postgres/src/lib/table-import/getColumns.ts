import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";
import format from "pg-format";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  appOptions,
  tableName,
}) => {
  const { rows } = await connection.query(
    format(
      `SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_catalog = %L AND table_schema = %L AND table_name = %L`,
      appOptions.database,
      appOptions.schema || "public",
      tableName
    )
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

// anyarray
// inet
// "char"
// xid
// name
// bytea
// double precision
// pg_node_tree
// interval
// character varying
// abstime

const getFilterOperations = function (dataType: string): FilterOperation[] {
  const ops = [FilterOperation.Equal, FilterOperation.NotEqual];
  switch (dataType.toLowerCase()) {
    // https://www.postgresql.org/docs/9.5/datatype.html
    // https://www.postgresql.org/docs/8.4/datatype.html
    // https://www.postgresql.org/docs/6.3/c08.htm

    // numeric and money
    case "smallint":
    case "integer":
    case "bigint":
    case "decimal":
    case "numeric":
    case "real":
    case "double":
    case "double precision":
    case "smallserial":
    case "serial":
    case "bigserial":
    case "int2":
    case "int4":
    case "float4":
    case "float8":
    case "money":
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
      break;

    // date and time
    case "timestamp":
    case "timestamp without time zone":
    case "timestamp with time zone":
    case "date":
    case "time":
    case "time without time zone":
    case "time with time zone":
    case "abstime":
    case "reltime":
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
      break;

    // time intervals
    case "interval":
    case "interval fields":
    case "timespan":
      break;

    // String types
    case "character varying":
    case "varchar":
    case "character":
    case "char":
    case "text":
    case "char2":
    case "char4":
    case "char8":
    case "char16":
      ops.push(FilterOperation.Contain);
      ops.push(FilterOperation.NotContain);
      break;

    // network address types
    case "cidr":
    case "inet":
    case "macaddr":
      // TODO: maybe contain?
      break;

    // bit string types
    case "bit":
      break;

    // uuid type
    case "uuid":
      // TODO: maybe contain?
      break;

    // binary types
    case "bytea":
      break;

    // boolean types
    case "boolean":
    case "bool":
      break;

    // TODO: how to custom types
    // https://www.postgresql.org/docs/9.5/datatype-enum.html

    // TODO: what about ranges?
    // https://www.postgresql.org/docs/9.5/rangetypes.html

    // semi-structured types
    case "json":
    case "array":
      break;

    // geo-spatial types
    case "point":
    case "line":
    case "lseg":
    case "box":
    case "path":
    case "polygon":
    case "circle":
      break;

    // internal things
    case '"char"':
    case "name":
      break;

    // other?
    default:
      break;
  }
  return ops;
};

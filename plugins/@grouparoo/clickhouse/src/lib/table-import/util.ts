import {
  ColumnDefinitionMap,
  ColumnType,
  DataResponse,
} from "@grouparoo/app-templates/dist/source/table";
import {
  FilterOperation,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";

export const cleanupDataType = (dataType: string): string =>
  dataType.replace(
    /((Nullable|LowCardinality)\()?(\w+\d*)(\([^()]*\))?(\))?/,
    "$3"
  );

const castValue = (value: DataResponse, type: ColumnType, dataType: string) => {
  switch (type) {
    case "float":
      // Raw numeric float values in ClickHouse are Float64
      // and comparison between two types does not work
      // See: https://github.com/ClickHouse/ClickHouse/issues/2112
      return dataType === "Float32" ? `CAST(${value}, 'Float32')` : value;

    case "integer":
    case "boolean":
      return Number(value);

    case "string":
      return String(value);

    case "date":
      // https://clickhouse.com/docs/en/sql-reference/data-types/datetime64/
      // https://clickhouse.com/docs/en/sql-reference/data-types/datetime64/
      return `to${dataType}('${value}'${
        dataType.indexOf("DateTime64") >= 0 ? ", 3" : ""
      })`;

    default:
      return value;
  }
};

export function makeWhereClause(
  columns: ColumnDefinitionMap,
  matchCondition: MatchCondition,
  params: any[]
) {
  const { columnName, filterOperation, value, values } = matchCondition;
  const { [columnName]: column } = columns;
  if (!column) {
    throw `column name not found: ${columnName}`;
  }
  const {
    type,
    data: { data_type },
  } = column;
  const dataType = cleanupDataType(data_type);

  let op: string;
  let match = values || value;
  let transform: string;

  const isCast = dataType === "Float32" || dataType.indexOf("Date") >= 0;

  switch (filterOperation) {
    case FilterOperation.Exists:
      op = "IS NOT NULL";
      break;
    case FilterOperation.NotExists:
      op = "IS NULL";
    case FilterOperation.Equal:
      op = "==";
      break;
    case FilterOperation.NotEqual:
      op = "!=";
      break;
    case FilterOperation.GreaterThan:
      op = ">";
      break;
    case FilterOperation.GreaterThanOrEqual:
      op = ">=";
      break;
    case FilterOperation.LessThan:
      op = "<";
      break;
    case FilterOperation.LessThanOrEqual:
      op = "<=";
      break;
    case FilterOperation.Contain:
      op = "LIKE";
      match = `%${match.toString().toLowerCase()}%`;
      transform = "LOWER";
      break;
    case FilterOperation.NotContain:
      op = "NOT LIKE";
      match = `%${match.toString().toLowerCase()}%`;
      transform = "LOWER";
      break;
    case FilterOperation.In:
      op = "IN";
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  if (!transform) {
    match = values
      ? values.map((v) => castValue(v, type, dataType))
      : castValue(value, type, dataType);
  }

  const key = transform
    ? `${transform}(\`${columnName}\`)`
    : `\`${columnName}\``;

  if (!isCast || transform) {
    if (match) params.push(match);
  }

  return ` ${key} ${op} ${
    Array.isArray(match) ? "(?)" : isCast && !transform ? match : "?"
  }`;
}

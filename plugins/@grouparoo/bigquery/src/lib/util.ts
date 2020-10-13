import { BigQuery } from "@google-cloud/bigquery";
import {
  FilterOperation,
  MatchCondition,
  ColumnDefinitionMap,
} from "@grouparoo/app-templates/dist/source/table";

export function makeWhereClause(
  columns: ColumnDefinitionMap,
  matchCondition: MatchCondition,
  params: Array<any>,
  types: Array<any>
) {
  const { columnName, filterOperation, value } = matchCondition;

  // find the column
  const column = columns[columnName];
  if (!column) {
    throw `column name not found: ${columnName}`;
  }
  const dataType = column.data.data_type;

  // interesting code in BigQuery library: function convert(schemaField, value)
  let match;
  switch (dataType) {
    case "DATE":
      match = BigQuery.date(value.toString());
      break;
    case "DATETIME":
      match = BigQuery.datetime(value.toString());
      break;
    case "TIME":
      match = BigQuery.time(value.toString());
      break;
    case "TIMESTAMP":
      // @ts-ignore cast!
      match = new Date(value);
      if (!isFinite(match)) {
        throw `invalid timestamp: ${value}`;
      }
      break;
    case "BOOL":
    case "NUMERIC":
    case "INT64":
    case "FLOAT64":
    case "STRING":
      match = value;
      break;
    case "GEOGRAPHY":
    case "ARRAY":
    case "STRUCT":
    case "BYTES":
    default:
      throw `unsupported data type: ${dataType}`;
  }

  let op;
  let transform = null;
  switch (filterOperation) {
    case FilterOperation.Equal:
      op = "=";
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
      transform = "LOWER";
      op = "LIKE"; // case insensitive
      match = `%${match.toString().toLowerCase()}%`;
      break;
    case FilterOperation.NotContain:
      transform = "LOWER";
      op = "NOT LIKE"; // case insensitive
      match = `%${match.toString().toLowerCase()}%`;
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  const key = transform
    ? `${transform}(\`${columnName}\`)`
    : `\`${columnName}\``;

  // put the values and types in the array
  params.push(match);
  types.push(dataType);
  return ` ${key} ${op} ?`;
}

export function castRow(row) {
  const out = {};
  Object.keys(row).forEach((colName) => {
    out[colName] = castValue(row[colName]);
  });
  return out;
}

export function castValue(value) {
  if (value === null || value === undefined) {
    return null;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof value === "object") {
    // TODO: should that return a Date Object? Maybe only "BigQueryTimestamp"?
    if (value.hasOwnProperty("value")) {
      return value.value;
    }
  }

  // otherwise, regular value
  return value;
}

import { BigQuery } from "@google-cloud/bigquery";
import { DataResponseRow, DataResponse } from "../table";

/*
 * Returns what to add to query and appends to arrays
 */
export function makeWhereClause(
  columnInfo: any,
  colName: string,
  transform: string | null,
  sqlOp: string,
  match: any,
  params: Array<any>,
  types: Array<string>
) {
  // find the column
  const column = columnInfo[colName];
  if (!column) {
    throw `column name not found: ${colName}`;
  }
  const dataType = column.data_type;

  // interesting code in BigQuery library: function convert(schemaField, value)
  let param;
  switch (dataType) {
    case "DATE":
      param = BigQuery.date(match);
      break;
    case "DATETIME":
      param = BigQuery.datetime(match);
      break;
    case "TIME":
      param = BigQuery.time(match);
      break;
    case "TIMESTAMP":
      param = new Date(match);
      if (!isFinite(param)) {
        throw `invalid timestamp: ${match}`;
      }
      break;
    case "BOOL":
    case "NUMERIC":
    case "INT64":
    case "FLOAT64":
    case "STRING":
      param = match;
      break;
    case "GEOGRAPHY":
    case "ARRAY":
    case "STRUCT":
    case "BYTES":
    default:
      throw `unsupported data type: ${dataType}`;
  }

  const key = transform ? `${transform}(\`${colName}\`)` : `\`${colName}\``;

  // put the values and types in the array
  params.push(param);
  types.push(dataType);
  return ` ${key} ${sqlOp} ?`;
}

export function castRow(row): DataResponseRow {
  const out = {};
  Object.keys(row).forEach((colName) => {
    out[colName] = castValue(row[colName]);
  });
  return out;
}

export function castValue(value): DataResponse {
  if (value === null || value === undefined) {
    return null;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof value === "object") {
    // TODO: should that return a Date Object?
    if (value.hasOwnProperty("value")) {
      return value.value;
    }
  }

  // otherwise, regular value
  return value;
}

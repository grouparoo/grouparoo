import { BigQuery } from "@google-cloud/bigquery";

export async function getColumns(client, tableName: string) {
  const dataset = "test"; // TODO: from dataset?
  const query = `SELECT column_name, data_type FROM \`${dataset}\`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName`;
  const options = {
    query,
    params: {
      tableName,
    },
  };

  // Run the query
  const [rows] = await client.query(options);
  const response = {};
  for (const row of rows) {
    response[row.column_name] = row;
  }
  return response;
}

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
    // TODO: do these work with js Date Objects?
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

export function castResult(result) {
  if (result === null || result === undefined) {
    return null;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof result === "object") {
    // TODO: dates have values, should that return a Date Object?
    // Note: nextFilter wants it to be a string, so it making it a Date, keep that as a string
    // if "BigQueryDate" or "BigQueryTimestamp" or similar
    if (result.hasOwnProperty("value")) {
      return result.value;
    }
  }

  // otherwise, regular value
  return result;
}

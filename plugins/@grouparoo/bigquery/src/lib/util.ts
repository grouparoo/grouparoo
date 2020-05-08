import { BigQuery } from "@google-cloud/bigquery";
import { validateQuery } from "./validateQuery";

export async function getColumns(
  client,
  tableName: string
): Promise<{ [colName: string]: any }> {
  const query = `SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName`;
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

export function supportedEquality(column): Array<string> {
  const dataType = column.data_type;
  const ops = ["equals", "does not equal"];

  switch (dataType) {
    case "DATE":
    case "DATETIME":
    case "TIME":
    case "TIMESTAMP":
    case "NUMERIC":
    case "INT64":
    case "FLOAT64":
      ops.push("greater than");
      ops.push("less than");
      break;
    case "STRING":
      ops.push("contains");
      ops.push("does not contain");
      break;
    case "BOOL":
      break;
    case "GEOGRAPHY":
    case "ARRAY":
    case "STRUCT":
    case "BYTES":
    default:
      break;
  }

  return ops;
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

export async function getSampleRows(
  client,
  tableName,
  columns?
): Promise<Array<{ [colName: string]: any }>> {
  const escapedTableName = tableName;
  const query = `SELECT * FROM \`${escapedTableName}\` ORDER BY RAND() LIMIT 10`;
  validateQuery(query);

  const options = { query };
  const [rows] = await client.query(options);

  const response = [];
  if (rows.length > 0) {
    rows.map((row) => response.push(castRow(row)));
  } else {
    // use columns for preview
    if (!columns) {
      columns = await getColumns(client, tableName);
      const sample = {};
      Object.keys(columns).forEach((colName) => {
        sample[colName] = castValue(null);
      });
      response.push(sample);
    }
  }

  return response;
}

const { BigQuery } = require("@google-cloud/bigquery");

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

export function makeWhereClause(
  columnInfo: any,
  colName: string,
  key: string,
  sqlOp: string,
  match: any
) {
  // find the column
  const column = columnInfo[colName];
  if (!column) {
    throw `column name not found: ${colName}`;
  }
  const dataType = column.data_type;
  console.log(column);

  // use column.data_type to do things
  // const VALID_TYPES = [
  //   "DATE",
  //   "DATETIME",
  //   "TIME",
  //   "TIMESTAMP",
  //   "BYTES",
  //   "NUMERIC",
  //   "BOOL",
  //   "INT64",
  //   "FLOAT64",
  //   "STRING",
  //   "GEOGRAPHY",
  //   "ARRAY",
  //   "STRUCT",
  // ];

  const queryParam = BigQuery.valueToQueryParameter_(match, dataType);
  let clause = queryParam.parameterValue.value;

  // Some types need quotes
  // TODO: get all types here
  switch (dataType) {
    case "STRING":
      clause = `"${clause}"`;
      break;
    case "INT64":
      break; // just the value
    default:
      throw `unhandled dataType: ${dataType}`;
  }

  // if the column is an integer or similar, no ticks. Otherwise, ticks.
  return `\`${key}\` ${sqlOp} ${clause}`;
}

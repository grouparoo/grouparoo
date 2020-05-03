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

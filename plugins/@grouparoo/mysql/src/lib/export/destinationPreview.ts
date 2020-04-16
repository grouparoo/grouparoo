import { connect } from "../connect";
import { DestinationPreviewMethod } from "@grouparoo/core";

export const destinationPreview: DestinationPreviewMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const response = [];

  const client = await connect(appOptions);
  const rows = await client.asyncQuery(
    `SELECT * FROM ?? ORDER BY RAND() LIMIT 10 `,
    [destinationOptions.table]
  );
  rows.map((row) => response.push(row));

  if (response.length === 0) {
    // if we don't have any rows to display, we can show the headers at least
    const colRows = await client.asyncQuery(
      `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
      [appOptions.database, destinationOptions.table]
    );
    const emptyRow = {};
    colRows.map((rc) => {
      emptyRow[rc.column_name] = ["(no data)"];
    });
    response.push(emptyRow);
  }

  await client.asyncEnd();
  return response;
};

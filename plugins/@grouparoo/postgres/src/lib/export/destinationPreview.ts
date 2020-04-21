import format from "pg-format";
import { connect } from "../connect";
import { DestinationPreviewMethod } from "@grouparoo/core";

export const destinationPreview: DestinationPreviewMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const response = [];

  const client = await connect(appOptions);
  const { rows } = await client.query(
    format(
      `SELECT * FROM %I ORDER BY RANDOM() LIMIT 10`,
      destinationOptions.table
    )
  );
  rows.map((row) => response.push(row));

  if (response.length === 0) {
    // if we don't have any rows to display, we can show the headers at least
    const { rows: colRows } = await client.query(
      format(
        `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_catalog = %L AND table_schema = %L AND table_name = %L`,
        appOptions.database,
        "public",
        destinationOptions.table
      )
    );
    const emptyRow = {};
    colRows.map((rc) => {
      emptyRow[rc.column_name] = ["(no data)"];
    });
    response.push(emptyRow);
  }

  await client.end();
  return response;
};

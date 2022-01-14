import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";
import Spreadsheet from "../shared/Spreadsheet";

export const destinationOptions: DestinationOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const response: DestinationOptionsMethodResponse = {
    sheet_url: { type: "text" },
    primaryKey: { type: "pending", options: [] },
    groupsColumn: { type: "pending", options: [] },
  };

  if (destinationOptions.sheet_url) {
    const sheet = new Spreadsheet(
      appOptions,
      destinationOptions.sheet_url?.toString()
    );
    const columns = await sheet.getHeaders();
    if (columns.length > 0) {
      response.primaryKey.type = "typeahead";
      response.primaryKey.options = columns;
      response.groupsColumn.type = "typeahead";
      response.groupsColumn.options = columns;
    } else {
      response.primaryKey = { type: "text", options: [] };
      response.groupsColumn = { type: "text", options: [] };
    }
  }

  return response;
};

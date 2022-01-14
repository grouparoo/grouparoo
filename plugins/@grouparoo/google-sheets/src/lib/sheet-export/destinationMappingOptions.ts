import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import Spreadsheet from "../shared/Spreadsheet";
export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, destinationOptions }) => {
    const sheet = new Spreadsheet(
      appOptions,
      destinationOptions.sheet_url?.toString()
    );
    const columns = await sheet.getHeaders();
    const known: {
      key: string;
      type: DestinationMappingOptionsResponseType;
      important: boolean;
    }[] = [];
    for (const column of columns) {
      if (
        column !== destinationOptions.primaryKey &&
        column !== destinationOptions.groupsColumn
      ) {
        known.push({ key: column, type: "any", important: true });
      }
    }

    return {
      labels: {
        property: {
          singular: "Exported Property",
          plural: "Exported Properties",
        },
        group: {
          singular: "Exported Group",
          plural: "Exported Groups",
        },
      },
      properties: {
        required: [
          { key: destinationOptions.primaryKey?.toString(), type: "any" },
        ],
        known,
        allowOptionalFromProperties: false,
      },
    };
  };

import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ connection, destinationOptions }) => {
    const query = `SELECT name from pragma_table_info("${destinationOptions.table}")`;
    const rows = await connection.asyncQuery(query);

    const columns: {
      key: string;
      type: DestinationMappingOptionsResponseType;
      important: boolean;
    }[] = [];
    for (const i in rows) {
      if (rows[i].name !== destinationOptions.primaryKey) {
        columns.push({ key: rows[i].name, type: "any", important: true });
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
        known: columns,
        allowOptionalFromProperties: false,
      },
    };
  };

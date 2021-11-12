import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ connection, appOptions, destinationOptions }) => {
    const rows: Record<"column_name", string> = await connection.asyncQuery(
      `SELECT column_name AS column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
      [appOptions.database, destinationOptions.table]
    );

    const columns: Array<{
      key: string;
      type: DestinationMappingOptionsResponseType;
      important: boolean;
    }> = [];
    for (const i in rows) {
      if (rows[i].column_name !== destinationOptions.primaryKey) {
        columns.push({
          key: rows[i].column_name,
          type: "any",
          important: true,
        });
      }
    }

    return {
      labels: {
        property: {
          singular: "Exported Property",
          plural: "Exported Properties",
        },
        group: {
          singular: "Exported Groups",
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

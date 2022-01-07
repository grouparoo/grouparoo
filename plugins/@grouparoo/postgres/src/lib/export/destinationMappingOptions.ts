import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import format from "pg-format";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ connection, appOptions, destinationOptions }) => {
    const { rows } = await connection.query(
      format(
        `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_catalog = %L AND table_schema = %L AND table_name = %L`,
        appOptions.database,
        appOptions.schema || "public",
        destinationOptions.table
      )
    );

    const columns: {
      key: string;
      type: DestinationMappingOptionsResponseType;
      important: boolean;
    }[] = [];
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

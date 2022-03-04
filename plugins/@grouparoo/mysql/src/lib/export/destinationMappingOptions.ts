import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ connection, appOptions, destinationOptions }) => {
    checkOptionsIntegrity(destinationOptions);
    const isGroupEnabled =
      destinationOptions.groupsTable &&
      destinationOptions.groupForeignKey &&
      destinationOptions.groupColumnName;
    const rows: Record<"column_name", string> = await connection.asyncQuery(
      `SELECT column_name AS column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
      [appOptions.database, destinationOptions.table]
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
        group: isGroupEnabled
          ? {
              singular: "Exported Groups",
              plural: "Exported Groups",
            }
          : undefined,
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

export function checkOptionsIntegrity(options) {
  const groupKeys = ["groupsTable", "groupForeignKey", "groupColumnName"];
  // needs either zero or all keys
  let count = 0;
  for (const key of groupKeys) {
    const value = (options[key] || "").toString().trim();
    if (value.length > 0) {
      options[key] = value;
      count++;
    } else {
      options[key] = null;
    }
  }
  if (count > 0 && groupKeys.length !== count) {
    throw new Error(
      `To enable Group data syncing, all related options must be set.`
    );
  }
}

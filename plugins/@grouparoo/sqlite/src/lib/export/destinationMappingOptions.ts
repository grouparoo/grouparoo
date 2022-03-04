import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ connection, destinationOptions }) => {
    checkOptionsIntegrity(destinationOptions);
    const isGroupEnabled =
      destinationOptions.groupsTable &&
      destinationOptions.groupForeignKey &&
      destinationOptions.groupColumnName;
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
        group: isGroupEnabled
          ? {
              singular: "Exported Group",
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

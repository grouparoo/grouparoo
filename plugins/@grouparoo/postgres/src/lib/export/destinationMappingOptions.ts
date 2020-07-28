import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import format from "pg-format";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  connection,
  appOptions,
  destinationOptions,
}) => {
  const { rows } = await connection.query(
    format(
      `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_catalog = %L AND table_schema = %L AND table_name = %L`,
      appOptions.database,
      appOptions.schema || "public",
      destinationOptions.table
    )
  );

  const columns: Array<{ key: string; type: string; important: boolean }> = [];
  for (const i in rows) {
    if (rows[i].column_name !== destinationOptions.primaryKey) {
      columns.push({ key: rows[i].column_name, type: "any", important: true });
    }
  }

  return {
    labels: {
      profilePropertyRule: {
        singular: "Exported Profile Property Rule",
        plural: "Exported Profile Property Rules",
      },
      group: {
        singular: "Exported Groups",
        plural: "Exported Groups",
      },
    },
    profilePropertyRules: {
      required: [{ key: destinationOptions.primaryKey, type: "any" }],
      known: columns,
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

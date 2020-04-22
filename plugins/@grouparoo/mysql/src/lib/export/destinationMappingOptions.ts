import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const client = await connect(appOptions);
  const rows = await client.asyncQuery(
    `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = ? AND table_name = ?`,
    [appOptions.database, destinationOptions.table]
  );
  await client.asyncEnd();

  const columns = [];
  for (const i in rows) {
    if (rows[i].column_name !== destinationOptions.primaryKey) {
      columns.push({ key: rows[i].column_name, type: "any" });
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

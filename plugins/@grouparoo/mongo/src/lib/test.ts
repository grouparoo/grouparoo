import { TestPluginMethod } from "@grouparoo/core";
import { getColumns } from "../lib/table-import/getColumns";

export const test: TestPluginMethod = async ({
  connection,
  appOptions,
  appId,
}) => {
  await getColumns({ appId, connection, appOptions, tableName: "user" });

  const collectionCount = await connection.db.listCollections().toArray();
  const success = collectionCount.length >= 0;
  if (!collectionCount) {
    throw new Error(`Mongo.db query problem.`);
  }
  const message = `Found ${collectionCount.length} collections in this database`;
  return { success, message };
};

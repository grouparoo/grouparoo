import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ connection }) => {
  const response = await connection.query({
    query: 'SELECT "grouparoo" as message',
  });
  const success = response[0][0].message === "grouparoo";
  console.log({ success });

  const rowCountResponse = await connection.query({
    query: `select count(catalog_name) as __count from INFORMATION_SCHEMA.SCHEMATA`,
  });
  const message = `found ${rowCountResponse[0][0].__count} tables in this database`;
  console.log({ message });

  return { success, message };
};

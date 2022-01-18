import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
import { PostgresPoolClient } from "../../src/lib/connect";
const sourceOptions = getConnection().methods.sourceOptions;

// these used and set by test
const { appOptions, usersTableName, purchasesTableName } = getConfig();
let client: PostgresPoolClient;

async function getTables() {
  const response = await sourceOptions({
    connection: client,
    appOptions,
    sourceOptions: null,
    app: null,
    appId: null,
  });

  return response.table.options;
}

describe("postgres/table/sourceOptions", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });

  test("gets tables", async () => {
    const tables = await getTables();
    const tableNames = tables.sort();
    expect(tableNames).toEqual(
      expect.arrayContaining([usersTableName, purchasesTableName])
    );
  });
});

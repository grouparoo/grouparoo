import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceFilters = getConnection().methods.sourceFilters;

// these used and set by test
const { appOptions, purchasesTableName } = getConfig();
const sourceOptions = {
  table: purchasesTableName,
};
let client;

async function getFilters() {
  const response = await sourceFilters({
    connection: client,
    appOptions,
    sourceOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
    sourceMapping: null,
    property: null,
    propertyId: null,
    propertyOptions: null,
  });
  return response;
}

describe("mongo/table/sourceFilters", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });

  test("gets filters", async () => {
    const columns = await (await getFilters()).sort((a, b) =>
      a.key.localeCompare(b.key)
    );
    const columnNames = columns.map((r) => r.key);
    expect(columnNames).toEqual([
      "_id",
      "amount",
      "date",
      "id",
      "profile_id",
      "purchase",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(7);

    expect(columns[0]).toMatchObject({
      key: "_id",
      ops: ["equals", "does not equal", "contains", "does not contain"],
    });

    expect(columns[1]).toMatchObject({
      key: "amount",
      ops: [
        "equals",
        "does not equal",
        "greater than",
        "greater than or equal to",
        "less than",
        "less than or equal to",
      ],
    });
    expect(columns[2]).toMatchObject({
      key: "date",
      ops: [
        "equals",
        "does not equal",
        "greater than",
        "greater than or equal to",
        "less than",
        "less than or equal to",
      ],
    });
    expect(columns[3]).toMatchObject({
      key: "id",
      ops: [
        "equals",
        "does not equal",
        "greater than",
        "greater than or equal to",
        "less than",
        "less than or equal to",
      ],
    });
    expect(columns[4]).toMatchObject({
      key: "profile_id",
      ops: [
        "equals",
        "does not equal",
        "greater than",
        "greater than or equal to",
        "less than",
        "less than or equal to",
      ],
    });
    expect(columns[5]).toMatchObject({
      key: "purchase",
      ops: ["equals", "does not equal", "contains", "does not contain"],
    });
    expect(columns[6]).toMatchObject({
      key: "stamp",
      ops: [
        "equals",
        "does not equal",
        "greater than",
        "greater than or equal to",
        "less than",
        "less than or equal to",
      ],
    });
  });
});

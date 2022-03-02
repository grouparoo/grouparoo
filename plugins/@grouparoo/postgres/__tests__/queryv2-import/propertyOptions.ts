import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/queryv2-import/connection";
import { PostgresPoolClient } from "../../src/lib/connect";
const propertyOptionsMethod = getConnection().methods.propertyOptions;

// these used and set by test
const { appOptions, purchasesSourceQuery } = getConfig();
const sourceOptions = { query: purchasesSourceQuery };
let client: PostgresPoolClient;

async function getOptionsForKey(keyName: string, existingPropertyOptions = {}) {
  const propertyOptions = await propertyOptionsMethod({
    property: null,
    propertyId: null,
    propertyOptions: existingPropertyOptions,
  });

  const option = propertyOptions.find((rule) => rule.key === keyName);
  if (!option) return [];
  expect(option.key).toBeTruthy();

  const optionMethod = option.options;

  const response = await optionMethod({
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
  });
  return response;
}

describe("postgres/queryv2/propertyOptions", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });

  test("gets list of columns to create a source", async () => {
    const response = await getOptionsForKey("column");
    const columnNames = response.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "purchase",
      "random_num",
      "record_id",
      "stamp",
    ]);
    expect(response.length).toBe(7);

    let column, value;
    column = response.find((col) => col.key === "id");
    value = column.examples[0];
    expect(typeof value).toEqual("number");
    expect(column.examples.length).toEqual(10);

    column = response.find((col) => col.key === "purchase");
    value = column.examples[0];
    expect(typeof value).toEqual("string");

    column = response.find((col) => col.key === "date");
    value = column.examples[0];
    expect(typeof value).toEqual("string");
    expect(new Date(value).getTime()).toBeGreaterThan(0);

    column = response.find((col) => col.key === "stamp");
    value = column.examples[0];
    expect(typeof value).toEqual("object");
    expect(value.constructor.name).toEqual("Date");
    expect((<Date>value).getTime()).toBeGreaterThan(0);

    column = response.find((col) => col.key === "random_num");
    value = column.examples[0];
    expect(typeof value).toEqual("number");
  });

  test("gets aggregationMethod", async () => {
    const response = await getOptionsForKey("aggregationMethod");

    const methods = response.map((r) => r.key).sort();
    expect(methods).toEqual(["exact"]);
  });
});

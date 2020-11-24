import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const profilePropertyRuleOptions = getConnection().profilePropertyRuleOptions;

// these used and set by test
const { appOptions, purchasesTableName } = getConfig();
const sourceOptions = { table: purchasesTableName };
let client;

async function getOptionsForKey(keyName) {
  const option = profilePropertyRuleOptions.find(
    (rule) => rule.key === keyName
  );
  expect(option.key).toBeTruthy();

  const optionMethod = option.options;

  const response = await optionMethod({
    connection: client,
    appOptions,
    sourceOptions,
    app: null,
    appGuid: null,
    source: null,
    sourceGuid: null,
    sourceMapping: null,
    profilePropertyRule: null,
    profilePropertyRuleGuid: null,
  });
  return response;
}

describe("postgres/table/profilePropertyRuleOptions", () => {
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
      "profile_id",
      "purchase",
      "stamp",
    ]);
    expect(response.length).toBe(6);

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
  });

  test("gets aggregationMethod", async () => {
    const response = await getOptionsForKey("aggregationMethod");

    const methods = response.map((r) => r.key).sort();
    expect(methods).toEqual([
      "average",
      "count",
      "exact",
      "least recent value",
      "max",
      "min",
      "most recent value",
      "sum",
    ]);
  });

  test("gets sortColumn", async () => {
    const response = await getOptionsForKey("sortColumn");
    const columnNames = response.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "profile_id",
      "purchase",
      "stamp",
    ]);

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
  });
});

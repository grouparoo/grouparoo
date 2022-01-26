import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const propertyOptionsMethod = getConnection().methods.propertyOptions;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "PURCHASES" };

async function getOptionsForKey(keyName: string, existingPropertyOptions = {}) {
  const connection = await connect({ appOptions, app: null, appId: null });

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
    connection,
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

describe("snowflake/table/propertyOptions", () => {
  test("gets list of columns to create a source", async () => {
    const response = await getOptionsForKey("column");
    const columnNames = response.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "AMOUNT",
      "DATE",
      "ID",
      "PROFILE_ID",
      "PURCHASE",
      "STAMP",
    ]);
    expect(response.length).toBe(6);

    let column, value;
    column = response.find((col) => col.key === "ID");
    value = column.examples[0];
    expect(typeof value).toEqual("number");
    expect(column.examples.sort()).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort()
    );

    column = response.find((col) => col.key === "PURCHASE");
    value = column.examples[0];
    expect(typeof value).toEqual("string");

    column = response.find((col) => col.key === "STAMP");
    value = column.examples[0];
    expect(value.constructor.name).toEqual("Date");
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

  test("does not get sortColumn when not needed", async () => {
    const response = await getOptionsForKey("sortColumn");
    expect(response).toEqual([]);
  });

  test("gets sortColumn when needed", async () => {
    const response = await getOptionsForKey("sortColumn", {
      aggregationMethod: "most recent value",
    });
    const columnNames = response.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "AMOUNT",
      "DATE",
      "ID",
      "PROFILE_ID",
      "PURCHASE",
      "STAMP",
    ]);

    let column, value;
    column = response.find((col) => col.key === "ID");
    value = column.examples[0];
    expect(typeof value).toEqual("number");
    expect(column.examples.sort()).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort()
    );

    column = response.find((col) => col.key === "PURCHASE");
    value = column.examples[0];
    expect(typeof value).toEqual("string");

    column = response.find((col) => col.key === "STAMP");
    value = column.examples[0];
    expect(value.constructor.name).toEqual("Date");
  });
});

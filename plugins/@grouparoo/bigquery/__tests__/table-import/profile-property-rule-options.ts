import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";

import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const propertyOptions = getConnection().propertyOptions;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-profile-property-rule-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-profile-property-rule-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function getOptionsForKey(keyName) {
  const option = propertyOptions.find((rule) => rule.key === keyName);
  expect(option.key).toBeTruthy();

  const optionMethod = option.options;
  const connection = await connect({ appOptions, app: null, appGuid: null });

  const response = await optionMethod({
    connection,
    appOptions,
    sourceOptions,
    app: null,
    appGuid: null,
    source: null,
    sourceGuid: null,
    sourceMapping: null,
    property: null,
    propertyGuid: null,
  });
  return response;
}

describe("bigquery/table/propertyOptions", () => {
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

    column = response.find((col) => col.key === "stamp");
    value = column.examples[0];
    expect(typeof value).toEqual("string");
    expect(new Date(value).getTime()).toBeGreaterThan(0);
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

    column = response.find((col) => col.key === "stamp");
    value = column.examples[0];
    expect(typeof value).toEqual("string");
    expect(new Date(value).getTime()).toBeGreaterThan(0);
  });
});

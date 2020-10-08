import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";

import { profilePropertyRuleOptions } from "../../src/lib/table-import/options";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

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
const sourceOptions = { table: "PURCHASES" };

async function getOptionsForKey(keyName) {
  const option = profilePropertyRuleOptions.find(
    (rule) => rule.key === keyName
  );
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
    profilePropertyRule: null,
    profilePropertyRuleGuid: null,
  });
  return response;
}

describe("snowflake/table/profilePropertyRuleOptions", () => {
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

  test("gets aggregation methods", async () => {
    const response = await getOptionsForKey("aggregation method");

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

  test("gets sort columns", async () => {
    const response = await getOptionsForKey("sort column");
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

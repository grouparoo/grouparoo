// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { destinationOptions } from "../../src/lib/export-sales-cloud/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/core/api/__tests__/utils/specHelper";
const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-sales-cloud",
  "destination-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-sales-cloud/destination-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

describe("salesforce/sales-cloud/destinationOptions", () => {
  test("can look up objects", async () => {
    const result = await destinationOptions({
      destinationOptions: {},
      appOptions,
      app: null,
      connection: null,
    });

    let option, options;

    option = result.profileObject;
    options = option.options;
    expect(option.type).toEqual("typeahead");
    expect(options.length).toBeGreaterThan(10);
    expect(options.indexOf("Contact")).toEqual(0);
    expect(options.indexOf("Lead")).toEqual(1);

    option = result.profileFieldMatch;
    expect(option.type).toEqual("pending");
    expect(option.options).toEqual([]);
  });

  test("gives original list if bad value", async () => {
    const result = await destinationOptions({
      destinationOptions: { profileObject: "Junk" },
      appOptions,
      app: null,
      connection: null,
    });

    let option, options;

    option = result.profileObject;
    options = option.options;
    expect(option.type).toEqual("typeahead");
    expect(options.length).toBeGreaterThan(10);
    expect(options.indexOf("Contact")).toEqual(0);
    expect(options.indexOf("Lead")).toEqual(1);

    option = result.profileFieldMatch;
    expect(option.type).toEqual("pending");
    expect(option.options).toEqual([]);
  });

  test("can look up key fields", async () => {
    const result = await destinationOptions({
      destinationOptions: { profileObject: "Contact" },
      appOptions,
      app: null,
      connection: null,
    });

    let option, options;

    option = result.profileObject;
    options = option.options;
    expect(option.type).toEqual("typeahead");
    expect(options.length).toBeGreaterThan(10);
    expect(options.indexOf("Contact")).toEqual(0);
    expect(options.indexOf("Lead")).toEqual(1);

    option = result.profileFieldMatch;
    expect(option.type).toEqual("list");
    expect(option.options).toEqual(["Custom_External_ID__c", "Email", "Id"]);
  });

  test("get same back when sent everything", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Contact",
        profileFieldMatch: "Email",
      },
      appOptions,
      app: null,
      connection: null,
    });

    let option, options;

    option = result.profileObject;
    options = option.options;
    expect(option.type).toEqual("typeahead");
    expect(options.length).toBeGreaterThan(10);
    expect(options.indexOf("Contact")).toEqual(0);
    expect(options.indexOf("Lead")).toEqual(1);

    option = result.profileFieldMatch;
    expect(option.type).toEqual("list");
    expect(option.options).toEqual(["Custom_External_ID__c", "Email", "Id"]);
  });

  test("get same back when sends bad field", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Contact",
        profileFieldMatch: "Junk",
      },
      appOptions,
      app: null,
      connection: null,
    });

    let option, options;

    option = result.profileObject;
    options = option.options;
    expect(option.type).toEqual("typeahead");
    expect(options.length).toBeGreaterThan(10);
    expect(options.indexOf("Contact")).toEqual(0);
    expect(options.indexOf("Lead")).toEqual(1);

    option = result.profileFieldMatch;
    expect(option.type).toEqual("list");
    expect(option.options).toEqual(["Custom_External_ID__c", "Email", "Id"]);
  });
});

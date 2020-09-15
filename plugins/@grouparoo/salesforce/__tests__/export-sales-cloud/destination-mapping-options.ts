// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { destinationMappingOptions } from "../../src/lib/export-sales-cloud/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/core/api/__tests__/utils/specHelper";
const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-sales-cloud",
  "destination-mapping-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-sales-cloud/destination-mapping-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

describe("salesforce/sales-cloud/destinationMappingOptions", () => {
  test("can load destinationMappingOptions from Contact Email", async () => {
    const destinationOptions = {
      profileObject: "Contact",
      profileFieldMatch: "Email",
    };
    const options = await destinationMappingOptions({
      appOptions,
      destinationOptions,
      app: null,
      connection: null,
      destination: null,
    });
    const { profilePropertyRules } = options;
    const { required, known } = profilePropertyRules;

    expect(required.length).toBe(2);
    let field;
    field = required.find((f) => f.key === "Email");
    expect(field.type).toBe("email");

    field = required.find((f) => f.key === "LastName");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "Id");
    expect(field).toBeFalsy();

    field = known.find((f) => f.key === "FirstName");
    expect(field.type).toBe("string");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "MobilePhone");
    expect(field.type).toBe("phone");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Title");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);
  });

  test("can load destinationMappingOptions from Contact Id", async () => {
    const destinationOptions = {
      profileObject: "Contact",
      profileFieldMatch: "Id",
    };
    const options = await destinationMappingOptions({
      appOptions,
      destinationOptions,
      app: null,
      connection: null,
      destination: null,
    });
    const { profilePropertyRules } = options;
    const { required, known } = profilePropertyRules;

    expect(required.length).toBe(2);
    let field;
    field = required.find((f) => f.key === "Id");
    expect(field.type).toBe("string");

    field = required.find((f) => f.key === "LastName");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "Email");
    expect(field.type).toBe("email");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "FirstName");
    expect(field.type).toBe("string");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "MobilePhone");
    expect(field.type).toBe("phone");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Title");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);
  });

  test("can load destinationMappingOptions from Contact Custom", async () => {
    const destinationOptions = {
      profileObject: "Contact",
      profileFieldMatch: "Custom_External_ID__c",
    };
    const options = await destinationMappingOptions({
      appOptions,
      destinationOptions,
      app: null,
      connection: null,
      destination: null,
    });
    const { profilePropertyRules } = options;
    const { required, known } = profilePropertyRules;

    expect(required.length).toBe(2);
    let field;
    field = required.find((f) => f.key === "Custom_External_ID__c");
    expect(field.type).toBe("string");

    field = required.find((f) => f.key === "LastName");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "Email");
    expect(field.type).toBe("email");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "FirstName");
    expect(field.type).toBe("string");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "MobilePhone");
    expect(field.type).toBe("phone");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Title");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);
  });
});

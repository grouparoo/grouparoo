import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import {
  destinationMappingOptions,
  getUserFields,
} from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "destination-mapping-options.js"
);

// these comments to use nock
const newNock = false;
require("../fixtures/destination-mapping-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "789562378987934";

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: appId,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("mailjet/destinationMappingOptions", () => {
  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const fields = await getUserFields(client);
    const name = fields.find((f) => f.key === "name");
    const firstName = fields.find((f) => f.key === "firstname");
    const country = fields.find((f) => f.key === "country");
    const newsletterSub = fields.find((f) => f.key === "newsletter_sub");

    expect(name.type).toBe("string");
    expect(name.important).toBe(true);

    expect(firstName.type).toBe("string");
    expect(firstName.important).toBe(true);

    expect(country.type).toBe("string");
    expect(country.important).toBe(false);

    expect(newsletterSub.type).toBe("string");
    expect(newsletterSub.important).toBe(false);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "email");
    expect(requiredFieldEmail.key).toBe("email");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldName = known.find((f) => f.key === "name");
    expect(knownFieldName.type).toBe("string");
    expect(knownFieldName.important).toBe(true);

    const knownFieldCountry = known.find((f) => f.key === "country");
    expect(knownFieldCountry.type).toBe("string");
    expect(knownFieldCountry.important).toBe(false);
  });
});

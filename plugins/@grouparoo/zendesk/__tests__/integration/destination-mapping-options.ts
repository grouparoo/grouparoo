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
require("./../fixtures/destination-mapping-options");
// or these to make it true
//const newNock = true;
//helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appGuid: null,
    connection: null,
    destination: null,
    destinationGuid: null,
    destinationOptions: null,
  });
}

describe("zendesk/destinationMappingOptions", () => {
  beforeAll(async () => {}, 1000 * 30);

  afterAll(async () => {}, 1000 * 30);

  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const fields = await getUserFields(client);
    const text = fields.find((f) => f.key === "text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);
    const decimal = fields.find((f) => f.key === "decimal_field");
    expect(decimal.type).toBe("float");
    expect(decimal.important).toBe(true);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { profilePropertyRules } = options;
    const { required, known } = profilePropertyRules;

    expect(required.length).toBe(2);
    const external_id = required.find((f) => f.key === "external_id");
    expect(external_id.key).toBe("external_id");
    expect(external_id.type).toBe("string");

    const name = required.find((f) => f.key === "name");
    expect(name.key).toBe("name");
    expect(name.type).toBe("string");

    const text = known.find((f) => f.key === "text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);

    const email = known.find((f) => f.key === "email");
    expect(email.type).toBe("email");
    expect(email.important).toBe(true);

    const alias = known.find((f) => f.key === "alias");
    expect(alias.type).toBe("string");
    expect(alias.important).toBeUndefined();
  });
});

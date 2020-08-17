// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import {
  destinationMappingOptions,
  getUserFields,
} from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
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
    const options = await destinationMappingOptions({
      appOptions,
      app: null,
      connection: null,
      destination: null,
      destinationOptions: null,
    });
    const { profilePropertyRules } = options;
    const { required, known } = profilePropertyRules;

    expect(required.length).toBe(1);
    const external_id = required[0];
    expect(external_id.key).toBe("external_id");
    expect(external_id.type).toBe("string");

    const text = known.find((f) => f.key === "text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);

    const email = known.find((f) => f.key === "email");
    expect(email.type).toBe("email");
    expect(email.important).toBe(true);

    const name = known.find((f) => f.key === "name");
    expect(name.type).toBe("string");
    expect(name.important).toBe(true);

    const alias = known.find((f) => f.key === "alias");
    expect(alias.type).toBe("string");
    expect(alias.important).toBeUndefined();
  });
});

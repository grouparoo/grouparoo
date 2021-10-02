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
const newNock = helper.useNock(nockFile, updater);
const appOptions = loadAppOptions(newNock);

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("zendesk/destinationMappingOptions", () => {
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
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);
    const external_id = required.find((f) => f.key === "external_id");
    expect(external_id.key).toBe("external_id");
    expect(external_id.type).toBe("string");

    const name = known.find((f) => f.key === "name");
    expect(name.key).toBe("name");
    expect(name.type).toBe("string");
    expect(name.important).toBe(true);

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

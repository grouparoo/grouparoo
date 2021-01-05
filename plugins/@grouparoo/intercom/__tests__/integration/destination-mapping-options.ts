import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import {
  destinationMappingOptions,
  fetchKnownAttributes,
} from "../../src/lib/export-users/destinationMappingOptions";
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
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appGuid = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";
const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  creationMode: "User",
  removalMode: "Archive",
};

async function runDestinationMappingOptions() {
  return destinationMappingOptions({
    appGuid,
    appOptions,
    destinationOptions,
    app: null,
    connection: null,
    destination: null,
    destinationGuid: null,
  });
}

describe("intercom/destinationMappingOptions", () => {
  test("can fetch custom attributes", async () => {
    const client = await connect(appOptions);
    const fields = await fetchKnownAttributes(client);

    const text = fields.find((f) => f.key === "custom_attributes.text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);
    const decimal = fields.find(
      (f) => f.key === "custom_attributes.decimal_field"
    );
    expect(decimal.type).toBe("float");
    expect(decimal.important).toBe(true);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions();
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);
    const external_id = required.find((f) => f.key === "external_id");
    expect(external_id.key).toBe("external_id");
    expect(external_id.type).toBe("string");

    const email = required.find((f) => f.key === "email");
    expect(email.key).toBe("email");
    expect(email.type).toBe("email");

    const text = known.find((f) => f.key === "custom_attributes.text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);

    const name = known.find((f) => f.key === "name");
    expect(name.type).toBe("string");
    expect(name.important).toBe(true);

    const phone = known.find((f) => f.key === "phone");
    expect(phone.type).toBe("phoneNumber");
    expect(phone.important).toBeFalsy();

    const signed_up_at = known.find((f) => f.key === "signed_up_at");
    expect(signed_up_at.type).toBe("date");
    expect(signed_up_at.important).toBeFalsy();
  });
});

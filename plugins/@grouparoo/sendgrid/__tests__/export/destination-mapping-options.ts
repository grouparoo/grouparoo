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
// const newNock = true;
// helper.recordNock(nockFile, updater);

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

describe("sendgrid/destinationMappingOptions", () => {
  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const fields = await getUserFields(client);
    const phoneNumber = fields.find((f) => f.key === "phone_number");
    const textField = fields.find((f) => f.key === "text_field");
    const numberField = fields.find((f) => f.key === "number_field");
    const dateField = fields.find((f) => f.key === "date_field");
    expect(phoneNumber.type).toBe("phoneNumber");
    expect(textField.type).toBe("string");
    expect(numberField.type).toBe("float");
    expect(dateField.type).toBe("date");
    expect(phoneNumber.important).toBe(true);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "email");
    expect(requiredFieldEmail.key).toBe("email");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldPhoneNumber = known.find((f) => f.key === "phone_number");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(true);

    const knownFieldPhoneSignupDate = known.find((f) => f.key === "created_at");
    expect(knownFieldPhoneSignupDate.type).toBe("date");
    expect(knownFieldPhoneSignupDate.important).toBe(true);
  });
});

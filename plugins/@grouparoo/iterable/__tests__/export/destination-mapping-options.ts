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
    appGuid: null,
    connection: null,
    destination: null,
    destinationGuid: null,
    destinationOptions: null,
  });
}

describe("iterable/destinationMappingOptions", () => {
  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const fields = await getUserFields(client);
    const phoneNumber = fields.find((f) => f.key === "phoneNumber");
    expect(phoneNumber.type).toBe("phoneNumber");
    expect(phoneNumber.important).toBe(true);
    const decimal = fields.find((f) => f.key === "userId");
    expect(decimal.type).toBe("string");
    expect(decimal.important).toBe(true);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "email");
    expect(requiredFieldEmail.key).toBe("email");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldUserId = known.find((f) => f.key === "userId");
    expect(knownFieldUserId.type).toBe("string");
    expect(knownFieldUserId.important).toBe(true);

    const knownFieldPhoneNumber = known.find((f) => f.key === "phoneNumber");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(true);

    const knownFieldPhoneSignupDate = known.find((f) => f.key === "signupDate");
    expect(knownFieldPhoneSignupDate.type).toBe("date");
    expect(knownFieldPhoneSignupDate.important).toBe(true);
  });
});

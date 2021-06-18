import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/eloqua": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import {
  destinationMappingOptions,
  getContactFields,
} from "../../src/lib/export/destinationMappingOptions";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { exportBatch } from "../../../pardot/src/lib/export/exportProfiles";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

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
const appId = "app_789-po09-EOEP-HKp8-3039";

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    appId,
    app: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("eloqua/destinationMappingOptions", () => {
  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const fields = await getContactFields(client);

    const businessPhone = fields.find((f) => f.key === "businessPhone");
    const mobilePhone = fields.find((f) => f.key === "mobilePhone");

    const firstName = fields.find((f) => f.key === "firstName");
    const lastName = fields.find((f) => f.key === "lastName");
    const lastModifiedByCRM = fields.find(
      (f) => f.key === "lastModifiedByCRMSystem"
    );

    expect(businessPhone.type).toBe("phoneNumber");
    expect(businessPhone.important).toBe(false);
    expect(mobilePhone.type).toBe("phoneNumber");
    expect(mobilePhone.important).toBe(false);
    expect(firstName.type).toBe("string");
    expect(firstName.important).toBe(true);
    expect(lastName.type).toBe("string");
    expect(lastName.important).toBe(true);
    expect(lastModifiedByCRM.type).toBe("date");
    expect(lastModifiedByCRM.important).toBe(false);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "emailAddress");
    expect(requiredFieldEmail.key).toBe("emailAddress");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldPhoneNumber = known.find((f) => f.key === "businessPhone");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(false);

    const knownFieldMobilePhoneNumber = known.find(
      (f) => f.key === "mobilePhone"
    );
    expect(knownFieldMobilePhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldMobilePhoneNumber.important).toBe(false);

    const readOnlyField = known.find((f) => f.key === "dateCreated");
    expect(readOnlyField).toBe(undefined);
  });
});

import { helper } from "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export-objects/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_78189023490-789789456456-90-3k";

async function runDestinationMappingOptions({ destinationOptions }) {
  return destinationMappingOptions({
    appOptions,
    destinationOptions,
    app: null,
    appId: appId,
    connection: null,
    destination: null,
    destinationId: null,
  });
}

describe("hubspot/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const destinationOptions = {
      recordObject: "CONTACT",
      recordMatchField: "email",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "email");
    expect(requiredFieldEmail.key).toBe("email");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldPhoneNumber = known.find((f) => f.key === "phone");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(false);

    const knownFieldMobilePhoneNumber = known.find(
      (f) => f.key === "mobilephone"
    );
    expect(knownFieldMobilePhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldMobilePhoneNumber.important).toBe(false);

    const readOnlyField = known.find((f) => f.key === "days_to_close");
    expect(readOnlyField).toBe(undefined);
  });
});

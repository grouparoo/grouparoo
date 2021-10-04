import "@grouparoo/spec-helper";
import { loadAppOptions } from "../utils/nockHelper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";

const appOptions = loadAppOptions(false);
const appId = "app_mix-panel-09012378476890123-123903547";

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

describe("braze/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldExternalId = required.find(
      (f) => f.key === "external_id"
    );
    expect(requiredFieldExternalId.key).toBe("external_id");
    expect(requiredFieldExternalId.type).toBe("string");

    const requiredFieldEmail = known.find((f) => f.key === "email");
    expect(requiredFieldEmail.type).toBe("email");
    expect(requiredFieldEmail.important).toBe(true);

    const knownFieldPhoneNumber = known.find((f) => f.key === "phone");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(false);

    const knownFieldFirstName = known.find((f) => f.key === "first_name");
    expect(knownFieldFirstName.type).toBe("string");
    expect(knownFieldFirstName.important).toBe(true);

    const knownFieldLastName = known.find((f) => f.key === "last_name");
    expect(knownFieldLastName.type).toBe("string");
    expect(knownFieldLastName.important).toBe(true);

    const knownFieldLatitude = known.find((f) => f.key === "gender");
    expect(knownFieldLatitude.type).toBe("string");
    expect(knownFieldLatitude.important).toBe(false);

    const knownEmailOpenTrackingDisable = known.find(
      (f) => f.key === "email_open_tracking_disabled"
    );
    expect(knownEmailOpenTrackingDisable.type).toBe("boolean");
    expect(knownEmailOpenTrackingDisable.important).toBe(false);
  });
});

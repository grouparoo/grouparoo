import "@grouparoo/spec-helper";
import { loadAppOptions } from "../utils/nockHelper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";

// these comments to use nock
const newNock = false;
// or these to make it true
// const newNock = true;

const appOptions = loadAppOptions(newNock);
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

describe("mixpanel/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldDistinctId = required.find(
      (f) => f.key === "$distinct_id"
    );
    expect(requiredFieldDistinctId.key).toBe("$distinct_id");
    expect(requiredFieldDistinctId.type).toBe("string");

    const requiredFieldEmail = known.find((f) => f.key === "$email");
    expect(requiredFieldEmail.type).toBe("email");
    expect(requiredFieldEmail.important).toBe(true);

    const knownFieldPhoneNumber = known.find((f) => f.key === "$phone");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(false);

    const knownFieldFirstName = known.find((f) => f.key === "$first_name");
    expect(knownFieldFirstName.type).toBe("string");
    expect(knownFieldFirstName.important).toBe(true);

    const knownFieldLastName = known.find((f) => f.key === "$last_name");
    expect(knownFieldLastName.type).toBe("string");
    expect(knownFieldLastName.important).toBe(true);

    const knownFieldName = known.find((f) => f.key === "$name");
    expect(knownFieldName.type).toBe("string");
    expect(knownFieldName.important).toBe(true);

    const knownFieldLatitude = known.find((f) => f.key === "$latitude");
    expect(knownFieldLatitude.type).toBe("number");
    expect(knownFieldLatitude.important).toBe(false);

    const knownFieldLongitude = known.find((f) => f.key === "$longitude");
    expect(knownFieldLongitude.type).toBe("number");
    expect(knownFieldLongitude.important).toBe(false);
  });
});

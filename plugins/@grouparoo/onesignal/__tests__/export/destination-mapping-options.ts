import { helper } from "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
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

describe("OneSignal/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldExternalUserId = required.find(
      (f) => f.key === "external_user_id"
    );
    expect(requiredFieldExternalUserId.key).toBe("external_user_id");
    expect(requiredFieldExternalUserId.type).toBe("string");

    const knownFieldFirstName = known.find((f) => f.key === "first_name");
    expect(knownFieldFirstName.type).toBe("string");
    expect(knownFieldFirstName.important).toBe(true);

    const knownFieldLastName = known.find((f) => f.key === "last_name");
    expect(knownFieldLastName.type).toBe("string");
    expect(knownFieldLastName.important).toBe(true);

    const knownFieldUserName = known.find((f) => f.key === "user_name");
    expect(knownFieldUserName.type).toBe("string");
    expect(knownFieldUserName.important).toBe(true);

    const unknownField = known.find((f) => f.key === "some_unknown_field");
    expect(unknownField).toBe(undefined);
  });
});

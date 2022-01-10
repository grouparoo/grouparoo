import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

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

describe("vero/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const id = required.find((f) => f.key === "id");
    expect(id.type).toBe("string");

    const email = known.find((f) => f.key === "email");
    expect(email.type).toBe("email");
  });
});

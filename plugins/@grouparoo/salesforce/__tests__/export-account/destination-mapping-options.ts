import "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export-account/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_c1bb07d8-0c4f-49b5-ad42-545f2e8662e7";

async function runDestinationMappingOptions({ destinationOptions }) {
  return destinationMappingOptions({
    appId,
    appOptions,
    destinationOptions,
    app: null,
    connection: null,
    destination: null,
    destinationId: null,
  });
}

describe("salesforce/sales-cloud/destinationMappingOptions", () => {
  test("can load destinationMappingOptions from Account Id", async () => {
    const destinationOptions = {
      primaryKey: "AccountNumber",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties, labels } = options;
    const { required, known } = properties;
    const { property } = labels;

    expect(required.length).toBe(2);
    let field;
    field = required.find((f) => f.key === "AccountNumber");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "OwnerId");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Phone");
    expect(field.type).toBe("phoneNumber");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Rating");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);

    expect(property.singular).toBe("Salesforce Account Field");
    expect(property.plural).toBe("Salesforce Account Fields");
  });
});

import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/salesforce": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export-account/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import {
  Destination,
  DestinationSyncModeData,
} from "@grouparoo/core/dist/models/Destination";
import { App, GrouparooModel } from "@grouparoo/core";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

let app: App;
let destination: Destination;
let model: GrouparooModel;

async function runDestinationMappingOptions({ destinationOptions }) {
  return destinationMappingOptions({
    appId: app.id,
    appOptions,
    destinationOptions,
    destination,
    app: null,
    connection: null,
    destinationId: null,
  });
}

describe("salesforce/sales-cloud/destinationMappingOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
    app = await helper.factories.app({
      type: "salesforce",
      options: appOptions,
    });
    destination = await Destination.create({
      name: "Salesforce Test Destination",
      type: "salesforce-export-accounts",
      syncMode: DestinationSyncModeData.enrich.key,
      appId: app.id,
      modelId: model.id,
    });
  });

  test("can load destinationMappingOptions from Account Id", async () => {
    const destinationOptions = {
      primaryKey: "AccountNumber",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties, labels } = options;
    const { required, known } = properties;
    const { property } = labels;

    expect(required.length).toBe(1); // name will not be considered.
    let field;
    field = required.find((f) => f.key === "AccountNumber");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "Name");
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

import "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export-contacts/destinationMappingOptions";
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
  test("can load destinationMappingOptions from Contact Id", async () => {
    const destinationOptions = {
      primaryKey: "Email",
      accountKey: "Name",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties, labels } = options;
    const { required, known } = properties;
    const { property, group } = labels;

    expect(required.length).toBe(3);
    let field;
    field = required.find((f) => f.key === "Email");
    expect(field.type).toBe("email");

    field = required.find((f) => f.key === "LastName");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "FirstName");
    expect(field.type).toBe("string");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "MobilePhone");
    expect(field.type).toBe("phoneNumber");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Title");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);

    expect(property.singular).toBe("Salesforce Contact Field");
    expect(property.plural).toBe("Salesforce Contact Fields");
  });

  test("can load destinationMappingOptions from Contact Custom and Reference", async () => {
    const destinationOptions = {
      primaryKey: "Custom_External_ID__c",
      accountKey: "AccountNumber",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties, labels } = options;
    const { required, known } = properties;
    const { property } = labels;

    expect(required.length).toBe(4);
    let field;
    field = required.find((f) => f.key === "Custom_External_ID__c");
    expect(field.type).toBe("string");

    field = required.find((f) => f.key === "LastName");
    expect(field.type).toBe("string");

    field = required.find((f) => f.key === "Account.Name");
    expect(field.type).toBe("string");

    field = required.find((f) => f.key === "Account.AccountNumber");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "Email");
    expect(field.type).toBe("email");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "FirstName");
    expect(field.type).toBe("string");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "MobilePhone");
    expect(field.type).toBe("phoneNumber");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Title");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);

    expect(property.singular).toBe("Salesforce Contact Field");
    expect(property.plural).toBe("Salesforce Contact Fields");
  });
});

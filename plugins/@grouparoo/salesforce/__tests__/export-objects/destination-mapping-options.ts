import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/salesforce": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export-objects/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { App, Destination, GrouparooModel } from "@grouparoo/core";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

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
      syncMode: DestinationSyncModeData.sync.key,
      appId: app.id,
      modelId: model.id,
    });
  });

  test("can load destinationMappingOptions from Lead Email", async () => {
    const destinationOptions = {
      recordObject: "Lead",
      recordMatchField: "Email",
      groupObject: "Campaign",
      groupNameField: "Name",
      membershipObject: "CampaignMembership",
      membershipRecordField: "ContactId",
      membershipGroupField: "CampaignId",
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

    field = required.find((f) => f.key === "Company");
    expect(field.type).toBe("string");

    field = known.find((f) => f.key === "Id");
    expect(field).toBeFalsy();

    field = known.find((f) => f.key === "FirstName");
    expect(field.type).toBe("string");
    expect(field.important).toBe(true);

    field = known.find((f) => f.key === "MobilePhone");
    expect(field.type).toBe("phoneNumber");
    expect(field.important).toBe(false);

    field = known.find((f) => f.key === "Title");
    expect(field.type).toBe("string");
    expect(field.important).toBe(false);

    expect(property.singular).toBe("Salesforce Lead Field");
    expect(property.plural).toBe("Salesforce Lead Fields");
    expect(group.singular).toBe("Salesforce Campaign");
    expect(group.plural).toBe("Salesforce Campaigns");
  });

  test("can load destinationMappingOptions from Contact Id", async () => {
    const destinationOptions = {
      recordObject: "Contact",
      recordMatchField: "Id",
      groupObject: "Topic",
      groupNameField: "Name",
      membershipObject: "TopicAssignment",
      membershipRecordField: "EntityId",
      membershipGroupField: "TopicId",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties, labels } = options;
    const { required, known } = properties;
    const { property, group } = labels;

    expect(required.length).toBe(2);
    let field;
    field = required.find((f) => f.key === "Id");
    expect(field.type).toBe("string");

    field = required.find((f) => f.key === "LastName");
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
    expect(group.singular).toBe("Salesforce Topic");
    expect(group.plural).toBe("Salesforce Topics");
  });

  test("can load destinationMappingOptions from Contact Custom and Reference", async () => {
    const destinationOptions = {
      recordObject: "Contact",
      recordMatchField: "Custom_External_ID__c",
      groupObject: "Campaign",
      groupNameField: "Name",
      membershipObject: "CampaignMembership",
      membershipRecordField: "ContactId",
      membershipGroupField: "CampaignId",
      recordReferenceField: "AccountId",
      recordReferenceObject: "Account",
      recordReferenceMatchField: "AccountNumber",
    };
    const options = await runDestinationMappingOptions({ destinationOptions });
    const { properties, labels } = options;
    const { required, known } = properties;
    const { property, group } = labels;

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
    expect(group.singular).toBe("Salesforce Campaign");
    expect(group.plural).toBe("Salesforce Campaigns");
  });
});

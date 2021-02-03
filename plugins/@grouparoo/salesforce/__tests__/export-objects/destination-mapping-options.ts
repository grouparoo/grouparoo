import "@grouparoo/spec-helper";
import path from "path";
import { destinationMappingOptions } from "../../src/lib/export-objects/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-objects",
  "destination-mapping-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-objects/destination-mapping-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

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
  test("can load destinationMappingOptions from Lead Email", async () => {
    const destinationOptions = {
      profileObject: "Lead",
      profileMatchField: "Email",
      groupObject: "Campaign",
      groupNameField: "Name",
      membershipObject: "CampaignMembership",
      membershipProfileField: "ContactId",
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
    expect(field.type).toBe("phone");
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
      profileObject: "Contact",
      profileMatchField: "Id",
      groupObject: "Topic",
      groupNameField: "Name",
      membershipObject: "TopicAssignment",
      membershipProfileField: "EntityId",
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
    expect(field.type).toBe("phone");
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
      profileObject: "Contact",
      profileMatchField: "Custom_External_ID__c",
      groupObject: "Campaign",
      groupNameField: "Name",
      membershipObject: "CampaignMembership",
      membershipProfileField: "ContactId",
      membershipGroupField: "CampaignId",
      profileReferenceField: "AccountId",
      profileReferenceObject: "Account",
      profileReferenceMatchField: "AccountNumber",
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
    expect(field.type).toBe("phone");
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

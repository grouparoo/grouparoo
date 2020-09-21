import "@grouparoo/spec-helper";
import path from "path";
import { destinationOptions } from "../../src/lib/export-objects/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-objects",
  "destination-options.js"
);

// TODO: update for reference

// these comments to use nock
const newNock = false;
require("./../fixtures/export-objects/destination-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

// profileObject
// profileMatchField
// groupObject
// groupNameField
// membershipObject
// membershipProfileField
// membershipGroupField
// profileReferenceField
// profileReferenceObject
// profileReferenceMatchField

function expectPendingResult(result) {
  let option, options;

  option = result.profileObject;
  options = option.options;
  expect(option.type).toEqual("typeahead");
  expect(options.length).toBeGreaterThan(10);
  expect(options.indexOf("Contact")).toEqual(0);
  expect(options.indexOf("Lead")).toEqual(1);

  option = result.profileMatchField;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);

  option = result.groupObject;
  options = option.options;
  expect(option.type).toEqual("typeahead");
  expect(options.length).toBeGreaterThan(10);
  expect(options.indexOf("Campaign")).toEqual(0);
  expect(options.indexOf("Topic")).toEqual(1);

  option = result.groupNameField;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);

  option = result.membershipObject;
  options = option.options;
  expect(option.type).toEqual("typeahead");
  expect(options.length).toBeGreaterThan(10);
  expect(options.indexOf("CampaignMember")).toEqual(0);
  expect(options.indexOf("TopicAssignment")).toEqual(1);

  option = result.membershipProfileField;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);

  option = result.membershipGroupField;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);

  option = result.profileReferenceField;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);

  option = result.profileReferenceObject;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);

  option = result.profileReferenceMatchField;
  expect(option.type).toEqual("pending");
  expect(option.options).toEqual([]);
}

function expectFullResult(result) {
  let option, options;

  option = result.profileObject;
  options = option.options;
  expect(option.type).toEqual("typeahead");
  expect(options.length).toBeGreaterThan(10);

  option = result.profileMatchField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(expect.arrayContaining(["Email", "LastName"]));

  option = result.groupObject;
  options = option.options;
  expect(option.type).toEqual("typeahead");
  expect(options.length).toBeGreaterThan(10);

  option = result.groupNameField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(expect.arrayContaining(["Name"]));

  option = result.membershipObject;
  options = option.options;
  expect(option.type).toEqual("typeahead");
  expect(options.length).toBeGreaterThan(10);
}

function expectContactCampaignResult(result, referenceStage = 0) {
  let option, options;
  option = result.membershipProfileField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(
    expect.arrayContaining(["ContactId", "LeadId", "ContactId"])
  );

  option = result.membershipGroupField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(
    expect.arrayContaining(["ContactId", "LeadId", "ContactId"])
  );

  option = result.profileReferenceField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(
    expect.arrayContaining(["AccountId", "IndividualId"])
  );

  if (referenceStage < 1) {
    option = result.profileReferenceObject;
    expect(option.type).toEqual("pending");
    expect(option.options).toEqual([]);
  } else {
    option = result.profileReferenceObject;
    expect(option.type).toEqual("typeahead");
    expect(option.options).toEqual(expect.arrayContaining(["Account"]));
  }

  if (referenceStage < 2) {
    option = result.profileReferenceMatchField;
    expect(option.type).toEqual("pending");
    expect(option.options).toEqual([]);
  } else {
    option = result.profileReferenceMatchField;
    expect(option.type).toEqual("typeahead");
    options = option.options;
    expect(options.length).toBeGreaterThan(10);
    expect(options.indexOf("AccountNumber")).toEqual(0);
    expect(options.indexOf("Name")).toEqual(1);
  }
}

function expectLeadTopicResult(result, referenceStage = 0) {
  let option;
  option = result.membershipProfileField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(
    expect.arrayContaining(["EntityId", "TopicId"])
  );

  option = result.membershipGroupField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(
    expect.arrayContaining(["EntityId", "TopicId"])
  );

  option = result.profileReferenceField;
  expect(option.type).toEqual("typeahead");
  expect(option.options).toEqual(
    expect.arrayContaining(["IndividualId", "DandbCompanyId"])
  );

  if (referenceStage < 1) {
    option = result.profileReferenceObject;
    expect(option.type).toEqual("pending");
    expect(option.options).toEqual([]);
  } else {
    option = result.profileReferenceObject;
    expect(option.type).toEqual("typeahead");
    expect(option.options).toEqual(expect.arrayContaining(["Individual"]));
  }

  if (referenceStage < 2) {
    option = result.profileReferenceMatchField;
    expect(option.type).toEqual("pending");
    expect(option.options).toEqual([]);
  } else {
    option = result.profileReferenceMatchField;
    expect(option.type).toEqual("typeahead");
    expect(option.options).toEqual(
      expect.arrayContaining(["FirstName", "LastName"])
    );
  }
}

describe("salesforce/sales-cloud/destinationOptions", () => {
  test("can look up objects", async () => {
    const result = await destinationOptions({
      destinationOptions: {},
      appOptions,
      app: null,
      connection: null,
    });

    expectPendingResult(result);
  });

  test("gives original list if bad value", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Junk",
        groupObject: "Bad",
        membershipObject: "False",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectPendingResult(result);
  });

  test("can look up key fields", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Lead",
        groupObject: "Topic",
        membershipObject: "TopicAssignment",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
    expectLeadTopicResult(result);
  });

  test("get same back when sent everything", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Contact",
        profileMatchField: "Email",
        groupObject: "Campaign",
        groupNameField: "Name",
        membershipObject: "CampaignMember",
        membershipProfileField: "ContactId",
        membershipGroupField: "CampaignId",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
    expectContactCampaignResult(result);
  });

  test("get same back when sends bad fields", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Lead",
        profileMatchField: "xEmail",
        groupObject: "Topic",
        groupNameField: "xName",
        membershipObject: "TopicAssignment",
        membershipProfileField: "xEntityId",
        membershipGroupField: "xTopicId",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
    expectLeadTopicResult(result);
  });

  test("gets types of the reference when a field is chosen", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Lead",
        profileMatchField: "Email",
        groupObject: "Topic",
        groupNameField: "Name",
        membershipObject: "TopicAssignment",
        membershipProfileField: "EntityId",
        membershipGroupField: "TopicId",
        profileReferenceField: "IndividualId",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
    expectLeadTopicResult(result, 1);
  });

  test("gets all reference data when object is chosen", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Contact",
        profileMatchField: "Email",
        groupObject: "Campaign",
        groupNameField: "Name",
        membershipObject: "CampaignMember",
        membershipProfileField: "ContactId",
        membershipGroupField: "CampaignId",
        profileReferenceField: "AccountId",
        profileReferenceObject: "Account",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
    expectContactCampaignResult(result, 2);
  });

  test("gets all reference data when everything is chosen", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Lead",
        profileMatchField: "Email",
        groupObject: "Topic",
        groupNameField: "Name",
        membershipObject: "TopicAssignment",
        membershipProfileField: "EntityId",
        membershipGroupField: "TopicId",
        profileReferenceField: "IndividualId",
        profileReferenceObject: "Individual",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
    expectLeadTopicResult(result, 2);
  });
});

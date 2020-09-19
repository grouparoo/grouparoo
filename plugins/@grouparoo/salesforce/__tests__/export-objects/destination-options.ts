// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { destinationOptions } from "../../src/lib/export-objects/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/core/api/__tests__/utils/specHelper";
const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-objects",
  "destination-options.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-objects/destination-options");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

// profileObject
// profileMatchField
// groupObject
// groupNameField
// membershipObject
// membershipProfileField
// membershipGroupField

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
  });

  test("get same back when sent everything", async () => {
    const result = await destinationOptions({
      destinationOptions: {
        profileObject: "Lead",
        profileMatchField: "Email",
        groupObject: "Topic",
        groupNameField: "Name",
        membershipObject: "TopicAssignment",
        membershipProfileField: "EntityId",
        membershipGroupField: "TopicId",
      },
      appOptions,
      app: null,
      connection: null,
    });

    expectFullResult(result);
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
  });
});

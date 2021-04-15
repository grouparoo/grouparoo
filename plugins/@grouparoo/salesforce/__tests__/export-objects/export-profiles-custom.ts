import "@grouparoo/spec-helper";
import path from "path";
import { exportBatch } from "../../src/lib/export-objects/exportProfiles";
import { destinationModel } from "../../src/lib/export-objects/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-objects",
  "export-profiles-custom.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-objects/export-profiles-custom");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_e8bb07d8-0c4f-49b5-ad42-545f2e8662e8";
const syncOperations = DestinationSyncModeData.sync.operations;
const destinationOptions = {
  profileObject: "Contact",
  profileMatchField: "Custom_External_ID__c",
  groupObject: "Topic",
  groupNameField: "Name",
  membershipObject: "TopicAssignment",
  membershipProfileField: "EntityId",
  membershipGroupField: "TopicId",
  profileReferenceField: "",
  profileReferenceObject: " ",
  profileReferenceMatchField: "",
};
const model = destinationModel(destinationOptions);

const custom1 = "1id";
const id1 = "pro1";
let userId1 = null;

const custom2 = "2id";
const id2 = "pro2";
let userId2 = null;

const custom3 = "3id";
const id3 = "pro3";
let userId3 = null;

const group1 = "(test) High Value2";
let groupId1 = null;

const group2 = "(test) Churned2";
let groupId2 = null;

const deleteProfileValues = [custom1, custom2, custom3];
const deleteGroupValues = [group1, group2];
const deleteReferenceValues = [];
const {
  findId,
  getUser,
  findGroupId,
  getGroupMemberIds,
  cleanUp,
} = getModelHelpers({
  appOptions,
  model,
  deleteProfileValues,
  deleteGroupValues,
  deleteReferenceValues,
});

describe("salesforce/sales-cloud/export-profiles/custom", () => {
  beforeAll(async () => {
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  beforeEach(async () => {
    jest.setTimeout(helper.mediumTime);
  });

  test("can create profile on Salesforce", async () => {
    userId1 = await findId(custom1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId1 = await findId(custom1);
    expect(userId1).toBeTruthy();
    const user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.LastName).toBe("Smith");
    expect(user.FirstName).toBe(null);
  });

  test("can add/edit user variables and do multiple users", async () => {
    userId2 = await findId(custom2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            FirstName: "John",
            LastName: "Jones",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Jih",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.FirstName).toBe("John");
    expect(user.LastName).toBe("Jones");

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId2 = await findId(custom2);
    expect(userId2).toBeTruthy();
    user = await getUser(userId2);
    expect(user.Custom_External_ID__c).toBe(custom2);
    expect(user.LastName).toBe("Jih");
  });

  test("can clear user variables", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            FirstName: "John",
            LastName: "Jones",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Simpson",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.FirstName).toBe(null);
    expect(user.LastName).toBe("Simpson");
  });

  test("can delete a user", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            FirstName: "Brian",
            LastName: "Chang",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            FirstName: "Brian",
            LastName: "Chang",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Test",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    let user;
    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");

    // for types next time
    expect(user.checkbox_field__c).toEqual(false); // defaulted
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);

    expect(await findId(custom2)).toBeNull();
    expect(await getUser(userId2)).toBeNull();
  });

  test("can add to and create groups", async () => {
    groupId1 = await findGroupId(group1);
    expect(groupId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            FirstName: "Brian",
            LastName: "Chang",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(errors).toBeNull();
    expect(success).toBe(true);

    groupId1 = await findGroupId(group1);
    expect(groupId1).toBeTruthy();
    const members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("can add multiple users to lists", async () => {
    groupId2 = await findGroupId(group2);
    expect(groupId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          oldGroups: [group1],
          newGroups: [group1, group2],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Jones",
          },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(errors).toBeNull();
    expect(success).toBe(true);

    let user;
    userId2 = await findId(custom2);
    user = await getUser(userId2);
    expect(user.Custom_External_ID__c).toBe(custom2);
    expect(user.LastName).toBe("Jones");

    groupId2 = await findGroupId(group2);
    expect(groupId2).toBeTruthy();

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          oldGroups: [group1, group2],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Jones",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Jones",
          },
          oldGroups: [group2],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([]);
  });

  test("can ignore case for an custom value to update same user", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1.toUpperCase(),
            LastName: "MACRON",
          },
          oldGroups: [group1],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1.toUpperCase());
    expect(user.LastName).toBe("MACRON");
  });

  test("can set back to lowercase", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1.toUpperCase(),
            LastName: "MACRON",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Smith",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Jones",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.LastName).toBe("Smith");
  });

  test("can handle some of them working, but not others", async () => {
    userId3 = await findId(custom3);
    expect(userId3).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Simpson",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Jones",
          },
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Simpson",
            email_field__c: "badone",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id3,
          oldProfileProperties: {},
          newProfileProperties: {
            Custom_External_ID__c: custom3,
            LastName: "King",
            email_field__c: "valid@grouparoo.com",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id2);
    expect(error.message).toContain("email");

    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toEqual(custom1);
    expect(user.LastName).toEqual("Test");
    expect(user.email_field__c).toEqual(null);

    userId3 = await findId(custom3);
    expect(userId3).toBeTruthy();
    user = await getUser(userId3);
    expect(user.Custom_External_ID__c).toEqual(custom3);
    expect(user.LastName).toEqual("King"); // created
    expect(user.email_field__c).toEqual("valid@grouparoo.com");
  });
});

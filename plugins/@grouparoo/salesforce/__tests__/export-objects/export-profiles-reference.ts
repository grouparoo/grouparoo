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
  "export-profiles-reference.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-objects/export-profiles-reference");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_04bb07d8-0c4f-49b5-ad42-545f2e8662fa";
const syncOperations = DestinationSyncModeData.sync.operations;
const destinationOptions = {
  profileObject: "Contact",
  profileMatchField: "Custom_External_ID__c",
  groupObject: "Campaign",
  groupNameField: "Name",
  membershipObject: "CampaignMember",
  membershipProfileField: "ContactId",
  membershipGroupField: "CampaignId",
  profileReferenceField: "AccountId",
  profileReferenceObject: "Account",
  profileReferenceMatchField: "AccountNumber",
};
const model = destinationModel(destinationOptions);

const custom1 = "1refid";
const id1 = "pro1";
let userId1 = null;

const custom2 = "2refid";
const id2 = "pro2";
let userId2 = null;

const custom3 = "3refid";
const id3 = "pro3";
let userId3 = null;

const group1 = "(test) High Value3";
let groupId1 = null;

const group2 = "(test) Churned3";
let groupId2 = null;

const account1 = "(test) Big Account3";
const accountNum1 = "abcd";
let accountId1 = null;

const account2 = "(test) Truncated Account3";
// accountNumber can only be 40
const accountNum2 = "12345678901234567890123456789012345678901234567890";
const accountNum2Truncated = accountNum2.substring(0, 40);
let accountId2 = null;

const account3 = null; // testing null name
const accountNum3 = "shouldnotexist";
let accountId3 = null;

const deleteProfileValues = [custom1, custom2, custom3];
const deleteGroupValues = [group1, group2];
const deleteReferenceValues = [
  accountNum1,
  accountNum2,
  accountNum2Truncated,
  accountNum3,
];
const {
  findId,
  getUser,
  cleanUp,
  findReferenceId,
  getReferencedUserIds,
  getReference,
} = getModelHelpers({
  appOptions,
  model,
  deleteProfileValues,
  deleteGroupValues,
  deleteReferenceValues,
});

describe("salesforce/sales-cloud/export-profiles/reference", () => {
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

    accountId1 = await findReferenceId(accountNum1);
    expect(accountId1).toBe(null);

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
            "Account.Name": account1,
            "Account.AccountNumber": accountNum1,
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

    accountId1 = await findReferenceId(accountNum1);
    expect(accountId1).toBeTruthy();
    expect(user.AccountId).toEqual(accountId1);

    const referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([userId1].sort());
    expect(user.AccountId).toEqual(accountId1);

    const account = await getReference(accountId1);
    expect(account.AccountNumber).toEqual(accountNum1);
    expect(account.Name).toEqual(account1);
  });

  test("it handles long account numbers and does its best", async () => {
    userId2 = await findId(custom2);
    expect(userId2).toBe(null);

    expect(await findReferenceId(accountNum2)).toBe(null);
    expect(await findReferenceId(accountNum2Truncated)).toBe(null);

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
            Custom_External_ID__c: custom2,
            LastName: "Jones",
            "Account.Name": account2,
            "Account.AccountNumber": accountNum2,
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
    userId2 = await findId(custom2);
    expect(userId2).toBeTruthy();
    const user = await getUser(userId2);
    expect(user.Custom_External_ID__c).toBe(custom2);
    expect(user.LastName).toBe("Jones");

    expect(await findReferenceId(accountNum2)).toBe(null);
    accountId2 = await findReferenceId(accountNum2Truncated);
    expect(accountId2).toBeTruthy();
    expect(user.AccountId).toEqual(accountId2);

    const referenced = await getReferencedUserIds(accountId2);
    expect(referenced.sort()).toEqual([userId2].sort());

    const account = await getReference(accountId2);
    expect(account.AccountNumber).toEqual(accountNum2Truncated);
    expect(account.Name).toEqual(account2);
  });

  test("it reuses truncated one when adding and doesn't update name", async () => {
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
            "Account.Name": account1,
            "Account.AccountNumber": accountNum1,
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Simpson",
            "Account.Name": "Something else",
            "Account.AccountNumber": accountNum2,
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
    const user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.LastName).toBe("Simpson");
    expect(user.AccountId).toEqual(accountId2);

    const referenced = await getReferencedUserIds(accountId2);
    expect(referenced.sort()).toEqual([userId2, userId1].sort());

    const account = await getReference(accountId2);
    expect(account.AccountNumber).toEqual(accountNum2Truncated);
    expect(account.Name).toEqual(account2); // not the change
  });

  test("it can update multiple people and error on just one", async () => {
    userId3 = await findId(custom3);
    expect(userId3).toBe(null);

    accountId3 = await findReferenceId(accountNum3);
    expect(accountId3).toBe(null);

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
            "Account.Name": "Something else",
            "Account.AccountNumber": accountNum2,
          },
          newProfileProperties: {
            Custom_External_ID__c: custom1,
            LastName: "Test",
            "Account.Name": null,
            "Account.AccountNumber": accountNum3,
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
            "Account.Name": account2,
            "Account.AccountNumber": accountNum2,
          },
          newProfileProperties: {
            Custom_External_ID__c: custom2,
            LastName: "Updated",
            "Account.Name": account2,
            "Account.AccountNumber": null, // should clear it
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
            LastName: "Three",
            "Account.Name": account2,
            "Account.AccountNumber": accountNum2,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id1);
    expect(error.message).toContain("REQUIRED_FIELD_MISSING");

    let user;
    user = await getUser(userId1);
    expect(user.Custom_External_ID__c).toBe(custom1);
    expect(user.LastName).toBe("Simpson"); // no change
    expect(user.AccountId).toEqual(accountId2); // no change

    user = await getUser(userId2);
    expect(user.Custom_External_ID__c).toBe(custom2);
    expect(user.LastName).toBe("Updated");
    expect(user.AccountId).toEqual(null); // cleared

    userId3 = await findId(custom3);
    expect(userId3).toBeTruthy();
    user = await getUser(userId3);
    expect(user.Custom_External_ID__c).toBe(custom3);
    expect(user.LastName).toBe("Three");
    expect(user.AccountId).toEqual(accountId2);

    let referenced;
    referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([].sort());

    referenced = await getReferencedUserIds(accountId2);
    expect(referenced.sort()).toEqual([userId1, userId3].sort());

    accountId3 = await findReferenceId(accountNum3);
    expect(accountId3).toBe(null);
  });
});

import "@grouparoo/spec-helper";
import path from "path";
import { exportBatch } from "../../src/lib/export-objects/exportRecords";
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
  "export-records-enrich.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-objects/export-records-enrich");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8662e9";
const syncOperations = DestinationSyncModeData.enrich.operations;
const destinationOptions = {
  recordObject: "Contact",
  recordMatchField: "Email",
  groupObject: "Campaign",
  groupNameField: "Name",
  membershipObject: "CampaignMember",
  membershipRecordField: "ContactId",
  membershipGroupField: "CampaignId",
  recordReferenceField: "AccountId",
  recordReferenceObject: "Account",
  recordReferenceMatchField: "Name",
};
const model = destinationModel(destinationOptions);

const email1 = "enrichbrian@demo.com";
const id1 = "pro1";
const newEmail1 = "enrichother@demo.com";
let userId1 = null;

const email2 = "enrichbrian2@demo.com";
const id2 = "pro2";
let userId2 = null;

const email3 = "enrichbrian3@demo.com";
const id3 = "pro3";
let userId3 = null;

const group1 = "(test) High Value5";
let groupId1 = null;

const group2 = "(test) Churned5";
let groupId2 = null;

const account1 = "(test) Big Account5";
let accountId1 = null;

const account2 = "(test) Small Account5";
let accountId2 = null;

const deleteRecordValues = [email1, email2, email3, newEmail1];
const deleteGroupValues = [group1, group2];
const deleteReferenceValues = [account1, account2];
const {
  findId,
  getUser,
  findGroupId,
  getGroupMemberIds,
  cleanUp,
  findReferenceId,
  getReferencedUserIds,
} = getModelHelpers({
  appOptions,
  model,
  deleteRecordValues,
  deleteGroupValues,
  deleteReferenceValues,
});

describe("salesforce/sales-cloud/export-records/enrich", () => {
  beforeAll(async () => {
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  beforeEach(async () => {
    jest.setTimeout(helper.mediumTime);
  });

  test("will not create record on Salesforce", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    accountId1 = await findReferenceId(account1);
    expect(accountId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email1,
            LastName: "Smith",
            "Account.Name": account1,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    accountId1 = await findReferenceId(account1);
    expect(accountId1).toBe(null);
  });

  test("makes a record to enrich using sync mode", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    accountId1 = await findReferenceId(account1);
    expect(accountId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email1,
            LastName: "Smith",
            "Account.Name": account1,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();

    const user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("Smith");
    expect(user.FirstName).toBe(null);

    accountId1 = await findReferenceId(account1);
    expect(accountId1).toBeTruthy();
    expect(user.AccountId).toEqual(accountId1);

    const referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([userId1].sort());
    expect(user.AccountId).toEqual(accountId1);
  });

  test("can add/edit user variables and and skip one", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    accountId2 = await findReferenceId(account2);
    expect(accountId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            LastName: "Smith",
            "Account.Name": account1,
          },
          newRecordProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
            "Account.Name": account2,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email2,
            LastName: "Jih",
            "Account.Name": account2,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    accountId2 = await findReferenceId(account2);
    expect(accountId2).toBeTruthy();

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("John");
    expect(user.LastName).toBe("Jones");
    expect(user.AccountId).toEqual(accountId2);

    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    let referenced;
    referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([]);

    referenced = await getReferencedUserIds(accountId2);
    expect(referenced.sort()).toEqual([userId1].sort());
  });

  test("can clear user variables", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
            "Account.Name": account2,
          },
          newRecordProperties: {
            Email: email1,
            LastName: "Simpson",
            "Account.Name": null,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe(null);
    expect(user.LastName).toBe("Simpson");
    expect(user.AccountId).toEqual(null);

    let referenced;
    referenced = await getReferencedUserIds(accountId2);
    expect(referenced.sort()).toEqual([].sort());
  });

  test("it can change the email address", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            LastName: "Brian",
            "Account.Name": null,
          },
          newRecordProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
            "Account.Name": null,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            Email: email2,
            LastName: "Jih",
            "Account.Name": account2,
          },
          newRecordProperties: {
            Email: email2,
            LastName: "Test",
            "Account.Name": account2,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(newEmail1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");

    expect(await findId(email1)).toBeNull(); // changed!
    expect(await findId(email2)).toBeNull(); // still not there!
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
          recordId: id1,
          oldRecordProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
            "Account.Name": account1,
          },
          newRecordProperties: {
            Email: email1,
            LastName: "Smith",
            "Account.Name": account1,
          },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(errors).toBeNull();
    expect(success).toBe(true);

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe(null);
    expect(user.LastName).toBe("Smith");

    groupId1 = await findGroupId(group1);
    expect(groupId1).toBeTruthy();
    const members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("will not delete a user, but remove them from groups", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            LastName: "Smith",
            "Account.Name": null,
          },
          newRecordProperties: {
            Email: email1,
            FirstName: "Brian",
            LastName: "Other", // it should not listen
            "Account.Name": null,
          },
          oldGroups: [group1],
          newGroups: [group1],
          toDelete: true,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not deleting");
    expect(error.errorLevel).toEqual("info");

    let user;
    user = await getUser(userId1);
    expect(user).toBeTruthy(); // not deleted
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("Smith"); // not changed

    const members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([].sort()); // removed
  });

  test("try to delete a user that doesn't exist", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id3,
          oldRecordProperties: { Email: email3, LastName: "None" },
          newRecordProperties: { Email: email3, LastName: "None" },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id3);
    expect(error.message).toContain("not deleting");
    expect(error.errorLevel).toEqual("info");

    expect(await findId(email3)).toBeNull(); // not added
  });

  test("makes another record to enrich using sync mode", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email2,
            LastName: "Patil",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();

    const user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Patil");
    expect(user.FirstName).toBe(null);
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
          recordId: id1,
          oldRecordProperties: { Email: email1, LastName: "Smith" },
          newRecordProperties: { Email: email1, LastName: "Smith" },
          oldGroups: [group1],
          newGroups: [group1, group2],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { Email: email2, LastName: "Patil" },
          newRecordProperties: { Email: email2, LastName: "Jones" },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: { Email: email3, LastName: "None" },
          newRecordProperties: { Email: email3, LastName: "None" },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id3);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    groupId2 = await findGroupId(group2);
    expect(groupId2).toBeTruthy();

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([userId1].sort());

    let user;
    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Jones");

    userId3 = await findId(email3);
    expect(userId3).toBe(null);
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { Email: email1, LastName: "Smith" },
          newRecordProperties: { Email: email1, LastName: "Smith" },
          oldGroups: [group1, group2],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { Email: email2, LastName: "Jones" },
          newRecordProperties: { Email: email2, LastName: "Jones" },
          oldGroups: [group2],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: { Email: email3, LastName: "None" },
          newRecordProperties: { Email: email3, LastName: "None" },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id3);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([]);

    userId3 = await findId(email3);
    expect(userId3).toBe(null);
  });

  test("can handle some of them working, but not others", async () => {
    userId3 = await findId(email3);
    expect(userId3).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            LastName: "Simpson",
          },
          newRecordProperties: {
            Email: email1,
            LastName: "Test",
            "Account.Name": account1,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            Email: email2,
            LastName: "Jones",
          },
          newRecordProperties: {
            Email: email2,
            LastName: "Simpson",
            email_field__c: "badone",
            "Account.Name": account1,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: { Email: email3, LastName: "None" },
          newRecordProperties: { Email: email3, LastName: "None" },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(2);

    const error2 = errors.find((e) => e.recordId === id2);
    expect(error2).toBeTruthy();
    expect(error2.message).toContain("email");
    expect(error2.errorLevel).toBeFalsy();

    const error3 = errors.find((e) => e.recordId === id3);
    expect(error3).toBeTruthy();
    expect(error3.message).toContain("not creating");
    expect(error3.errorLevel).toEqual("info");

    user = await getUser(userId1);
    expect(user.Email).toEqual(email1);
    expect(user.LastName).toEqual("Test");
    expect(user.email_field__c).toEqual(null);
    expect(user.AccountId).toEqual(accountId1);

    user = await getUser(userId2);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones"); // not updated
    expect(user.email_field__c).toEqual(null);
    expect(user.AccountId).toEqual(null); // not updated

    const referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([userId1].sort());

    userId3 = await findId(email3);
    expect(userId3).toBe(null);
  });
});

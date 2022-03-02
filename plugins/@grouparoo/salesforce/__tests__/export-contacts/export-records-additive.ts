import "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-contacts/exportRecords";
import { destinationModel } from "../../src/lib/export-contacts/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8632e2";
const syncOperations = DestinationSyncModeData.upsert.operations;
const destinationOptions = {
  primaryKey: "Email",
  accountKey: "Name",
};
const model = destinationModel(destinationOptions);

const email1 = "additivebrian@demo.com";
const id1 = "pro1";
const newEmail1 = "additiveother@demo.com";
let userId1 = null;

const email2 = "additivebrian2@demo.com";
const id2 = "pro2";
let userId2 = null;

const email3 = "additivebrian3@demo.com";
const id3 = "pro3";
let userId3 = null;

const account1 = "(test) Big Account6";
let accountId1 = null;

const account2 = "(test) Small Account6";
let accountId2 = null;

const deleteRecordValues = [email1, email2, email3, newEmail1];
const deleteGroupValues = [];
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

describe("salesforce/sales-cloud/export-records/upsert", () => {
  beforeAll(async () => {
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  beforeEach(async () => {
    jest.setTimeout(helper.mediumTime);
  });

  test("can create record on Salesforce", async () => {
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

  test("can add/edit user variables and do multiple users", async () => {
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

    accountId2 = await findReferenceId(account2);
    expect(accountId2).toBeTruthy();

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("John");
    expect(user.LastName).toBe("Jones");
    expect(user.AccountId).toEqual(accountId2);

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();
    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Jih");
    expect(user.AccountId).toEqual(accountId2);

    let referenced;
    referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([]);

    referenced = await getReferencedUserIds(accountId2);
    expect(referenced.sort()).toEqual([userId1, userId2].sort());
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
    expect(referenced.sort()).toEqual([userId2].sort());
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
            LastName: "Jones",
            "Account.Name": account2,
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

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(newEmail1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");

    expect(await findId(email1)).toBeNull(); // changed!

    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Jones");
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
            Email: newEmail1,
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
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email3,
            LastName: "King",
            email_field__c: "valid@grouparoo.com",
            "Account.Name": account1,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
    expect(error.message).toContain("email");

    user = await getUser(userId1);
    expect(user.Email).toEqual(email1);
    expect(user.LastName).toEqual("Test");
    expect(user.email_field__c).toEqual(null);
    expect(user.AccountId).toEqual(accountId1);

    user = await getUser(userId2);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones"); // not updated
    expect(user.email_field__c).toEqual(null);

    userId3 = await findId(email3);
    expect(userId3).toBeTruthy();
    user = await getUser(userId3);
    expect(user.Email).toEqual(email3);
    expect(user.LastName).toEqual("King"); // created
    expect(user.email_field__c).toEqual("valid@grouparoo.com");
    expect(user.AccountId).toEqual(accountId1);

    const referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([userId1, userId3].sort());
  });
});

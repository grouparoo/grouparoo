import "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-contacts/exportRecords";
import { destinationModel } from "../../src/lib/export-contacts/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8662e9";
const syncOperations = DestinationSyncModeData.enrich.operations;
const destinationOptions = {
  primaryKey: "Email",
  accountKey: "Name",
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

const account1 = "(test) Big Account5";
let accountId1 = null;

const account2 = "(test) Small Account5";
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

  test("can edit user variables mapping by the Id", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions: {
        primaryKey: "Id",
      },
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            Id: userId1,
            FirstName: "John",
            LastName: "Jones",
          },
          newRecordProperties: {
            Email: email1,
            Id: userId1,
            FirstName: "Dave",
            LastName: "Jones",
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

    const user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("Dave");
    expect(user.LastName).toBe("Jones");
  });

  test("try to edit user variables mapping by the Id with and invalid Id", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions: {
        primaryKey: "Id",
      },
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Id: "123",
            FirstName: "John",
          },
          newRecordProperties: {
            Id: "123",
            FirstName: "Dave",
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
    expect(error.message).toContain("Invalid Salesforce id length");
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
            FirstName: "Dave",
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
          oldRecordProperties: { Email: email3, LastName: "None" },
          newRecordProperties: { Email: email3, LastName: "None" },
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
    expect(user.LastName).toEqual("Patil"); // not updated
    expect(user.email_field__c).toEqual(null);
    expect(user.AccountId).toEqual(null); // not updated

    const referenced = await getReferencedUserIds(accountId1);
    expect(referenced.sort()).toEqual([userId1].sort());

    userId3 = await findId(email3);
    expect(userId3).toBe(null);
  });
});

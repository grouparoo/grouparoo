import "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-account/exportRecords";
import { destinationModel } from "../../src/lib/export-account/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8662e9";
const syncOperations = DestinationSyncModeData.enrich.operations;
const destinationOptions = {
  primaryKey: "AccountNumber",
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

const deleteRecordValues = [email1, email2, email3, newEmail1];
const deleteGroupValues = [];
const deleteReferenceValues = [];
const { findId, getUser, cleanUp, getReferencedUserIds } = getModelHelpers({
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
            AccountNumber: email1,
            Name: "Smith",
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
  });

  test("makes a record to enrich using sync mode", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

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
            AccountNumber: email1,
            Name: "Smith",
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
    expect(user.AccountNumber).toBe(email1);
    expect(user.Name).toBe("Smith");
    expect(user.Site).toBe(null);
  });

  test("can add/edit user variables and and skip one", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            AccountNumber: email1,
            Name: "Smith",
          },
          newRecordProperties: {
            AccountNumber: email1,
            Site: "https://www.grouparoo.com",
            Name: "Jones",
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
            AccountNumber: email2,
            Name: "Jih",
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
    expect(user.AccountNumber).toBe(email1);
    expect(user.Site).toBe("https://www.grouparoo.com");
    expect(user.Name).toBe("Jones");

    userId2 = await findId(email2);
    expect(userId2).toBe(null);
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
            AccountNumber: email1,
            Site: "https://www.grouparoo.com",
            Name: "Jones",
          },
          newRecordProperties: {
            AccountNumber: email1,
            Name: "Simpson",
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
    expect(user.AccountNumber).toBe(email1);
    expect(user.Site).toBe(null);
    expect(user.Name).toBe("Simpson");
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
            AccountNumber: email1,
            Name: "Brian",
          },
          newRecordProperties: {
            AccountNumber: newEmail1,
            Site: "https://www.grouparoo.com/integrations/destinations/salesforce",
            Name: "Chang",
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
            AccountNumber: email2,
            Name: "Jih",
          },
          newRecordProperties: {
            AccountNumber: email2,
            Name: "Test",
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
    expect(user.AccountNumber).toBe(newEmail1);
    expect(user.Site).toBe(
      "https://www.grouparoo.com/integrations/destinations/salesforce"
    );
    expect(user.Name).toBe("Chang");

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
          oldRecordProperties: { AccountNumber: email3, Name: "None" },
          newRecordProperties: { AccountNumber: email3, Name: "None" },
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
            AccountNumber: email2,
            Name: "Patil",
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
    expect(user.AccountNumber).toBe(email2);
    expect(user.Name).toBe("Patil");
    expect(user.Site).toBe(null);
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
            AccountNumber: newEmail1,
            Name: "Simpson",
          },
          newRecordProperties: {
            AccountNumber: email1,
            Name: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            AccountNumber: email2,
            Name: "Jones",
          },
          newRecordProperties: {
            AccountNumber: email2,
            Name: "Simpson",
            email_field__c: "badone",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: { AccountNumber: email3, Name: "None" },
          newRecordProperties: { AccountNumber: email3, Name: "None" },
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
    expect(user.AccountNumber).toEqual(email1);
    expect(user.Name).toEqual("Test");
    expect(user.email_field__c).toEqual(null);

    user = await getUser(userId2);
    expect(user.AccountNumber).toEqual(email2);
    expect(user.Name).toEqual("Patil"); // not updated
    expect(user.email_field__c).toEqual(null);

    userId3 = await findId(email3);
    expect(userId3).toBe(null);
  });
});

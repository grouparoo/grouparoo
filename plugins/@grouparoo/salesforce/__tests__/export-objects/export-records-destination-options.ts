import "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-objects/exportRecords";
import { destinationModel } from "../../src/lib/export-objects/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8662e9";
const syncOperations = DestinationSyncModeData.sync.operations;
const simpleDestinationOptions = {
  recordObject: "Contact",
  recordMatchField: "Email",
};
const model = destinationModel(simpleDestinationOptions);

const email1 = "brian@demo.com";
const id1 = "pro1";
let userId1 = null;

const email4 = "caio@demo.com";
const id4 = "pro4";
let userId4 = null;

const group1 = "(test) High Value1";

const deleteRecordValues = [email1, email4];
const deleteGroupValues = [];
const deleteReferenceValues = [];
const { findId, getUser, cleanUp } = getModelHelpers({
  appOptions,
  model,
  deleteRecordValues,
  deleteGroupValues,
  deleteReferenceValues,
});

describe("salesforce/sales-cloud/export-records/destination-options", () => {
  beforeAll(async () => {
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  beforeEach(async () => {
    jest.setTimeout(helper.mediumTime);
  });

  test("can create record on Salesforce using simple destination options and having old groups", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions: simpleDestinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email1,
            LastName: "Smith",
            number_field__c: 24,
          },
          oldGroups: [group1],
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
    expect(user.number_field__c).toBe(24);
  });

  test("can update a record using simple destination options and passing a new group", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions: simpleDestinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            LastName: "Smith",
          },
          newRecordProperties: {
            Email: email1,
            FirstName: "Brian",
            LastName: "Chang",
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

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();
    const user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");
    expect(user.number_field__c).toBe(24);
  });

  test("can create record on Salesforce with simple destination options passing no groups", async () => {
    userId4 = await findId(email4);
    expect(userId4).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      destinationOptions: simpleDestinationOptions,
      syncOperations,
      exports: [
        {
          recordId: id4,
          oldRecordProperties: {},
          newRecordProperties: {
            Email: email4,
            LastName: "Silveira",
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
    userId4 = await findId(email4);
    expect(userId4).toBeTruthy();
    const user = await getUser(userId4);
    expect(user.Email).toBe(email4);
    expect(user.LastName).toBe("Silveira");
    expect(user.FirstName).toBe(null);
  });

  test("cannot sync if only one Reference option is set", async () => {
    const badDestinationOptions = {
      recordObject: "Contact",
      recordMatchField: "Custom_External_ID__c",
      recordReferenceField: "AccountId",
    };

    await expect(
      exportBatch({
        appId,
        appOptions,
        destinationOptions: badDestinationOptions,
        syncOperations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              LastName: "Smith",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      })
    ).rejects.toThrow(
      /Reference data syncing, all related options must be set/
    );
  });

  test("cannot sync if only one Group option is set", async () => {
    const badDestinationOptions = {
      recordObject: "Contact",
      recordMatchField: "Custom_External_ID__c",
      groupObject: "Campaign",
    };

    await expect(
      exportBatch({
        appId,
        appOptions,
        destinationOptions: badDestinationOptions,
        syncOperations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              LastName: "Smith",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      })
    ).rejects.toThrow(/Group data syncing, all related options must be set/);
  });
});

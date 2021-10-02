import "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-objects/exportRecords";
import { destinationModel } from "../../src/lib/export-objects/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8662f2";
const syncOperations = DestinationSyncModeData.sync.operations;
const destinationOptions = {
  recordObject: "Lead",
  recordMatchField: "Email",
  groupObject: "Campaign",
  groupNameField: "Name",
  membershipObject: "CampaignMember",
  membershipRecordField: "LeadId",
  membershipGroupField: "CampaignId",
  recordReferenceField: null,
  recordReferenceObject: null,
  recordReferenceMatchField: null,
};
const model = destinationModel(destinationOptions);

const email1 = "leadbrian@demo.com";
const id1 = "pro1";
const newEmail1 = "leadother@demo.com";
let userId1 = null;
const accountName1 = "ConvertedCorp";
let contactId1 = null;

const email2 = "leadbrian2@demo.com";
const id2 = "pro2";
let userId2 = null;

const group1 = "(test) High Value4";
let groupId1 = null;

const group2 = "(test) Churned4";
let groupId2 = null;

const deleteRecordValues = [email1, email2, newEmail1];
const deleteGroupValues = [group1, group2];
const deleteReferenceValues = [];
const { findId, getUser, findGroupId, getGroupMemberIds, cleanUp } =
  getModelHelpers({
    appOptions,
    model,
    deleteRecordValues,
    deleteGroupValues,
    deleteReferenceValues,
  });

const {
  getClient,
  findId: findContactId,
  getUser: getContact,
  getGroupMemberIds: getContactMemberIds,
  cleanUp: cleanUpConversion,
  findReferenceId: findAccountId,
} = getModelHelpers({
  appOptions,
  model: destinationModel({
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
  }),
  deleteRecordValues,
  deleteGroupValues,
  deleteReferenceValues: [accountName1],
});

describe("salesforce/sales-cloud/export-records/leads", () => {
  beforeAll(async () => {
    await cleanUp(false);
    await cleanUpConversion(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
    await cleanUpConversion(true);
  }, helper.setupTime);

  beforeEach(async () => {
    jest.setTimeout(helper.mediumTime);
  });

  test("can create record on Salesforce", async () => {
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
            Email: email1,
            LastName: "Smith",
            Company: "SmithCorp",
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
    expect(user.Company).toBe("SmithCorp");
    expect(user.FirstName).toBe(null);
  });

  test("can add/edit user variables and do multiple users", async () => {
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
            Email: email1,
            LastName: "Smith",
            Company: "SmithCorp",
          },
          newRecordProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
            Company: "JonesCorp",
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
            Company: "JihCorp",
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
    expect(user.FirstName).toBe("John");
    expect(user.LastName).toBe("Jones");
    expect(user.Company).toBe("JonesCorp");

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();
    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Jih");
    expect(user.Company).toBe("JihCorp");
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
            FirstName: "John",
            LastName: "Jones",
            Company: "JonesCorp",
          },
          newRecordProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
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
            Company: "JihCorp",
          },
          newRecordProperties: {
            Email: email2,
            LastName: "Test",
            Company: "TestCorp",
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
    expect(user.Company).toBe("ChangCorp");

    expect(await findId(email1)).toBeNull(); // changed!

    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Test");
    expect(user.Company).toBe("TestCorp");
  });

  test("can delete a user", async () => {
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
            Company: "ChangCorp",
          },
          newRecordProperties: {
            Email: email1, // changing back
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
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
            LastName: "Test",
            Company: "TestCorp",
          },
          newRecordProperties: {
            Email: email2,
            LastName: "Test",
            Company: "TestCorp",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          record: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");
    expect(user.Company).toBe("ChangCorp");

    expect(await findId(newEmail1)).toBeNull(); // changed!

    expect(await findId(email2)).toBeNull();
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
          recordId: id1,
          oldRecordProperties: {
            Email: email1,
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
          },
          newRecordProperties: {
            Email: email1,
            LastName: "Smith",
            Company: accountName1,
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

    groupId1 = await findGroupId(group1);
    expect(groupId1).toBeTruthy();
    const members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("can convert to a contact", async () => {
    contactId1 = await findContactId(email1);
    expect(contactId1).toBe(null);

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("Smith");
    expect(user.Company).toBe(accountName1);
    expect(user.Status).toBe("Open - Not Contacted");

    const client = await getClient();
    const results = await client.soap.convertLead([
      {
        leadId: userId1,
        convertedStatus: "Closed - Converted",
        doNotCreateOpportunity: true,
      },
    ]);
    expect(results.length).toEqual(1);
    const result = results[0];
    expect(result.errors).toBeFalsy();
    expect(result.success).toBeTruthy();

    contactId1 = await findContactId(email1);
    const accountId1 = await findAccountId(accountName1);
    expect(contactId1).toBeTruthy();
    expect(accountId1).toBeTruthy();
    expect(result.contactId).toEqual(contactId1);
    expect(result.leadId).toEqual(userId1);
    expect(result.accountId).toBe(accountId1);

    user = await getUser(userId1);
    expect(user.LastName).toBe("Smith");
    expect(user.Status).toBe("Closed - Converted");
    expect(user.ConvertedAccountId).toBe(accountId1);
    expect(user.ConvertedContactId).toBe(contactId1);

    let contact;
    contact = await getContact(contactId1);
    expect(contact.LastName).toBe("Smith");
    expect(contact.AccountId).toBe(accountId1);

    // still in the group
    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1].sort());

    // the campaign member has both!
    // note: possible race condition with another Contact source set up in similar way
    members = await getContactMemberIds(groupId1);
    expect(members.sort()).toEqual([contactId1].sort());
  });

  test("does not edit converted leads", async () => {
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
            Company: accountName1,
          },
          newRecordProperties: {
            Email: email1,
            LastName: "NoEdit",
            Company: accountName1,
          },
          oldGroups: [group1],
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
    expect(user.LastName).toBe("Smith");
    expect(user.Company).toBe(accountName1);

    let contact;
    contact = await getContact(contactId1);
    expect(contact.LastName).toBe("Smith");

    // removed
    const members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([].sort());
  });

  test("converted lead is removed from all groups", async () => {
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
          oldRecordProperties: {
            Email: email1,
            LastName: "NoEdit",
            Company: accountName1,
          },
          newRecordProperties: {
            Email: email1,
            LastName: "NoEdit",
            Company: accountName1,
          },
          oldGroups: [group1],
          newGroups: [group1, group2],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(errors).toBeNull();
    expect(success).toBe(true);

    let contact;
    contact = await getContact(contactId1);
    expect(contact.LastName).toBe("Smith");

    // made new group
    groupId2 = await findGroupId(group1);
    expect(groupId2).toBeTruthy();

    // removed from all groups (and can't be added)
    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([].sort());
  });
});

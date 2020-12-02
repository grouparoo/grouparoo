import "@grouparoo/spec-helper";
import path from "path";
import { exportBatch } from "../../src/lib/export-objects/exportProfiles";
import { destinationModel } from "../../src/lib/export-objects/model";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { getModelHelpers } from "../utils/modelHelper";
import { helper } from "@grouparoo/spec-helper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-objects",
  "export-profiles-lead.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-objects/export-profiles-lead");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appGuid = "app_f3bb07d8-0c4f-49b5-ad42-545f2e8662f2";
const destinationOptions = {
  profileObject: "Lead",
  profileMatchField: "Email",
  groupObject: "Campaign",
  groupNameField: "Name",
  membershipObject: "CampaignMember",
  membershipProfileField: "LeadId",
  membershipGroupField: "CampaignId",
  profileReferenceField: null,
  profileReferenceObject: null,
  profileReferenceMatchField: null,
};
const model = destinationModel(destinationOptions);

const email1 = "brian@demo.com";
const guid1 = "pro1";
const newEmail1 = "other@demo.com";
let userId1 = null;

const email2 = "brian2@demo.com";
const guid2 = "pro2";
let userId2 = null;

const email3 = "brian3@demo.com";
const guid3 = "pro3";
let userId3 = null;

const group1 = "(test) High Value";
let groupId1 = null;

const group2 = "(test) Churned";
let groupId2 = null;

const deleteProfileValues = [email1, email2, email3, newEmail1];
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

describe("salesforce/sales-cloud/export-profiles/leads", () => {
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
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appGuid,
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {},
          newProfileProperties: {
            Email: email1,
            LastName: "Smith",
            Company: "SmithCorp",
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
      appGuid,
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            LastName: "Smith",
            Company: "SmithCorp",
          },
          newProfileProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
            Company: "JonesCorp",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: {},
          newProfileProperties: {
            Email: email2,
            LastName: "Jih",
            Company: "JihCorp",
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
      appGuid,
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
            Company: "JonesCorp",
          },
          newProfileProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: {
            Email: email2,
            LastName: "Jih",
            Company: "JihCorp",
          },
          newProfileProperties: {
            Email: email2,
            LastName: "Test",
            Company: "TestCorp",
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
      appGuid,
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
          },
          newProfileProperties: {
            Email: email1, // changing back
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: {
            Email: email2,
            LastName: "Test",
            Company: "TestCorp",
          },
          newProfileProperties: {
            Email: email2,
            LastName: "Test",
            Company: "TestCorp",
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
      appGuid,
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            FirstName: "Brian",
            LastName: "Chang",
            Company: "ChangCorp",
          },
          newProfileProperties: {
            Email: email1,
            LastName: "Smith",
            Company: "SmithCorp",
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
});

import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import EloquaClient from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { exportBatch } from "../../src/lib/export/exportProfiles";
import { indexUsers } from "../utils/shared";
import { processExportedProfiles } from "../../src/lib/export/processExportedProfiles";

const appId = "app_789-po09-EOEP-HKp8-3039";

let client: EloquaClient;

const email1 = "grouparoo@demo.com";
const id1 = "pro1";
const newEmail1 = "notgrouparoo@demo.com";
let user1 = null;

const email2 = "grouparoo2@demo.com";
const id2 = "pro2";
let user2 = null;

const email3 = "grouparoo3@demo.com";
const id3 = "pro3";
let user3 = null;

const email4 = "grouparoo+test@demo.com";
const id4 = "pro4";
let user4 = null;

const list1 = "(test) High Value";
let listId1 = null;

const list2 = "(test) Churned";
let listId2 = null;

let batchEmails = [];

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function findListId(name: string): Promise<number> {
  const list = await client.lists.getByName(name);
  if (!list) {
    return null;
  }
  return list.id;
}

async function deleteLists(suppressErrors) {
  try {
    for (const listToDelete of [list1, list2]) {
      const list = await client.lists.getByName(listToDelete);
      if (list) {
        await client.lists.delete(list["id"]);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteUsers(suppressErrors) {
  try {
    const emailsToDelete = [email1, email2, email3, email4].concat(batchEmails);
    for (const emailToDelete of emailsToDelete) {
      const user = await client.contacts.getByEmail(emailToDelete);
      if (user) {
        await client.contacts.delete(user["id"]);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function generateLongProfiles(count: number) {
  const profiles = [];
  for (let i = 0; i < count; i++) {
    profiles.push({
      emailAddress: `user${i}@demo.com`,
      firstName: `User${i}`,
      lastName: `Demo${i}`,
    });
  }

  return profiles;
}

function makeExports(profiles: Record<string, any>[]) {
  return profiles.map((profile, i) => ({
    profileId: `pro${i}`,
    oldProfileProperties: {},
    newProfileProperties: profile,
    oldGroups: [],
    newGroups: [],
    toDelete: false,
    profile: null,
  }));
}

async function cleanUp(suppressErrors) {
  await deleteLists(suppressErrors);
  await deleteUsers(suppressErrors);
}

describe("eloqua/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("will not create profile if sync mode does not allow it", async () => {
    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBe(null);

    const { success, processExports, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id1);
    expect(error.message).toContain("not create");

    expect(processExports).toBe(undefined);
    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBeNull();
  });

  test("can create contact", async () => {
    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBe(null);

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    await indexUsers(newNock);

    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBeTruthy();

    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe(undefined);
  });

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, processExports, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { emailAddress: email1, firstName: "John" },
          newProfileProperties: {
            emailAddress: email1,
            firstName: "Brian", // updated!
            lastName: "Doe", // added!
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    await indexUsers(newNock);

    expect(processExports).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id1);
    expect(error.message).toContain("not update");

    const user = await client.contacts.getByEmail(email1);
    expect(user).not.toBeNull();
    expect(user.emailAddress).toBe(email1);
    expect(user.firstName).toBe("John"); // not updated!
    expect(user.lastName).toBe(undefined); // not added!
  });

  test("can add/edit user variables and do multiple contacts", async () => {
    user2 = await client.contacts.getByEmail(email2);
    expect(user2).toBe(null);

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { emailAddress: email1, firstName: "John" },
          newProfileProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Doe",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: { emailAddress: email2, firstName: "Pete" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(processExports).not.toBeNull();

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Doe");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2).not.toBeNull();
    expect(user2.emailAddress).toBe(email2);
    expect(user2.firstName).toBe("Pete");
  });

  test("can clear user variables", async () => {
    await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Doe",
          },
          newProfileProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe(undefined);
  });

  test("can add to and create lists", async () => {
    listId1 = await findListId(list1);
    expect(listId1).toBe(null);

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { emailAddress: email1, firstName: "John" },
          newProfileProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    await processExportedProfiles({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { emailAddress: email1, firstName: "John" },
          newProfileProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);

    listId1 = await findListId(list1);
    expect(listId1).toBeTruthy();

    const userLists = await client.contacts.getLists(user1.id);

    expect(userLists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );
  });

  test("can add multiple users to lists", async () => {
    listId2 = await findListId(list2);
    expect(listId2).toBe(null);

    const exports = [
      {
        profileId: id1,
        oldProfileProperties: { emailAddress: email1, firstName: "John" },
        newProfileProperties: { emailAddress: email1, firstName: "John" },
        oldGroups: [list1],
        newGroups: [list1, list2],
        toDelete: false,
        profile: null,
      },
      {
        profileId: id2,
        oldProfileProperties: { emailAddress: email2, firstName: "Pete" },
        newProfileProperties: { emailAddress: email2, firstName: "Sally" },
        oldGroups: [],
        newGroups: [list1],
        toDelete: false,
        profile: null,
      },
    ];

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });

    await indexUsers(newNock);

    await processExportedProfiles({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
    });

    expect(success).toBe(true);

    listId2 = await findListId(list2);
    expect(listId2).toBeTruthy();

    const user1Lists = await client.contacts.getLists(user1.id);
    expect(user1Lists).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: listId1 }),
        expect.objectContaining({ id: listId2 }),
      ])
    );

    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toBe(email2);
    expect(user2.firstName).toBe("Sally");
    expect(user2.lastName).toBe(undefined);

    const user2Lists = await client.contacts.getLists(user2.id);
    expect(user2Lists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const exports = [
      {
        profileId: id1,
        oldProfileProperties: { emailAddress: email1, firstName: "John" },
        newProfileProperties: { emailAddress: email1, firstName: "John" },
        oldGroups: [list1, list2],
        newGroups: [list1],
        toDelete: false,
        profile: null,
      },
      {
        profileId: id2,
        oldProfileProperties: { emailAddress: email2, firstName: "Sally" },
        newProfileProperties: { emailAddress: email2, firstName: "Sally" },
        oldGroups: [list2],
        newGroups: [list1],
        toDelete: false,
        profile: null,
      },
    ];
    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);

    await processExportedProfiles({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
    });

    expect(success).toBe(true);

    const user1Lists = await client.contacts.getLists(user1.id);
    expect(user1Lists.length).toBe(1);
    expect(user1Lists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );

    const user2Lists = await client.contacts.getLists(user2.id);
    expect(user2Lists.length).toBe(1);
    expect(user2Lists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );
  });

  test("can change the email address", async () => {
    const exports = [
      {
        profileId: id1,
        oldProfileProperties: { emailAddress: email1, firstName: "John" },
        newProfileProperties: {
          emailAddress: newEmail1,
          firstName: "John",
          lastName: "Test",
        },
        oldGroups: [list1],
        newGroups: [list1, list2],
        toDelete: false,
        profile: null,
      },
      {
        profileId: id2,
        oldProfileProperties: { emailAddress: email2, firstName: "Sally" },
        newProfileProperties: { emailAddress: email2, firstName: "Evan" },
        oldGroups: [list1],
        newGroups: [],
        toDelete: false,
        profile: null,
      },
    ];
    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);
    await processExportedProfiles({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
    });

    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1); // keep the old contact
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe(undefined);

    user1 = await client.contacts.getByEmail(newEmail1); // create a new contact with the new emailAddress
    expect(user1.emailAddress).toBe(newEmail1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Test");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toBe(email2);
    expect(user2.firstName).toBe("Evan");

    const user1Lists = await client.contacts.getLists(user1.id);
    expect(user1Lists.length).toBe(2);
    expect(user1Lists).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: listId1 }),
        expect.objectContaining({ id: listId2 }),
      ])
    );

    const user2Lists = await client.contacts.getLists(user2.id);
    expect(user2Lists.length).toBe(0);
  });

  test("will not delete users if sync mode does not allow it, but will remove groups", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.additive.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            emailAddress: newEmail1,
            firstName: "John",
            lastName: "Test",
          },
          newProfileProperties: {
            emailAddress: newEmail1,
            firstName: "John",
            lastName: "Test2", // changed here
          },
          oldGroups: [list1, list2],
          newGroups: [],
          toDelete: true,
          profile: null,
        },
      ],
    });

    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id1);
    expect(error.message).toContain("not delete");

    user1 = await client.contacts.getByEmail(newEmail1); // not null!
    expect(user1).not.toBe(null);
    expect(user1.emailAddress).toBe(newEmail1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Test"); // not changed!
  });

  test("can delete a user", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            emailAddress: newEmail1,
            firstName: "John",
            lastName: "Test",
          },
          newProfileProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Test",
          },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { emailAddress: email2, firstName: "Evan" },
          newProfileProperties: { emailAddress: email2, firstName: "Evan" },
          oldGroups: [],
          newGroups: [list1], // but he's being deleted!
          toDelete: true,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Test");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2).toBeNull(); // deleted!
  });

  test("can add back a user with other properties", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: {
            emailAddress: email2,
            firstName: "Evan",
            lastName: "Saran",
            mobilePhone: "+5583999999999",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can handle invalid email error", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: { emailAddress: email2, firstName: "Maria" },
          newProfileProperties: {
            emailAddress: "notanemail",
            firstName: "Maria",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    // nothing changed
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can handle required field error (email)", async () => {
    const exports = [
      {
        profileId: id2,
        oldProfileProperties: { emailAddress: email2, firstName: "Maria" },
        newProfileProperties: {
          firstName: "Maria",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        profile: null,
      },
      {
        profileId: "newId",
        oldProfileProperties: {},
        newProfileProperties: {
          firstName: "Ron",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        profile: null,
      },
    ];
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });

    await indexUsers(newNock);

    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(2);

    const error = errors[0];
    expect(error.profileId).toEqual(id2);
    expect(error.message).toContain("required");

    const error2 = errors[1];
    expect(error2.message).toContain("required");

    expect(success).toBe(false);
    // nothing changed
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can handle some of them working, but not others", async () => {
    user3 = await client.contacts.getByEmail(email3);
    expect(user3).toBe(null);

    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Test",
          },
          newProfileProperties: {
            emailAddress: email1,
            firstName: "Sam",
            lastName: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { emailAddress: email2, firstName: "Maria" },
          newProfileProperties: {
            emailAddress: "bademail",
            firstName: "William",
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
            emailAddress: email3,
            firstName: "Liz",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toEqual(email1);
    expect(user1.firstName).toEqual("Sam"); // updated
    expect(user1.lastName).toEqual("Test");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan"); // not updated

    user3 = await client.contacts.getByEmail(email3);
    expect(user3.emailAddress).toEqual(email3);
    expect(user3.firstName).toEqual("Liz"); // created
  });

  test("can add a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id4,
          oldProfileProperties: {},
          newProfileProperties: {
            emailAddress: email4,
            firstName: "Special",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    user4 = await client.contacts.getByEmail(email4);
    expect(user4.emailAddress).toEqual(email4);
    expect(user4.firstName).toEqual("Special");
  });

  test("can update a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id4,
          oldProfileProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          newProfileProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    user4 = await client.contacts.getByEmail(email4);
    expect(user4.emailAddress).toEqual(email4);
    expect(user4.firstName).toEqual("Special");
    expect(user4.lastName).toEqual("User");
  });

  test("can delete a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          profileId: id4,
          oldProfileProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          newProfileProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          profile: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    expect(await client.contacts.getByEmail(email4)).toBeNull();
  });

  test("can handle batches with lots of prospects", async () => {
    // generate profiles
    const profiles = generateLongProfiles(10);

    // run batch export
    const exports = makeExports(profiles);
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    // verify all were created properly
    for (const profile of profiles) {
      const user = await client.contacts.getByEmail(profile.emailAddress);
      expect(user.emailAddress).toEqual(profile.emailAddress);
      expect(user.firstName).toEqual(profile.firstName);
      expect(user.lastName).toEqual(profile.lastName);
    }

    batchEmails = profiles.map((p) => p.email);
  });
});

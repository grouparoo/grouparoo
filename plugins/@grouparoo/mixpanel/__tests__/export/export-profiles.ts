import path from "path";
import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export/exportProfiles";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import Mixpanel from "../../src/lib/client/mixpanel";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { indexProfiles } from "../utils/shared";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profiles.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profiles");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "fgQIQXZKhkKQMmj7TeZjCDWB9+ijp4aAUA3039==";
const hugeTime = helper.longTime * 6;

let client: Mixpanel;

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

const list1 = "(test) High Value";
const list2 = "(test) Churned";

async function deleteUsers(emails: Array<string>, suppressErrors) {
  try {
    for (const emailToDelete of emails) {
      await client.ingestion.profile.delete(emailToDelete);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function getProfile(profiles: Array<any>, distinctId: string) {
  const filtered = profiles.filter(
    (profile) => profile["$distinct_id"] === distinctId
  );
  return filtered.length > 0 ? filtered[0] : null;
}

function generateLongProfiles(count: number): Record<string, any>[] {
  const profiles = [];
  for (let i = 0; i < count; i++) {
    profiles.push({
      $distinct_id: `user${i}@demo.com`,
      $first_name: `Fist Name ${i}`,
      $last_name: `Last Name ${i}`,
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

async function cleanUp(suppressErrors: boolean) {
  const emails = [email1, email2, email3, newEmail1];
  await deleteUsers(emails, suppressErrors);
  await helper.waitUntil(newNock, async function () {
    const result = await client.query.profile.getByDistinctIds(emails);
    return result.length === 0;
  });
}

describe("mixpanel/exportProfiles", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, hugeTime);

  afterAll(async () => {
    await cleanUp(true);
  }, hugeTime);

  test("will not create profile if sync mode does not allow it", async () => {
    user1 = await client.query.profile.getByDistinctId(email1);
    expect(user1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: { $distinct_id: email1, $first_name: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id1);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    user1 = await client.query.profile.getByDistinctId(email1);
    expect(user1).toBe(null);
  });

  test(
    "can create profile",
    async () => {
      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: {},
            newProfileProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user1 = await client.query.profile.getByDistinctId(email1);
        return user1 !== null;
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1).not.toBe(null);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
    },
    hugeTime
  );

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { $distinct_id: email1, $first_name: "John" },
          newProfileProperties: {
            $distinct_id: email1,
            $first_name: "Brian", // updated!
            $last_name: "Doe", // added!
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id1);
    expect(error.message).toContain("not updating");
    expect(error.errorLevel).toEqual("info");

    user1 = await client.query.profile.getByDistinctId(email1);
    expect(user1).not.toBe(null);
    expect(user1["$distinct_id"]).toBe(email1);
    expect(user1["$properties"]["$first_name"]).toBe("John"); // not updated!
    expect(user1["$properties"]["$last_name"]).toBe(undefined); // not updated!
  });

  test(
    "can add/edit user variables and do multiple users",
    async () => {
      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { $distinct_id: email1, $first_name: "John" },
            newProfileProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Doe",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: {},
            newProfileProperties: { $distinct_id: email2, $first_name: "Pete" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
        ]);
        user1 = getProfile(users, email1);
        user2 = getProfile(users, email2);
        return (
          user1 &&
          user1["$properties"]["$last_name"] === "Doe" &&
          user2 &&
          user2["$properties"]["$first_name"] === "Pete"
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1).not.toBe(null);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Doe");

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2).not.toBe(null);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Pete");
    },
    hugeTime
  );

  test(
    "can clear user variables",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Doe",
            },
            newProfileProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        user1 = await client.query.profile.getByDistinctId(email1);
        return user1["$properties"]["$last_name"] === null;
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe(null);
    },
    hugeTime
  );

  test(
    "can add to and create lists",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { $distinct_id: email1, $first_name: "John" },
            newProfileProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        user1 = await client.query.profile.getByDistinctId(email1);
        return user1["$properties"]["groups"].length === 1;
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["groups"].length).toBe(1);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );
    },
    hugeTime
  );

  test(
    "can add multiple users to lists",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { $distinct_id: email1, $first_name: "John" },
            newProfileProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: { $distinct_id: email2, $first_name: "Pete" },
            newProfileProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
            },
            oldGroups: [],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
        ]);
        user1 = getProfile(users, email1);
        user2 = getProfile(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 2 &&
          user2 &&
          user2["$properties"]["$first_name"] === "Sally"
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["groups"].length).toBe(2);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Sally");
      expect(user2["$properties"]["groups"].length).toBe(1);
      expect(user2["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );
    },
    hugeTime
  );

  test(
    "can remove users from lists including ones they aren't in",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { $distinct_id: email1, $first_name: "John" },
            newProfileProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
            },
            newProfileProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
            },
            oldGroups: [list2],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
        ]);
        user1 = getProfile(users, email1);
        user2 = getProfile(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 1 &&
          user2 &&
          user2["$properties"]["groups"].length === 1
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["groups"].length).toBe(1);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Sally");
      expect(user2["$properties"]["groups"].length).toBe(1);
      expect(user2["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );
    },
    hugeTime
  );

  test(
    "can change the email address",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { $distinct_id: email1, $first_name: "John" },
            newProfileProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test",
            },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
            },
            newProfileProperties: { $distinct_id: email2, $first_name: "Evan" },
            oldGroups: [list1],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.query.profile.getByDistinctIds([
          newEmail1,
          email1,
          email2,
        ]);
        const oldUser = getProfile(users, email1);
        user1 = getProfile(users, newEmail1);
        user2 = getProfile(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 2 &&
          user2 &&
          user2["$properties"]["groups"].length === 0 &&
          oldUser === null
        );
      });

      const oldUser = await client.query.profile.getByDistinctId(email1);
      expect(oldUser).toBeNull();

      user1 = await client.query.profile.getByDistinctId(newEmail1);
      expect(user1["$distinct_id"]).toBe(newEmail1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Test");
      expect(user1["$properties"]["groups"].length).toBe(2);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Evan");
      expect(user2["$properties"]["groups"].length).toBe(0);
    },
    hugeTime
  );

  test(
    "will not delete users if sync mode does not allow it, but will remove groups",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.additive.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test",
            },
            newProfileProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test2", // changed here
            },
            oldGroups: [list1, list2],
            newGroups: [],
            toDelete: true,
            profile: null,
          },
        ],
      });

      expect(errors).not.toBeNull();
      expect(success).toBe(false);

      user1 = await client.query.profile.getByDistinctId(newEmail1);
      expect(user1["$distinct_id"]).toBe(newEmail1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Test"); // no changes
      expect(user1["$properties"]["groups"].length).toBe(2); // no changes
    },
    hugeTime
  );

  test(
    "can delete a user",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test",
            },
            newProfileProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Test",
            },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: { $distinct_id: email2, $first_name: "Evan" },
            newProfileProperties: { $distinct_id: email2, $first_name: "Evan" },
            oldGroups: [],
            newGroups: [list1], // but he's being deleted!
            toDelete: true,
            profile: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.query.profile.getByDistinctIds([
          newEmail1,
          email1,
          email2,
        ]);
        const oldUser = getProfile(users, newEmail1);
        user1 = getProfile(users, email1);
        user2 = getProfile(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 1 &&
          user2 === null &&
          oldUser === null
        );
      });

      const oldUser = await client.query.profile.getByDistinctId(newEmail1);
      expect(oldUser).toBeNull();

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Test");
      expect(user1["$properties"]["groups"].length).toBe(1);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2).toBeNull();
    },
    hugeTime
  );

  test(
    "can add back a user and many types",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id2,
            oldProfileProperties: {},
            newProfileProperties: {
              $distinct_id: email2,
              $first_name: "Evan",
              grouparoo_custom_text: "text is also here",
              grouparoo_custom_number: 5,
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await client.query.profile.getByDistinctId(email2);
        return user2 !== null;
      });

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Evan");
      expect(user2["$properties"]["grouparoo_custom_text"]).toBe(
        "text is also here"
      );
      expect(user2["$properties"]["grouparoo_custom_number"]).toBe(5);
    },
    hugeTime
  );

  test(
    "can set all those fields to null",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id2,
            oldProfileProperties: {
              $distinct_id: email2,
              $first_name: "Evan",
              grouparoo_custom_text: "text is also here",
              grouparoo_custom_number: 5,
            },
            newProfileProperties: {
              $distinct_id: email2,
              $first_name: "Maria",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await client.query.profile.getByDistinctId(email2);
        return user2 && user2["$properties"]["$first_name"] === "Maria";
      });

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Maria");
      expect(user2["$properties"]["grouparoo_custom_text"]).toBeNull();
      expect(user2["$properties"]["grouparoo_custom_number"]).toBeNull();
    },
    hugeTime
  );

  test(
    "can handle required field error (email)",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id2,
            oldProfileProperties: {
              $distinct_id: email2,
              $first_name: "Maria",
            },
            newProfileProperties: {
              $first_name: "Maria",
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
              $first_name: "Ron",
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
      expect(errors.length).toEqual(2);

      const error = errors[0];
      expect(error.profileId).toEqual(id2);
      expect(error.message).toContain("required");

      const error2 = errors[1];
      expect(error2.profileId).toEqual("newId");
      expect(error2.message).toContain("required");

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Maria");
      expect(user2["$properties"]["grouparoo_custom_text"]).toBeNull();
      expect(user2["$properties"]["grouparoo_custom_number"]).toBeNull();
    },
    hugeTime
  );

  test(
    "can handle some of them working, but not others",
    async () => {
      user3 = await client.query.profile.getByDistinctId(email3);
      expect(user3).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Test",
            },
            newProfileProperties: {
              $distinct_id: email1,
              $first_name: "Sam",
              $last_name: "Test",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: {
              $distinct_id: email2,
              $first_name: "Maria",
            },
            newProfileProperties: {
              $first_name: "William",
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
              $distinct_id: email3,
              $first_name: "Liz",
              grouparoo_custom_text: "some text",
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
      expect(error.profileId).toEqual(id2);
      expect(error.message).toContain("required");

      await helper.waitUntil(newNock, async function () {
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
          email3,
        ]);
        user1 = getProfile(users, email1);
        user2 = getProfile(users, email2);
        user3 = getProfile(users, email3);
        return (
          user1 &&
          user1["$properties"]["$first_name"] === "Sam" &&
          user2 &&
          user2["$properties"]["$first_name"] === "Maria" &&
          user3 &&
          user3["$properties"]["$first_name"] === "Liz"
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("Sam"); // updated
      expect(user1["$properties"]["$last_name"]).toEqual("Test");

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Maria"); // not updated

      user3 = await client.query.profile.getByDistinctId(email3);
      expect(user3["$distinct_id"]).toBe(email3);
      expect(user3["$properties"]["$first_name"]).toBe("Liz");
      expect(user3["$properties"]["grouparoo_custom_text"]).toEqual(
        "some text"
      );
    },
    hugeTime
  );

  test(
    "can handle batches with lots of profiles",
    async () => {
      // generate profiles
      const profiles = generateLongProfiles(50);

      // run batch export
      const exports = makeExports(profiles);
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports,
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      const distinctIds = profiles.map((p) => p["$distinct_id"]);

      let exportedProfiles = [];
      await helper.waitUntil(newNock, async function () {
        exportedProfiles = await client.query.profile.getByDistinctIds(
          distinctIds
        );
        return exportedProfiles.length === distinctIds.length;
      });

      // verify all were created properly
      for (const profile of profiles) {
        const user = getProfile(exportedProfiles, profile["$distinct_id"]);
        expect(user["$distinct_id"]).toBe(profile["$distinct_id"]);
        expect(user["$properties"]["$first_name"]).toBe(profile["$first_name"]);
        expect(user["$properties"]["$last_name"]).toBe(profile["$last_name"]);
      }

      // cleanup
      await deleteUsers(distinctIds, false);
    },
    hugeTime
  );
});

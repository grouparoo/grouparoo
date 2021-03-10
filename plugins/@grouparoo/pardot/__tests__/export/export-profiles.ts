import path from "path";
import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export/exportProfiles";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import PardotClient from "../../src/lib/client";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profiles.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profiles");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_a0bb07d8-0a4e-49b5-ad42-545f2e8662e6";

let client: PardotClient;

const email1 = "grouparoo@demo.com";
const id1 = "pro1";
const newEmail1 = "notgrouparoo@demo.com";
let userId1 = null;

const email2 = "grouparoo2@demo.com";
const id2 = "pro2";
let userId2 = null;

const email3 = "grouparoo3@demo.com";
const id3 = "pro3";
let userId3 = null;

const email4 = "grouparoo+test@demo.com";
const id4 = "pro4";
let userId4 = null;

const list1 = "(test) High Value";
let listId1 = null;

const list2 = "(test) Churned";
let listId2 = null;

async function findId(email: string) {
  const prospect = await client.getProspectByEmail(email);
  if (!prospect) {
    return null;
  }

  return prospect.id;
}

async function findListId(name: string): Promise<number> {
  const list = await client.getListByName(name);
  if (!list) {
    return null;
  }

  return list.id;
}

async function isProspectDeleted(id: number): Promise<boolean> {
  const previousId = id - 1;
  const res = await client.queryProspects({
    output: "mobile",
    deleted: true,
    id_greater_than: previousId,
  });

  const deletedIds = res.map((p) => p.id);
  return deletedIds.includes(id);
}

async function getListMemberIds(listId: number): Promise<number[]> {
  const response = await client.request.get(
    "/listMembership/version/4/do/query",
    {
      params: {
        format: "json",
        output: "mobile",
        list_id: listId,
      },
    }
  );

  const result = response.data.result;
  const membership = result.list_membership;
  if (result.total_results === 0) return [];
  if (result.total_results === 1) return [membership.prospect_id];
  return membership.map((result) => result.prospect_id);
}

async function deleteLists(suppressErrors: boolean) {
  const names = [list1, list2];
  for (const name of names) {
    const id = await findListId(name);
    if (id) {
      try {
        await client.request.post(
          `/list/version/4/do/delete/id/${id}?format=json`
        );
      } catch (_err) {
        if (!suppressErrors) {
          throw `could not delete list (${id}): ${name}`;
        }
      }
    }
  }
}

async function deleteUsers(emails, suppressErrors: boolean) {
  for (const email of emails) {
    const id = await findId(email);
    if (!id) continue;
    try {
      await client.deleteProspectById(id);
    } catch (_err) {
      if (!suppressErrors) {
        throw new Error(`delete failed for prospect ${id}: ${email}`);
      }
    }
  }
}

function generateLongProfiles(count: number): Record<string, any>[] {
  const profiles = [];
  for (let i = 0; i < count; i++) {
    profiles.push({
      email: `user${i}@demo.com`,
      first_name: `User ${i}`,
      last_name: "LastName",
      grouparoo_custom_textarea:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
  const emails = [email1, email2, email3, email4, newEmail1];

  await deleteUsers(emails, suppressErrors);
  await deleteLists(suppressErrors);
}

describe("pardot/exportProfiles", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("can create profile", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: { email: email1, first_name: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();

    const user = await client.getProspectById(userId1);
    expect(user.email).toBe(email1);
    expect(user.first_name).toBe("John");
    expect(user.last_name).toBe(null);
  });

  test("can add/edit user variables and do multiple users", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { email: email1, first_name: "John" },
          newProfileProperties: {
            email: email1,
            first_name: "John",
            last_name: "Doe",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: { email: email2, first_name: "Pete" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    user = await client.getProspectById(userId1);
    expect(user.email).toBe(email1);
    expect(user.first_name).toBe("John");
    expect(user.last_name).toBe("Doe");

    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();

    user = await client.getProspectById(userId2);
    expect(user.email).toBe(email2);
    expect(user.first_name).toBe("Pete");
  });

  test("can clear user variables", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            email: email1,
            first_name: "John",
            last_name: "Doe",
          },
          newProfileProperties: { email: email1, first_name: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    user = await client.getProspectById(userId1);
    expect(user.email).toBe(email1);
    expect(user.first_name).toBe("John");
    expect(user.last_name).toBe(null);
  });

  test("can add to and create lists", async () => {
    listId1 = await findListId(list1);
    expect(listId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { email: email1, first_name: "John" },
          newProfileProperties: { email: email1, first_name: "John" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    listId1 = await findListId(list1);
    expect(listId1).toBeTruthy();

    const members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("can add multiple users to lists", async () => {
    listId2 = await findListId(list2);
    expect(listId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { email: email1, first_name: "John" },
          newProfileProperties: { email: email1, first_name: "John" },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Pete" },
          newProfileProperties: { email: email2, first_name: "Sally" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    listId2 = await findListId(list2);
    expect(listId2).toBeTruthy();

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([userId1].sort());

    let user;
    user = await client.getProspectById(userId2);
    expect(user.email).toBe(email2);
    expect(user.first_name).toBe("Sally");
    expect(user.last_name).toBe(null);
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { email: email1, first_name: "John" },
          newProfileProperties: { email: email1, first_name: "John" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Pete" },
          newProfileProperties: { email: email2, first_name: "Sally" },
          oldGroups: [list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([]);
  });

  test("can change the email address", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { email: email1, first_name: "John" },
          newProfileProperties: {
            email: newEmail1,
            first_name: "John",
            last_name: "Test",
          },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Pete" },
          newProfileProperties: { email: email2, first_name: "Evan" },
          oldGroups: [list1],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let user;
    user = await client.getProspectById(userId1);
    expect(user.email).toBe(newEmail1);
    expect(user.first_name).toBe("John");
    expect(user.last_name).toBe("Test");

    expect(await findId(email1)).toBeNull(); // changed!

    user = await client.getProspectById(userId2);
    expect(user.email).toBe(email2);
    expect(user.first_name).toBe("Evan");

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([userId1]);
  });

  test("can delete a user", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            email: newEmail1,
            first_name: "John",
            last_name: "Test",
          },
          newProfileProperties: {
            email: email1,
            first_name: "John",
            last_name: "Test",
          },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Evan" },
          newProfileProperties: { email: email2, first_name: "Evan" },
          oldGroups: [],
          newGroups: [list1], // but he's being deleted!
          toDelete: true,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let user;
    user = await client.getProspectById(userId1);
    expect(user.email).toBe(email1);
    expect(user.first_name).toBe("John");
    expect(user.last_name).toBe("Test");

    expect(await findId(newEmail1)).toBeNull(); // changed!

    expect(await findId(email2)).toBeNull();
    expect(await isProspectDeleted(userId2)).toBe(true);

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([]);
  });

  test("can add back a user and many types", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: {
            email: email2,
            first_name: "Evan",
            grouparoo_custom_textarea: "text is here",
            grouparoo_custom_text: "text is also here",
            grouparoo_custom_number: 5,
            grouparoo_custom_hidden: "some hidden value",
            grouparoo_custom_date: new Date(1598766588 * 1000),
            grouparoo_custom_dropdown: "dropdown value",
            grouparoo_custom_radio_button: "radio value",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();

    user = await client.getProspectById(userId2);
    expect(user.email).toEqual(email2);
    expect(user.first_name).toEqual("Evan");
    expect(user.grouparoo_custom_textarea).toEqual("text is here");
    expect(user.grouparoo_custom_text).toEqual("text is also here");
    expect(user.grouparoo_custom_number).toEqual(5);
    expect(user.grouparoo_custom_hidden).toEqual("some hidden value");
    expect(user.grouparoo_custom_date).toEqual("2020-08-30"); // only stores date, not time
    expect(user.grouparoo_custom_dropdown).toEqual("dropdown value");
    expect(user.grouparoo_custom_radio_button).toEqual("radio value");
  });

  test("can set all those fields to null", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: {
            email: email2,
            first_name: "Evan",
            grouparoo_custom_textarea: "text is here",
            grouparoo_custom_text: "text is also here",
            grouparoo_custom_number: 5,
            grouparoo_custom_hidden: "some hidden value",
            grouparoo_custom_date: new Date(1598766588 * 1000),
            grouparoo_custom_dropdown: "dropdown value",
            grouparoo_custom_radio_button: "radio value",
          },
          newProfileProperties: { email: email2, first_name: "Maria" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    user = await client.getProspectById(userId2);
    expect(user.email).toEqual(email2);
    expect(user.first_name).toEqual("Maria");
    expect(user.grouparoo_custom_textarea).toBeUndefined();
    expect(user.grouparoo_custom_text).toBeUndefined();
    expect(user.grouparoo_custom_number).toBeUndefined();
    expect(user.grouparoo_custom_hidden).toBeUndefined();
    expect(user.grouparoo_custom_date).toBeUndefined();
    expect(user.grouparoo_custom_dropdown).toBeUndefined();
    expect(user.grouparoo_custom_radio_button).toBeUndefined();
  });

  test("can handle invalid email error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Maria" },
          newProfileProperties: {
            email: "notanemail",
            first_name: "Maria",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id2);
    expect(error.message).toContain("email");

    user = await client.getProspectById(userId2);
    expect(user.email).toEqual(email2);
    expect(user.first_name).toEqual("Maria");
    expect(user.grouparoo_custom_textarea).toBeUndefined();
    expect(user.grouparoo_custom_text).toBeUndefined();
    expect(user.grouparoo_custom_number).toBeUndefined();
    expect(user.grouparoo_custom_hidden).toBeUndefined();
    expect(user.grouparoo_custom_date).toBeUndefined();
    expect(user.grouparoo_custom_dropdown).toBeUndefined();
    expect(user.grouparoo_custom_radio_button).toBeUndefined();
  });

  test("can handle required field error (email)", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Maria" },
          newProfileProperties: {
            first_name: "Maria",
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
            first_name: "Ron",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(2);

    const error = errors[0];
    expect(error.profileId).toEqual(id2);
    expect(error.message).toContain("required");

    const error2 = errors[1];
    expect(error2.profileId).toEqual("newId");
    expect(error2.message).toContain("required");

    user = await client.getProspectById(userId2);
    expect(user.email).toEqual(email2);
    expect(user.first_name).toEqual("Maria");
    expect(user.grouparoo_custom_textarea).toBeUndefined();
    expect(user.grouparoo_custom_text).toBeUndefined();
    expect(user.grouparoo_custom_number).toBeUndefined();
    expect(user.grouparoo_custom_hidden).toBeUndefined();
    expect(user.grouparoo_custom_date).toBeUndefined();
    expect(user.grouparoo_custom_dropdown).toBeUndefined();
    expect(user.grouparoo_custom_radio_button).toBeUndefined();
  });

  test("can handle fields not being set if invalid", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Maria" },
          newProfileProperties: {
            email: email2,
            first_name: "Maria",
            grouparoo_custom_date: "notadate",
            grouparoo_custom_number: "notanumber",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    user = await client.getProspectById(userId2);
    expect(user.email).toEqual(email2);
    expect(user.first_name).toEqual("Maria");
    expect(user.grouparoo_custom_number).toBeUndefined(); // not set
    expect(user.grouparoo_custom_date).toBeUndefined(); // not set
    expect(user.grouparoo_custom_textarea).toBeUndefined();
    expect(user.grouparoo_custom_text).toBeUndefined();
    expect(user.grouparoo_custom_hidden).toBeUndefined();
    expect(user.grouparoo_custom_dropdown).toBeUndefined();
    expect(user.grouparoo_custom_radio_button).toBeUndefined();
  });

  test("can handle some of them working, but not others", async () => {
    userId3 = await findId(email3);
    expect(userId3).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {
            email: email1,
            first_name: "John",
            last_name: "Test",
          },
          newProfileProperties: {
            email: email1,
            first_name: "Sam",
            last_name: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { email: email2, first_name: "Maria" },
          newProfileProperties: {
            email: "bademail",
            first_name: "William",
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
            email: email3,
            first_name: "Liz",
            grouparoo_custom_text: "some text",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileId).toEqual(id2);
    expect(error.message).toContain("email");

    user = await client.getProspectById(userId1);
    expect(user.email).toEqual(email1);
    expect(user.first_name).toEqual("Sam"); // updated
    expect(user.last_name).toEqual("Test");

    user = await client.getProspectById(userId2);
    expect(user.email).toEqual(email2);
    expect(user.first_name).toEqual("Maria"); // not updated

    userId3 = await findId(email3);
    expect(userId3).toBeTruthy();
    user = await client.getProspectById(userId3);
    expect(user.email).toEqual(email3);
    expect(user.first_name).toEqual("Liz"); // created
    expect(user.grouparoo_custom_text).toEqual("some text");
  });

  test("can add a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id4,
          oldProfileProperties: {},
          newProfileProperties: {
            email: email4,
            first_name: "Special",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    userId4 = await findId(email4);
    expect(userId4).toBeTruthy();

    user = await client.getProspectById(userId4);
    expect(user.email).toEqual(email4);
    expect(user.first_name).toEqual("Special");
  });

  test("can update a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id4,
          oldProfileProperties: {
            email: email4,
            first_name: "Special",
            last_name: "User",
          },
          newProfileProperties: {
            email: email4,
            first_name: "Special",
            last_name: "User",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    const user = await client.getProspectById(userId4);
    expect(user.email).toEqual(email4);
    expect(user.first_name).toEqual("Special");
    expect(user.last_name).toEqual("User");
  });

  test("can delete a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports: [
        {
          profileId: id4,
          oldProfileProperties: {
            email: email4,
            first_name: "Special",
            last_name: "User",
          },
          newProfileProperties: {
            email: email4,
            first_name: "Special",
            last_name: "User",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    expect(await findId(email4)).toBeNull();
    expect(await isProspectDeleted(userId4)).toBe(true);
  });

  test("can handle batches with lots of prospects", async () => {
    // generate profiles
    const profiles = generateLongProfiles(50);

    // run batch export
    const exports = makeExports(profiles);
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      exports,
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    // verify all were created properly
    for (const profile of profiles) {
      const user = await client.getProspectByEmail(profile.email);
      expect(user.email).toEqual(profile.email);
      expect(user.first_name).toEqual(profile.first_name);
      expect(user.last_name).toEqual(profile.last_name);
      expect(user.grouparoo_custom_textarea).toEqual(
        profile.grouparoo_custom_textarea
      );
    }

    // cleanup
    const emails = profiles.map((p) => p.email);
    await deleteUsers(emails, false);
  });
});

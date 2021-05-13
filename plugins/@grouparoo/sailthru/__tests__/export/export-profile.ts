import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { exportProfile } from "../../src/lib/export/exportProfile";
import Sailthru from "../../src/lib/client";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { indexContacts } from "../../../iterable/__tests__/utils/shared";

let client: Sailthru;
const email = "brian@bleonard.com";
const alternativeEmail = "caio@mailinator.com";
const otherEmail = "sandro@mailinator.com";
const ultraBrandNewEmail = "ultraBrand@mailinator.com";
const brandNewEmail = "brandnew@mailinator.com";
const nonexistentEmail = "nonexistent@mailinator.com";
let userSid = null;
const group1 = "Test Group 1";
const group2 = "Test Group 2";
const group3 = "Test Group 3";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getUser(userId): Promise<any> {
  const payload = {
    id: userId,
    key: "sid",
    fields: { keys: 1, vars: 1, lists: 1 },
  };

  return await client.get("user", payload);
}

async function getUserByEmail(userEmail): Promise<any> {
  const sid = await client.findSid({ email: userEmail });
  if (sid) {
    return await client.get("user", {
      id: sid,
      key: "sid",
      fields: { keys: 1, vars: 1, lists: 1 },
    });
  } else {
    return null;
  }
}

async function findSid(email): Promise<string> {
  return client.findSid({ email });
}

async function deleteUsers(suppressErrors) {
  try {
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      brandNewEmail,
    ]) {
      const sId = await findSid(emailToDelete);
      if (sId) {
        await client.deleteSid(sId);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    connection: client,
    appOptions,
    app: null,
    appId: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
    syncOperations,
    export: {
      profile: null,
      profileId: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("sailthru/exportProfile", () => {
  beforeAll(async () => {
    client = new Sailthru(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  afterAll(async () => {}, helper.setupTime);

  test("cannot create a profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldProfileProperties: {},
        newProfileProperties: { email: email },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can create profile on Sailthru", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email: email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    userSid = await findSid(email);
    expect(userSid).toBeTruthy();
  });

  test("can create profile on Sailthru along with user variables", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: ultraBrandNewEmail,
        first_name: "Sandro",
        phone_number: "+558399999999",
        ltv: 3039,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUserByEmail(ultraBrandNewEmail);
    expect(user.vars.first_name).toBe("Sandro");
    expect(user.vars.phone_number).toBe("+558399999999");
    expect(user.vars.ltv).toBe(3039);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email: email },
      newProfileProperties: { email: email, first_name: "Evan" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userSid);
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Evan");
  });

  test("can not update a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldProfileProperties: { email: email, first_name: "Evan" },
        newProfileProperties: { email: email, first_name: "Ev" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no changes
    const user = await getUser(userSid);
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Evan");
  });

  test("can change user variables", async () => {
    await runExport({
      oldProfileProperties: { email: email, first_name: "Evan" },
      newProfileProperties: { email: email, first_name: "Brian" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userSid);
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Brian");
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: { first_name: "Brian" },
      newProfileProperties: { email: email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userSid);
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBeFalsy();
  });

  test("can add to a list", async () => {
    await runExport({
      oldProfileProperties: { email: email, first_name: null },
      newProfileProperties: { email: email, first_name: "Brian" },
      oldGroups: [],
      newGroups: [group1, group2],
      toDelete: false,
    });

    const user = await getUser(userSid);
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Brian");
    expect(user.lists[group1]).toBeTruthy();
    expect(user.lists[group2]).toBeTruthy();
  });

  test("can remove from a list", async () => {
    await runExport({
      oldProfileProperties: { email: email, first_name: "Brian" },
      newProfileProperties: { email: email, first_name: "Brian" },
      oldGroups: [group1, group2],
      newGroups: [group1],
      toDelete: false,
    });

    const user = await getUser(userSid);
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Brian");
    expect(user.lists[group1]).toBeTruthy(); // still have it
    expect(user.lists[group2]).toBeFalsy(); // not have it any more
  });

  test("cannot change the email address if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldProfileProperties: {
          email,
        },
        newProfileProperties: {
          email: alternativeEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no change.
    const user = await getUserByEmail(alternativeEmail);
    expect(user).toBe(null);

    const oldUser = await getUserByEmail(email);
    expect(oldUser).not.toBe(null);
  });

  test("it can change the email address (Old FK exists in destination)", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email: alternativeEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUserByEmail(alternativeEmail);
    expect(user.keys.email).toBe(alternativeEmail);

    const oldUser = await getUserByEmail(email);
    expect(oldUser).toBe(null);
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await getUserByEmail(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUserByEmail(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { email: nonexistentEmail },
      newProfileProperties: {
        email: brandNewEmail,
        first_name: "Brand",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    brandNewUser = await getUserByEmail(brandNewEmail);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser.vars.first_name).toBe("Brand");
  });

  test("it can change the email address and orphan the old user if sync mode is not deleting", async () => {
    // sailthru requires deleting the old user on FK change
    await runExport({
      syncOperations: { create: true, update: true, delete: false },
      oldProfileProperties: {
        email: alternativeEmail,
      },
      newProfileProperties: {
        email: brandNewEmail,
      },
      oldGroups: [group1, group2, group3],
      newGroups: [group1, group2, group3],
      toDelete: false,
    });

    // old user still there
    const oldUser = await getUserByEmail(alternativeEmail);
    expect(oldUser).not.toBe(null);
    expect(oldUser.keys.email).toBe(alternativeEmail);

    // new user created
    const newUser = await getUserByEmail(brandNewEmail);
    expect(newUser).not.toBe(null);
    expect(newUser.keys.email).toBe(brandNewEmail);
    expect(Object.keys(newUser.lists)).toHaveLength(3);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        first_name: "Brian",
      },
      newProfileProperties: {
        email: email,
        first_name: "Caio",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUserByEmail(email);
    expect(user).not.toBe(null);
    expect(user.keys.email).toBe(email);
    expect(user.vars.first_name).toBe("Caio");

    const oldUser = await getUserByEmail(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: { email: email, first_name: "Brian" },
      newProfileProperties: { email: email, first_name: "Brian" },
      oldGroups: [group2, group1],
      newGroups: [],
      toDelete: true,
    });

    const sid = await findSid(email);
    expect(sid).toBeNull();
  });

  test("can delete an existing user if the new user is nonexistent", async () => {
    let oldCustomer = await getUserByEmail(brandNewEmail);
    expect(oldCustomer).not.toBe(null);
    let newCustomer = await getUserByEmail(nonexistentEmail);
    expect(newCustomer).toBe(null);

    await runExport({
      oldProfileProperties: { email: brandNewEmail },
      newProfileProperties: { email: nonexistentEmail },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    newCustomer = await getUserByEmail(nonexistentEmail);
    expect(newCustomer).toBe(null);

    oldCustomer = await getUserByEmail(brandNewEmail);
    expect(oldCustomer).toBe(null);
  });
});

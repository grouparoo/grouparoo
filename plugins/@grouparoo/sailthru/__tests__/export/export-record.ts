import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { exportRecord } from "../../src/lib/export/exportRecord";
import Sailthru from "../../src/lib/client";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

let client: Sailthru;
const email = "brian@mailinator.com";
const alternativeEmail = "caio@mailinator.com";
const otherEmail = "sandro@mailinator.com";
const ultraBrandNewEmail = "ultraBrand@mailinator.com";
const brandNewEmail = "brandnew@mailinator.com";
const nonexistentEmail = "nonexistent@mailinator.com";
let userSid = null;
const group1 = "Test Group 1";
const group2 = "Test Group 2";
const group3 = "Test Group 3";

const { newNock } = helper.useNock(__filename, updater);
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
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportRecord({
    connection: client,
    appOptions,
    app: null,
    appId: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
    syncOperations,
    export: {
      record: null,
      recordId: null,
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("sailthru/exportRecord", () => {
  beforeAll(async () => {
    client = new Sailthru(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  afterAll(async () => {}, helper.setupTime);

  test("cannot create a record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.update.operations,
        oldRecordProperties: {},
        newRecordProperties: { email: email },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can create record on Sailthru", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email: email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    userSid = await findSid(email);
    expect(userSid).toBeTruthy();
  });

  test("can create record on Sailthru along with user variables", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
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
      oldRecordProperties: { email: email },
      newRecordProperties: { email: email, first_name: "Evan" },
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
        oldRecordProperties: { email: email, first_name: "Evan" },
        newRecordProperties: { email: email, first_name: "Ev" },
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
      oldRecordProperties: { email: email, first_name: "Evan" },
      newRecordProperties: { email: email, first_name: "Brian" },
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
      oldRecordProperties: { first_name: "Brian" },
      newRecordProperties: { email: email },
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
      oldRecordProperties: { email: email, first_name: null },
      newRecordProperties: { email: email, first_name: "Brian" },
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
      oldRecordProperties: { email: email, first_name: "Brian" },
      newRecordProperties: { email: email, first_name: "Brian" },
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
        oldRecordProperties: {
          email,
        },
        newRecordProperties: {
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
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
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

  test("can add a user passing a nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await getUserByEmail(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUserByEmail(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email: nonexistentEmail },
      newRecordProperties: {
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
      oldRecordProperties: {
        email: alternativeEmail,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email: alternativeEmail,
        first_name: "Brian",
      },
      newRecordProperties: {
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

  test("cannot delete an user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldRecordProperties: { email: email, first_name: "Caio" },
        newRecordProperties: { email: email, first_name: "Caio" },
        oldGroups: [group2, group1],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no effect
    const user = await getUserByEmail(email);
    expect(user).not.toBe(null);
    expect(user.keys.email).toBe(email);
    expect(user.vars.first_name).toBe("Caio");
  });

  test("can delete a user", async () => {
    await runExport({
      oldRecordProperties: { email: email, first_name: "Brian" },
      newRecordProperties: { email: email, first_name: "Brian" },
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
      oldRecordProperties: { email: brandNewEmail },
      newRecordProperties: { email: nonexistentEmail },
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

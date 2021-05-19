import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/sqlite": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { exportProfile } from "../../src/lib/export/exportProfile";
import {
  Destination,
  DestinationSyncModeData,
} from "@grouparoo/core/dist/models/Destination";
import { afterData, beforeData, getConfig } from "../utils/data";
import { helper } from "@grouparoo/spec-helper";
import { App } from "@grouparoo/core";

let app: App;
let destination: Destination;
let client: any;
let user: any;
const ipAddress = "127.0.0.1";
const newIpAddress = "127.0.0.2";
const email = "caio.silveira@mailinator.com";
const id = 1001;
const alternativeEmail = "lucas.nogueira@mailinator.com";
const alternativeId = 1002;
const otherEmail = "sandro.arturo@mailinator.com";
const otherId = 1003;
const firstName = "Caio";
const lastName = "Silveira";
const alternativeName = "Evan";
const alternativeLastName = "Podolsky";
const otherName = "Lucas";
const newEmail = "carlos.solimoes@mailinator.com";
const newId = 1004;

const newName = "Carlos";
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";
const dateField = new Date("2021-02-11T23:03:03Z").toISOString();

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewId = 1005;
const brandNewName = "Jake";
const nonexistentId = 3039;
const ltv = 3039;

const { appOptions, usersTableName, groupsDestinationTableName } = getConfig();

async function getUser(userId) {
  const result = await client.asyncQuery(
    `SELECT * FROM ${usersTableName} WHERE "id" = ${userId}`
  );
  if (result.length > 0) {
    return result[0];
  }
  return null;
}

async function getUserGroups(userId) {
  let {
    groupsTable,
    groupForeignKey,
    groupColumnName,
  } = await destination.parameterizedOptions();
  const result = await client.asyncQuery(
    `SELECT "${groupColumnName}" FROM ${groupsTable} WHERE ${groupForeignKey} = ${userId}`
  );
  return result.map((groupEntry) => Object.values(groupEntry)[0]);
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
    appOptions,
    appId: app.id,
    connection: client,
    app: app,
    destination,
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

describe("sqlite/exportProfile", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    const setupResp = await beforeData();
    client = setupResp.client;

    app = await helper.factories.app({
      name: "App",
      type: "sqlite",
      options: appOptions,
    });

    destination = await helper.factories.destination(app, {
      type: "sqlite-export",
      options: {
        table: usersTableName,
        primaryKey: "id",
        groupsTable: groupsDestinationTableName,
        groupForeignKey: "userId",
        groupColumnName: "group",
      },
    });
  });
  afterAll(async () => await afterData());

  test("cannot create profile on sqlite if sync mode does not allow it", async () => {
    user = await getUser(id);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldProfileProperties: {},
        newProfileProperties: { id, email, first_name: firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/ sync mode does not create new profiles./);
  });

  test("can create profile on sqlite", async () => {
    user = await getUser(id);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { id, email, first_name: firstName },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await getUser(id);
    expect(user).not.toBe(null);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(firstName);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { id, email, first_name: firstName },
      newProfileProperties: {
        id,
        email,
        first_name: firstName,
        last_name: lastName,
        ip_address: ipAddress,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(firstName);
    expect(user["last_name"]).toBe(lastName);
    expect(user["ip_address"]).toBe(ipAddress);
  });

  test("cannot update existing profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldProfileProperties: {
          id,
          email,
          first_name: firstName,
          last_name: lastName,
          ip_address: ipAddress,
        },
        newProfileProperties: {
          id,
          email,
          firstname: alternativeName,
          lastname: alternativeLastName,
          ip_address: newIpAddress,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no change
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(firstName);
    expect(user["last_name"]).toBe(lastName);
    expect(user["ip_address"]).toBe(ipAddress);
  });

  test("can change user variables", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
        first_name: firstName,
        last_name: lastName,
        ip_address: ipAddress,
      },
      newProfileProperties: {
        id,
        email,
        first_name: alternativeName,
        last_name: alternativeLastName,
        ip_address: newIpAddress,
        ltv: ltv,
        date: dateField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(alternativeName);
    expect(user["last_name"]).toBe(alternativeLastName);
    expect(user["ip_address"]).toBe(newIpAddress);
    expect(user["ltv"]).toBe(ltv);
    expect(user["date"]).toBe(dateField);
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
        first_name: alternativeName,
        last_name: alternativeLastName,
        ip_address: newIpAddress,
        ltv: ltv,
        date: dateField,
      },
      newProfileProperties: {
        id,
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBeNull();
    expect(user["last_name"]).toBeNull();
    expect(user["ip_address"]).toBeNull();
    expect(user["ltv"]).toBeNull();
    expect(user["date"]).toBeNull();
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
      },
      newProfileProperties: {
        id,
        email,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    const groups = await getUserGroups(id);
    expect(groups.length).toBe(2);
    expect(groups).toEqual(expect.arrayContaining([listOne, listTwo]));
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
      },
      newProfileProperties: {
        id,
        email,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    const groups = await getUserGroups(id);
    expect(groups.length).toBe(1);
    expect(groups).toEqual(expect.arrayContaining([listOne]));
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
      },
      newProfileProperties: {
        id,
        email,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    const groups = await getUserGroups(id);
    expect(groups.length).toBe(0);
  });

  test("it can change the user id and orphan the old user", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
      },
      newProfileProperties: {
        id: alternativeId,
        email,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    const user = await getUser(id);
    expect(user).not.toBe(null);

    const newUser = await getUser(alternativeId);
    expect(newUser).not.toBe(null);
    expect(newUser["email"]).toBe(email);

    const newUserGroups = await getUserGroups(alternativeId);

    expect(newUserGroups.length).toBe(3);
    expect(newUserGroups).toEqual(
      expect.arrayContaining([listOne, listTwo, listThree])
    );
  });

  test("can update the correct user on email change if both ids exist", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
      },
      newProfileProperties: {
        id: alternativeId,
        email: alternativeEmail,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    expect(user).not.toBe(null);

    const newUser = await getUser(alternativeId);
    expect(newUser).not.toBe(null);
    expect(newUser["email"]).toBe(alternativeEmail);

    const newUserGroups = await getUserGroups(alternativeId);

    expect(newUserGroups.length).toBe(3);
    expect(newUserGroups).toEqual(
      expect.arrayContaining([listOne, listTwo, listThree])
    );
  });

  test("can delete the correct user on user id change if both ids exist", async () => {
    await runExport({
      oldProfileProperties: {
        id,
        email,
      },
      newProfileProperties: {
        id: alternativeId,
        email: alternativeEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const user = await getUser(id);
    expect(user["email"]).toBe(email);
    expect(user).not.toBe(null);

    const newUser = await getUser(alternativeId);
    expect(newUser).toBe(null);
  });

  test("it can change user id along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        id: alternativeId,
        email,
      },
      newProfileProperties: {
        id: otherId,
        email: otherEmail,
        first_name: otherName,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(alternativeId);
    expect(user).toBe(null);

    const newUser = await getUser(otherId);
    expect(newUser).not.toBe(null);
    expect(newUser["email"]).toBe(otherEmail);
    expect(newUser["first_name"]).toBe(otherName);

    const newUserGroups = await getUserGroups(otherId);
    expect(newUserGroups.length).toBe(0);
  });

  test("cannot delete a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: true, delete: false },
        oldProfileProperties: {
          id: otherId,
          email: otherEmail,
        },
        newProfileProperties: {
          id: otherId,
          email: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no changes to the profile
    const newUser = await getUser(otherId);
    expect(newUser).not.toBe(null);
    expect(newUser["email"]).toBe(otherEmail);
    expect(newUser["first_name"]).toBe(otherName);

    const newUserGroups = await getUserGroups(otherId);
    expect(newUserGroups.length).toBe(0);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        id: otherId,
      },
      newProfileProperties: {
        id: otherId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    const user = await getUser(otherId);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await getUser(otherId);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {
        id: otherId,
      },
      newProfileProperties: {
        id: otherId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(otherId);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await getUser(newId);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        id: newId,
        email: newEmail,
        first_name: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    const newUser = await getUser(newId);
    expect(newUser).not.toBe(null);
    expect(newUser["email"]).toBe(newEmail);

    const newUserGroups = await getUserGroups(newId);
    expect(newUserGroups.length).toBe(1);
    expect(newUserGroups).toEqual(expect.arrayContaining([listFour]));
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await getUser(brandNewId);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUser(nonexistentId);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { id: nonexistentId },
      newProfileProperties: {
        id: brandNewId,
        email: brandNewEmail,
        first_name: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    brandNewUser = await getUser(brandNewId);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser["email"]).toBe(brandNewEmail);
    expect(brandNewUser["first_name"]).toBe(brandNewName);
  });

  test("can delete a user when changing user id at the same time", async () => {
    await runExport({
      oldProfileProperties: {
        id: brandNewId,
      },
      newProfileProperties: {
        id: otherId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    const user = await getUser(otherId);
    expect(user).toBe(null);
  });

  test("can delete a user when syncing for the first time", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        id: nonexistentId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    const user = await getUser(nonexistentId);
    expect(user).toBe(null);
  });
});

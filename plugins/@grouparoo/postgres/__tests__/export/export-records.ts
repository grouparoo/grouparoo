import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { exportRecord } from "../../src/lib/export/exportRecord";
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
const dateField = new Date("2021-02-11T23:03:03Z").toISOString().split("T")[0];

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewId = 1005;
const brandNewName = "Jake";
const nonexistentId = 3039;
const ltv = 3039;

const { appOptions, usersTableName, groupsDestinationTableName } = getConfig();

async function getUser(userId) {
  const result = await client.query(
    `SELECT * FROM ${usersTableName} WHERE "id" = ${userId}`
  );
  if (result.rows.length > 0) {
    return result.rows[0];
  }
  return null;
}

async function getUserGroups(userId) {
  const { groupsTable, groupForeignKey, groupColumnName } =
    await destination.parameterizedOptions();
  const result = await client.query(
    `SELECT "${groupColumnName}" FROM ${groupsTable} WHERE "${groupForeignKey}" = ${userId}`
  );
  return result.rows.map((groupEntry) => Object.values(groupEntry)[0]);
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
    appOptions,
    appId: app.id,
    connection: client,
    app: app,
    destination,
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

describe("postgres/exportRecord", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    const setupResp = await beforeData();
    client = setupResp.client;

    app = await helper.factories.app({
      name: "App",
      type: "postgres",
      options: appOptions,
    });

    destination = await helper.factories.destination(app, {
      type: "postgres-export-records",
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

  test("cannot create record on postgres if sync mode does not allow it", async () => {
    user = await getUser(id);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldRecordProperties: {},
        newRecordProperties: { id, email, first_name: firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/ sync mode does not create new records./);
  });

  test("can create record on postgres", async () => {
    user = await getUser(id);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { id, email, first_name: firstName },
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
      oldRecordProperties: { id, email, first_name: firstName },
      newRecordProperties: {
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

  test("cannot update existing record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldRecordProperties: {
          id,
          email,
          first_name: firstName,
          last_name: lastName,
          ip_address: ipAddress,
        },
        newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
        first_name: firstName,
        last_name: lastName,
        ip_address: ipAddress,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
        first_name: alternativeName,
        last_name: alternativeLastName,
        ip_address: newIpAddress,
        ltv: ltv,
        date: dateField,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
      },
      newRecordProperties: {
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

  test("can update the correct user on fk change if both ids exist", async () => {
    await runExport({
      oldRecordProperties: {
        id,
        email,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id,
        email,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id: alternativeId,
        email,
      },
      newRecordProperties: {
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
        oldRecordProperties: {
          id: otherId,
          email: otherEmail,
        },
        newRecordProperties: {
          id: otherId,
          email: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no changes to the record
    const newUser = await getUser(otherId);
    expect(newUser).not.toBe(null);
    expect(newUser["email"]).toBe(otherEmail);
    expect(newUser["first_name"]).toBe(otherName);

    const newUserGroups = await getUserGroups(otherId);
    expect(newUserGroups.length).toBe(0);
  });

  test("can delete a user", async () => {
    await runExport({
      oldRecordProperties: {
        id: otherId,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        id: otherId,
      },
      newRecordProperties: {
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
    const user = await getUser(newId);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
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

  test("can add a user passing a nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await getUser(brandNewId);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUser(nonexistentId);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { id: nonexistentId },
      newRecordProperties: {
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
      oldRecordProperties: {
        id: brandNewId,
      },
      newRecordProperties: {
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
      oldRecordProperties: {},
      newRecordProperties: {
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

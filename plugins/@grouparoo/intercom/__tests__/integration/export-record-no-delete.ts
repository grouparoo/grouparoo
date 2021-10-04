import { helper } from "@grouparoo/spec-helper";

import { getRandomNumbers, loadAppOptions, updater } from "../utils/nockHelper";
import { setup } from "../utils/shared";
import { DestinationSyncOperations } from "@grouparoo/core";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const syncOperations: DestinationSyncOperations = {
  create: true,
  update: true,
  delete: false,
};
const destinationOptions = {
  creationMode: "Lifecycle",
  removalMode: "Archive",
};

let userId = null;
let userId2 = null;

const rand = getRandomNumbers(4); // has to be after requiring nock

const email = `testuser1.${rand[1]}@demo.com`;
const newEmail = `testother1b.${rand[9]}@demo.com`;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

describe("intercom/contacts/exportRecord/no delete", () => {
  const { getUser, findEmail, getTags, idRegex, indexContacts, runExport } =
    setup(appOptions, destinationOptions, newNock);

  test("can create lead record on Intercom", async () => {
    userId = await findEmail(email);
    expect(userId).toBe(null);

    await runExport({
      syncOperations,
      oldRecordProperties: {},
      newRecordProperties: { email, name: "A Lead" },
      oldGroups: [],
      newGroups: ["another", "Test Group X"],
      toDelete: false,
    });

    await indexContacts();

    userId = await findEmail(email);
    expect(userId).toBeTruthy();
    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toMatch(idRegex);
    expect(user.name).toBe("A Lead");
    expect(user.role).toBe("lead"); // because lifecycle

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X", "another"]);
  });

  test("can create user record on Intercom", async () => {
    userId2 = await findEmail(email2);
    expect(userId2).toBe(null);

    await runExport({
      syncOperations,
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        external_id: externalId2,
        name: "A User",
      },
      oldGroups: [],
      newGroups: ["another", "Test Group X"],
      toDelete: false,
    });

    await indexContacts();

    userId2 = await findEmail(email2);
    expect(userId2).toBeTruthy();
    const user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.external_id).toBe(externalId2);
    expect(user.name).toBe("A User");
    expect(user.role).toBe("user"); // because lifecycle

    const tags = await getTags(userId2);
    expect(tags).toEqual(["Test Group X", "another"]);
  });

  test("will not delete a user", async () => {
    let error = null;
    try {
      await runExport({
        syncOperations,
        oldRecordProperties: {
          email: email2,
          external_id: externalId2,
          name: "A User",
        },
        newRecordProperties: {
          email: email2,
          external_id: externalId2,
          name: "Delete User",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      });
    } catch (err) {
      error = err;
    }

    await indexContacts();

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/not removing/);
    expect(error["errorLevel"]).toBe("info");

    // still there!
    const user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.external_id).toBe(externalId2);
    expect(user.name).toBe("A User"); // unchanged
    expect(user.role).toBe("user");

    const tags = await getTags(userId2);
    expect(tags).toEqual(["Test Group X", "another"]);
  });

  test("will not delete a lead", async () => {
    let error = null;
    try {
      await runExport({
        syncOperations,
        oldRecordProperties: {
          email: email,
          name: "A Lead",
        },
        newRecordProperties: {
          email: newEmail, // pick up old address!
          name: "Delete Lead",
        },
        oldGroups: ["another", "Test Group X", "no exist"],
        newGroups: ["another", "Test Group X"],
        toDelete: true,
      });
    } catch (err) {
      error = err;
    }

    await indexContacts();

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/not removing/);
    expect(error["errorLevel"]).toBe("info");

    // still there!
    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toMatch(idRegex);
    expect(user.name).toBe("A Lead");
    expect(user.role).toBe("lead");

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X", "another"]);
  });

  test("can start syncing lead again", async () => {
    await runExport({
      syncOperations,
      oldRecordProperties: {},
      newRecordProperties: {
        email: email,
        name: "Back Lead",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.name).toBe("Back Lead");
    expect(user.role).toBe("lead");
  });

  test("can start syncing contact again", async () => {
    await runExport({
      syncOperations,
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        external_id: externalId2,
        name: "Back Contact",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId2);
    expect(user.name).toBe("Back Contact");
    expect(user.role).toBe("user");
  });
});

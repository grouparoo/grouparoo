import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { getRandomNumbers, loadAppOptions, updater } from "../utils/nockHelper";
import { setup } from "../utils/shared";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-record-delete.js"
);

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  creationMode: "Lifecycle",
  removalMode: "Delete",
};

let userId = null;
let userId2 = null;

const rand = getRandomNumbers(6); // has to be after requiring nock

const email = `testuser1.${rand[1]}@demo.com`;
const newEmail = `testother1b.${rand[9]}@demo.com`;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

describe("intercom/contacts/exportRecord/delete", () => {
  const {
    getUser,
    findEmail,
    findId,
    getTags,
    idRegex,
    indexContacts,
    runExport,
  } = setup(appOptions, destinationOptions, newNock);

  test("can create lead record on Intercom", async () => {
    userId = await findEmail(email);
    expect(userId).toBe(null);

    await runExport({
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
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        external_id: externalId2,
        name: "A User",
      },
      oldGroups: [],
      newGroups: [],
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
    expect(tags).toEqual([]);
  });

  test("will archive a user", async () => {
    await runExport({
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

    await indexContacts();

    await expect(getUser(userId2)).rejects.toThrow(/User Not Found/);
    expect(await findEmail(email2)).toBeNull();
    expect(await findId(externalId2)).toBeNull();
  });

  test("will not delete a lead", async () => {
    await runExport({
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

    await indexContacts();

    await expect(getUser(userId)).rejects.toThrow(/User Not Found/);
    expect(await findEmail(email)).toBeNull();
    expect(await findEmail(newEmail)).toBeNull();
  });

  test("makes new lead with same email", async () => {
    await runExport({
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

    const test = await findEmail(email);
    expect(test).toBeTruthy();
    expect(test).not.toBe(userId);

    userId = test;

    const user = await getUser(userId);
    expect(user.name).toBe("Back Lead");
    expect(user.role).toBe("lead");
    expect(user.archived).toBeFalsy();
  });

  test("crashes when syncing user again with exact same info", async () => {
    let error = null;
    try {
      await runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          email: email2,
          external_id: externalId2,
          name: "Back User",
        },
        oldGroups: [],
        newGroups: ["another"],
        toDelete: false,
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/permanently deleted/);
    expect(error["errorLevel"]).toBeUndefined();

    await indexContacts();

    await expect(getUser(userId2)).rejects.toThrow(/User Not Found/);
    expect(await findEmail(email2)).toBeNull();
    expect(await findId(externalId2)).toBeNull();
  });
});

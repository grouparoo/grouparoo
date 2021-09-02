import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { getTagId } from "../../src/lib/export-contacts/listMethods";
import { getRandomNumbers, loadAppOptions, updater } from "../utils/nockHelper";
import { setup } from "../utils/shared";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-record-user.js"
);

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8662f9";
const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  creationMode: "User",
  removalMode: "Archive",
};

let userId = null;
let userId2 = null;
let userId3 = null;

const rand = getRandomNumbers(1); // has to be after requiring nock

const external_id = `testuser1.${rand[1]}`;
const email = `testuser1.${rand[1]}@demo.com`;
const newExternalId = `testuser1b.${rand[9]}`;
const newEmail = `testother1b.${rand[9]}@demo.com`;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

const email3 = `testuser3.${rand[3]}@demo.com`;

const exampleEpoch = 1597870204;
const exampleDate = new Date(exampleEpoch * 1000);

describe("intercom/contacts/exportRecord/user", () => {
  const {
    getUser,
    findId,
    findEmail,
    getTags,
    indexContacts,
    getClient,
    runExport,
  } = setup(appOptions, destinationOptions, newNock);

  test("can create record on Intercom", async () => {
    userId = await findId(external_id);
    expect(userId).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email, external_id, name: "Brian" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    userId = await findId(external_id);
    expect(userId).toBeTruthy();
    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toBe(external_id);
    expect(user.name).toBe("Brian");
    expect(user.role).toBe("user");
  });

  test("can add user variables", async () => {
    await runExport({
      oldRecordProperties: { email, external_id, name: "Brian" },
      newRecordProperties: {
        email,
        external_id,
        name: "John",
        phone: "+16505551234",
        "custom_attributes.text_field": "testing here",
        "custom_attributes.date_field": exampleDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    // # text_field
    // # number_field (integer)
    // # decimal_field (float)
    // # boolean_field
    // # date_field (datetime)
    // # list_field (enum: Red, Blue, Green)

    const user = await getUser(userId);
    expect(user.name).toBe("John");
    expect(user.phone).toBe("+16505551234");
    expect(user.custom_attributes.date_field).toBe(exampleEpoch);
    expect(user.custom_attributes.text_field).toBe("testing here");
    expect(user.custom_attributes.checkbox_field).toBe(undefined); // default
    expect(user.role).toBe("user");
  });

  test("can change user variables", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        external_id,
        name: "John",
        phone: "+16505551234",
        "custom_attributes.text_field": "testing here",
        "custom_attributes.date_field": exampleDate,
      },
      newRecordProperties: {
        email,
        external_id,
        name: "Evan",
        unknown_junk: "ok", // note:  it doesn't hurt anything
        "custom_attributes.other_junk": "here", // note: also extra
        "custom_attributes.text_field": "testing here change",
        "custom_attributes.boolean_field": true,
        "custom_attributes.number_field": 13,
        "custom_attributes.decimal_field": 3.14,
        "custom_attributes.date_field": null,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userId);
    expect(user.external_id).toBe(external_id);
    expect(user.email).toBe(email);
    expect(user.name).toBe("Evan");
    expect(user.phone).toBe(null); // left off, so cleared
    expect(user.custom_attributes.date_field).toBe(null);
    expect(user.custom_attributes.text_field).toBe("testing here change");
    expect(user.custom_attributes.boolean_field).toBe(true);
    expect(user.custom_attributes.number_field).toBe(13);
    expect(user.custom_attributes.decimal_field).toBe(3.14);

    expect(user.unknown_junk).toBeUndefined();
    expect(user.custom_attributes.other_junk).toBeUndefined();
  });

  test("can clear user variables", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        external_id,
        name: "Evan",
        "custom_attributes.text_field": "testing here change",
        "custom_attributes.boolean_field": true,
        "custom_attributes.number_field": 13,
        "custom_attributes.decimal_field": 3.14,
        "custom_attributes.date_field": null,
      },
      newRecordProperties: {
        external_id, // needs either this or email
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userId);
    expect(user.external_id).toBe(external_id);
    expect(user.email).toBe(""); // empty string for some reason
    expect(user.name).toBe(null);
    expect(user.phone).toBe(null); // left off, so cleared
    expect(user.custom_attributes.date_field).toBe(null);
    expect(user.custom_attributes.text_field).toBe(null);
    expect(user.custom_attributes.boolean_field).toBe(null);
    expect(user.custom_attributes.number_field).toBe(null);
    expect(user.custom_attributes.decimal_field).toBe(null);
  });

  test("can add tags", async () => {
    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        external_id,
      },
      oldGroups: [],
      newGroups: ["another", "Test Group X"],
      toDelete: false,
    });

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X", "another"]);
  });

  test("can remove tags", async () => {
    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        external_id,
      },
      oldGroups: ["another", "Test Group X", "no exist"],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it does not change intercom-created tags", async () => {
    const tagId = await getTagId(
      getClient(),
      { appId, appOptions },
      "outside_grouparoo"
    );
    await getClient().contacts.tag(userId, tagId);

    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        external_id,
      },
      oldGroups: ["Test Group X"],
      newGroups: ["Test Group X", "New_one"],
      toDelete: false,
    });

    const tags = await getTags(userId);
    expect(tags).toEqual(["New_one", "Test Group X", "outside_grouparoo"]);
  });

  test("it does not change intercom-created tags when groups are removed", async () => {
    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        external_id,
      },
      oldGroups: ["Test Group X", "New_one"],
      newGroups: [],
      toDelete: false,
    });

    const tags = await getTags(userId);
    expect(tags).toEqual(["outside_grouparoo"]);
  });

  test("it can change the external id", async () => {
    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        external_id: newExternalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.external_id).toBe(newExternalId);
    expect(user.email).toBe("");

    const tags = await getTags(userId);
    expect(tags).toEqual(["outside_grouparoo"]);
  });

  test("it can sync a different user with no external id", async () => {
    userId2 = await findId(externalId2);
    expect(userId2).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        name: "Sally",
      },
      oldGroups: [],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    await indexContacts();

    userId2 = await findEmail(email2);
    expect(userId2).toBeTruthy();
    const user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.external_id).toBe(null);
    expect(user.name).toBe("Sally");
    expect(user.role).toBe("user");

    const tags = await getTags(userId2);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it can add an external id to the new user", async () => {
    await runExport({
      oldRecordProperties: {
        email: email2,
        name: "Sally",
      },
      newRecordProperties: {
        external_id: externalId2,
        email: email2,
        name: "Sally",
      },
      oldGroups: ["Test Group X"],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    await indexContacts();

    userId2 = await findId(externalId2);
    expect(userId2).toBeTruthy();
    const user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.external_id).toBe(externalId2);
    expect(user.name).toBe("Sally");
    expect(user.role).toBe("user");

    const tags = await getTags(userId2);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it will update a lead as well", async () => {
    const { body } = await getClient().contacts.create({
      role: "lead",
      email: email3,
      name: "Alan",
    });
    userId3 = body.id;
    const assignedId = body.external_id;
    expect(userId3).toBeTruthy();
    expect(assignedId).toBeTruthy(); // assigned one automatically by Intercom

    await indexContacts();

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: email3,
        name: "Allison",
      },
      oldGroups: [],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    const user = await getUser(userId3);
    expect(user.email).toBe(email3);
    expect(user.external_id).toBe(assignedId);
    expect(user.name).toBe("Allison");
    expect(user.role).toBe("lead");

    const tags = await getTags(userId2);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it can change back the external id", async () => {
    await runExport({
      oldRecordProperties: {
        external_id: newExternalId,
      },
      newRecordProperties: {
        external_id,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.id).toBe(userId);
    expect(user.external_id).toBe(external_id);
    expect(user.email).toBe("");
    expect(user.role).toBe("user");
  });

  test("it can't switch to only having an email", async () => {
    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        email: newEmail,
        name: "No Ext",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.external_id).toBe(external_id);
    expect(user.email).toBe(newEmail);
    expect(user.name).toBe("No Ext");
    expect(user.role).toBe("user");
  });

  test("it can change emails", async () => {
    await runExport({
      oldRecordProperties: {
        email: newEmail,
      },
      newRecordProperties: {
        email,
        name: "New Email",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.id).toBe(userId);
    expect(user.external_id).toBe(external_id);
    expect(user.email).toBe(email);
    expect(user.name).toBe("New Email");
    expect(user.role).toBe("user");
  });

  test("it picks external_id when conflicting email address", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        external_id,
        email: email2,
        name: "Conflict",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    let user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.external_id).toBe(externalId2);
    expect(user.name).toBe("Sally");
    expect(user.role).toBe("user");

    // this one actually updated
    user = await getUser(userId);
    expect(user.email).toBe(email2);
    expect(user.external_id).toBe(external_id);
    expect(user.name).toBe("Conflict");
    expect(user.role).toBe("user");
  });

  test("can delete a user", async () => {
    await runExport({
      oldRecordProperties: { external_id: externalId2 },
      newRecordProperties: { external_id: externalId2 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexContacts();

    await expect(getUser(userId2)).rejects.toThrow(/User Not Found/);
    const id = await findId(externalId2);
    expect(id).toBeNull();
  });

  test("can bring the user back / recreate", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        external_id: externalId2,
        name: "Back!",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const test = await findId(externalId2);
    expect(test).toBeTruthy();
    expect(test).not.toBe(userId2);

    userId2 = test;

    const user = await getUser(userId2);
    expect(user.name).toBe("Back!");
    expect(user.archived).toBeFalsy();
  });
});

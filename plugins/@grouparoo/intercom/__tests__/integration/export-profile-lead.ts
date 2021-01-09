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
  "export-profile-lead.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile-lead");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appGuid = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8662f9";
const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  creationMode: "Lead",
  removalMode: "Archive",
};

let userId = null;
let userId2 = null;
let userId3 = null;

const rand = getRandomNumbers(2); // has to be after requiring nock

const email = `testuser1.${rand[1]}@demo.com`;
const newEmail = `testother1b.${rand[9]}@demo.com`;
const addedExternalId = `testuser1${rand[1]}`;
let generatedExtId = null;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

const email3 = `testuser3.${rand[3]}@demo.com`;
const externalId3 = `testuser3.${rand[3]}`;

const exampleEpoch = 1597870204;
const exampleDate = new Date(exampleEpoch * 1000);

describe("intercom/contacts/exportProfile/lead", () => {
  const {
    getUser,
    findId,
    findEmail,
    getTags,
    guidRegex,
    indexContacts,
    getClient,
    runExport,
  } = setup(appOptions, destinationOptions, newNock);

  test("can create profile on Intercom", async () => {
    userId = await findEmail(email);
    expect(userId).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, name: "Brian" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    userId = await findEmail(email);
    expect(userId).toBeTruthy();
    const user = await getUser(userId);

    // leads auto-gen and external id when not provided
    generatedExtId = user.external_id;
    expect(generatedExtId).toMatch(guidRegex);

    expect(user.email).toBe(email);
    expect(user.name).toBe("Brian");
    expect(user.external_id).toBe(generatedExtId);
    expect(user.role).toBe("lead");
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, name: "Brian" },
      newProfileProperties: {
        email,
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
    expect(user.external_id).toBe(generatedExtId);
    expect(user.role).toBe("lead");
  });

  test("can change user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        name: "John",
        phone: "+16505551234",
        "custom_attributes.text_field": "testing here",
        "custom_attributes.date_field": exampleDate,
      },
      newProfileProperties: {
        email,
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
    expect(user.external_id).toMatch(guidRegex); // auto-gen
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
      oldProfileProperties: {
        email,
        name: "Evan",
        "custom_attributes.text_field": "testing here change",
        "custom_attributes.boolean_field": true,
        "custom_attributes.number_field": 13,
        "custom_attributes.decimal_field": 3.14,
        "custom_attributes.date_field": null,
      },
      newProfileProperties: {
        email, // needs either this or external_id
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userId);
    expect(user.external_id).toBe(generatedExtId);
    expect(user.email).toBe(email);
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
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
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
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: ["another", "Test Group X"],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it does not change intercom-created tags", async () => {
    const tagId = await getTagId(
      getClient(),
      { appGuid, appOptions },
      "outside_grouparoo"
    );
    await getClient().contacts.tag(userId, tagId);

    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
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
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: ["Test Group X", "New_one"],
      newGroups: [],
      toDelete: false,
    });

    const tags = await getTags(userId);
    expect(tags).toEqual(["outside_grouparoo"]);
  });

  test("it can change the email", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email: newEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.external_id).toBe(generatedExtId);
    expect(user.email).toBe(newEmail);

    const tags = await getTags(userId);
    expect(tags).toEqual(["outside_grouparoo"]);
  });

  test("it doesn't listen to external_id when there is an email", async () => {
    userId2 = await findEmail(email2);
    expect(userId2).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: email2,
        external_id: externalId2,
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
    expect(user.external_id).not.toBe(externalId2);
    expect(user.external_id).toMatch(guidRegex); // auto-gen
    expect(user.name).toBe("Sally");
    expect(user.role).toBe("lead");
    expect(user.archived).toBeFalsy();

    const tags = await getTags(userId2);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it will update a contact as well", async () => {
    const { body } = await getClient().contacts.create({
      role: "contact",
      email: email3,
      external_id: externalId3,
      name: "Alan",
    });
    userId3 = body.id;
    expect(userId3).toBeTruthy();

    await indexContacts();

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: email3,
        name: "Allison",
      },
      oldGroups: [],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    const user = await getUser(userId3);
    expect(user.email).toBe(email3);
    expect(user.external_id).toBe(externalId3);
    expect(user.name).toBe("Allison");
    expect(user.role).toBe("user");

    const tags = await getTags(userId3);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it can change back the email", async () => {
    await runExport({
      oldProfileProperties: {
        email: newEmail,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.id).toBe(userId);
    expect(user.external_id).toBe(generatedExtId);
    expect(user.email).toBe(email);
    expect(user.role).toBe("lead");
  });

  test("it cannot add an external id", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
        external_id: addedExternalId,
        name: "Ext Id",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.external_id).toBe(generatedExtId); // no change!
    expect(user.email).toBe(email);
    expect(user.name).toBe("Ext Id");
    expect(user.role).toBe("lead"); // still a lead
  });

  test("it picks external_id when conflicting email address", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        external_id: externalId3,
        email: email,
        name: "Conflict",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    let user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toBe(generatedExtId);
    expect(user.name).toBe("Ext Id");
    expect(user.role).toBe("lead");

    // this one actually updated
    user = await getUser(userId3);
    expect(user.email).toBe(email); // now same email!
    expect(user.external_id).toMatch(externalId3);
    expect(user.name).toBe("Conflict");
    expect(user.role).toBe("user");
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: { email: email2 },
      newProfileProperties: { email: email2 },
      oldGroups: [],
      newGroups: ["Test Group X"],
      toDelete: true,
    });

    await indexContacts();

    await expect(getUser(userId2)).rejects.toThrow(/User Not Found/);
    const id = await findEmail(email2);
    expect(id).toBeNull();
  });

  test("can bring the user back / recreate", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email: email2, name: "Back!" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    const test = await findEmail(email2);
    expect(test).toBeTruthy();
    expect(test).not.toBe(userId2);

    userId2 = test;

    const user = await getUser(userId2);
    expect(user.name).toBe("Back!");
    expect(user.archived).toBeFalsy();
  });
});

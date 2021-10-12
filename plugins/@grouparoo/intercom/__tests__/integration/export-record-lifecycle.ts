import { helper } from "@grouparoo/spec-helper";

import { getRandomNumbers, loadAppOptions, updater } from "../utils/nockHelper";
import { setup } from "../utils/shared";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  creationMode: "Lifecycle",
  removalMode: "Archive",
};

let userId = null;
let userId2 = null;
let userId3 = null;

const rand = getRandomNumbers(4); // has to be after requiring nock

const external_id = `testuser1.${rand[1]}`;
const email = `testuser1.${rand[1]}@demo.com`;
const newExternalId = `testuser1b.${rand[9]}`;
const newEmail = `testother1b.${rand[9]}@demo.com`;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

const email3 = `testuser3.${rand[3]}@demo.com`;

const exampleEpoch = 1597870204;
const exampleDate = new Date(exampleEpoch * 1000);

describe("intercom/contacts/exportRecord/lifecycle", () => {
  const {
    getUser,
    findId,
    findEmail,
    getTags,
    idRegex,
    indexContacts,
    getClient,
    runExport,
  } = setup(appOptions, destinationOptions, newNock);

  test("can create lead record on Intercom", async () => {
    userId = await findEmail(email);
    expect(userId).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email, name: "Brian" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts();

    userId = await findEmail(email);
    expect(userId).toBeTruthy();
    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toMatch(idRegex);
    expect(user.name).toBe("Brian");
    expect(user.role).toBe("lead");
  });

  test("can add user variables and tags and upgrade", async () => {
    await runExport({
      oldRecordProperties: { email, name: "Brian" },
      newRecordProperties: {
        email,
        external_id,
        name: "John",
        phone: "+16505551234",
        "custom_attributes.text_field": "testing here",
        "custom_attributes.date_field": exampleDate,
      },
      oldGroups: [],
      newGroups: ["another", "Test Group X"],
      toDelete: false,
    });

    await indexContacts();

    // # text_field
    // # number_field (integer)
    // # decimal_field (float)
    // # boolean_field
    // # date_field (datetime)
    // # list_field (enum: Red, Blue, Green)

    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toBe(external_id);
    expect(user.name).toBe("John");
    expect(user.phone).toBe("+16505551234");
    expect(user.custom_attributes.date_field).toBe(exampleEpoch);
    expect(user.custom_attributes.text_field).toBe("testing here");
    expect(user.custom_attributes.checkbox_field).toBe(undefined); // default
    expect(user.role).toBe("user");

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X", "another"]);
  });

  test("it can change the external id", async () => {
    await runExport({
      oldRecordProperties: {
        external_id,
      },
      newRecordProperties: {
        external_id: newExternalId,
        name: "New Ext",
      },
      oldGroups: ["Test Group X", "another"],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    await indexContacts();

    const user = await getUser(userId);
    expect(user.external_id).toBe(newExternalId);
    expect(user.email).toBe("");
    expect(user.role).toBe("user");

    const tags = await getTags(userId);
    expect(tags).toEqual(["Test Group X"]);
  });

  test("it makes a user when it has an external id", async () => {
    userId2 = await findId(externalId2);
    expect(userId2).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        external_id: externalId2,
        name: "Sally",
      },
      oldGroups: [],
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

  test("it can't switch to only having an email and stays a user", async () => {
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
    expect(user.external_id).toBe(external_id); // no change
    expect(user.email).toBe(newEmail);
    expect(user.name).toBe("No Ext");
    expect(user.role).toBe("user"); // no lead
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

  test("can bring the user back / recreate (even as lead)", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: email2,
        name: "Back!",
      },
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
    expect(user.role).toBe("lead");
    expect(user.archived).toBeFalsy();
  });
});

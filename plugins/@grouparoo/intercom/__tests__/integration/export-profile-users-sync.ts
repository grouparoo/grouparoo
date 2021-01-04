import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export-users/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";

let client: any;
let userId = null;
let newId = null;

const rand1 = Math.floor(Math.random() * 9999999999);
const rand2 = Math.floor(Math.random() * 9999999999);
const rand3 = Math.floor(Math.random() * 9999999999);

const external_id = `testuser${rand1}`;
const email = `testuser${rand1}@demo.com`;

// const migratedExternalId = "testother1";
// const migratedName = "migratedusername1";
// const migratedEmail = "testother1@demo.com";
// const newExternalId = "testuser789";

const exampleEpoch = 1597870204;
const exampleDate = new Date(exampleEpoch * 1000);

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-profile-users-sync.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-profile-users-sync");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  syncMode: "Sync",
};

async function getUser(id): Promise<any> {
  const { body } = await client.contacts.show(id);
  // console.log({ getUser: body });
  return body;
}

async function findIdWithIndexTime(extId) {}

async function findId(extId): Promise<string> {
  const { body } = await client.contacts.search({
    field: "external_id",
    operator: "=",
    value: extId,
  });
  const users = body.data;
  if (!users || users.length === 0) {
    return null;
  }
  if (users.length > 1) {
    throw new Error(`more than one user! ${extId}`);
  }
  return users[0].id;
}

async function findEmail(email): Promise<string> {
  const users = await client.contacts.search({
    field: "email",
    operator: "=",
    value: email,
  });
  if (!users || users.length === 0) {
    return null;
  }
  if (users.length > 1) {
    throw new Error(`more than one user! ${email}`);
  }
  return users[0].id;
}

async function cleanUp(suppressErrors) {
  const { body } = await client.contacts.list();
  const users = body.data;
  if (!users) {
    return null;
  }
  for (const user of users) {
    // deleting caused all kinds of issues
    await client.contacts.archive(user.id);
  }
}

async function runExport({
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    appOptions,
    destinationOptions,
    connection: null,
    app: null,
    appGuid: null,
    destination: null,
    destinationGuid: null,
    export: {
      profile: null,
      profileGuid: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

const veryLongTime = 2 * 60 * 1000;
const indexTime = 60 * 1000;

async function indexContacts() {
  if (newNock) {
    await helper.sleep(indexTime);
  }
}

describe("intercom/users/exportProfile/sync", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, veryLongTime);

  afterAll(async () => {
    // await cleanUp(true);
  }, veryLongTime);

  beforeAll(() => {
    jest.setTimeout(veryLongTime);
  });

  test("can create profile on Intercom", async () => {
    console.log({ external_id, email });
    userId = await findId(external_id);
    expect(userId).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, external_id, name: "Brian" },
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
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, external_id, name: "Brian" },
      newProfileProperties: {
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
  });

  test("can change user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
        name: "John",
        phone: "+16505551234",
        "custom_attributes.text_field": "testing here",
        "custom_attributes.date_field": exampleDate,
      },
      newProfileProperties: {
        email,
        external_id,
        name: "Evan",
        unknown_junk: "ok", // note:  it doesn't hurt anything
        // "custom_attributes.something_junk": "here", TODO (does hurt - write test)
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
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
        name: "Evan",
        "custom_attributes.text_field": "testing here change",
        "custom_attributes.boolean_field": true,
        "custom_attributes.number_field": 13,
        "custom_attributes.decimal_field": 3.14,
        "custom_attributes.date_field": null,
      },
      newProfileProperties: {
        external_id, // needs either this or email
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser(userId);
    console.log({ cleared: user });
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

  // test("can add tags", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     newProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     oldGroups: [],
  //     newGroups: ["Test Group X", "another"],
  //     toDelete: false,
  //   });

  //   const user = await getUser(userId);
  //   expect(user.tags.sort()).toEqual(["another", "test_group_x"]);
  // });

  // test("can remove tags", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     newProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     oldGroups: ["Test Group X", "another"],
  //     newGroups: ["Test Group X"],
  //     toDelete: false,
  //   });

  //   const user = await getUser(userId);
  //   expect(user.tags.sort()).toEqual(["test_group_x"]);
  // });

  // test("it does not change zendesk-created tags", async () => {
  //   await client.users.update(userId, {
  //     user: {
  //       tags: ["test_group_x", "outside_grouparoo"],
  //     },
  //   });
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     newProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     oldGroups: ["Test Group X"],
  //     newGroups: ["Test Group X", "New_one"],
  //     toDelete: false,
  //   });

  //   const user = await getUser(userId);
  //   expect(user.tags.sort()).toEqual([
  //     "new_one",
  //     "outside_grouparoo",
  //     "test_group_x",
  //   ]);
  // });

  // test("it does not change zendesk-created tags when groups are removed", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     newProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     oldGroups: ["Test Group X", "New_one"],
  //     newGroups: [],
  //     toDelete: false,
  //   });

  //   const user = await getUser(userId);
  //   expect(user.tags.sort()).toEqual(["outside_grouparoo"]);
  // });

  // test("it can change the email address", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       external_id,
  //     },
  //     newProfileProperties: {
  //       email: "NewOne@bleonard.com",
  //       external_id,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });

  //   const user = await getUser(userId);
  //   expect(user.external_id).toBe(external_id);
  //   expect(user.email).toBe("newone@bleonard.com");
  //   expect(user.tags.sort()).toEqual(["outside_grouparoo"]);
  // });

  // test("it can migrate an email user to having a external_id", async () => {
  //   // make a user
  //   const created = await client.users.create({
  //     user: {
  //       verified: true,
  //       name: migratedName,
  //       alias: "MU",
  //       email: migratedEmail,
  //       user_fields: {
  //         text_field: "my text",
  //         checkbox_field: true,
  //       },
  //     },
  //   });

  //   // then sync a profile
  //   await runExport({
  //     oldProfileProperties: {},
  //     newProfileProperties: {
  //       email: migratedEmail,
  //       name: migratedName,
  //       external_id: migratedExternalId,
  //       text_field: "change",
  //     },
  //     oldGroups: [],
  //     newGroups: ["something"],
  //     toDelete: false,
  //   });

  //   const user = await client.users.show(created.id);
  //   expect(user.external_id).toBe(migratedExternalId);
  //   expect(user.email).toBe(migratedEmail);
  //   expect(user.alias).toBe("MU");
  //   expect(user.name).toBe(migratedName);
  //   expect(user.user_fields.checkbox_field).toBe(true);
  //   expect(user.user_fields.text_field).toBe("change");
  //   expect(user.tags.sort()).toEqual(["something"]);
  // });

  // test("it can change the external id", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email: "NewOne@bleonard.com",
  //       external_id,
  //     },
  //     newProfileProperties: {
  //       external_id: newExternalId,
  //       email,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });

  //   const user = await getUser(userId);
  //   expect(user.id).toBe(userId);
  //   expect(user.external_id).toBe(newExternalId);
  //   expect(user.email).toBe(email);
  // });

  // test("it can make one with the original id and no email", async () => {
  //   await runExport({
  //     oldProfileProperties: {},
  //     newProfileProperties: {
  //       external_id,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });

  //   newId = await findId(newExternalId);
  //   expect(newId).toBeTruthy();
  //   expect(newId).not.toEqual(userId);

  //   const newUser = await getUser(newId);
  //   expect(newUser.id).toBe(newId);
  //   expect(newUser.external_id).toBe(external_id);
  //   expect(newUser.email).toBe(null);
  //   expect(newUser.name).toBe(external_id); // defaults to something

  //   const user = await getUser(userId);
  //   expect(user.id).toBe(userId);
  //   expect(user.external_id).toBe(newExternalId);
  //   expect(user.email).toBe(email);
  // });

  // test("it can add an email address to the new user", async () => {
  //   await runExport({
  //     oldProfileProperties: { external_id },
  //     newProfileProperties: {
  //       external_id,
  //       email: "added@bleonard.com",
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });

  //   const newUser = await getUser(newId);
  //   expect(newUser.id).toBe(newId);
  //   expect(newUser.email).toBe("added@bleonard.com");
  //   expect(newUser.active).toBe(true);
  // });

  // test("can delete a user", async () => {
  //   await runExport({
  //     oldProfileProperties: { external_id },
  //     newProfileProperties: { external_id },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: true,
  //   });

  //   expect(await findId(userId)).toBeNull();

  //   const newUser = await getUser(newId);
  //   expect(newUser.id).toBe(newId);
  //   expect(newUser.email).toBe(null);
  //   expect(newUser.active).toBe(false);
  // });
});

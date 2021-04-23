import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import {
  exportProfile,
  searchForUser,
} from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

let client: any;
let userId = null;
let newId = null;
const external_id = "testuser123";
const migratedExternalId = "testuser456";
const migratedName = "migratedusername";
const migratedEmail = "migrateduser@bleonard.com";
const newExternalId = "testuser789";
const email = "brian@bleonard.com";
const name = "Brian";
const exampleDate = new Date(1597870204 * 1000);

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getUser(): Promise<any> {
  const response = await client.users.show(userId);
  return response;
}

async function getNewUser(): Promise<any> {
  const response = await client.users.show(newId);
  return response;
}

async function findId(): Promise<any> {
  const user = await searchForUser(client, { external_id });
  if (!user) {
    return null;
  }
  return user.id;
}

async function deleteUsers(suppressErrors) {
  const queries = [migratedName, migratedEmail];
  for (const query of queries) {
    const user = await searchForUser(client, { query });
    if (user) {
      await client.users.delete(user.id);
    }
  }

  const users = [external_id, migratedExternalId, newExternalId];
  for (const id of users) {
    try {
      const user = await searchForUser(client, { external_id: id });
      if (user) {
        await client.users.delete(user.id);
      }
    } catch (err) {
      if (!suppressErrors) {
        throw err;
      }
    }
  }
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
    connection: null,
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

describe("zendesk/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await deleteUsers(false);
  }, helper.setupTime);

  afterAll(async () => {
    await deleteUsers(true);
  }, helper.setupTime);

  test("cannot create profile on Zendesk if sync mode does not allow it", async () => {
    userId = await findId();
    expect(userId).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldProfileProperties: {},
        newProfileProperties: { email, external_id, name },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can create profile on Zendesk", async () => {
    userId = await findId();
    expect(userId).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, external_id, name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    userId = await findId();
    expect(userId).toBeTruthy();
    const user = await getUser();
    expect(user.email).toBe(email);
    expect(user.external_id).toBe(external_id);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, external_id, name },
      newProfileProperties: {
        email,
        external_id,
        name,
        alias: "BL",
        text_field: "testing here",
        date_field: exampleDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe(name);
    expect(user.alias).toBe("BL");
    expect(user.user_fields.date_field).toBe("2020-08-19T00:00:00+00:00");
    expect(user.user_fields.text_field).toBe("testing here");
    expect(user.user_fields.checkbox_field).toBe(false); // default
  });

  test("cannot update existing profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldProfileProperties: { email, external_id, name },
        newProfileProperties: {
          email,
          external_id,
          name,
          alias: "BL",
          text_field: "testing here",
          date_field: exampleDate,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow updating/);

    // no change
    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe(name);
    expect(user.alias).toBe("BL");
    expect(user.user_fields.date_field).toBe("2020-08-19T00:00:00+00:00");
    expect(user.user_fields.text_field).toBe("testing here");
    expect(user.user_fields.checkbox_field).toBe(false); // default
  });

  test("can change user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
        name,
        alias: "BL",
        text_field: "testing here",
        date_field: exampleDate,
      },
      newProfileProperties: {
        email,
        external_id,
        name: "Evan",
        alias: "BL",
        unknown_junk: "ok", // make sure it doesn't hurt anything
        text_field: "testing here change",
        checkbox_field: true,
        date_field: null,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe("Evan");
    expect(user.alias).toBe("BL");
    expect(user.user_fields.date_field).toBe(null);
    expect(user.user_fields.text_field).toBe("testing here change");
    expect(user.user_fields.checkbox_field).toBe(true);

    expect(user.user_fields.unknown_junk).toBeUndefined();
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
        name: "Evan",
        alias: "BL",
        text_field: "testing here change",
        checkbox_field: true,
      },
      newProfileProperties: {
        email,
        external_id,
        name: "",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe(email); // needs to be set to something
    expect(user.alias).toBe(""); // TODO: unclear why this isn't null
    expect(user.user_fields.text_field).toBe(null);
    expect(user.user_fields.checkbox_field).toBe(false); // back to default
  });

  test("can add tags", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: [],
      newGroups: ["Test Group X", "another"],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual(["another", "test_group_x"]);
  });

  test("can remove tags", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: ["Test Group X", "another"],
      newGroups: ["Test Group X"],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual(["test_group_x"]);
  });

  test("it does not change zendesk-created tags", async () => {
    await client.users.update(userId, {
      user: {
        tags: ["test_group_x", "outside_grouparoo"],
      },
    });
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: ["Test Group X"],
      newGroups: ["Test Group X", "New_one"],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual([
      "new_one",
      "outside_grouparoo",
      "test_group_x",
    ]);
  });

  test("it does not change zendesk-created tags when groups are removed", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: ["Test Group X", "New_one"],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual(["outside_grouparoo"]);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email: "NewOne@bleonard.com",
        external_id,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.external_id).toBe(external_id);
    expect(user.email).toBe("newone@bleonard.com");
    expect(user.tags.sort()).toEqual(["outside_grouparoo"]);
  });

  test("it can migrate an email user to having a external_id", async () => {
    // make a user with email
    const created = await client.users.create({
      user: {
        verified: true,
        name: migratedName,
        alias: "MU",
        email: migratedEmail,
        user_fields: {
          text_field: "my text",
          checkbox_field: true,
        },
      },
    });

    // then sync a profile
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: migratedEmail,
        name: migratedName,
        external_id: migratedExternalId,
        text_field: "change",
      },
      oldGroups: [],
      newGroups: ["something"],
      toDelete: false,
    });

    const user = await client.users.show(created.id);
    expect(user.external_id).toBe(migratedExternalId);
    expect(user.email).toBe(migratedEmail);
    expect(user.alias).toBe("MU");
    expect(user.name).toBe(migratedName);
    expect(user.user_fields.checkbox_field).toBe(true);
    expect(user.user_fields.text_field).toBe("change");
    expect(user.tags.sort()).toEqual(["something"]);
  });

  test("it can change the external id", async () => {
    await runExport({
      oldProfileProperties: {
        email: "NewOne@bleonard.com",
        external_id,
      },
      newProfileProperties: {
        external_id: newExternalId,
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.external_id).toBe(newExternalId);
    expect(user.email).toBe(email);
  });

  test("it can make one with the original id and no email", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        external_id,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    newId = await findId();
    expect(newId).toBeTruthy();
    expect(newId).not.toEqual(userId);

    const newUser = await getNewUser();
    expect(newUser.id).toBe(newId);
    expect(newUser.external_id).toBe(external_id);
    expect(newUser.email).toBe(null);
    expect(newUser.name).toBe(external_id); // defaults to something

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.external_id).toBe(newExternalId);
    expect(user.email).toBe(email);
  });

  test("it can add an email address to the new user", async () => {
    await runExport({
      oldProfileProperties: { external_id },
      newProfileProperties: {
        external_id,
        email: "added@bleonard.com",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const newUser = await getNewUser();
    expect(newUser.id).toBe(newId);
    expect(newUser.email).toBe("added@bleonard.com");
    expect(newUser.active).toBe(true);
  });

  test("cannot delete a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: false },
        oldProfileProperties: { external_id },
        newProfileProperties: { external_id },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no changes to the user and properties
    const newUser = await getNewUser();
    expect(newUser.id).toBe(newId);
    expect(newUser.email).toBe("added@bleonard.com");
    expect(newUser.active).toBe(true);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: { external_id },
      newProfileProperties: { external_id },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    expect(await findId()).toBeNull();

    const newUser = await getNewUser();
    expect(newUser.id).toBe(newId);
    expect(newUser.email).toBe(null);
    expect(newUser.active).toBe(false);
  });
});

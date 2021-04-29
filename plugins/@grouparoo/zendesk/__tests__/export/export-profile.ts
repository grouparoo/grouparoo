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

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/zendesk": { path: path.join(__dirname, "..", "..") },
});

let client: any;

const externalId1 = "grouparoo123";
const email1 = "grouparoo@demo.com";
const externalId2 = "othergrouparoo123";
const email2 = "othergrouparoo@demo.com";
const externalId3 = "notgrouparoo123";
const email3 = "notgrouparoo@demo.com";
const externalId4 = "maybegrouparoo123";
const email4 = "maybegrouparoo@demo.com";
const externalId5 = "maybegrouparoo123";
const email5 = "almostgrouparoo@demo.com";
const nonexistentExternalId = "fakegrouparoo123";
const nonexistentEmail = "fakegrouparoo@demo.com";
const migratedName = "Anakin";
const migratedEmail = "skywalker@demo.com";
const migratedExternalId = "skywalker123";

const groupOne = "test_high_value";
const groupTwo = "test_spanish_speaking";
const groupThree = "test_recently_added";
const outsideGroup = "outsider";
const exampleDate = new Date(1597870204 * 1000);

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_5090-0a4e-3039-ad42-545fasd324f16";

async function cleanUp() {
  // Clear created users
  for (let email of [
    email1,
    email2,
    email3,
    email4,
    nonexistentEmail,
    migratedEmail,
  ]) {
    const response = await client.users.search({ query: email });
    for (const user of response) {
      await client.users.delete(user.id);
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
    appId,
    connection: null,
    app: null,
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
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create Person on zendesk", async () => {
    let user = await searchForUser(client, { external_id: externalId1 });
    expect(user).toBe(null);
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        name: "John Doe",
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.email).toBe(email1);
    expect(user.external_id).toBe(externalId1);
  });

  test("cannot create a user without an external_id ", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: { name: "Bill" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(
      "newProfileProperties[external_id] is a required mapping"
    );
  });

  test("cannot create an user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldProfileProperties: {},
        newProfileProperties: {
          name: "Jimmy Doe",
          email: email2,
          external_id: externalId2,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can set user fields", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Doe",
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Doe",
        alias: "BL",
        text_field: "testing here",
        date_field: exampleDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.name).toBe("John Doe");
    expect(user.alias).toBe("BL");
    expect(user.user_fields.date_field).toBe("2020-08-19T00:00:00+00:00");
    expect(user.user_fields.text_field).toBe("testing here");
    expect(user.user_fields.checkbox_field).toBe(false); // default
  });

  test("cannot update an user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldProfileProperties: {
          email: email1,
          external_id: externalId1,
          name: "John Doe",
        },
        newProfileProperties: {
          email: email1,
          external_id: externalId1,
          name: "John Denied",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow updating/);

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.name).toBe("John Doe"); // no change
  });

  test("can change user fields and add new ones", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Doe",
        alias: "BL",
        text_field: "testing here",
        date_field: exampleDate,
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Connor",
        alias: "JC",
        text_field: "other test",
        date_field: exampleDate,
        numeric_field: 3039,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.name).toBe("John Connor");
    expect(user.alias).toBe("JC");
    expect(user.user_fields.date_field).toBe("2020-08-19T00:00:00+00:00");
    expect(user.user_fields.text_field).toBe("other test");
    expect(user.user_fields.numeric_field).toBe(3039);
  });

  test("can clear user fields", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Connor",
        alias: "JC",
        text_field: "other test",
        date_field: exampleDate,
        numeric_field: 3039,
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Connor",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user.name).toBe("John Connor");
    expect(user.email).toBe(email1);

    // cleared
    expect(user.alias).toBe(""); // TODO: unclear why this isn't null
    expect(user.user_fields.text_field).toBe(null);
    expect(user.user_fields.date_field).toBe(null);
    expect(user.user_fields.numeric_field).toBe(null);
  });

  test("can add tags", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user.tags.sort()).toEqual([groupOne, groupTwo]);
  });

  test("can remove tags", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user.tags.sort()).toEqual([groupOne]);
  });

  test("it does not change zendesk-created tags", async () => {
    let user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);

    await client.users.update(user.id, {
      user: {
        tags: [groupOne, outsideGroup],
      },
    });
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [groupOne],
      newGroups: [groupOne, groupThree],
      toDelete: false,
    });

    user = await searchForUser(client, { external_id: externalId1 });
    expect(user.tags.sort()).toEqual([outsideGroup, groupOne, groupThree]);
  });

  test("it does not change zendesk-created tags when groups are removed", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      newProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [groupOne, groupThree],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user.tags.sort()).toEqual([outsideGroup]);
  });

  test("can change email", async () => {
    await runExport({
      oldProfileProperties: {
        email: email1,
        external_id: externalId1,
      },
      newProfileProperties: {
        email: email2,
        external_id: externalId1,
      },
      oldGroups: [groupOne, outsideGroup, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user.email).toBe(email2);
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
      newGroups: [groupThree],
      toDelete: false,
    });

    const user = await client.users.show(created.id);
    expect(user.external_id).toBe(migratedExternalId);
    expect(user.email).toBe(migratedEmail);
    expect(user.alias).toBe("MU");
    expect(user.name).toBe(migratedName);
    expect(user.user_fields.checkbox_field).toBe(true);
    expect(user.user_fields.text_field).toBe("change");
    expect(user.tags.sort()).toEqual([groupThree]);
  });

  test("can add an user passing a nonexistent email on the oldProfileProperties", async () => {
    await runExport({
      oldProfileProperties: { email: nonexistentEmail, name: "Bobby" },
      newProfileProperties: {
        email: email3,
        external_id: externalId3,
        name: "Bobby",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId3 });
    expect(user.external_id).toBe(externalId3);
    expect(user.email).toBe(email3);
  });

  test("can update the correct user on external id change if both external id exist", async () => {
    let oldUser = await searchForUser(client, { external_id: externalId1 });
    expect(oldUser).not.toBe(null);

    let newUser = await searchForUser(client, { external_id: externalId3 });
    expect(newUser).not.toBe(null);

    await runExport({
      oldProfileProperties: {
        email: email2,
        external_id: externalId1,
      },
      newProfileProperties: { email: email3, external_id: externalId3 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    // Leave the old one untouched
    oldUser = await searchForUser(client, { external_id: externalId1 });
    expect(oldUser).not.toBe(null);
    expect(oldUser.external_id).toBe(externalId1);
    expect(oldUser.email).toBe(email2);

    // Update the new one
    const user = await searchForUser(client, { external_id: externalId3 });
    expect(user).not.toBe(null);
    expect(user.external_id).toBe(externalId3);
    expect(user.id).toBe(newUser.id);
    expect(user.email).toBe(email3);
  });

  test("it can change the external id when the new external id does not exist", async () => {
    const oldUser = await searchForUser(client, { external_id: externalId3 });
    expect(oldUser).not.toBe(null);

    const newUser = await searchForUser(client, { external_id: externalId5 });
    expect(newUser).toBe(null);

    await runExport({
      oldProfileProperties: {
        email: email3,
        external_id: externalId3,
      },
      newProfileProperties: {
        email: email5,
        external_id: externalId5,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId5 });
    expect(user.id).toBe(oldUser.id);
    expect(user.external_id).toBe(externalId5);
    expect(user.email).toBe(email5);
  });

  test("cannot delete an user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldProfileProperties: {
          email: email2,
          external_id: externalId1,
        },
        newProfileProperties: {
          email: email2,
          external_id: externalId1,
        },
        oldGroups: [groupOne],
        newGroups: [groupOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no effect
    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.external_id).toBe(externalId1);
  });

  test("can delete an user", async () => {
    await runExport({
      oldProfileProperties: {
        email: email2,
        external_id: externalId1,
      },
      newProfileProperties: {
        email: email2,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user).toBe(null);
  });

  test("can delete an user when syncing for the first time", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email: email3, external_id: externalId3 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const user = await searchForUser(client, { external_id: externalId3 });
    expect(user).toBe(null);
  });

  test("can add an user with a new group at the same time", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: email4,
        external_id: externalId4,
        name: "Jill",
      },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId4 });
    expect(user).not.toBe(null);
    expect(user.external_id).toBe(externalId4);
    expect(user.email).toBe(email4);
    expect(user.name).toBe("Jill");
  });

  test("can delete the correct Person on email change if both emails exist", async () => {
    // create someone
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        name: "John Doe",
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await searchForUser(client, { external_id: externalId1 });
    expect(user).not.toBe(null);

    // delete them
    await runExport({
      oldProfileProperties: { email: email4, external_id: externalId4 },
      newProfileProperties: { email: email1, external_id: externalId1 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // email1 is deleted
    const user1 = await searchForUser(client, { external_id: externalId1 });
    expect(user1).toBe(null);

    // email4 is untouched
    const user4 = await searchForUser(client, { external_id: externalId4 });
    expect(user4.name).toBe("Jill");
    expect(user4.email).toBe(email4);
  });

  test("can delete an user when changing email at the same time", async () => {
    await runExport({
      oldProfileProperties: { email: email4, external_id: externalId4 },
      newProfileProperties: {
        email: nonexistentEmail,
        name: "Jill",
        external_id: nonexistentExternalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // user4 is deleted
    const user4 = await searchForUser(client, { external_id: externalId4 });
    expect(user4).toBe(null);

    // nonexistentUser was not created
    const nonexistentUser = await searchForUser(client, {
      external_id: nonexistentExternalId,
    });
    expect(nonexistentUser).toBe(null);
  });

  test("can delete a nonexistent user", async () => {
    await runExport({
      oldProfileProperties: {
        email: nonexistentEmail,
        external_id: nonexistentExternalId,
      },
      newProfileProperties: {
        email: nonexistentEmail,
        external_id: nonexistentExternalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // nonexistentUser is null
    const nonexistentUser = await searchForUser(client, {
      external_id: nonexistentExternalId,
    });
    expect(nonexistentUser).toBe(null);
  });
});

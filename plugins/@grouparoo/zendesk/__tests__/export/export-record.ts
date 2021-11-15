import { helper } from "@grouparoo/spec-helper";

import { exportRecord, searchForUser } from "../../src/lib/export/exportRecord";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

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
const checkboxTag = "checkedbox"; // automatically added to the tags list when checkbox_field=true
const exampleDate = new Date(1597870204 * 1000);

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_5090-0a4e-3039-ad42-545fasd324f16";

async function cleanUp() {
  // Clear created users
  for (let email of [
    email1,
    email2,
    email3,
    email4,
    migratedEmail,
    nonexistentEmail,
  ]) {
    const response = await client.users.search({ query: email });
    for (const user of response) {
      await withRetry(() => {
        return client.users.delete(user.id);
      });
    }
  }
}

async function sleep() {
  if (newNock) {
    await helper.sleep(61 * 1000);
  }
}

async function withRetry(func: () => Promise<any>): Promise<any> {
  try {
    return await func();
  } catch (error) {
    if (error?.statusCode === 429) {
      await sleep();
      return await func();
    } else {
      throw error;
    }
  }
}

async function findUser(findBy: any) {
  return withRetry(() => {
    return searchForUser(client, findBy);
  });
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  let response = null;
  let count = 0;
  while (!response) {
    response = await exportRecord({
      appOptions,
      appId,
      connection: null,
      app: null,
      destination: null,
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
    if (response.retryDelay) {
      if (count < 1) {
        count++;
        await sleep();
        response = null;
      }
    }
  }

  return response;
}

describe("zendesk/exportRecord", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create Person on zendesk", async () => {
    let user = await findUser({ external_id: externalId1 });
    expect(user).toBe(null);
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        name: "John Doe",
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await findUser({ external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.email).toBe(email1);
    expect(user.external_id).toBe(externalId1);
  });

  test("cannot create a user without an external_id ", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { name: "Bill" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow("newRecordProperties[external_id] is a required mapping");
  });

  test("cannot create an user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldRecordProperties: {},
        newRecordProperties: {
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
      oldRecordProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Doe",
      },
      newRecordProperties: {
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

    const user = await findUser({ external_id: externalId1 });
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
        oldRecordProperties: {
          email: email1,
          external_id: externalId1,
          name: "John Doe",
        },
        newRecordProperties: {
          email: email1,
          external_id: externalId1,
          name: "John Denied",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow updating/);

    const user = await findUser({ external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.name).toBe("John Doe"); // no change
  });

  test("can change user fields and add new ones", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Doe",
        alias: "BL",
        text_field: "testing here",
        date_field: exampleDate,
      },
      newRecordProperties: {
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

    const user = await findUser({ external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.name).toBe("John Connor");
    expect(user.alias).toBe("JC");
    expect(user.user_fields.date_field).toBe("2020-08-19T00:00:00+00:00");
    expect(user.user_fields.text_field).toBe("other test");
    expect(user.user_fields.numeric_field).toBe(3039);
  });

  test("can clear user fields", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Connor",
        alias: "JC",
        text_field: "other test",
        date_field: exampleDate,
        numeric_field: 3039,
      },
      newRecordProperties: {
        email: email1,
        external_id: externalId1,
        name: "John Connor",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId1 });
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
      oldRecordProperties: {
        email: email1,
        external_id: externalId1,
      },
      newRecordProperties: {
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });
    const user = await findUser({ external_id: externalId1 });
    expect(user.tags.sort()).toEqual([groupOne, groupTwo]);
  });

  test("can remove tags", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        external_id: externalId1,
      },
      newRecordProperties: {
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId1 });
    expect(user.tags.sort()).toEqual([groupOne]);
  });

  test(
    "it does not change zendesk-created tags",
    async () => {
      let user = await findUser({ external_id: externalId1 });
      expect(user).not.toBe(null);

      await withRetry(() => {
        return client.users.update(user.id, {
          user: {
            tags: [groupOne, outsideGroup],
          },
        });
      });
      await runExport({
        oldRecordProperties: {
          email: email1,
          external_id: externalId1,
        },
        newRecordProperties: {
          email: email1,
          external_id: externalId1,
        },
        oldGroups: [groupOne],
        newGroups: [groupOne, groupThree],
        toDelete: false,
      });

      user = await findUser({ external_id: externalId1 });
      expect(user.tags.sort()).toEqual([outsideGroup, groupOne, groupThree]);
    },
    3 * 60 * 1000
  );

  test(
    "it does not change zendesk-created tags when groups are removed",
    async () => {
      await runExport({
        oldRecordProperties: {
          email: email1,
          external_id: externalId1,
        },
        newRecordProperties: {
          email: email1,
          external_id: externalId1,
        },
        oldGroups: [groupOne, groupThree],
        newGroups: [],
        toDelete: false,
      });

      const user = await findUser({ external_id: externalId1 });
      expect(user.tags.sort()).toEqual([outsideGroup]);
    },
    3 * 60 * 1000
  );

  test("can change email", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        external_id: externalId1,
      },
      newRecordProperties: {
        email: email2,
        external_id: externalId1,
      },
      oldGroups: [groupOne, outsideGroup, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId1 });
    expect(user.email).toBe(email2);
  });

  test("it can migrate an email user to having a external_id", async () => {
    // make a user with email
    const created = await withRetry(() => {
      return client.users.create({
        user: {
          verified: true,
          name: migratedName,
          alias: "MU",
          email: migratedEmail,
          user_fields: {
            text_field: "my text",
            numeric_field: 3039,
            checkbox_field: true,
          },
          tags: ["existing", "here"],
        },
      });
    });

    // then sync a record
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: migratedEmail,
        name: migratedName,
        external_id: migratedExternalId,
        text_field: "change",
      },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    const user = await withRetry(() => {
      return client.users.show(created.id);
    });
    expect(user.external_id).toBe(migratedExternalId);
    expect(user.email).toBe(migratedEmail);
    expect(user.alias).toBe("MU");
    expect(user.name).toBe(migratedName);
    expect(user.user_fields.checkbox_field).toBe(true);
    expect(user.user_fields.text_field).toBe("change");
    expect(user.user_fields.numeric_field).toBe(3039);
    expect(user.tags.sort()).toEqual([
      checkboxTag,
      "existing",
      "here",
      groupThree,
    ]); // including the automatically added tag.
  });

  test("can add an user passing a nonexistent email on the oldRecordProperties", async () => {
    await runExport({
      oldRecordProperties: { email: nonexistentEmail, name: "Bobby" },
      newRecordProperties: {
        email: email3,
        external_id: externalId3,
        name: "Bobby",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId3 });
    expect(user.external_id).toBe(externalId3);
    expect(user.email).toBe(email3);
  });

  test("can update the correct user on external id change if both external id exist", async () => {
    let oldUser = await findUser({ external_id: externalId1 });
    expect(oldUser).not.toBe(null);

    let newUser = await findUser({ external_id: externalId3 });
    expect(newUser).not.toBe(null);

    await runExport({
      oldRecordProperties: {
        email: email2,
        external_id: externalId1,
      },
      newRecordProperties: { email: email3, external_id: externalId3 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    // Leave the old one untouched
    oldUser = await findUser({ external_id: externalId1 });
    expect(oldUser).not.toBe(null);
    expect(oldUser.external_id).toBe(externalId1);
    expect(oldUser.email).toBe(email2);

    // Update the new one
    const user = await findUser({ external_id: externalId3 });
    expect(user).not.toBe(null);
    expect(user.external_id).toBe(externalId3);
    expect(user.id).toBe(newUser.id);
    expect(user.email).toBe(email3);
  });

  test("it can change the external id when the new external id does not exist", async () => {
    const oldUser = await findUser({ external_id: externalId3 });
    expect(oldUser).not.toBe(null);

    const newUser = await findUser({ external_id: externalId5 });
    expect(newUser).toBe(null);

    await runExport({
      oldRecordProperties: {
        email: email3,
        external_id: externalId3,
      },
      newRecordProperties: {
        email: email5,
        external_id: externalId5,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId5 });
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
        oldRecordProperties: {
          email: email2,
          external_id: externalId1,
        },
        newRecordProperties: {
          email: email2,
          external_id: externalId1,
        },
        oldGroups: [groupOne],
        newGroups: [groupOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no effect
    const user = await findUser({ external_id: externalId1 });
    expect(user).not.toBe(null);
    expect(user.external_id).toBe(externalId1);
  });

  test("can delete an user", async () => {
    await runExport({
      oldRecordProperties: {
        email: email2,
        external_id: externalId1,
      },
      newRecordProperties: {
        email: email2,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const user = await findUser({ external_id: externalId1 });
    expect(user).toBe(null);
  });

  test("can delete an user when syncing for the first time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email: email3, external_id: externalId3 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const user = await findUser({ external_id: externalId3 });
    expect(user).toBe(null);
  });

  test("can add an user with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: email4,
        external_id: externalId4,
        name: "Jill",
      },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId4 });
    expect(user).not.toBe(null);
    expect(user.external_id).toBe(externalId4);
    expect(user.email).toBe(email4);
    expect(user.name).toBe("Jill");
  });

  test("can delete the correct Person on email change if both emails exist", async () => {
    // create someone
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        name: "John Doe",
        email: email1,
        external_id: externalId1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await findUser({ external_id: externalId1 });
    expect(user).not.toBe(null);

    // delete them
    await runExport({
      oldRecordProperties: { email: email4, external_id: externalId4 },
      newRecordProperties: { email: email1, external_id: externalId1 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // email1 is deleted
    const user1 = await findUser({ external_id: externalId1 });
    expect(user1).toBe(null);

    // email4 is untouched
    const user4 = await findUser({ external_id: externalId4 });
    expect(user4.name).toBe("Jill");
    expect(user4.email).toBe(email4);
  });

  test("can delete an user when changing email at the same time", async () => {
    await runExport({
      oldRecordProperties: { email: email4, external_id: externalId4 },
      newRecordProperties: {
        email: nonexistentEmail,
        name: "Jill",
        external_id: nonexistentExternalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // user4 is deleted
    const user4 = await findUser({ external_id: externalId4 });
    expect(user4).toBe(null);

    // nonexistentUser was not created
    const nonexistentUser = await findUser({
      external_id: nonexistentExternalId,
    });
    expect(nonexistentUser).toBe(null);
  });

  test("can delete a nonexistent user", async () => {
    await runExport({
      oldRecordProperties: {
        email: nonexistentEmail,
        external_id: nonexistentExternalId,
      },
      newRecordProperties: {
        email: nonexistentEmail,
        external_id: nonexistentExternalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // nonexistentUser is null
    const nonexistentUser = await findUser({
      external_id: nonexistentExternalId,
    });
    expect(nonexistentUser).toBe(null);
  });

  test("cannot create an user with bad email address", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          email: "badmail",
          name: "William Bad",
          external_id: "badmail",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/is not properly formatted/);

    const user = await searchForUser(client, { email: "badmail" });
    expect(user).toBe(null);
  });
});

import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexUsers } from "../utils/shared";
import { KlaviyoClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { exportRecord } from "../../src/lib/export/exportRecord";
import { getKnownFieldMap } from "../../src/lib/export/destinationMappingOptions";

let client: KlaviyoClient;
let fieldMap: { [fieldName: string]: string };
let listMapByName: { [listName: string]: string };

let profileId = null;
let profileId2 = null;
let profileId3 = null;

const email1 = "grouparoo@demo.com";
const email2 = "othergrouparoo@demo.com";
const email3 = "notgrouparoo@demo.com";
const email4 = "maybegrouparoo@demo.com";
const nonexistentEmail = "fakegrouparoo@demo.com";

const groupOne = "TEST High Value";
const groupTwo = "TEST Spanish Speaking";
const groupThree = "TEST Recently Added";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function cleanUp() {
  // Clear created people
  for (let email of [email1, email2, email3, email4, nonexistentEmail]) {
    try {
      await client.dataPrivacy.requestProfileDeletion({ identifier: email });
    } catch (e) {}
  }

  // Clear created lists
  for (let listName of [groupOne, groupTwo, groupThree]) {
    try {
      await client.lists.deleteList(listMapByName[listName]);
    } catch (e) {}
  }
}

async function refreshListMap() {
  listMapByName = await client.getListMapByName();
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
}

describe("klaviyo/exportRecord", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    fieldMap = await getKnownFieldMap();
    await refreshListMap();
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create Profile on Klaviyo", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        first_name: "John",
        last_name: "Doe",
        email: email1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newProfileId = await client.findProfileIdByEmail(email1);
    expect(newProfileId).toBeTruthy();

    profileId = newProfileId;
    const data = await client.profiles.getProfile(profileId);
    expect(data.first_name).toBe("John");
    expect(data.last_name).toBe("Doe");
    expect(data.email).toBe(email1);
  });

  test("can not create a Profile without an email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { first_name: "Bill" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/email/);
  });

  test("can not create a Profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldRecordProperties: {},
        newRecordProperties: {
          first_name: "Jimmy",
          last_name: "Doe",
          email: email2,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can set Profile fields", async () => {
    await runExport({
      oldRecordProperties: {
        first_name: "John",
        last_name: "Doe",
        email: email1,
      },
      newRecordProperties: {
        first_name: "John",
        last_name: "Doe",
        email: email1,
        phone: "1234567890",
        text_field: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.profiles.getProfile(profileId);
    expect(data.first_name).toBe("John");
    expect(data.last_name).toBe("Doe");
    expect(data.email).toBe(email1);
    expect(data.phone).toBe("1234567890");
    expect(data.text_field).toBe("Some text");
  });

  test("can not update a Profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: {
          first_name: "John",
          last_name: "Doe",
          email: email1,
          phone: "1234567890",
          text_field: "Some text",
        },
        newRecordProperties: {
          first_name: "John",
          last_name: "Doe",
          email: email1,
          phone: "1234567890",
          text_field: "Some other text",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    const data = await client.profiles.getProfile(profileId);
    expect(data.text_field).toBe("Some text"); // no change
  });

  test("can change Profile fields and add new ones", async () => {
    await runExport({
      oldRecordProperties: {
        first_name: "John",
        last_name: "Doe",
        email: email1,
        phone: "1234567890",
        text_field: "Some text",
      },
      newRecordProperties: {
        first_name: "Johnny",
        last_name: "Doe",
        email: email1,
        phone: "9876543210",
        text_field: "Some other text",
        large_text_field: "Lots of text",
        autocomplete_field: "Text that autocompletes",
        phone_field: "1234567890",
        numerical_field: 10.32,
        monetary_field: 1025.21,
        date_field: new Date(1598766588 * 1000),
        date_range_field: new Date(1598766588 * 1000),
        address_field: "Cupertino, California, United States",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.profiles.getProfile(profileId);
    expect(data.first_name).toBe("Johnny");
    expect(data.last_name).toBe("Doe");
    expect(data.email).toBe(email1);

    // changed
    expect(data.phone).toBe("9876543210");
    expect(data.text_field).toBe("Some other text");

    // new
    expect(data.large_text_field).toBe("Lots of text");
    expect(data.autocomplete_field).toBe("Text that autocompletes");
    expect(data.phone_field).toBe("1234567890");
    expect(data.numerical_field).toBe("10.32");
    expect(data.monetary_field).toBe("1025.21");
    expect(data.date_field).toBe("2020-08-30T05:49:48.000Z");
    expect(data.date_range_field).toBe("2020-08-30T05:49:48.000Z");
    expect(data.address_field).toBe("Cupertino, California, United States");
  });

  test("can clear Profile fields", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
        phone: "9876543210",
        text_field: "Some other text",
        large_text_field: "Lots of text",
        autocomplete_field: "Text that autocompletes",
        phone_field: "1234567890",
        numerical_field: 10.32,
        monetary_field: 1025.21,
        date_field: new Date(1598766588 * 1000),
        date_range_field: new Date(1598766588 * 1000),
        address_field: "Cupertino, California, United States",
      },
      newRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.profiles.getProfile(profileId);
    expect(data.first_name).toBe("Johnny");
    expect(data.last_name).toBe("Doe");
    expect(data.email).toBe(email1);

    // cleared
    expect(data.phone).toBe("[deleted]");
    expect(data.text_field).toBe("[deleted]");
    expect(data.large_text_field).toBe("[deleted]");
    expect(data.autocomplete_field).toBe("[deleted]");
    expect(data.phone_field).toBe("[deleted]");
    expect(data.numerical_field).toBe("[deleted]");
    expect(data.monetary_field).toBe("[deleted]");
    expect(data.date_field).toBe("[deleted]");
    expect(data.date_range_field).toBe("[deleted]");
  });

  test("can add Profile to groups", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    await refreshListMap();

    const isMemberOfGroupOne = await client.isMemberOfList(
      listMapByName[groupOne],
      email1
    );
    expect(isMemberOfGroupOne).toBeTruthy();

    const isMemberOfGroupTwo = await client.isMemberOfList(
      listMapByName[groupTwo],
      email1
    );
    expect(isMemberOfGroupTwo).toBeTruthy();
  });

  test("can remove group membership", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    await refreshListMap();

    const isMemberOfGroupOne = await client.isMemberOfList(
      listMapByName[groupOne],
      email1
    );
    expect(isMemberOfGroupOne).toBeTruthy();

    expect(listMapByName[groupTwo]).toBeUndefined();
  });

  test("can change email", async () => {
    await runExport({
      oldRecordProperties: {
        email: email1,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        email: email2,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [groupOne],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    const data = await client.profiles.getProfile(profileId);
    expect(data.email).toBe(email2);
  });

  test("can remove profile from group without creating it", async () => {
    await runExport({
      oldRecordProperties: { Email: email2, Name: "Johnny Doe" },
      newRecordProperties: { Email: email2, Name: "Johnny Doe" },
      oldGroups: [groupOne, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    await refreshListMap();

    expect(listMapByName[groupThree]).toBeUndefined();
  });

  test("can add a Profile passing a nonexistent email on the oldRecordProperties", async () => {
    await runExport({
      oldRecordProperties: { email: nonexistentEmail, first_name: "Bobby" },
      newRecordProperties: { email: email3, first_name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    profileId2 = await client.findProfileIdByEmail(email3);
    expect(profileId2).toBeTruthy();

    const data = await client.profiles.getProfile(profileId2);
    expect(data.first_name).toBe("Bobby");
    expect(data.email).toBe(email3);
  });

  test("can update the correct Profile on email change if both emails exist", async () => {
    await runExport({
      oldRecordProperties: { email: email3, first_name: "Bobby" },
      newRecordProperties: {
        email: email2,
        first_name: "Bobby",
        last_name: "Jones",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    // Leave the old one untouched
    let data = await client.profiles.getProfile(profileId2);
    expect(data.first_name).toBe("Bobby");
    expect(data.email).toBe(email3);

    // Update the new one
    data = await client.profiles.getProfile(profileId);
    expect(data.first_name).toBe("Bobby");
    expect(data.last_name).toBe("Jones");
    expect(data.email).toBe(email2);
  });

  test("cannot delete a Profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldRecordProperties: {
          email: email2,
          first_name: "Bobby",
          last_name: "Jones",
        },
        newRecordProperties: {
          email: email2,
          first_name: "Bobby",
          last_name: "Jones",
        },
        oldGroups: [groupOne],
        newGroups: [groupOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    await refreshListMap();

    // no effect
    const data = await client.profiles.getProfile(profileId);
    expect(listMapByName[groupOne]).toBeTruthy();
    expect(data.first_name).toBe("Bobby");
    expect(data.last_name).toBe("Jones");
  });

  test("can delete a Profile", async () => {
    await runExport({
      oldRecordProperties: {
        email: email2,
        first_name: "Bobby",
        last_name: "Jones",
      },
      newRecordProperties: {
        email: email2,
        first_name: "Bobby",
        last_name: "Jones",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await expect(client.profiles.getProfile(profileId)).rejects.toThrow(/404/);
  });

  test("can delete a Profile when syncing for the first time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email: email3, first_name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await expect(client.profiles.getProfile(profileId2)).rejects.toThrow(/404/);
  });

  test("can add a Profile with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email: email4, first_name: "Jill" },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    await indexUsers(newNock);

    await refreshListMap();

    expect(listMapByName[groupThree]).toBeTruthy();

    profileId3 = await client.findProfileIdByEmail(email4);
    expect(profileId3).toBeTruthy();

    const data = await client.profiles.getProfile(profileId3);
    expect(data.first_name).toBe("Jill");
    expect(data.email).toBe(email4);
  });

  test("can delete the correct Profile on email change if both emails exist", async () => {
    // create someone
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        first_name: "John",
        last_name: "Doe",
        email: email1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newProfileId = await client.findProfileIdByEmail(email1);
    expect(newProfileId).toBeTruthy();

    // delete them
    await runExport({
      oldRecordProperties: {
        first_name: "Mike",
        last_name: "Doe",
        email: email4,
      },
      newRecordProperties: {
        first_name: "Mike",
        last_name: "Doe",
        email: email1,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // email1 is deleted
    await expect(client.profiles.getProfile(newProfileId)).rejects.toThrow(
      /404/
    );

    // email4 is untouched
    const data = await client.profiles.getProfile(profileId3);
    expect(data.first_name).toBe("Jill");
    expect(data.email).toBe(email4);
  });

  test("can delete a Profile when changing email at the same time", async () => {
    await runExport({
      oldRecordProperties: { email: email4, first_name: "Jill" },
      newRecordProperties: { email: nonexistentEmail, first_name: "Jill" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await expect(client.profiles.getProfile(profileId3)).rejects.toThrow(/404/);
  });

  test("can delete a nonexistent Profile", async () => {
    await runExport({
      oldRecordProperties: { email: nonexistentEmail, first_name: "Nobody" },
      newRecordProperties: { email: nonexistentEmail, first_name: "Nobody" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const profileId = await client.findProfileIdByEmail(nonexistentEmail);
    expect(profileId).toBeNull();
  });
});

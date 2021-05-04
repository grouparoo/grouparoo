import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import OneSignal from "onesignal-node";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexDevices } from "../utils/shared";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

let client: OneSignal.Client;

const extUserId1 = "grouparoo";
let playerId1 = null;
const nonexistentExtUserId = "thisdoesnotexist";
const testDate = new Date("2021-02-22T23:03:03Z");
const testDateUnix = "1614034983";
const groupOne = "high_value";
const groupTwo = "spanish_speakers";
const weirdTag = "my Weird tag-name";
const weirdTagNormalized = "my_weird_tag_name";
const weirdGroup = "=~High Value!!/=";
const weirdGroupNormalized = "__high_value____";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getUserCount() {
  const res = await client.viewDevices();
  return res.body.total_count;
}

async function cleanUp(suppressErrors: boolean) {
  try {
    await client.deleteDevice(playerId1);
  } catch (err) {
    if (!suppressErrors) {
      throw err;
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
    appId: null,
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

describe("OneSignal/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(true);

    const testDevice = await client.addDevice({
      external_user_id: extUserId1,
      device_type: 11, //email
      identifier: `${extUserId1}@demo.com`,
    });

    playerId1 = testDevice.body.id;
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(false);
  }, helper.setupTime);

  test("can not create new devices", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: { external_user_id: nonexistentExtUserId },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/create new device/);
  });

  test("can not update without an external_user_id", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: { first_name: "Joe" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/external_user_id/);
  });

  test("cannot update a device if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: false,
          delete: false,
        },
        oldProfileProperties: { external_user_id: extUserId1 },
        newProfileProperties: {
          external_user_id: extUserId1,
          first_name: "Joe",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags.first_name).toBeUndefined(); // no change.
  });

  test("can add tags", async () => {
    await runExport({
      oldProfileProperties: { external_user_id: extUserId1 },
      newProfileProperties: { external_user_id: extUserId1, first_name: "Joe" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags.first_name).toBe("Joe");
  });

  test("can change tags and add new ones", async () => {
    await runExport({
      oldProfileProperties: { external_user_id: extUserId1, first_name: "Joe" },
      newProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
        last_name: "Doe",
        last_active_at: testDate,
        play_count: 10,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags.first_name).toBe("John");
    expect(player.tags.last_name).toBe("Doe");
    expect(player.tags.last_active_at).toBe(testDateUnix);
    expect(player.tags.play_count).toBe("10");
  });

  test("can clear tags", async () => {
    await runExport({
      oldProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
        last_name: "Doe",
        last_active_at: testDate,
        play_count: 10,
      },
      newProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags.first_name).toBe("John");
    expect(player.tags.last_name).toBeUndefined();
    expect(player.tags.last_active_at).toBeUndefined();
    expect(player.tags.play_count).toBeUndefined();
  });

  test("can add groups as tags", async () => {
    await runExport({
      oldProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
      },
      newProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
      },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags[`in_${groupOne}`]).toBeTruthy();
    expect(player.tags[`in_${groupTwo}`]).toBeTruthy();
  });

  test("can remove group tag", async () => {
    await runExport({
      oldProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
      },
      newProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
      },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags[`in_${groupOne}`]).toBeTruthy();
    expect(player.tags[`in_${groupTwo}`]).toBeUndefined();
  });

  test("can normalize tags and groups", async () => {
    await runExport({
      oldProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
      },
      newProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
        [weirdTag]: "test",
      },
      oldGroups: [groupOne],
      newGroups: [groupOne, weirdGroup],
      toDelete: false,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags[weirdTagNormalized]).toBe("test");
    expect(player.tags[`in_${weirdGroupNormalized}`]).toBeTruthy();
  });

  test("cannot clean tags when deleting a contact if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: true,
          create: false,
          delete: false,
        },
        oldProfileProperties: {
          external_user_id: extUserId1,
          first_name: "John",
          [weirdTag]: "test",
        },
        newProfileProperties: {
          external_user_id: extUserId1,
          first_name: "John",
          [weirdTag]: "test",
          some_new_tag: "but he's being deleted!",
        },
        oldGroups: [groupOne, weirdGroup],
        newGroups: [groupOne, weirdGroup],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags.first_name).toBe("John"); // no change.
    expect(player.tags[weirdTagNormalized]).toBe("test"); // no change.
  });

  test("can clear tags when deleting a user", async () => {
    await runExport({
      oldProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
        [weirdTag]: "test",
      },
      newProfileProperties: {
        external_user_id: extUserId1,
        first_name: "John",
        [weirdTag]: "test",
        some_new_tag: "but he's being deleted!",
      },
      oldGroups: [groupOne, weirdGroup],
      newGroups: [groupOne, weirdGroup],
      toDelete: true,
    });

    await indexDevices(newNock);

    const { body: player } = await client.viewDevice(playerId1);
    expect(player.external_user_id).toBe(extUserId1);
    expect(player.tags.first_name).toBeUndefined();
    expect(player.tags.some_new_tag).toBeUndefined();
    expect(player.tags[weirdTagNormalized]).toBeUndefined();
    expect(player.tags[`in_${weirdGroupNormalized}`]).toBeUndefined();
    expect(player.tags[`in_${groupOne}`]).toBeUndefined();
  });
});

import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { VeroClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { exportRecord } from "../../src/lib/export/exportRecord";

let client: VeroClient;

let profileId = "user-101";
let profileId2 = "user-102";
let profileId3 = "user-103";
let profileId4 = "user-104";
let nonexistentprofileId = "user-not-found";

const groupOne = "TEST High Value";
const groupTwo = "TEST Spanish Speaking";
const groupThree = "TEST Recently Added";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function cleanUp() {
  // Clear created people
  for (let id of [
    profileId,
    profileId2,
    profileId3,
    profileId4,
    nonexistentprofileId,
  ]) {
    try {
      await client.deleteUser(id);
    } catch (e) {}
  }
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

describe("vero/exportRecord", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create Profile on Vero", async () => {
    const result = await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        id: profileId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can not create a Profile without an id", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { first_name: "Bill" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/id/);
  });

  test("can not create a Profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: true,
          create: false,
          delete: true,
        },
        oldRecordProperties: {},
        newRecordProperties: {
          id: profileId2,
          first_name: "Jimmy",
          last_name: "Doe",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create new records and update/);
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
          id: profileId,
          first_name: "John",
          last_name: "Doe",
        },
        newRecordProperties: {
          id: profileId,
          first_name: "John",
          last_name: "Doe",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create new records and update/);
  });

  test("can set Profile fields", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId,
      },
      newRecordProperties: {
        id: profileId,
        first_name: "John",
        last_name: "Doe",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can change Profile fields and add new ones", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId,
        first_name: "John",
        last_name: "Doe",
      },
      newRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
        phone: "9876543210",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can clear Profile fields", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
        phone: "9876543210",
      },
      newRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can add Profile to groups", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can remove group membership", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can change id", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        id: profileId2,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [groupOne],
      newGroups: [groupOne],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can remove profile from group without creating it", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId2,
        first_name: "Johnny",
        last_name: "Doe",
      },
      newRecordProperties: {
        id: profileId2,
        first_name: "Johnny",
        last_name: "Doe",
      },
      oldGroups: [groupOne, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can add a Profile passing a nonexistent id on the oldRecordProperties", async () => {
    const result = await runExport({
      oldRecordProperties: { id: nonexistentprofileId, first_name: "Bobby" },
      newRecordProperties: { id: profileId3, first_name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  test("can update the correct Profile on id change if both ids exist", async () => {
    const result = await runExport({
      oldRecordProperties: { id: profileId3, first_name: "Bobby" },
      newRecordProperties: {
        id: profileId2,
        first_name: "Bobby",
        last_name: "Jones",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
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
          id: profileId2,
          first_name: "Bobby",
          last_name: "Jones",
        },
        newRecordProperties: {
          id: profileId2,
          first_name: "Bobby",
          last_name: "Jones",
        },
        oldGroups: [groupOne],
        newGroups: [groupOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);
  });

  test("can delete a Profile", async () => {
    const result = await runExport({
      oldRecordProperties: {
        id: profileId2,
        first_name: "Bobby",
        last_name: "Jones",
      },
      newRecordProperties: {
        id: profileId2,
        first_name: "Bobby",
        last_name: "Jones",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    expect(result.success).toBeTruthy();
  });

  test("can delete a Profile when syncing for the first time", async () => {
    const result = await runExport({
      oldRecordProperties: {},
      newRecordProperties: { id: profileId3, first_name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    expect(result.success).toBeTruthy();
  });

  test("can add a Profile with a new group at the same time", async () => {
    const result = await runExport({
      oldRecordProperties: {},
      newRecordProperties: { id: profileId4, first_name: "Jill" },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    expect(result.success).toBeTruthy();
  });

  // TODO: re-think about this
  // test("can delete the correct Profile on id change if both ids exist", async () => {
  //   // create someone
  //   const result = await runExport({
  //     oldRecordProperties: {},
  //     newRecordProperties: {
  //       id: profileId,
  //       first_name: "John",
  //       last_name: "Doe",
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //
  //   // delete them
  //   const result = await runExport({
  //     oldRecordProperties: {
  //       first_name: "Mike",
  //       last_name: "Doe",
  //       id: profileId4,
  //     },
  //     newRecordProperties: {
  //       first_name: "Mike",
  //       last_name: "Doe",
  //       id: profileId,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: true,
  //   });
  // });

  // TODO: re-think about this
  // test("can delete a Profile when changing id at the same time", async () => {
  //   const result = await runExport({
  //     oldRecordProperties: { id: profileId4, first_name: "Jill" },
  //     newRecordProperties: { id: nonexistentprofileId, first_name: "Jill" },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: true,
  //   });
  //
  //   expect(result.success).toBeTruthy();
  // });

  test("can delete a nonexistent Profile", async () => {
    const result = await runExport({
      oldRecordProperties: { id: nonexistentprofileId, first_name: "Nobody" },
      newRecordProperties: { id: nonexistentprofileId, first_name: "Nobody" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    expect(result.success).toBeTruthy();
  });
});

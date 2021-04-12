import { helper } from "@grouparoo/spec-helper";
import * as uuid from "uuid";
import { exportProfilesInBatch } from "../../src/destination/batch/exportProfiles";
import {
  BatchExport,
  BatchGroupMode,
  BatchMethodAddToGroups,
  BatchMethodCreateByForeignKeyAndSetDestinationIds,
  BatchMethodDeleteByDestinationIds,
  BatchMethodRemoveFromGroups,
  BatchMethodUpdateByDestinationIds,
} from "../../src/destination/batch/types";

enum BatchTestAction {
  Create,
  Update,
  Delete,
}

const generateBatchExports = async (
  count: number,
  action: BatchTestAction,
  oldGroups?: string[],
  newGroups?: string[]
) => {
  const batchExports: BatchExport[] = [];

  for (let i = 0; i < count; i++) {
    const id = uuid.v4();

    batchExports.push({
      profile: await helper.factories.profile(),
      profileId: id,
      destinationId: action != BatchTestAction.Create && id,
      oldProfileProperties: {
        id,
      },
      newProfileProperties: {
        id,
      },
      oldGroups: oldGroups || [],
      newGroups: newGroups || [],
      toDelete: action === BatchTestAction.Delete,
      shouldCreate: action === BatchTestAction.Create,
      shouldUpdate: action === BatchTestAction.Update,
    });
  }

  return batchExports;
};

const noOp = async () => {};

describe("app-templates/destination/batch", () => {
  helper.grouparooTestServer({ enableTestPlugin: true });

  test("can limit batch size on create", async () => {
    const batchSize = 50;
    const findSize = 100;

    const batchExports = await generateBatchExports(
      100,
      BatchTestAction.Create
    );

    const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds = jest.fn(
      async ({ users }) => {
        expect(users.length).toBe(batchSize);
      }
    );

    await exportProfilesInBatch(
      batchExports,
      {
        batchSize,
        findSize,
        groupMode: BatchGroupMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        getClient: noOp,
        deleteByDestinationIds: noOp,
        findAndSetDestinationIds: noOp,
        updateByDestinationIds: noOp,
        createByForeignKeyAndSetDestinationIds,
        addToGroups: noOp,
        removeFromGroups: noOp,
      }
    );

    expect(createByForeignKeyAndSetDestinationIds).toBeCalledTimes(2);
  });

  test("can limit batch size on update", async () => {
    const batchSize = 50;
    const findSize = 100;

    const batchExports = await generateBatchExports(
      100,
      BatchTestAction.Update
    );

    const updateByDestinationIds: BatchMethodUpdateByDestinationIds = jest.fn(
      async ({ users }) => {
        expect(users.length).toBe(batchSize);
      }
    );

    await exportProfilesInBatch(
      batchExports,
      {
        batchSize,
        findSize,
        groupMode: BatchGroupMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        updateByDestinationIds,
        getClient: noOp,
        deleteByDestinationIds: noOp,
        findAndSetDestinationIds: noOp,
        createByForeignKeyAndSetDestinationIds: noOp,
        addToGroups: noOp,
        removeFromGroups: noOp,
      }
    );

    expect(updateByDestinationIds).toBeCalledTimes(2);
  });

  test("can limit batch size on delete", async () => {
    const batchSize = 50;
    const findSize = 100;

    const batchExports = await generateBatchExports(
      100,
      BatchTestAction.Delete
    );

    const deleteByDestinationIds: BatchMethodDeleteByDestinationIds = jest.fn(
      async ({ users }) => {
        expect(users.length).toBe(batchSize);
      }
    );

    await exportProfilesInBatch(
      batchExports,
      {
        batchSize,
        findSize,
        groupMode: BatchGroupMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        deleteByDestinationIds,
        getClient: noOp,
        findAndSetDestinationIds: noOp,
        updateByDestinationIds: noOp,
        createByForeignKeyAndSetDestinationIds: noOp,
        addToGroups: noOp,
        removeFromGroups: noOp,
      }
    );

    expect(deleteByDestinationIds).toBeCalledTimes(2);
  });

  test("can limit batch size when adding to groups", async () => {
    const batchSize = 50;
    const findSize = 100;

    const batchExports = await generateBatchExports(
      100,
      BatchTestAction.Update,
      [],
      ["Test Group"]
    );

    const addToGroups: BatchMethodAddToGroups = jest.fn(async ({ users }) => {
      expect(users.length).toBe(batchSize);
    });

    await exportProfilesInBatch(
      batchExports,
      {
        batchSize,
        findSize,
        groupMode: BatchGroupMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        getClient: noOp,
        findAndSetDestinationIds: noOp,
        updateByDestinationIds: noOp,
        createByForeignKeyAndSetDestinationIds: noOp,
        deleteByDestinationIds: noOp,
        addToGroups,
        removeFromGroups: noOp,
      }
    );

    expect(addToGroups).toBeCalledTimes(2);
  });

  test("can limit batch size when removing from groups", async () => {
    const batchSize = 50;
    const findSize = 100;

    const batchExports = await generateBatchExports(
      100,
      BatchTestAction.Update,
      ["Test Group"],
      []
    );

    const removeFromGroups: BatchMethodRemoveFromGroups = jest.fn(
      async ({ users }) => {
        expect(users.length).toBe(batchSize);
      }
    );

    await exportProfilesInBatch(
      batchExports,
      {
        batchSize,
        findSize,
        groupMode: BatchGroupMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        getClient: noOp,
        findAndSetDestinationIds: noOp,
        updateByDestinationIds: noOp,
        createByForeignKeyAndSetDestinationIds: noOp,
        deleteByDestinationIds: noOp,
        addToGroups: noOp,
        removeFromGroups,
      }
    );

    expect(removeFromGroups).toBeCalledTimes(2);
  });
});

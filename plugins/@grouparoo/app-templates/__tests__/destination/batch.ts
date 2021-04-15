import { helper } from "@grouparoo/spec-helper";
import * as uuid from "uuid";
import { exportProfilesInBatch } from "../../src/destination/batch/exportProfiles";
import {
  BatchExport,
  BatchGroupMode,
  BatchMethodAddToGroups,
  BatchMethodCreateByForeignKeyAndSetDestinationIds,
  BatchMethodDeleteByDestinationIds,
  BatchMethodFindAndSetDestinationIds,
  BatchMethodRemoveFromGroups,
  BatchMethodUpdateByDestinationIds,
  BatchSyncMode,
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

  describe("batch size limits", () => {
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
          syncMode: BatchSyncMode.Sync,
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
          syncMode: BatchSyncMode.Sync,
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
          syncMode: BatchSyncMode.Sync,
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
          syncMode: BatchSyncMode.Sync,
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
          syncMode: BatchSyncMode.Sync,
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

    test("can limit batch size when finding destinationIds", async () => {
      const batchSize = 100;
      const findSize = 50;

      const batchExports = await generateBatchExports(
        100,
        BatchTestAction.Create
      );

      const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = jest.fn(
        async ({ foreignKeys }) => {
          expect(foreignKeys.length).toBe(findSize);
        }
      );

      await exportProfilesInBatch(
        batchExports,
        {
          batchSize,
          findSize,
          groupMode: BatchGroupMode.TotalMembers,
          syncMode: BatchSyncMode.Sync,
          foreignKey: "id",
        },
        {
          getClient: noOp,
          deleteByDestinationIds: noOp,
          findAndSetDestinationIds,
          updateByDestinationIds: noOp,
          createByForeignKeyAndSetDestinationIds: noOp,
          addToGroups: noOp,
          removeFromGroups: noOp,
        }
      );

      expect(findAndSetDestinationIds).toBeCalledTimes(2);
    });
  });

  describe("foreign key changes", () => {
    test("can create the user on FK change with newFK if neither FK exists in the destination", async () => {
      const oldForeignKeyValue = "fk1@demo.com";
      const newForeignKeyValue = "fk2@demo.com";

      const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = jest.fn(
        async ({ foreignKeys }) => {
          expect(foreignKeys).toHaveLength(1);
          // Note: does not set destinationId to indicate neither exist
        }
      );

      const createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds = jest.fn(
        async ({ users }) => {
          expect(users).toHaveLength(1);
          expect(users[0].destinationId).toBeUndefined();
          expect(users[0].newProfileProperties.email).toBe(newForeignKeyValue);
        }
      );

      await exportProfilesInBatch(
        [
          {
            profile: await helper.factories.profile(),
            profileId: oldForeignKeyValue,
            oldProfileProperties: {
              email: oldForeignKeyValue,
            },
            newProfileProperties: {
              email: newForeignKeyValue,
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
          },
        ],
        {
          batchSize: 100,
          findSize: 100,
          groupMode: BatchGroupMode.TotalMembers,
          syncMode: BatchSyncMode.Sync,
          foreignKey: "email",
        },
        {
          findAndSetDestinationIds,
          createByForeignKeyAndSetDestinationIds,
          updateByDestinationIds: noOp,
          getClient: noOp,
          deleteByDestinationIds: noOp,
          addToGroups: noOp,
          removeFromGroups: noOp,
        }
      );

      expect(findAndSetDestinationIds).toBeCalledTimes(2);
      expect(createByForeignKeyAndSetDestinationIds).toBeCalledTimes(1);
    });

    test("can update the correct user on FK change if the oldFK exists in the destination", async () => {
      const foreignKeyValue = "fk1@demo.com";
      const newForeignKeyValue = "fk2@demo.com";
      const destinationId = "destId1";

      const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = jest.fn(
        async ({ foreignKeys, getByForeignKey }) => {
          expect(foreignKeys).toHaveLength(1);

          for (const fk of foreignKeys) {
            // only old one gets set a destinationId
            if (fk === foreignKeyValue) {
              const user = getByForeignKey(fk);
              user.destinationId = destinationId;
            }
          }
        }
      );

      const updateByDestinationIds: BatchMethodUpdateByDestinationIds = jest.fn(
        async ({ users }) => {
          expect(users).toHaveLength(1);
          expect(users[0].newProfileProperties.email).toBe(newForeignKeyValue);
          expect(users[0].destinationId).toBe(destinationId);
        }
      );

      await exportProfilesInBatch(
        [
          {
            profile: await helper.factories.profile(),
            profileId: foreignKeyValue,
            oldProfileProperties: {
              email: foreignKeyValue,
            },
            newProfileProperties: {
              email: newForeignKeyValue,
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
          },
        ],
        {
          batchSize: 100,
          findSize: 100,
          groupMode: BatchGroupMode.TotalMembers,
          syncMode: BatchSyncMode.Sync,
          foreignKey: "email",
        },
        {
          findAndSetDestinationIds,
          updateByDestinationIds,
          getClient: noOp,
          deleteByDestinationIds: noOp,
          createByForeignKeyAndSetDestinationIds: noOp,
          addToGroups: noOp,
          removeFromGroups: noOp,
        }
      );

      expect(findAndSetDestinationIds).toBeCalledTimes(2);
      expect(updateByDestinationIds).toBeCalledTimes(1);
    });

    test("can update the correct user on FK change if the newFK exists in the destination", async () => {
      const oldForeignKeyValue = "fk1@demo.com";
      const newForeignKeyValue = "fk2@demo.com";
      const destinationId = "destId2";

      const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = jest.fn(
        async ({ foreignKeys, getByForeignKey }) => {
          expect(foreignKeys).toHaveLength(1);

          for (const fk of foreignKeys) {
            // only new one gets set a destinationId
            if (fk === newForeignKeyValue) {
              const user = getByForeignKey(fk);
              user.destinationId = destinationId;
            }
          }
        }
      );

      const updateByDestinationIds: BatchMethodUpdateByDestinationIds = jest.fn(
        async ({ users }) => {
          expect(users).toHaveLength(1);
          expect(users[0].newProfileProperties.email).toBe(newForeignKeyValue);
          expect(users[0].destinationId).toBe(destinationId);
        }
      );

      await exportProfilesInBatch(
        [
          {
            profile: await helper.factories.profile(),
            profileId: oldForeignKeyValue,
            oldProfileProperties: {
              email: oldForeignKeyValue,
            },
            newProfileProperties: {
              email: newForeignKeyValue,
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
          },
        ],
        {
          batchSize: 100,
          findSize: 100,
          groupMode: BatchGroupMode.TotalMembers,
          syncMode: BatchSyncMode.Sync,
          foreignKey: "email",
        },
        {
          findAndSetDestinationIds,
          updateByDestinationIds,
          getClient: noOp,
          deleteByDestinationIds: noOp,
          createByForeignKeyAndSetDestinationIds: noOp,
          addToGroups: noOp,
          removeFromGroups: noOp,
        }
      );

      expect(findAndSetDestinationIds).toBeCalledTimes(2);
      expect(updateByDestinationIds).toBeCalledTimes(1);
    });

    test("can update the correct user on FK change if both oldFK and newFK exist in the destination", async () => {
      const oldForeignKeyValue = "fk1@demo.com";
      const newForeignKeyValue = "fk2@demo.com";
      const destinationId = "destId1";
      const destinationId2 = "destId2";

      const findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds = jest.fn(
        async ({ foreignKeys, getByForeignKey }) => {
          expect(foreignKeys).toHaveLength(1);

          for (const fk of foreignKeys) {
            // both FKs set a destinationId
            if (fk === oldForeignKeyValue) {
              const user = getByForeignKey(fk);
              user.destinationId = destinationId;
            } else if (fk === newForeignKeyValue) {
              const user = getByForeignKey(fk);
              user.destinationId = destinationId2;
            }
          }
        }
      );

      const updateByDestinationIds: BatchMethodUpdateByDestinationIds = jest.fn(
        async ({ users }) => {
          expect(users).toHaveLength(1);
          expect(users[0].newProfileProperties.email).toBe(newForeignKeyValue);
          expect(users[0].destinationId).toBe(destinationId2); // new one is updated
        }
      );

      await exportProfilesInBatch(
        [
          {
            profile: await helper.factories.profile(),
            profileId: oldForeignKeyValue,
            oldProfileProperties: {
              email: oldForeignKeyValue,
            },
            newProfileProperties: {
              email: newForeignKeyValue,
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
          },
        ],
        {
          batchSize: 100,
          findSize: 100,
          groupMode: BatchGroupMode.TotalMembers,
          syncMode: BatchSyncMode.Sync,
          foreignKey: "email",
        },
        {
          findAndSetDestinationIds,
          updateByDestinationIds,
          getClient: noOp,
          deleteByDestinationIds: noOp,
          createByForeignKeyAndSetDestinationIds: noOp,
          addToGroups: noOp,
          removeFromGroups: noOp,
        }
      );

      expect(findAndSetDestinationIds).toBeCalledTimes(2);
      expect(updateByDestinationIds).toBeCalledTimes(1);
    });
  });
});

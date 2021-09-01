import { ExportedRecord } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import * as uuid from "uuid";
import { exportRecordsInGroups } from "../../src/destination/group/exportRecords";
import {
  GroupMethodAddToGroups,
  GroupSizeMode,
} from "../../src/destination/group/types";

const noOp = async () => {};

const generateExportedRecords = async (
  count: number,
  oldGroups?: string[],
  newGroups?: string[]
) => {
  const exportedRecords: ExportedRecord[] = [];

  for (let i = 0; i < count; i++) {
    const id = uuid.v4();

    exportedRecords.push({
      record: await helper.factories.record(),
      recordId: id,
      oldRecordProperties: {
        id,
      },
      newRecordProperties: {
        id,
      },
      oldGroups: oldGroups || [],
      newGroups: newGroups || [],
      toDelete: false,
    });
  }

  return exportedRecords;
};

describe("app-templates/destination/group", () => {
  helper.grouparooTestServer({ enableTestPlugin: true });

  test("can limit batch size when adding to groups", async () => {
    const batchSize = 50;

    const recordsToExport = await generateExportedRecords(
      100,
      [],
      ["Test Group"]
    );

    const addToGroups: GroupMethodAddToGroups = jest.fn(
      async ({ groupMap }) => {
        const records = groupMap["Test Group"];
        expect(records.length).toBe(50);
      }
    );

    await exportRecordsInGroups(
      recordsToExport,
      {
        batchSize,
        groupMode: GroupSizeMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        addToGroups,
        getClient: noOp,
        removeFromGroups: noOp,
      }
    );

    expect(addToGroups).toBeCalledTimes(2);
  });

  test("can limit batch size when removing from groups", async () => {
    const batchSize = 50;

    const recordsToExport = await generateExportedRecords(
      100,
      ["Test Group"],
      []
    );

    const removeFromGroups: GroupMethodAddToGroups = jest.fn(
      async ({ groupMap }) => {
        const records = groupMap["Test Group"];
        expect(records.length).toBe(50);
      }
    );

    await exportRecordsInGroups(
      recordsToExport,
      {
        batchSize,
        groupMode: GroupSizeMode.TotalMembers,
        syncOperations: { create: true, delete: true, update: true },
        foreignKey: "id",
      },
      {
        removeFromGroups,
        getClient: noOp,
        addToGroups: noOp,
      }
    );

    expect(removeFromGroups).toBeCalledTimes(2);
  });
});

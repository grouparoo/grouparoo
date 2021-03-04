import { ExportedProfile } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import * as uuid from "uuid";
import { exportProfilesInGroups } from "../../src/destination/group/exportProfiles";
import {
  GroupMethodAddToGroups,
  GroupSizeMode,
  GroupSyncMode,
} from "../../src/destination/group/types";

const noOp = async () => {};

const generateExportedProfiles = async (
  count: number,
  oldGroups?: string[],
  newGroups?: string[]
) => {
  const exportedProfiles: ExportedProfile[] = [];

  for (let i = 0; i < count; i++) {
    const id = uuid.v4();

    exportedProfiles.push({
      profile: await helper.factories.profile(),
      profileId: id,
      oldProfileProperties: {
        id,
      },
      newProfileProperties: {
        id,
      },
      oldGroups: oldGroups || [],
      newGroups: newGroups || [],
      toDelete: false,
    });
  }

  return exportedProfiles;
};

describe("app-templates/destination/group", () => {
  helper.grouparooTestServer({ enableTestPlugin: true });

  test("can limit batch size when adding to groups", async () => {
    const batchSize = 50;

    const profilesToExport = await generateExportedProfiles(
      100,
      [],
      ["Test Group"]
    );

    const addToGroups: GroupMethodAddToGroups = jest.fn(
      async ({ groupMap }) => {
        const profiles = groupMap["Test Group"];
        expect(profiles.length).toBe(50);
      }
    );

    await exportProfilesInGroups(
      profilesToExport,
      {
        batchSize,
        groupMode: GroupSizeMode.TotalMembers,
        syncMode: GroupSyncMode.Sync,
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

  test("can limit batch size when adding to groups", async () => {
    const batchSize = 50;

    const profilesToExport = await generateExportedProfiles(
      100,
      ["Test Group"],
      []
    );

    const removeFromGroups: GroupMethodAddToGroups = jest.fn(
      async ({ groupMap }) => {
        const profiles = groupMap["Test Group"];
        expect(profiles.length).toBe(50);
      }
    );

    await exportProfilesInGroups(
      profilesToExport,
      {
        batchSize,
        groupMode: GroupSizeMode.TotalMembers,
        syncMode: GroupSyncMode.Sync,
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

import { helper } from "@grouparoo/spec-helper";
import { Team, TeamMember } from "../../src";
import { LockableHelper } from "../../src/modules/lockableHelper";

describe("modules/lockableHelper", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let team: Team;
  let teamMember: TeamMember;

  beforeAll(async () => {
    team = await Team.create({
      name: "Test Team",
    });

    teamMember = await TeamMember.create({
      firstName: "Mario",
      lastName: "Mario",
      email: "mario@demo.com",
      teamGuid: team.id,
    });
  });

  test("if the model is not locked, I can update it (null)", async () => {
    await teamMember.update({ locked: null });
    await LockableHelper.beforeSave(teamMember);
  });

  test("if the model is not locked, I can update it (undefined)", async () => {
    await teamMember.update({ locked: undefined });
    await LockableHelper.beforeSave(teamMember);
  });

  describe("with locked team member", () => {
    beforeAll(async () => {
      //@ts-ignore
      await teamMember.update({ locked: "locked" }, { hooks: false });
    });

    test("if the model is locked, and there are no changes, it will not throw", async () => {
      await LockableHelper.beforeSave(teamMember);
    });

    test("if the model is locked, and there are changes to an allowed column, it's ok", async () => {
      await teamMember.update({ lastLoginAt: new Date() });
    });

    test("if the model is locked, and there are changes to a disallowed column, it throws", async () => {
      await expect(teamMember.update({ firstName: "Luigi" })).rejects.toThrow(
        /you cannot update this locked teamMember/
      );
    });

    test("if the model is locked, and there are changes to a disallowed column, even an empty string, it throws", async () => {
      await expect(teamMember.update({ firstName: "" })).rejects.toThrow(
        /you cannot update this locked teamMember/
      );
    });

    test("if the model is locked, and there are changes to a disallowed column and an allowed column, it throws", async () => {
      await expect(
        teamMember.update({ firstName: "someone", lastLoginAt: new Date() })
      ).rejects.toThrow(/you cannot update this locked teamMember/);
    });

    test("locked models cannot be destroyed", async () => {
      await expect(teamMember.destroy()).rejects.toThrow(
        /you cannot destroy a locked teamMember/
      );
    });
  });
});

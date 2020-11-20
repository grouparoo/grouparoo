import { helper } from "@grouparoo/spec-helper";
import { Team, TeamMember } from "../../src";
import { LockableHelper } from "../../src/modules/lockableHelper";

let actionhero;
let team: Team;
let teamMember: TeamMember;

describe("modules/lockableHelper", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    team = await Team.create({
      name: "Test Team",
    });

    teamMember = await TeamMember.create({
      firstName: "Mario",
      lastName: "Mario",
      email: "mario@demo.com",
      teamGuid: team.guid,
    });
  });

  test("if the model is not locked, I can update it", async () => {
    await teamMember.update({ locked: false });
    await LockableHelper.beforeSave(teamMember);
  });

  describe("with locked team member", () => {
    beforeAll(async () => {
      //@ts-ignore
      await teamMember.update({ locked: true }, { hooks: false });
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

    test("if the model is locked, and there are changes to a disallowed column and an allowed column, it throws", async () => {
      await expect(
        teamMember.update({ firstName: "someone", lastLoginAt: new Date() })
      ).rejects.toThrow(/you cannot update this locked teamMember/);
    });
  });
});

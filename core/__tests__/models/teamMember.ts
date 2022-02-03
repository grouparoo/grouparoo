import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Team, TeamMember } from "../../src";

describe("models/teamMember", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let team: Team;

  beforeAll(async () => {
    team = new Team({ name: "test team" });
    await team.save();
  });

  test("a team member can be added to a team", async () => {
    const teamMember = new TeamMember({
      teamId: team.id,
      firstName: "Mario",
      lastName: "Mario",
      email: "mario@example.com",
    });

    await teamMember.save();

    expect(teamMember.id.length).toBe(40);
    expect(teamMember.createdAt).toBeTruthy();
    expect(teamMember.updatedAt).toBeTruthy();
  });

  test("team members have unique email addresses", async () => {
    const teamMember = new TeamMember({
      teamId: team.id,
      firstName: "Mario",
      lastName: "Mario",
      email: "mario@example.com",
    });

    await expect(teamMember.save()).rejects.toThrow(/Validation error/);
  });

  test("emails will be stored in lowercase", async () => {
    const teamMember = await TeamMember.create({
      teamId: team.id,
      firstName: "Toad",
      lastName: "Toadstool",
      email: "TOAD@example.com",
    });

    expect(teamMember.email).toBe("toad@example.com");
    teamMember.destroy();
  });

  test("creating a team member enqueued a telemetry task", async () => {
    await api.resque.queue.connection.redis.flushdb();

    const teamMember = await TeamMember.create({
      teamId: team.id,
      firstName: "Toad",
      lastName: "Toadstool",
      email: "TOAD@example.com",
    });

    const foundTasks = await specHelper.findEnqueuedTasks("telemetry:adHoc");
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0]).toEqual({ trigger: "team" });

    await teamMember.destroy();
  });

  describe("passwords", () => {
    let teamMember: TeamMember;
    beforeAll(async () => {
      teamMember = await TeamMember.findOne({
        where: { email: "mario@example.com" },
      });
      await teamMember.updatePassword("Passw0rd!");
    });

    test("matching passwords will be validated", async () => {
      const match = await teamMember.checkPassword("Passw0rd!");
      expect(match).toBe(true);
    });

    test("incorrect passwords will be invalidated", async () => {
      const match = await teamMember.checkPassword("nope!");
      expect(match).toBe(false);
    });

    test("team members can update their passwords", async () => {
      await teamMember.updatePassword("new password");
      const match = await teamMember.checkPassword("new password");
      expect(match).toBe(true);
    });

    test("team members with no passwords set cannot be checked", async () => {
      teamMember.passwordHash = undefined;
      await teamMember.save();

      await expect(teamMember.checkPassword("Passw0rd!")).rejects.toThrow(
        /password not set/
      );
    });
  });
});

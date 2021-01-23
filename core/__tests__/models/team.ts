import { helper } from "@grouparoo/spec-helper";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
import { Log } from "./../../src/models/Log";
import { Permission } from "./../../src/models/Permission";

describe("models/team", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a team can be created", async () => {
    const team = new Team({ name: "test team" });

    await team.save();

    expect(team.guid.length).toBe(40);
    expect(team.createdAt).toBeTruthy();
    expect(team.updatedAt).toBeTruthy();
  });

  test("creating a team creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "team" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("destroying a team creates a log entry", async () => {
    const team = await Team.findOne();
    await team.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "destroy", topic: "team" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("teams with team members cannot be deleted", async () => {
    const team = await Team.create({ name: "people team" });
    const teamMember = await TeamMember.create({
      teamGuid: team.guid,
      firstName: "Bowser",
      lastName: "Koopa",
      email: "bowser@example.com",
    });

    await expect(team.destroy()).rejects.toThrow(
      /cannot delete a team that has members/
    );

    await teamMember.destroy();
    await team.destroy(); // doesn't throw
  });

  test("teams are created with read permissions for each topic", async () => {
    const team = await Team.create({ name: "permission team" });
    const permissions = await team.$get("permissions");

    permissions.forEach((permission) => {
      expect(permission.read).toBe(true);
      expect(permission.write).toBe(false);
    });

    await team.destroy();
  });

  test("permissions are deleted along with the team", async () => {
    let count = await Permission.count();
    expect(count).toEqual(0);

    const team = await Team.create({ name: "permission team" });
    count = await Permission.count();
    expect(count).toBeGreaterThan(0);

    await team.destroy();
    count = await Permission.count();
    expect(count).toEqual(0);
  });

  describe("validations", () => {
    test("team names are unique", async () => {
      await Team.create({ name: "test team" });
      const team = new Team({ name: "test team" });
      await expect(team.save()).rejects.toThrow(/Validation error/);
    });

    test("team names must be longer than 3 characters", async () => {
      const team = new Team({ name: "a" });
      await expect(team.save()).rejects.toThrow(/Validation error/);
    });

    test("teams that are locked cannot be deleted", async () => {
      const team = new Team({
        name: "forever team",
        locked: "locked",
      });
      await expect(team.destroy()).rejects.toThrow(
        /you cannot destroy a locked team/
      );
    });
  });
});

import { helper } from "@grouparoo/spec-helper";
import { Team, TeamMember, Permission } from "../../src";

describe("models/team", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a team can be created", async () => {
    const team = new Team({ name: "test team" });

    await team.save();

    expect(team.id.length).toBe(40);
    expect(team.createdAt).toBeTruthy();
    expect(team.updatedAt).toBeTruthy();

    await team.destroy();
  });

  test("teams with team members cannot be deleted", async () => {
    const team = await Team.create({ name: "people team" });
    const teamMember = await TeamMember.create({
      teamId: team.id,
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
      await expect(team.save()).rejects.toThrow(
        /name \"test team\" is already in use/
      );
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

import { helper } from "./../utils/specHelper";
import { Team } from "./../../src/models/Team";
import { Log } from "./../../src/models/Log";

let actionhero;

describe("models/team", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

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

  test("deleting a team creates a log entry", async () => {
    const team = await Team.create({ name: "bye team" });
    await team.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "team" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  describe("validations", () => {
    test("team names are unique", async () => {
      const team = new Team({ name: "test team" });
      await expect(team.save()).rejects.toThrow(/Validation error/);
    });

    test("team names must be longer than 3 characters", async () => {
      const team = new Team({ name: "a" });
      await expect(team.save()).rejects.toThrow(/Validation error/);
    });

    test("teams that are not deleable cannot be deleted", async () => {
      const team = new Team({
        name: "forever team",
        deletable: false,
      });
      await expect(team.destroy()).rejects.toThrow(
        /you cannot delete this team/
      );
    });
  });
});

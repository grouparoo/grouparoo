import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Group } from "./../../src/models/Group";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
let actionhero;
let connection;
let csrfToken;

describe("actions/totals", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    const group = new Group({ type: "manual", name: "test group" });
    await group.save();

    const readOnlyTeam = new Team({
      name: "read only team",
    });
    await readOnlyTeam.save();

    const luigi = new TeamMember({
      teamGuid: readOnlyTeam.guid,
      firstName: "Luigi",
      lastName: "Mario",
      email: "luigi@example.com",
    });
    await luigi.save();
  });

  beforeAll(async () => {
    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;
  });

  test("total counts for all models can be returned", async () => {
    connection.params = { csrfToken, model: "Team" };
    const { error, total } = await specHelper.runAction("totals", connection);
    expect(error).toBeUndefined();
    expect(total).toBe(2);
  });

  test("rolling per-day for all models can be returned", async () => {
    function dateString(d) {
      return d.toJSON().slice(0, 10);
    }

    const today = dateString(new Date());
    const oneMonthAgo = dateString(
      new Date(new Date().setDate(new Date().getDate() - 30))
    );

    connection.params = { csrfToken, model: "Team" };
    const { error, rolling } = await specHelper.runAction("totals", connection);
    expect(error).toBeUndefined();

    expect(rolling.length).toBe(31);
    expect(rolling[0]).toEqual({ date: today, count: 2 });
    expect(rolling[30]).toEqual({ date: oneMonthAgo, count: 0 });
  });
});

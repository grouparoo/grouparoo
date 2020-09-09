import { helper } from "./../utils/specHelper";
import { SetupStep } from "./../../src/models/SetupStep";
import { SetupStepOps } from "./../../src/modules/ops/setupSteps";
import { Team } from "../../src";

let actionhero;

describe("models/setupStep", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("setupSteps will be created when the server boots", async () => {
    const setupSteps = await SetupStep.findAll({
      order: [["position", "asc"]],
    });

    expect(setupSteps.length).toBe(8);
    expect(setupSteps[0].position).toBe(1);
    expect(setupSteps[0].key).toBe("create_a_team");
  });

  test("setupSteps can return the related title and description", async () => {
    const setupStep = await await SetupStep.findOne({ where: { position: 1 } });
    expect(setupStep.getTitle()).toEqual(
      SetupStepOps.setupStepDescriptions.filter((ssd) => ssd.position === 1)[0]
        .title
    );
    expect(setupStep.getDescription()).toEqual(
      SetupStepOps.setupStepDescriptions.filter((ssd) => ssd.position === 1)[0]
        .description
    );
  });

  test("setup steps have unique keys", async () => {
    await expect(
      SetupStep.create({ position: 1, key: "create_team" })
    ).rejects.toThrow();
  });

  test("setupSteps can performCheck", async () => {
    await Team.create({ name: "test team" });
    await Team.create({ name: "other test team" });

    const teamStep = await SetupStep.findOne({
      where: { key: "create_a_team" },
    });
    const groupStep = await SetupStep.findOne({
      where: { key: "create_a_group" },
    });

    expect(await teamStep.performCheck()).toBe(true);
    expect(await groupStep.performCheck()).toBe(false);
  });

  test("complete checks will remain complete and not check again", async () => {
    await Team.destroy({ truncate: true });

    const teamStep = await SetupStep.findOne({
      where: { key: "create_a_team" },
    });

    expect(await teamStep.performCheck()).toBe(true);
  });

  test("setupSteps can getOutcome", async () => {
    const teamStep = await SetupStep.findOne({
      where: { key: "create_a_team" },
    });
    const groupStep = await SetupStep.findOne({
      where: { key: "create_a_group" },
    });

    expect(await teamStep.getOutcome()).toBe(null);
    expect(await groupStep.getOutcome()).toBe("0 Group Memberships created");
  });
});

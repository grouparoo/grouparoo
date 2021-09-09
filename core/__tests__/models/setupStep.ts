import { helper } from "@grouparoo/spec-helper";
import { SetupStep, plugin } from "../../src";
import { SetupStepOps } from "../../src/modules/ops/setupSteps";

describe("models/setupStep", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
  });

  test("setupSteps will be created when the server boots", async () => {
    const setupSteps = await SetupStep.findAll({
      order: [["position", "asc"]],
    });

    expect(setupSteps.length).toBe(7);
    expect(setupSteps[0].position).toBe(1);
    expect(setupSteps[0].key).toBe("name_your_grouparoo_instance");
  });

  test("setupSteps can return the related title and description", async () => {
    const setupStep = await SetupStep.findOne({ where: { position: 1 } });
    expect(setupStep.getTitle()).toEqual(
      SetupStepOps.setupStepDescriptions().filter(
        (ssd) => ssd.position === 1
      )[0].title
    );
    expect(setupStep.getDescription()).toEqual(
      SetupStepOps.setupStepDescriptions().filter(
        (ssd) => ssd.position === 1
      )[0].description
    );
  });

  test("setupSteps ops returns standard versions when not in config mode", async () => {
    const setupSteps = SetupStepOps.setupStepDescriptions();
    expect(setupSteps[0].key).toEqual("name_your_grouparoo_instance");
    expect(setupSteps[5].key).toEqual("create_a_group");
    expect(setupSteps[6].key).toEqual("create_a_destination");
  });

  test("setupSteps ops returns config versions when in config mode", async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";
    const setupSteps = SetupStepOps.setupStepDescriptions();
    expect(setupSteps[0].key).toEqual("install_grouparoo");
    expect(setupSteps[5].key).toEqual("create_a_sample_record");
    expect(setupSteps[6].key).toEqual("create_a_group");
  });

  test("setup steps have unique keys", async () => {
    await expect(
      SetupStep.create({ position: 1, key: "name_your_grouparoo_instance" })
    ).rejects.toThrow();
  });

  test("setupSteps can performCheck", async () => {
    const setting = await plugin.readSetting("core", "cluster-name");
    await setting.update({ value: "Test Cluster" });

    const teamStep = await SetupStep.findOne({
      where: { key: "name_your_grouparoo_instance" },
    });
    const groupStep = await SetupStep.findOne({
      where: { key: "create_a_group" },
    });

    expect(await teamStep.performCheck()).toBe(true);
    expect(await groupStep.performCheck()).toBe(false);
  });

  test("complete checks will remain complete and not check again", async () => {
    const setting = await plugin.readSetting("core", "cluster-name");
    await setting.update({ value: setting.defaultValue });

    const teamStep = await SetupStep.findOne({
      where: { key: "name_your_grouparoo_instance" },
    });

    expect(await teamStep.performCheck()).toBe(true);
  });

  test("setupSteps can getOutcome", async () => {
    const nameStep = await SetupStep.findOne({
      where: { key: "name_your_grouparoo_instance" },
    });
    const groupStep = await SetupStep.findOne({
      where: { key: "create_a_group" },
    });

    expect(await nameStep.getOutcome()).toBe(null);
    expect(await groupStep.getOutcome()).toBe("0 Group Memberships created");
  });

  test("setupSteps can getCta", async () => {
    const step = await SetupStep.findOne({
      where: { key: "name_your_grouparoo_instance" },
    });

    expect(step.getCta()).toBe("Change your Grouparoo Cluster Name");
  });
});

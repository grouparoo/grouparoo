import { helper } from "@grouparoo/spec-helper";
import { SetupStep, plugin } from "../../src";
import { getSetupStepDescriptions } from "../../src/modules/ops/setupSteps";

describe("models/setupStep", () => {
  process.env.GROUPAROO_RUN_MODE = "cli:start";

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:start";
  });

  test("setupSteps will be created when the server boots", async () => {
    const setupSteps = await SetupStep.findAll({
      order: [["position", "asc"]],
    });

    expect(setupSteps.length).toBe(5);
    expect(setupSteps[0].position).toBe(1);
    expect(setupSteps[0].key).toBe("name_your_grouparoo_instance");
  });

  test("setupSteps can return the related title and description", async () => {
    const setupStep = await SetupStep.findOne({ where: { position: 1 } });
    expect(setupStep.getTitle()).toEqual(
      getSetupStepDescriptions().filter((ssd) => ssd.position === 1)[0].title
    );
    expect(setupStep.getDescription()).toEqual(
      getSetupStepDescriptions().filter((ssd) => ssd.position === 1)[0]
        .description
    );
  });

  test("setupSteps ops returns standard versions when not in config mode", async () => {
    const setupSteps = getSetupStepDescriptions();
    expect(setupSteps[0].key).toEqual("name_your_grouparoo_instance");
    expect(setupSteps[1].key).toEqual("add_a_model");
    expect(setupSteps[2].key).toEqual("add_an_app");
    expect(setupSteps[3].key).toEqual("configure_a_model");
  });

  test("setupSteps ops returns config versions when in config mode", async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";
    const setupSteps = getSetupStepDescriptions();
    expect(setupSteps[0].key).toEqual("install_grouparoo");
    expect(setupSteps[1].key).toEqual("add_a_model");
    expect(setupSteps[2].key).toEqual("add_an_app");
    expect(setupSteps[3].key).toEqual("configure_a_model");
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
    const destinationStep = await SetupStep.findOne({
      where: { key: "create_a_destination" },
    });

    expect(await teamStep.performCheck()).toBe(true);
    expect(await destinationStep.performCheck()).toBe(false);
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
    const destinationStep = await SetupStep.findOne({
      where: { key: "create_a_destination" },
    });

    expect(await nameStep.getOutcome()).toBe(null);
    expect(await destinationStep.getOutcome()).toBe(
      "0 Records exported to a Destination"
    );
  });

  test("setupSteps can getCta", async () => {
    const step = await SetupStep.findOne({
      where: { key: "name_your_grouparoo_instance" },
    });

    expect(step.getCta()).toBe("Change your Grouparoo Cluster Name");
  });

  test("setupSteps can check if they are disabled", async () => {
    const nameStep = await SetupStep.findOne({
      where: { key: "name_your_grouparoo_instance" },
    });
    const destinationStep = await SetupStep.findOne({
      where: { key: "create_a_destination" },
    });
    expect(await nameStep.getDisabled()).toBe(false);
    expect(await destinationStep.getDisabled()).toBe(true);
  });
});

import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { plugin, SetupStep, GrouparooModel } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import { SetupStepEdit, SetupStepsList } from "../../src/actions/setupSteps";

const sharedModelId = "mod_abc123";

describe("actions/setupSteps", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection: any;
    let csrfToken: string;
    let id: string;

    beforeAll(async () => {
      // log in
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;

      // reset the startupSteps
      await SetupStep.update({ skipped: false }, { where: { skipped: true } });
      await SetupStep.update(
        { complete: false },
        { where: { complete: true } }
      );
    });

    beforeEach(async () => {
      await GrouparooModel.truncate();
    });

    test("a reader can list setupSteps", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, setupSteps } = await specHelper.runAction<SetupStepsList>(
        "setupSteps:list",
        connection
      );

      expect(error).toBeFalsy();

      expect(setupSteps.length).toBe(5);
      expect(setupSteps[0].position).toBe(1);
      expect(setupSteps[0].key).toBe("name_your_grouparoo_instance");
      expect(setupSteps[0].title).toBe("Name your Grouparoo Instance");
      expect(setupSteps[0].description).toMatch(
        "Give your Grouparoo cluster a name"
      );
      expect(setupSteps[0].href).toBe("/settings/core");
      expect(setupSteps[0].cta).toBe("Change your Grouparoo Cluster Name");
      expect(setupSteps[0].helpLink).toBe(
        "https://www.grouparoo.com/docs/config/settings"
      );
      expect(setupSteps[0].showCtaOnCommunity).toBe(true);
      // showCtaOnCommunity is false when not defined.
      expect(setupSteps[1].showCtaOnCommunity).toBe(false);
      expect(setupSteps[0].outcome).toBe(null);
      expect(setupSteps[0].skipped).toBe(false);
      expect(setupSteps[0].complete).toBe(false);

      id = setupSteps[0].id;
    });

    test("setupSteps can be completed outside of the action and re-calculated when viewed", async () => {
      const setting = await plugin.readSetting("core", "cluster-name");
      await setting.update({ value: "Test Cluster" });

      connection.params = { csrfToken };
      const { setupSteps } = await specHelper.runAction<SetupStepsList>(
        "setupSteps:list",
        connection
      );
      expect(setupSteps.length).toBe(5);
      expect(setupSteps[0].key).toBe("name_your_grouparoo_instance");
      expect(setupSteps[0].complete).toBe(true);
    });

    test("a setupStep can be skipped", async () => {
      connection.params = {
        csrfToken,
        id,
        skipped: true,
      };
      const { error, setupStep } = await specHelper.runAction<SetupStepEdit>(
        "setupStep:edit",
        connection
      );

      expect(error).toBeFalsy();
      expect(setupStep.id).toBe(id);
      expect(setupStep.skipped).toBe(true);
    });

    test("setupSteps can be disabled based on other models", async () => {
      connection.params = { csrfToken };
      const { setupSteps } = await specHelper.runAction<SetupStepsList>(
        "setupSteps:list",
        connection
      );

      const modelStep = setupSteps.find((s) => s.key === `add_a_model`);
      expect(modelStep.disabled).toEqual(false);

      const destinationStep = setupSteps.find(
        (s) => s.key === `create_a_destination`
      );
      expect(destinationStep.disabled).toEqual(true);
    });

    test("configure your model setupStep href changes based on modelId", async () => {
      connection.params = { csrfToken, modelId: null };
      const { setupSteps: setupStepsNoModelId } =
        await specHelper.runAction<SetupStepsList>(
          "setupSteps:list",
          connection
        );
      let modelStep = setupStepsNoModelId.find(
        (s) => s.key === `configure_a_model`
      );
      expect(modelStep.href).toEqual("/model/new");

      await helper.factories.model({ id: sharedModelId });

      connection.params = { csrfToken, modelId: sharedModelId };
      const { setupSteps: setupStepsWithModelId } =
        await specHelper.runAction<SetupStepsList>(
          "setupSteps:list",
          connection
        );
      modelStep = setupStepsWithModelId.find(
        (s) => s.key === `configure_a_model`
      );
      expect(modelStep.href).toEqual(`/model/${sharedModelId}/overview`);
    });

    test("destination setupSteps href changes based on modelId", async () => {
      connection.params = { csrfToken, modelId: null };
      const { setupSteps: setupStepsNoModelId } =
        await specHelper.runAction<SetupStepsList>(
          "setupSteps:list",
          connection
        );
      let destinationStep = setupStepsNoModelId.find(
        (s) => s.key === `create_a_destination`
      );
      expect(destinationStep.href).toEqual("/model/new");

      await helper.factories.model({ id: sharedModelId });

      connection.params = { csrfToken, modelId: sharedModelId };
      const { setupSteps: setupStepsWithModelId } =
        await specHelper.runAction<SetupStepsList>(
          "setupSteps:list",
          connection
        );
      destinationStep = setupStepsWithModelId.find(
        (s) => s.key === `create_a_destination`
      );
      expect(destinationStep.href).toEqual(`/model/${sharedModelId}/overview`);
    });
  });
});

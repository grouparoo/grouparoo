import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { SetupStep, Team, Setting } from "../../src";
let actionhero;

describe("actions/setupSteps", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

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
  });

  describe("reader signed in", () => {
    let connection: any;
    let csrfToken: string;
    let guid: string;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;

      await SetupStep.update({ skipped: false }, { where: { skipped: true } });
      await SetupStep.update(
        { complete: false },
        { where: { complete: true } }
      );
    });

    test("a reader can list setupSteps", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, setupSteps, toDisplay } = await specHelper.runAction(
        "setupSteps:list",
        connection
      );

      expect(error).toBeFalsy();

      expect(setupSteps.length).toBe(8);
      expect(setupSteps[0].position).toBe(1);
      expect(setupSteps[0].key).toBe("create_a_team");
      expect(setupSteps[0].title).toBe("Create a Team");
      expect(setupSteps[0].description).toMatch(/Create .* team/);
      expect(setupSteps[0].href).toBe("/teams");
      expect(setupSteps[0].cta).toBe("Create a Team");
      expect(setupSteps[0].outcome).toBe(null);
      expect(setupSteps[0].skipped).toBe(false);
      expect(setupSteps[0].complete).toBe(false);
      expect(toDisplay).toBe(true);

      guid = setupSteps[0].guid;
    });

    test("toDisplay is false when the setting is disabled", async () => {
      const setting = await Setting.findOne({
        where: { key: "display-startup-steps" },
      });
      await setting.update({ value: false });

      connection.params = {
        csrfToken,
      };
      const { toDisplay } = await specHelper.runAction(
        "setupSteps:list",
        connection
      );

      expect(toDisplay).toBe(false);
    });

    test("setupSteps can be completed outside of the action and re-calculated when viewed", async () => {
      await Team.create({ name: "new team" });

      connection.params = { csrfToken };
      const { setupSteps } = await specHelper.runAction(
        "setupSteps:list",
        connection
      );
      expect(setupSteps.length).toBe(8);
      expect(setupSteps[0].key).toBe("create_a_team");
      expect(setupSteps[0].complete).toBe(true);
    });

    test("a setupStep can be skipped", async () => {
      connection.params = {
        csrfToken,
        guid,
        skipped: true,
      };
      const { error, setupStep } = await specHelper.runAction(
        "setupStep:edit",
        connection
      );

      expect(error).toBeFalsy();
      expect(setupStep.guid).toBe(guid);
      expect(setupStep.skipped).toBe(true);
    });
  });
});

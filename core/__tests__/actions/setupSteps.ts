import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { plugin, SetupStep } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import { SetupStepEdit, SetupStepsList } from "../../src/actions/setupSteps";

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

    test("a reader can list setupSteps", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, setupSteps } = await specHelper.runAction<SetupStepsList>(
        "setupSteps:list",
        connection
      );

      expect(error).toBeFalsy();

      expect(setupSteps.length).toBe(8);
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
      expect(setupSteps.length).toBe(8);
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
  });
});

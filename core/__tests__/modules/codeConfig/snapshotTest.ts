import { api } from "actionhero";
import path from "path";
import { Setting, Profile } from "../../../src";
import { helper, relaxedSnapshot } from "@grouparoo/spec-helper";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";

let actionhero; // the running Grouparoo process

describe("modules/codeConfig", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await Setting.truncate();
    await helper.shutdown(actionhero);
  });

  describe("with code config", () => {
    beforeAll(async () => {
      // manually run the initializer again after the server has started.
      // the test test-app plugin has been loaded
      api.codeConfig.allowLockedModelChanges = true;
      await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );
    });

    test("a profile snapshot can be tested", async () => {
      const { profile } = await Profile.findOrCreateByUniqueProfileProperties({
        email: ["test-person@example.com"],
      });
      await profile.import();
      await profile.updateGroupMembership();
      const snapshot = await profile.snapshot();
      console.log(JSON.stringify(snapshot, null, 2));
    });
  });
});

import { api } from "actionhero";
import path from "path";
import { GrouparooPlugin } from "../../../src";
import { helper, relaxedSnapshot } from "@grouparoo/spec-helper";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";

describe("modules/codeConfig", () => {
  helper.grouparooTestServer({ enableTestPlugin: true, truncate: true });

  describe("with code config", () => {
    beforeAll(async () => {
      // manually run the initializer again after the server has started.
      // the test test-app plugin has been loaded
      api.codeConfig.allowLockedModelChanges = true;
      await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );

      // mock the test-plugin to return static results
      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );
      const testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );
      testPluginConnection.methods.profileProperty = async ({ property }) => {
        const data = {
          userId: [100],
          isVIP: [true],
          email: [`example@example.com`],
          firstName: ["Mario"],
          lastName: ["Mario"],
          ltv: [100.0],
          lastLoginAt: [new Date(0)],
          purchases: ["hat", "mushroom"],
          purchaseAmounts: [100, 200],
        };

        return data[property.key];
      };
    });

    test("a profile snapshot can be tested", async () => {
      const { profile, snapshot } = await helper.getProfile({
        email: ["test-person@example.com"],
      });

      // You can do snapshot testing
      expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));

      // Or you can test the properties of the snapshot directly
      expect(snapshot.properties.userId.values).toEqual([100]);
      expect(snapshot.groups.length).toBe(1);
      expect(snapshot.groups[0].name).toBe("People with Email Addresses");
      expect(profile.state).toBe("ready");
    });
  });
});

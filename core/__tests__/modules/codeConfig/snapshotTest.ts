import { helper, relaxedSnapshot } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import path from "path";
import { GrouparooPlugin } from "../../../src";
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
      testPluginConnection.methods.recordProperty = async ({ property }) => {
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

        type dataType = keyof typeof data;
        return data[property.key as dataType];
      };
    });

    test("getRecord will throw an error when not using a bootstrapped property", async () => {
      await expect(
        helper.getRecord({
          email: "example@example.com",
        })
      ).rejects.toThrow(
        /The arguments provided must contain key\/value pairs for one of the following: userId/
      );
    });

    test("a record snapshot can be tested with a bootstrapped property", async () => {
      const { record, snapshot } = await helper.getRecord({
        userId: 100,
      });

      // You can do snapshot testing
      expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));

      // Or you can test the properties of the snapshot directly
      expect(snapshot.properties.email.values).toEqual(["example@example.com"]);
      expect(snapshot.properties.userId.values).toEqual([100]);
      expect(snapshot.groups.length).toBe(1);
      expect(snapshot.groups[0].name).toBe("People with Email Addresses");
      expect(record.state).toBe("ready");
    });

    test("a record snapshot can be tested with multiple unique properties", async () => {
      const { record, snapshot } = await helper.getRecord({
        email: "example@example.com",
        userId: 100,
      });

      // You can do snapshot testing
      expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));

      // Or you can test the properties of the snapshot directly
      expect(snapshot.properties.email.values).toEqual(["example@example.com"]);
      expect(snapshot.properties.userId.values).toEqual([100]);
      expect(snapshot.groups.length).toBe(1);
      expect(snapshot.groups[0].name).toBe("People with Email Addresses");
      expect(record.state).toBe("ready");
    });
  });
});

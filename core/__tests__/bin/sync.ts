import { helper, relaxedSnapshot } from "@grouparoo/spec-helper";
import { SyncCLI } from "../../src/bin/sync";
import { api } from "actionhero";
import { GrouparooPlugin, Profile } from "../../src";

describe("bin/sync", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let messages = [];
  let spies = [];
  let profile: Profile;

  beforeAll(async () => {
    // we need to ensure that we have static results for the import to snapshot
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
        email: [`mario@example.com`],
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

  beforeAll(async () => (profile = await helper.factories.profile()));

  beforeEach(() => {
    messages = [];
    spies.push(
      jest
        .spyOn(console, "log")
        .mockImplementation((message) => messages.push(message))
    );
    spies.push(
      jest
        .spyOn(console, "error")
        .mockImplementation((message) => messages.push(message))
    );
  });

  afterEach(() => {
    spies.map((s) => s.mockRestore());
  });

  describe("with instance", () => {
    let instance: SyncCLI;
    beforeAll(() => {
      instance = new SyncCLI();
    });

    test("it will fail without a profile property", async () => {
      await instance.run({ params: {} });
      const output = messages.join(" ");
      expect(output).toContain("No Profile Property provided");
    });

    test("it can sync by profile guid", async () => {
      await instance.run({ params: { profileProperty: profile.guid } });
      const output = messages.join(" ");
      expect(output).toContain(`* guid: ${profile.guid}`);
      expect(output).toContain(`* email: mario@example.com`);
    });

    test("it can sync by profile property", async () => {
      await instance.run({ params: { profileProperty: "mario@example.com" } });
      const output = messages.join(" ");
      expect(output).toContain(`* guid: ${profile.guid}`);
      expect(output).toContain(`* email: mario@example.com`);
    });

    test("it can sync by profile property and property", async () => {
      await instance.run({
        params: { profileProperty: "mario@example.com", property: "email" },
      });
      const output = messages.join(" ");
      expect(output).toContain(`* guid: ${profile.guid}`);
      expect(output).toContain(`* email: mario@example.com`);
    });

    test("it will fail with if it cannot provide the explicit property", async () => {
      await instance.run({
        params: { profileProperty: "mario@example.com", property: "foo" },
      });
      const output = messages.join(" ");
      expect(output).toContain(
        'Cannot find Profile where Profile Property "foo"="mario@example.com"'
      );
    });

    test("it can return JSON", async () => {
      process.env.GROUPAROO_LOG_LEVEL = "alert"; // disable other log messages

      await instance.run({
        params: { profileProperty: "mario@example.com", json: true },
      });
      const output = messages.join("");

      const json = JSON.parse(output);

      expect(json).toMatchSnapshot(relaxedSnapshot(json)); // snapshot test
      expect(json.properties.userId.values).toEqual([100]); // direct expectation
    });
  });
});

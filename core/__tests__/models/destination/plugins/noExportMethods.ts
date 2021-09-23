import { helper } from "@grouparoo/spec-helper";
import { plugin, App, Destination } from "../../../../src";

describe("models/destination", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  describe("with a connection that cannot export", () => {
    let app: App;

    beforeAll(async () => {
      plugin.registerPlugin(
        {
          name: "test-import-only-plugin",
          apps: [
            {
              name: "test-template-app",
              options: [],
              methods: {
                test: async () => {
                  return { success: true };
                },
              },
            },
          ],
          connections: [
            {
              name: "import-from-test-template-app",
              description: "a test app connection",
              app: "test-template-app",
              direction: "export",
              syncModes: ["sync", "additive", "enrich"],
              options: [],
              methods: {},
            },
          ],
        },
        false // skip validation as we need an invalid plugin here
      );

      app = await App.create({
        name: "test app with temp methods",
        type: "test-template-app",
      });
      await app.update({ state: "ready" });
    });

    afterAll(async () => {
      await app.destroy();
    });

    test("you are prevented from making a destination against an app with no export methods", async () => {
      await expect(
        Destination.create({
          name: "test plugin destination app missing methods",
          type: "import-from-test-template-app",
          appId: app.id,
          modelId: "mod_profiles",
        })
      ).rejects.toThrow(
        /cannot be created as there are no record export methods/
      );
    });
  });
});

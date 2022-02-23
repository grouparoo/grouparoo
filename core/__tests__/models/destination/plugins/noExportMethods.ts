import { helper } from "@grouparoo/spec-helper";
import { plugin, App, Destination, GrouparooModel } from "../../../../src";

describe("models/destination", () => {
  let model: GrouparooModel;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
  });

  describe("with a connection that cannot export", () => {
    let app: App;

    beforeAll(async () => {
      plugin.registerPlugin(
        {
          name: "test-import-only-plugin",
          apps: [
            {
              name: "test-template-app",
              displayName: "test-template-app",
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
              displayName: "import-from-test-template-app",
              description: "a test app connection",
              apps: ["test-template-app"],
              direction: "export",
              syncModes: ["sync", "upsert", "update"],
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
          modelId: model.id,
        })
      ).rejects.toThrow(
        /cannot be created as there are no record export methods/
      );
    });
  });
});

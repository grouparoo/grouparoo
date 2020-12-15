import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../../../src/modules/plugin";
import { App } from "../../../../src/models/App";
import { Destination } from "../../../../src/models/Destination";
let actionhero;

describe("models/destination", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.properties();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
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
          appGuid: app.guid,
        })
      ).rejects.toThrow(
        /cannot be created as there are no profile export methods/
      );
    });
  });
});

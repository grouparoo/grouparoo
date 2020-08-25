import { helper } from "../../../utils/specHelper";
import { plugin } from "../../../../src/modules/plugin";
import { App } from "../../../../src/models/App";
import { Destination } from "../../../../src/models/Destination";
import { Profile } from "../../../../src/models/Profile";
import { Group } from "../../../../src/models/Group";
import { api, specHelper } from "actionhero";
let actionhero;

describe("models/destination", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("with custom plugin with destinationMappingOptions", () => {
    let app: App;
    let destination: Destination;
    let known = [];
    let required = [];
    let newProfileProperties = {};
    let oldProfileProperties = {};

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-export-plugin-with-destinationMapping",
        apps: [
          {
            name: "test-destinationMapping-app",
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
            name: "destinationMapping-test-connection",
            description: "a test app connection",
            app: "test-destinationMapping-app",
            direction: "export",
            options: [],
            methods: {
              destinationMappingOptions: async () => {
                return {
                  labels: {
                    group: {
                      singular: "list",
                      plural: "lists",
                    },
                    profilePropertyRule: {
                      singular: "var",
                      plural: "vars",
                    },
                  },
                  profilePropertyRules: {
                    required,
                    known,
                    allowOptionalFromProfilePropertyRules: true,
                  },
                };
              },
              exportArrayProperties: async () => [],
              exportProfile: async (args) => {
                oldProfileProperties = args.export.oldProfileProperties;
                newProfileProperties = args.export.newProfileProperties;
                return { success: true };
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test with destinationMapping",
        type: "test-destinationMapping-app",
      });
      await app.update({ state: "ready" });
    });

    beforeEach(async () => {
      destination = await Destination.create({
        name: "test plugin destination",
        type: "destinationMapping-test-connection",
        appGuid: app.guid,
      });
      await destination.update({ state: "ready" });
      await api.resque.queue.connection.redis.flushdb();
    });

    afterEach(async () => {
      await destination.destroy();
    });

    test("mappings can be of the same type", async () => {
      required = [{ key: "remote-id", type: "integer" }];
      await destination.setMapping({ "remote-id": "userId" });
    });

    test("mappings can be set for a different type if the grouparoo type is included", async () => {
      required = [{ key: "remote-id", type: "number" }];
      // int -> number OK
      await destination.setMapping({ "remote-id": "userId" });

      required = [{ key: "remote-id", type: "string" }];
      // int -> string OK
      await destination.setMapping({ "remote-id": "userId" });
    });

    test("if not all required mappings are provided an error is thrown", async () => {
      required = [
        { key: "remote-id", type: "integer" },
        { key: "email", type: "email" },
      ];

      await expect(
        destination.setMapping({ "remote-id": "userId" })
      ).rejects.toThrow(/email is a required destination mapping option/);
    });

    describe("with tracked group", () => {
      let mario: Profile;
      let group: Group;

      beforeAll(async () => {
        mario = await helper.factories.profile();
        await mario.addOrUpdateProperties({
          email: ["mario@example.com"],
          userId: [1],
          firstName: ["mario"],
          lastName: ["luigi"],
        });

        group = await helper.factories.group();
        await group.addProfile(mario);
      });

      afterAll(async () => {
        await group.removeProfile(mario);
        await group.destroy();
        await mario.destroy();
      });

      beforeEach(async () => {
        await destination.trackGroup(group);
      });

      afterEach(async () => {
        await destination.unTrackGroups();
      });

      test("profile properties will be converted to the type requested by the plugin", async () => {
        // int -> number OK
        required = [{ key: "remote-id", type: "number" }];
        await destination.setMapping({ "remote-id": "userId", email: "email" });
        await mario.export();
        expect(newProfileProperties).toEqual({
          "remote-id": 1,
          email: "mario@example.com",
        });

        // int -> string OK
        required = [{ key: "remote-id", type: "string" }];
        await destination.setMapping({ "remote-id": "userId", email: "email" });
        await mario.export();
        expect(newProfileProperties).toEqual({
          "remote-id": "1",
          email: "mario@example.com",
        });
      });
    });
  });
});

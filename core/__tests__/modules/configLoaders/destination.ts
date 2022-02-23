import { helper } from "@grouparoo/spec-helper";
import {
  DestinationConfigSyncMode,
  DestinationConfigurationObject,
} from "../../../src/classes/codeConfig";
import {
  Destination,
  DestinationSyncMode,
} from "../../../src/models/Destination";
import { loadDestination } from "../../../src/modules/configLoaders/destination";
import { ConfigWriter } from "../../../src/modules/configWriter";

describe("modules/configLoaders/destination", () => {
  const mockedConfigWriterGetLockKey = jest.fn().mockReturnValue(null);

  const appId = "test-app-id";

  const destinationConfig: DestinationConfigurationObject = {
    class: "Destination",
    id: "test_destination",
    name: "A test destination",
    type: "test-plugin-export",
    appId,
    syncMode: "sync",
    collection: "none",
    modelId: "",
    groupId: undefined,
    options: { table: "out table" },
    mapping: {},
    destinationGroupMemberships: {},
  };

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  beforeAll(async () => {
    ConfigWriter.getLockKey = mockedConfigWriterGetLockKey;
    await helper.factories.app({ id: appId });
    const { model } = await helper.factories.properties();
    destinationConfig.modelId = model.id;
  });

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    const destination = await Destination.scope(null).findOne({
      where: { id: destinationConfig.id },
    });
    if (destination) {
      await destination.destroy();
    }
  });

  describe("loadDestination", () => {
    test("loads all the destination values from config", async () => {
      const {
        destination: [destinationId],
      } = await loadDestination(destinationConfig, false, false);

      const destination = await Destination.scope(null).findOne({
        where: { id: destinationId },
      });

      const configObject = await destination.getConfigObject();
      expect(configObject).toEqual(destinationConfig);
    });

    const syncModeCases = [
      { legacySyncMode: "enrich", syncMode: "update" },
      { legacySyncMode: "additive", syncMode: "upsert" },
    ] as {
      legacySyncMode: DestinationConfigSyncMode;
      syncMode: DestinationSyncMode;
    }[];

    test.each(syncModeCases)(
      `converts legacy syncMode "$legacySyncMode" to "$syncMode"`,
      async ({ legacySyncMode, syncMode }) => {
        const configToLoad = {
          ...destinationConfig,
          syncMode: legacySyncMode,
        };

        const expectedConfig = {
          ...configToLoad,
          syncMode,
        };

        const {
          destination: [destinationId],
        } = await loadDestination(configToLoad, false, false);

        const destination = await Destination.scope(null).findOne({
          where: { id: destinationId },
        });

        const configObject = await destination.getConfigObject();
        expect(configObject).toEqual(expectedConfig);
      }
    );
  });
});

import { helper } from "@grouparoo/spec-helper";
import { ScheduleConfigurationObject } from "../../../src/classes/codeConfig";
import { Schedule } from "../../../src/models/Schedule";
import { loadSchedule } from "../../../src/modules/configLoaders/schedule";
import { ConfigWriter } from "../../../src/modules/configWriter";

describe("modules/configLoaders/schedule", () => {
  const mockedConfigWriterGetLockKey = jest.fn().mockReturnValue(null);

  const scheduleConfig: ScheduleConfigurationObject = {
    class: "Schedule",
    id: "test_schedule",
    name: "A test Schedule",
    incremental: false,
    sourceId: "",
    recurring: true,
    recurringFrequency: 12345678,
    confirmRecords: true,
    options: {
      maxColumn: "updated_at",
    },
    filters: [],
    refreshEnabled: false,
  };

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  beforeAll(async () => {
    ConfigWriter.getLockKey = mockedConfigWriterGetLockKey;
    const { source } = await helper.factories.properties();
    scheduleConfig.sourceId = source.id;
  });

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    const schedule = await Schedule.scope(null).findOne({
      where: { id: scheduleConfig.id },
    });
    if (schedule) {
      await schedule.destroy();
    }
  });

  describe("loadSchedule", () => {
    it("loads all schedule values from config", async () => {
      const {
        schedule: [scheduleId],
      } = await loadSchedule(scheduleConfig, false, false);

      const schedule = await Schedule.scope(null).findOne({
        where: { id: scheduleId },
      });

      const configObject = await schedule.getConfigObject();
      const expectedSchedule = {
        ...scheduleConfig,
        sourceId: schedule.source.getConfigId(),
      };
      expect(configObject).toEqual(expectedSchedule);
    });

    it("loads all schedule default values from partial config", async () => {
      const partialScheduleConfig: ScheduleConfigurationObject = {
        id: scheduleConfig.id,
        name: scheduleConfig.name,
        sourceId: scheduleConfig.sourceId,
        options: scheduleConfig.options,
      };
      const {
        schedule: [scheduleId],
      } = await loadSchedule(partialScheduleConfig, false, false);

      const schedule = await Schedule.scope(null).findOne({
        where: { id: scheduleId },
      });

      const configObject = await schedule.getConfigObject();
      const expectedConfig: ScheduleConfigurationObject = {
        ...partialScheduleConfig,
        class: "Schedule",
        filters: [],
        recurring: false,
        incremental: true,
        recurringFrequency: null,
        confirmRecords: false,
        refreshEnabled: true,
        sourceId: schedule.source.getConfigId(),
      };

      expect(configObject).toEqual(expectedConfig);
    });
  });
});

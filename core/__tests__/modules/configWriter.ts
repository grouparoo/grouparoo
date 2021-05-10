import { helper } from "@grouparoo/spec-helper";

import { App } from "../../src/models/App";
import { Source } from "../../src/models/Source";
import { Schedule } from "../../src/models/Schedule";
import { ConfigWriter } from "../../src/modules/configWriter";

describe("modules/configWriter", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("Model Config Providers", () => {
    test("apps can provide their config objects", async () => {
      const app: App = await helper.factories.app();
      const config = await app.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, type } = app;
      const options = await app.getOptions();
      expect(config).toEqual({
        class: "app",
        id,
        name,
        type,
        options,
      });
    });

    test("sources can provide their config objects", async () => {
      const source: Source = await helper.factories.source();
      const config = await source.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, type, appId } = source;
      const options = await source.getOptions();
      const mapping = await source.getMapping();

      expect(config).toEqual({
        class: "source",
        id,
        name,
        type,
        appId,
        mapping,
        options,
      });
    });

    test("schedules can provide their config objects", async () => {
      const source: Source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      const schedule: Schedule = await helper.factories.schedule(source);
      const config = await schedule.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, sourceId, recurring, recurringFrequency } = schedule;
      const options = await schedule.getOptions();

      expect(config).toEqual({
        class: "schedule",
        id,
        name,
        sourceId,
        recurring,
        recurringFrequency,
        options,
      });
    });
  });
});

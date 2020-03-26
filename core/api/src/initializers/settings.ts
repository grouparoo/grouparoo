import { Initializer } from "actionhero";
import { plugin } from "../modules/plugin";

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "settings";
  }

  async start() {
    // The core API configurable settings
    const coreSettings = [
      {
        key: "groups-calculation-delay-minutes",
        defaultValue: 60,
        description:
          "How many minutes should wait before recalculating a calculated group's membership?",
      },
      {
        key: "runs-profile-batch-size",
        defaultValue: 100,
        description:
          "How many profiles or imports should a run enqueue in each batch before deferring to process those imports already enqueued?",
      },
      {
        key: "sweeper-delete-old-logs-days",
        defaultValue: 31,
        description:
          "How many days should we keep log records for on the server?",
      },
      {
        key: "sweeper-delete-old-imports-days",
        defaultValue: 31,
        description:
          "How many days should we keep import records for on the server?",
      },
      {
        key: "sweeper-delete-old-exports-days",
        defaultValue: 31,
        description:
          "How many days should we keep export records for on the server?  We will keep the most recent export for each profile & destination.",
      },
    ];

    for (const i in coreSettings) {
      const { key, defaultValue, description } = coreSettings[i];
      await plugin.registerSetting("core", key, defaultValue, description);
    }
  }
}

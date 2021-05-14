import { Task, api, log } from "actionhero";
import { GrouparooCLI } from "../../modules/cli";
import { CLS } from "../../modules/cls";
import { Status, FinalSummary } from "../../modules/status";
import { StatusMetric } from "../../modules/statusReporters";
import { plugin } from "../../modules/plugin";

export class StatusTask extends Task {
  constructor() {
    super();
    this.name = "status";
    this.description =
      "Calculate and store status.  If we are running via the CLI, log it there too";
    this.frequency = 1000 * 5; // every 5 seconds by default, but will be modified by `updateTaskFrequency` after the first run
    this.queue = "system";
    this.inputs = {
      toStop: { required: false },
    };
  }

  async run({ toStop }: { toStop: boolean }) {
    const runMode = process.env.GROUPAROO_RUN_MODE;
    const finalSummaryData = await this.getFinalSummaryData();

    await this.logFinalSummary(finalSummaryData);

    const samples = await this.getSamples();
    if (runMode === "cli:run") this.logSamples(samples);

    const complete = await this.checkForComplete(samples);
    if (runMode === "cli:run" && complete) {
      const finalSummaryData = await this.getFinalSummaryData();
      await this.logFinalSummary(finalSummaryData);
      await this.stopServer(toStop);
    }

    await this.updateTaskFrequency();
  }

  async logFinalSummary(finalSummaryData: StatusMetric[]) {
    const summary = finalSummaryData
      .filter((item) => item.collection === "Summary")
      .map((item) => {
        return { [item.topic]: [item.count] };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    const sources = finalSummaryData
      .filter((item) => item.collection === "Sources")
      .map((item) => {
        return { [item.topic]: [item.count] };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    const profiles = finalSummaryData
      .filter((item) => item.collection === "Profiles")
      .map((item) => {
        return { [item.topic]: [item.count] };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    const destinations = finalSummaryData
      .filter((item) => item.collection === "destinations")
      .map((item) => {
        return { [item.topic]: [item.count] };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    await GrouparooCLI.logger.finalSummary([
      { header: "SUMMARY", data: summary },
      { header: "SOURCES", data: sources },
      { header: "PROFILES", data: profiles },
      { header: "DESTINATIONS", data: destinations },
    ]);
    return false;
  }

  async getFinalSummaryData() {
    let finalSummaryData: StatusMetric[];
    await CLS.wrap(async () => {
      finalSummaryData = await FinalSummary.getFinalSummary();
    });

    return finalSummaryData;
  }

  async checkForComplete(samples: StatusMetric[]) {
    let pendingItems = 0;
    for (const sample of samples) {
      if (sample.collection === "pending") pendingItems += sample.count;
    }

    return pendingItems > 0 ? false : true;
  }

  async stopServer(toStop = true) {
    log("All Tasks Complete!", "notice");
    if (!toStop) return false;

    // do not await so the promise can end so the server can shut down
    new Promise(async () => {
      await api.process.stop();

      process.nextTick(() => process.exit(0));
    });
  }

  async getSamples() {
    let samples: StatusMetric[];
    await CLS.wrap(async () => {
      samples = await Status.sample();
    });

    return samples;
  }

  logSamples(samples: StatusMetric[]) {
    if (process.env.NODE_ENV === "test") return;

    const pendingItems = samples
      .filter((s) => s.collection === "pending")
      .map((s) => {
        return { [s.topic]: [s.count] };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    const pendingRuns = samples
      .filter((s) => s.topic === "Run" && s.collection === "percentComplete")
      .map((s) => {
        return {
          [s.value]: [`${s.count}%${s.metadata ? ` (${s.metadata})` : ""}`],
        };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    GrouparooCLI.logger.status("Status", [
      { header: "Pending Items", status: pendingItems },
      { header: "Active Runs", status: pendingRuns },
    ]);
  }

  async updateTaskFrequency() {
    const frequency =
      parseInt(
        (
          await plugin.readSetting(
            "interface",
            "status-calculation-frequency-seconds"
          )
        ).value
      ) * 1000;

    api.tasks.tasks["status"].frequency = frequency;
  }
}

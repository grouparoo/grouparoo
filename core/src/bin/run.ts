import { GrouparooCLI } from "../modules/cli";
import { CLI, Task, log, api, config } from "actionhero";
import { Schedule, Run } from "..";
import { CLS } from "../modules/cls";

const CHECK_TIMEOUT = 1000 * 10;

export class RunCLI extends CLI {
  constructor() {
    super();
    this.name = "run";
    this.description =
      "Run all Schedules, Runs, Imports and Exports pending in this cluster.  Use GROUPAROO_LOG_LEVEL env to set log level.";
    this.inputs = {
      destroy: {
        required: true,
        default: "false",
        description:
          "[DANGER] Empty the cluster of all Profile data before starting the run?",
      },
      "reset-high-watermarks": {
        required: true,
        default: "false",
        description: "Should we run all Schedules from the beginning?",
      },
      "run-all-schedules": {
        required: true,
        default: "false",
        description:
          "Should we run all Schedules, event those that do not have a recurring time set?",
      },
      web: {
        required: true,
        default: "false",
        description: "Enable the web server during this run?",
      },
    };

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run() {
    GrouparooCLI.logCLI(this.name, false);
    this.checkWorkers();

    if (!process.argv.slice(2).includes("--web")) {
      GrouparooCLI.disableWebServer();
    }

    if (process.argv.slice(2).includes("--destroy")) {
      await GrouparooCLI.destroyProfiles();
    }

    if (process.argv.slice(2).includes("--reset-high-watermarks")) {
      await GrouparooCLI.resetHighWatermarks();
    }

    await import("../grouparoo"); // run the server

    const pendingStatus = await GrouparooCLI.getPendingStatus();
    const runStatus = await GrouparooCLI.getRunsStatus();
    GrouparooCLI.logStatus("Initial Status", [
      { header: "Pending Items", status: pendingStatus },
      { header: "Active Runs", status: runStatus },
    ]);

    await this.waitForReady();
    await this.runPausedTasks();

    if (process.argv.slice(2).includes("--run-non-recurring-schedules")) {
      await this.runNonRecurringSchedules();
    }

    this.tick();

    return false;
  }

  checkWorkers() {
    if (!config.tasks.scheduler)
      throw new Error(`The Task Scheduler is not enabled`);
    if (config.tasks.minTaskProcessors < 1)
      throw new Error(`No Task Workers are enabled`);
  }

  async waitForReady() {
    return new Promise(async (resolve) => {
      async function check() {
        if (api.process.started) return resolve(null);
        setTimeout(() => check(), CHECK_TIMEOUT / 2);
      }

      await check();
    });
  }

  async runPausedTasks() {
    let checkDeltas = true;
    if (process.argv.slice(2).includes("--reset-high-watermarks")) {
      checkDeltas = false;
    }

    const tasks = {
      "schedule:updateSchedules": {},
      "run:recurringInternalRun": {},
      "group:updateCalculatedGroups": {},
    };

    for (const name in tasks) {
      const args = tasks[name];
      const task: Task = api.tasks.tasks[name];
      log(`Running task: ${task.name}`);
      await task.run(args, { checkDeltas });
    }
  }

  async runNonRecurringSchedules() {
    const schedules = await Schedule.findAll({ where: { recurring: false } });
    for (const i in schedules) {
      const run = await Run.create({
        creatorGuid: schedules[i].guid,
        creatorType: "schedule",
        state: "running",
      });

      await CLS.enqueueTask("schedule:run", {
        scheduleGuid: schedules[i].guid,
        runGuid: run.guid,
      });
    }
  }

  async tick() {
    setTimeout(async () => {
      const done = await this.checkForComplete();
      if (done) {
        await this.stopServer();
      } else {
        this.tick();
      }
    }, CHECK_TIMEOUT);
  }

  async checkForComplete() {
    const pendingStatus = await GrouparooCLI.getPendingStatus();
    const runStatus = await GrouparooCLI.getRunsStatus();
    GrouparooCLI.logStatus("Status", [
      { header: "Pending Items", status: pendingStatus },
      { header: "Active Runs", status: runStatus },
    ]);

    let pendingItems = 0;
    for (const key in pendingStatus) {
      pendingItems += pendingStatus[key][0] as number;
    }

    if (pendingItems > 0) return false;
    return true;
  }

  async stopServer() {
    api.log("All Tasks Complete!", "notice");
    await api.process.stop();
    log(`All Grouparoo tasks complete - exiting with code 0`, "notice");
    process.exit(0);
  }
}

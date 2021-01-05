import { GrouparooCLI } from "../modules/cli";
import { CLI, Task, log, api, config } from "actionhero";

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
      web: {
        required: true,
        default: "false",
        description: "Enable the web server during this run?",
      },
    };

    if (!process.argv.slice(2).includes("--web")) {
      process.env.WEB_SERVER = "false";
    }

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run() {
    GrouparooCLI.logCLI(this, false);
    this.checkWorkers();

    if (process.argv.slice(2).includes("--destroy")) {
      await GrouparooCLI.destroyProfiles();
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
        if (api.process.running) return resolve(null);
        setTimeout(() => check(), CHECK_TIMEOUT);
      }

      await check();
    });
  }

  async runPausedTasks() {
    const tasks = [
      "schedule:updateSchedules",
      "run:recurringInternalRun",
      "group:updateCalculatedGroups",
    ];

    for (const i in tasks) {
      const task: Task = api.tasks.tasks[tasks[i]];
      log(`Running task: ${task.name}`);
      await task.run({}, {});
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
    GrouparooCLI.logStatus("Initial Status", [
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

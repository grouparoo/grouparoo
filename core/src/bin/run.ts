import { GrouparooCLI } from "../modules/cli";
import { CLI, Task, api, log } from "actionhero";
import { Op } from "sequelize";

import { Run, Profile, Import, Export } from "..";

const CHECK_TIMEOUT = 1000 * 5;

export class RunCLI extends CLI {
  constructor() {
    super();
    this.name = "run";
    this.description =
      "Run all Schedules, Runs, Imports and Exports pending in this cluster.";

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run() {
    GrouparooCLI.logCLI(this, false);

    await import("../grouparoo"); // run the server
    await this.waitForReady();
    await this.runPausedTasks();

    this.tick();

    return false;
  }

  async waitForReady() {
    return new Promise((resolve) => {
      function check() {
        if (api.process.running) return resolve(null);
        setTimeout(() => check(), CHECK_TIMEOUT);
      }

      check();
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
    const pendingProfiles = await Profile.count({
      where: { [Op.ne]: "ready" },
    });
    const pendingImports = await Import.count({
      where: { exportedAt: null },
    });
    const pendingExports = await Export.count({
      where: {
        completedAt: null,
        errorMessage: null,
      },
    });
    const pendingRuns = await Run.count({ where: { state: "running" } });

    console.log("---");
    console.log({
      pendingProfiles,
      pendingImports,
      pendingExports,
      pendingRuns,
    });
    console.log("---");

    const pendingItems =
      pendingProfiles + pendingImports + pendingExports + pendingRuns;
    if (pendingItems > 0) return false;

    return true;
  }

  async stopServer() {
    log("All good!", "notice");
    await api.process.stop();
    process.exit(0);
  }
}

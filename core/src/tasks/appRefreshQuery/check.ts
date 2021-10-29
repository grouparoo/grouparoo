import { CLSTask } from "../../classes/tasks/clsTask";
import { App } from "../../models/App";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { AppRefreshQueryOps } from "../../modules/ops/appRefreshQuery";

export class AppRefreshQueryCheck extends CLSTask {
  constructor() {
    super();
    this.name = "appRefreshQuery:check";
    this.description = "check all appRefreshQueries and run them if it is time";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 5; // Run every 5 minutes
    this.queue = "appRefreshQueries";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const appRefreshQueries = await AppRefreshQuery.findAll();

    for (const appRefreshQuery of appRefreshQueries) {
      const app = await App.findOne({
        where: { id: appRefreshQuery.appId, state: "ready" },
      });

      if (app) {
        const isUpdated = await AppRefreshQueryOps.checkRefreshQueryValue(
          appRefreshQuery
        );
        if (isUpdated)
          await AppRefreshQueryOps.triggerSchedules(appRefreshQuery);
      }
    }
  }
}

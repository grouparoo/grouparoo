import { CLSTask } from "../../classes/tasks/clsTask";
import { App, AppRefreshQuery } from "../..";
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

  async runWithinTransaction(params) {
    0;
    const appRefreshQueries = await AppRefreshQuery.findAll();
    for (const appRefreshQuery of appRefreshQueries) {
      const app = await App.findOne({
        where: { id: appRefreshQuery.appId, state: "ready" },
      });
      if (app) {
        const isUpdated =
          AppRefreshQueryOps.checkRefreshQueryValue(appRefreshQuery);
        if (isUpdated) AppRefreshQueryOps.triggerSchedules(appRefreshQuery);
      }
    }
  }
}

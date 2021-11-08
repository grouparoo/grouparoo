import { CLSTask } from "../../classes/tasks/clsTask";
import { App } from "../../models/App";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { CLS } from "../../modules/cls";

export class AppRefreshQueriesCheck extends CLSTask {
  constructor() {
    super();
    this.name = "appRefreshQueries:check";
    this.description = "check all appRefreshQueries and run them if it is time";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 5; // Run every 5 minutes
    this.queue = "apps";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const appRefreshQueries = await AppRefreshQuery.findAll();

    for (const appRefreshQuery of appRefreshQueries) {
      const app = await App.findOne({
        where: { id: appRefreshQuery.appId, state: "ready" },
      });

      if (app) {
        await CLS.enqueueTask("appRefreshQuery:query", {
          appRefreshQueryId: appRefreshQuery.id,
        });
      }
    }
  }
}

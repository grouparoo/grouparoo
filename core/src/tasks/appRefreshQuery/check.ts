import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { App } from "../../models/App";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { CLS } from "../../modules/cls";

export class AppRefreshQueriesCheck extends CLSTask {
  name = "appRefreshQueries:check";
  description = "check all appRefreshQueries and run them";
  frequency = config.general.runMode === "cli:run" ? 0 : 1000 * 60; // Run every minute
  queue = "apps";
  inputs = {};

  async runWithinTransaction() {
    const appRefreshQueries = await AppRefreshQuery.findAll();

    for (const appRefreshQuery of appRefreshQueries) {
      const shouldRun = await appRefreshQuery.shouldRun();

      if (shouldRun) {
        const app = await App.findOne({
          where: { id: appRefreshQuery.appId, state: "ready" },
        });

        if (app) {
          await CLS.enqueueTask("appRefreshQuery:run", {
            appRefreshQueryId: appRefreshQuery.id,
          });
        }
      }
    }
  }
}

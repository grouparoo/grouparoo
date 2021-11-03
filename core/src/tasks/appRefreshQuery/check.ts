import { CLSTask } from "../../classes/tasks/clsTask";
import { App } from "../../models/App";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { AppRefreshQueryOps } from "../../modules/ops/appRefreshQuery";

export class AppRefreshQueryCheck extends CLSTask {
  constructor() {
    super();
    this.name = "appRefreshQuery:check";
    this.description =
      "run a single appRefreshQuery and update values/trigger schedules if needed";
    this.frequency = 0;
    this.queue = "apps";
    this.inputs = { appRefreshQuery: { required: true } };
  }

  async runWithinTransaction(params) {
    const { appRefreshQuery } = params;
    //check the query value, update 'confirmedAt'
    const sampleValue = await AppRefreshQueryOps.runAppQuery(appRefreshQuery);
    await appRefreshQuery.update({ lastConfirmedAt: new Date() });

    if (sampleValue !== appRefreshQuery.value) {
      // Update changedAt and set value
      await appRefreshQuery.update({
        value: sampleValue,
        lastChangedAt: new Date(),
      });

      //enqueue schedules
      await AppRefreshQueryOps.triggerSchedules(appRefreshQuery);
    }
  }
}

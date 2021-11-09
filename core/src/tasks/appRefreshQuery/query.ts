import { CLSTask } from "../../classes/tasks/clsTask";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { AppRefreshQueryOps } from "../../modules/ops/appRefreshQuery";

export class AppRefreshQueryQuery extends CLSTask {
  constructor() {
    super();
    this.name = "appRefreshQuery:query";
    this.description =
      "run a single appRefreshQuery and update values/trigger schedules if needed";
    this.frequency = 0;
    this.queue = "apps";
    this.inputs = { appRefreshQueryId: { required: true } };
  }

  async runWithinTransaction({
    appRefreshQueryId,
  }: {
    appRefreshQueryId: string;
  }) {
    const appRefreshQuery = await AppRefreshQuery.findOne({
      where: { id: appRefreshQueryId },
    });

    if (!appRefreshQuery)
      throw new Error(`No app refresh query ${appRefreshQueryId} found.`);

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

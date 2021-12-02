import { CLSTask } from "../../classes/tasks/clsTask";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";

export class AppRefreshQueryRun extends CLSTask {
  constructor() {
    super();
    this.name = "appRefreshQuery:run";
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

    if (!appRefreshQuery) return;

    //check the query value, update 'confirmedAt'
    const sampleValue = await appRefreshQuery.query();

    if (sampleValue !== appRefreshQuery.value) {
      //trigger enqueues for all related schedules
      await appRefreshQuery.triggerSchedules();

      // Update changedAt and set value
      await appRefreshQuery.update({
        value: sampleValue,
        lastChangedAt: new Date(),
        lastConfirmedAt: new Date(),
      });
    } else {
      await appRefreshQuery.update({ lastConfirmedAt: new Date() });
    }
  }
}

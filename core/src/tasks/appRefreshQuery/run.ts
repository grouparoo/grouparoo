import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";

export class AppRefreshQueryRun extends CLSTask {
  name = "appRefreshQuery:run";
  description =
    "run a single appRefreshQuery and update values/trigger schedules if needed";
  frequency = 0;
  queue = "apps";
  inputs = { appRefreshQueryId: { required: true } };

  async runWithinTransaction({
    appRefreshQueryId,
  }: ParamsFrom<AppRefreshQueryRun>) {
    const appRefreshQuery = await AppRefreshQuery.findOne({
      where: { id: appRefreshQueryId },
    });

    if (!appRefreshQuery) return;

    const sampleValue = await appRefreshQuery.query();

    if (sampleValue !== appRefreshQuery.value) {
      await appRefreshQuery.triggerSchedules();

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

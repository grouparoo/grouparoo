import { Source } from "../../models/Source";
import { AppDataRefresh } from "../../models/AppDataRefresh";
import { Schedule } from "../../models/Schedule";

//to do: what belongs here versus as a task versus in app-templates (see stories in tracker)

export namespace AppDataRefreshOps {
  export async function checkDataRefreshValue(appDataRefresh: AppDataRefresh) {
    const { refreshQuery, value } = appDataRefresh;
    //connect to the app
    const app = await appDataRefresh.$get("app");
    const connection = await app.getConnection();

    //query and compare
    const sampleValue = connection.query(refreshQuery);

    if (sampleValue !== value) {
      appDataRefresh.value = sampleValue;
      appDataRefresh.lastChangedAt = new Date();
    }
    appDataRefresh.lastConfirmedAt = new Date();
    await appDataRefresh.save();

    //return true, schedules will be enqueued
    return true;
  }

  export async function triggerSchedules(appDataRefresh: AppDataRefresh) {
    const appId: string = appDataRefresh.appId;
    const sources: Source[] = await Source.findAll({ where: { appId: appId } });
    const schedulesToRun: Schedule[] = [];

    for (const source of sources) {
      schedulesToRun.push(
        ...(await Schedule.findAll({
          where: { sourceId: source.id },
        }))
      );
    }

    schedulesToRun.forEach((schedule) => {
      schedule.enqueueRun();
    });
  }
}

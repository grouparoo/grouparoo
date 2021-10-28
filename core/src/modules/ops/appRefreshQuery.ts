import { Source } from "../../models/Source";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";

export namespace AppRefreshQueryOps {
  export async function checkDataRefreshValue(
    appRefreshQuery: AppRefreshQuery
  ) {
    const app = await appRefreshQuery.$get("app");
    const options = await app.getOptions();
    const { pluginApp } = await app.getPlugin();
    const connection = await app.getConnection();

    if (typeof pluginApp.methods.appQuery !== "function") {
      throw new Error(
        `app ${app.name} (${app.id}) of type ${app.type} cannot use app data refresh`
      );
    }

    const responseRows = await pluginApp.methods.appQuery({
      app,
      appId: app.id,
      appOptions: options,
      connection,
      refreshQuery: appRefreshQuery.refreshQuery,
    });
    const sampleValue = JSON.stringify(
      Array.isArray(responseRows) ? responseRows[0] : responseRows
    );
    const originalValue = appRefreshQuery.value;
    if (sampleValue !== originalValue) {
      appRefreshQuery.value = sampleValue;
      appRefreshQuery.lastChangedAt = new Date();
    }
    appRefreshQuery.lastConfirmedAt = new Date();
    await appRefreshQuery.save();

    return sampleValue !== originalValue;
  }

  export async function triggerSchedules(appRefreshQuery: AppRefreshQuery) {
    const sources: Source[] = await Source.findAll({
      where: { appId: appRefreshQuery.appId },
    });
    const schedulesToRun: Schedule[] = [];

    for (const source of sources) {
      schedulesToRun.push(
        ...(await Schedule.findAll({
          where: { sourceId: source.id, refreshEnabled: true, state: "ready" },
        }))
      );
    }

    for (const schedule of schedulesToRun) {
      //stop any existing run on this schedule
      const existingRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      for (const run of existingRuns) {
        await run.stop();
      }

      //begin a new run on this schedule
      await schedule.enqueueRun();
    }
  }
}

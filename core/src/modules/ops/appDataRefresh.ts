import { Source } from "../../models/Source";
import { AppDataRefresh } from "../../models/AppDataRefresh";
import { Schedule } from "../../models/Schedule";

export namespace AppDataRefreshOps {
  export async function checkDataRefreshValue(appDataRefresh: AppDataRefresh) {
    const app = await appDataRefresh.$get("app");
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
      refreshQuery: appDataRefresh.refreshQuery,
    });
    const sampleValue = JSON.stringify(
      Array.isArray(responseRows) ? responseRows[0] : responseRows
    );
    const originalValue = appDataRefresh.value;

    if (sampleValue !== originalValue) {
      appDataRefresh.value = sampleValue;
      appDataRefresh.lastChangedAt = new Date();
    }
    appDataRefresh.lastConfirmedAt = new Date();
    await appDataRefresh.save();

    return sampleValue !== originalValue;
  }

  export async function triggerSchedules(appDataRefresh: AppDataRefresh) {
    const sources: Source[] = await Source.findAll({
      where: { appId: appDataRefresh.appId },
    });
    const schedulesToRun: Schedule[] = [];

    for (const source of sources) {
      schedulesToRun.push(
        ...(await Schedule.findAll({
          where: { sourceId: source.id, refreshEnabled: true },
        }))
      );
    }

    console.info(schedulesToRun);
    schedulesToRun.forEach((schedule) => {
      schedule.enqueueRun();
    });
  }
}

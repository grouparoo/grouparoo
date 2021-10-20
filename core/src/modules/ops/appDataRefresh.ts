import { Source } from "../../models/Source";
import { AppDataRefresh } from "../../models/AppDataRefresh";
import { Schedule } from "../../models/Schedule";

export namespace AppDataRefreshOps {
  export async function checkDataRefreshValue(appDataRefresh: AppDataRefresh) {
    const { refreshQuery, value } = appDataRefresh;
    const app = await appDataRefresh.$get("app");
    const options = await app.getOptions();
    const { pluginApp } = await app.getPlugin();
    const connection = await app.getConnection();

    //query and compare
    // TODO: `connection` here is an instance of the plugins "raw" connection, like a Hubspot API client or the mongo driver.
    // You'll need to make a method on the plugin like `query(): AppQueryMethod` that you call here and pass in the app, appOptions, etc that each plugin has implemented.

    if (typeof pluginApp.methods.query !== "function") {
      throw new Error(
        `app ${app.name} (${app.id}) of type ${app.type} cannot use app data refresh`
      );
    }

    const responseRows = await pluginApp.methods.query({
      app,
      appId: app.id,
      appOptions: options,
      connection,
      refreshQuery: appDataRefresh.refreshQuery,
    });

    const sampleValue = JSON.stringify(
      Array.isArray(responseRows) ? responseRows[0] : {}
    );
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
    const sources: Source[] = await Source.findAll({
      where: { appId: appDataRefresh.appId },
    });
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

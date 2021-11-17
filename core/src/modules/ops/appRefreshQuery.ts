import { Source } from "../../models/Source";
import { AppRefreshQuery } from "../../models/AppRefreshQuery";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";

export namespace AppRefreshQueryOps {
  export async function runAppQuery(
    appRefreshQuery: AppRefreshQuery,
    testQuery?: string
  ) {
    const app = await appRefreshQuery.$get("app");
    const options = await app.getOptions();
    const { pluginApp } = await app.getPlugin();
    const connection = await app.getConnection();

    if (typeof pluginApp.methods.appQuery !== "function") {
      throw new Error(
        `app ${app.name} (${app.id}) of type ${app.type} cannot use app refresh query`
      );
    }

    const responseRows = await pluginApp.methods.appQuery({
      app,
      appId: app.id,
      appOptions: options,
      connection,
      refreshQuery: testQuery || appRefreshQuery.refreshQuery,
    });
    const sampleValue = JSON.stringify(
      Array.isArray(responseRows) ? responseRows[0] : responseRows
    );

    return sampleValue;
  }

  export async function triggerSchedules(
    appRefreshQuery: AppRefreshQuery,
    stopRuns: Boolean
  ) {
    const sources: Source[] = await Source.findAll({
      where: { appId: appRefreshQuery.appId },
    });
    const schedulesToRun: Schedule[] = [];

    for (const source of sources) {
      schedulesToRun.push(
        ...(await Schedule.findAll({
          where: {
            sourceId: source.id,
            refreshEnabled: true,
            state: "ready",
          },
        }))
      );
    }

    for (const schedule of schedulesToRun) {
      if (stopRuns === true) {
        const runningRun = await Run.findOne({
          where: { creatorId: schedule.id, state: "running" },
        });
        if (runningRun) await runningRun.stop;
      }
      await schedule.enqueueRun();
    }
  }

  export async function test(
    appRefreshQuery: AppRefreshQuery,
    testQuery?: string
  ) {
    let success = false;
    let message: string;
    let error;

    try {
      const sampleValue = await AppRefreshQueryOps.runAppQuery(
        appRefreshQuery,
        testQuery
      );
      message = sampleValue;
      success = true;
    } catch (err) {
      error = err.message;
      success = false;
    }
    return {
      success,
      message,
      error,
    };
  }
}

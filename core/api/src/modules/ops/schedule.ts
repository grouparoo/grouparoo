import { Schedule } from "../../models/Schedule";
import { Source } from "../../models/Source";
import { Run, HighWaterMark } from "../../models/Run";
import { App } from "../../models/App";
import { plugin } from "../plugin";
import { log } from "actionhero";

export namespace ScheduleOps {
  export async function run(schedule: Schedule, run: Run) {
    const options = await schedule.getOptions();
    const source = await schedule.$get("source");
    const app = await App.findByGuid(source.appGuid);
    const { pluginConnection } = await source.getPlugin();
    const method = pluginConnection.methods.profiles;

    if (!method) {
      throw new Error(`cannot find an import method for app type ${app.type}`);
    }

    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    await app.validateOptions(appOptions);
    const connection = await app.getConnection();
    await source.validateOptions(sourceOptions);

    const limit: number = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    let highWaterMark = {};
    let sourceOffset: number | string = 0;

    if (run.highWaterMark && Object.keys(run.highWaterMark).length > 0) {
      highWaterMark = run.highWaterMark;
    } else {
      const previousRun = await run.previousRun();
      if (previousRun?.highWaterMark) {
        highWaterMark = previousRun.highWaterMark;
      }
    }

    if (run.sourceOffset) {
      sourceOffset = run.sourceOffset;
    }

    let importsCount = 0;
    let nextHighWaterMark: HighWaterMark;
    let nextSourceOffset: number | string;

    try {
      const response = await method({
        schedule,
        scheduleGuid: schedule.guid,
        scheduleOptions: options,
        connection,
        app,
        appGuid: app.guid,
        appOptions,
        source,
        sourceGuid: source.guid,
        sourceOptions,
        sourceMapping,
        run,
        runGuid: run.guid,
        limit,
        highWaterMark,
        sourceOffset,
      });

      importsCount = response.importsCount || 0;
      nextHighWaterMark = response.highWaterMark || {};
      nextSourceOffset = response.sourceOffset || 0;
      await run.update({
        highWaterMark: nextHighWaterMark,
        sourceOffset: nextSourceOffset,
      });
    } catch (error) {
      log(
        `failed run ${run.guid} for schedule ${schedule.guid}: ${error}`,
        "error",
        error
      );
      run.error = error.stack || error.toString();
      await run.save();
    }

    return {
      importsCount,
      highWaterMark: nextHighWaterMark,
      sourceOffset: nextSourceOffset,
    };
  }

  /**
   * Load the options for this schedule from the plugin
   */
  export async function pluginOptions(schedule: Schedule) {
    const source = await Source.findByGuid(schedule.sourceGuid);
    const { pluginConnection } = await source.getPlugin();

    const response: Array<{
      key: string;
      description: string;
      required: boolean;
      type: string;
      options: Array<{
        key: string;
        description?: string;
        examples?: Array<any>;
      }>;
    }> = [];

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }

    if (!pluginConnection.scheduleOptions) return response;

    const app = await source.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    for (const i in pluginConnection.scheduleOptions) {
      const opt = pluginConnection.scheduleOptions[i];
      const options = await opt.options({
        connection,
        app,
        appGuid: app.guid,
        appOptions,
        source,
        sourceGuid: source.guid,
        sourceOptions,
        sourceMapping,
      });

      response.push({
        key: opt.key,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        options,
      });
    }

    return response;
  }

  /**
   * Determine the percentage complete for this run
   */
  export async function runPercentComplete(schedule: Schedule, run: Run) {
    const source = await schedule.$get("source");

    const { pluginConnection } = await source.getPlugin();
    const method = pluginConnection.methods.sourceRunPercentComplete;
    if (!method) return 0;

    const app = await source.$get("app");
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const scheduleOptions = await schedule.getOptions();

    // In this case, we want to us the highWaterMark from the previous run, not this run's, as it will be moving over the live of the run
    let highWaterMark = {};
    const previousRun = await run.previousRun();
    if (previousRun?.highWaterMark) {
      highWaterMark = previousRun.highWaterMark;
    }

    return method({
      connection: await app.getConnection(),
      app,
      appGuid: app.guid,
      appOptions,
      source,
      sourceGuid: source.guid,
      sourceOptions,
      sourceMapping,
      schedule,
      scheduleGuid: schedule.guid,
      scheduleOptions,
      highWaterMark,
      run,
      runGuid: run.guid,
    });
  }
}

import { Schedule } from "../../models/Schedule";
import { Run, HighWaterMark } from "../../models/Run";
import { Property } from "../../models/Property";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { log, config } from "actionhero";

export namespace ScheduleOps {
  export async function run(schedule: Schedule, run: Run) {
    const options = await schedule.getOptions();
    const scheduleFilters = await schedule.getFilters();
    const source = await schedule.$get("source", {
      scope: null,
      include: [Option, Mapping],
    });
    const app = await source.$get("app", { include: [Option], scope: null });
    const properties = await Property.findAllWithCache(source.modelId);
    const { pluginConnection } = await source.getPlugin();
    const method = pluginConnection.methods.records;

    if (!method) {
      throw new Error(`cannot find an import method for app type ${app.type}`);
    }

    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    await app.validateOptions(appOptions);
    const connection = await app.getConnection();
    await source.validateOptions(sourceOptions);

    const limit: number = config.batchSize.imports;
    const sourceOffset: number | string = run.sourceOffset || 0;

    let highWaterMark = {};
    if (run.highWaterMark && Object.keys(run.highWaterMark).length > 0) {
      highWaterMark = run.highWaterMark;
    } else if (schedule.incremental) {
      const previousRun = await run.previousRun();
      if (previousRun?.highWaterMark) highWaterMark = previousRun.highWaterMark;
    }

    let importsCount = 0;
    let nextHighWaterMark: HighWaterMark;
    let nextSourceOffset: number | string;

    try {
      const response = await method({
        schedule,
        scheduleId: schedule.id,
        scheduleOptions: options,
        scheduleFilters,
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        properties,
        run,
        runId: run.id,
        limit,
        highWaterMark,
        sourceOffset,
      });

      importsCount = response.importsCount || 0;
      nextHighWaterMark = response.highWaterMark || {};
      nextSourceOffset = response.sourceOffset || 0;
    } catch (error) {
      log(
        `failed run ${run.id} for schedule ${schedule.id}: ${error}`,
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
    const source = await schedule.$get("source", {
      scope: null,
      include: [Option, Mapping],
    });
    const { pluginConnection } = await source.getPlugin();

    const response: {
      key: string;
      description: string;
      required: boolean;
      type: string;
      options: {
        key: string;
        description?: string;
        examples?: any[];
      }[];
    }[] = [];

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }

    if (!pluginConnection.methods.scheduleOptions) return response;

    const app = await source.$get("app", { scope: null, include: [Option] });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const properties = await Property.findAllWithCache(source.modelId);
    const scheduleOptions = await schedule.getOptions();

    const scheduleOptionOptions =
      await pluginConnection.methods.scheduleOptions({
        schedule,
        scheduleId: schedule.id,
        scheduleOptions,
      });

    for (const i in scheduleOptionOptions) {
      const opt = scheduleOptionOptions[i];
      const options = await opt.options({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        properties,
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
    const source = await schedule.$get("source", {
      scope: null,
      include: [Option, Mapping],
    });

    const { pluginConnection } = await source.getPlugin();
    const method = pluginConnection.methods.sourceRunPercentComplete;
    if (!method) return 0;

    const app = await source.$get("app", { scope: null, include: [Option] });
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const scheduleOptions = await schedule.getOptions();
    const scheduleFilters = await schedule.getFilters();

    // In this case, we want to us the highWaterMark from the previous run, not this run's, as it will be moving over the live of the run
    let highWaterMark = {};
    const previousRun = await run.previousRun();
    if (previousRun?.highWaterMark) {
      highWaterMark = previousRun.highWaterMark;
    }

    return method({
      connection: await app.getConnection(),
      app,
      appId: app.id,
      appOptions,
      source,
      sourceId: source.id,
      sourceOptions,
      sourceMapping,
      schedule,
      scheduleId: schedule.id,
      scheduleOptions,
      scheduleFilters,
      highWaterMark,
      run,
      runId: run.id,
    });
  }

  /**
   * Determine if it is time to run
   */
  export async function shouldRun(
    schedule: Schedule,
    options: { ignoreDeltas?: boolean; runIfNotRecurring?: boolean } = {}
  ) {
    const ignoreDeltas = options.ignoreDeltas ?? false;
    const runIfNotRecurring = options.runIfNotRecurring ?? false;

    if (schedule.state !== "ready") return false;
    if (!runIfNotRecurring && schedule.recurring === false) return false;

    const runningRuns = await Run.count({
      where: {
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      },
    });
    if (runningRuns > 0) return false;

    const lastCompleteRun = await Run.scope(null).findOne({
      where: {
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "complete",
      },
      order: [["completedAt", "desc"]],
    });

    if (!lastCompleteRun) return true;

    const delta = new Date().getTime() - lastCompleteRun.completedAt.getTime();
    return ignoreDeltas ? true : delta > schedule.recurringFrequency;
  }
}

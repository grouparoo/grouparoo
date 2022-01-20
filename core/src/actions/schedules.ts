import { Schedule } from "../models/Schedule";
import { Run } from "../models/Run";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ConfigWriter } from "../modules/configWriter";
import { FilterHelper } from "../modules/filterHelper";
import { buildPropertyFilterDictionary } from "../modules/filterOpsDictionary";
import { APIData } from "../modules/apiData";
import { Op, WhereAttributeHash } from "sequelize";
import { Source } from "../models/Source";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class SchedulesList extends AuthenticatedAction {
  name = "schedules:list";
  description = "list all the schedules";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    modelId: { required: false },
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["name", "desc"],
        ["createdAt", "desc"],
      ],
    },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SchedulesList>;
  }) {
    const where: WhereAttributeHash = {};
    const sourceIds: string[] = [];
    if (params.state) where["state"] = params.state;

    if (params.modelId) {
      const sources = await Source.scope(null).findAll({
        where: {
          modelId: params.modelId,
        },
      });

      for (const source of sources) {
        sourceIds.push(source.id);
      }

      where["sourceId"] = { [Op.in]: sourceIds };
    }
    const schedules = await Schedule.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await Schedule.scope(null).count({ where });

    return {
      total,
      schedules: await Promise.all(schedules.map((conn) => conn.apiData())),
    };
  }
}

export class ScheduleRun extends AuthenticatedAction {
  name = "schedule:run";
  description = "run a schedule either importing or exporting data";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ScheduleRun> }) {
    const schedule = await Schedule.findById(params.id);

    const runningRun = await Run.findOne({
      where: { creatorId: schedule.id, state: "running" },
    });
    if (runningRun) await runningRun.stop();

    const run = await schedule.enqueueRun();
    return { run: await run.apiData() };
  }
}

export class SchedulesRun extends AuthenticatedAction {
  name = "schedules:run";
  description = "run all schedules";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    scheduleIds: { required: false, formatter: APIData.ensureArray },
    modelId: { required: false },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<SchedulesRun> }) {
    const runs: Run[] = [];
    const where: WhereAttributeHash = {};

    if (params.scheduleIds && params.scheduleIds.length > 0) {
      where["id"] = { [Op.in]: params.scheduleIds };
    }
    if (params.modelId) {
      const sources = await Source.findAll({
        where: { modelId: params.modelId },
      });
      where["sourceId"] = sources.map((source) => source.id);
    }

    const schedules = await Schedule.findAll({ where });

    for (const schedule of schedules) {
      const runningRun = await Run.scope(null).findOne({
        where: {
          state: "running",
          creatorId: schedule.id,
          creatorType: "schedule",
        },
      });

      if (runningRun) await runningRun.stop();

      const newRun = await schedule.enqueueRun();
      runs.push(newRun);
    }

    return { runs: await Promise.all(runs.map((run) => run.apiData())) };
  }
}

export class ScheduleCreate extends AuthenticatedAction {
  name = "schedule:create";
  description = "create a schedule";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    name: { required: false },
    sourceId: { required: true },
    recurring: { required: true, formatter: APIData.ensureBoolean },
    confirmRecords: {
      required: false,
      formatter: APIData.ensureBoolean,
    },
    state: { required: false },
    refreshEnabled: { required: false, formatter: APIData.ensureBoolean },
    options: { required: false, formatter: APIData.ensureObject },
    recurringFrequency: {
      required: true,
      default: 0,
      formatter: APIData.ensureNumber,
    },
    filters: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ScheduleCreate>;
  }) {
    const schedule = await Schedule.create({
      name: params.name,
      sourceId: params.sourceId,
      recurring: params.recurring,
      recurringFrequency: params.recurringFrequency,
      confirmRecords: params.confirmRecords,
    });

    if (params.options) await schedule.setOptions(params.options);
    if (params.refreshEnabled)
      await schedule.update({ refreshEnabled: params.refreshEnabled });
    if (params.filters) await schedule.setFilters(params.filters);
    if (params.state) await schedule.update({ state: params.state });

    await ConfigWriter.run();

    return {
      schedule: await schedule.apiData(),
      pluginOptions: await schedule.pluginOptions(),
    };
  }
}

export class ScheduleEdit extends AuthenticatedAction {
  name = "schedule:edit";
  description = "edit a schedule";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    id: { required: true },
    name: { required: false },
    sourceId: { required: false },
    recurring: { required: false, formatter: APIData.ensureBoolean },
    refreshEnabled: { required: false, formatter: APIData.ensureBoolean },
    confirmRecords: {
      required: false,
      formatter: APIData.ensureBoolean,
    },
    state: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    recurringFrequency: { required: false, formatter: APIData.ensureNumber },
    filters: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ScheduleEdit> }) {
    const schedule = await Schedule.findById(params.id);

    const recurringFrequency =
      params.recurring && params.recurringFrequency
        ? params.recurringFrequency
        : 0;

    // these timing options are validated separately, and should be set first
    await schedule.update({
      recurring: !!params.recurring,
      recurringFrequency,
    });

    if (params.options) await schedule.setOptions(params.options);
    if (params.filters) await schedule.setFilters(params.filters);
    if (params.refreshEnabled)
      await schedule.update({ refreshEnabled: params.refreshEnabled });

    await schedule.update({
      state: params.state,
      name: params.name,
      confirmRecords: params.confirmRecords,
    });

    await ConfigWriter.run();

    return {
      schedule: await schedule.apiData(),
      pluginOptions: await schedule.pluginOptions(),
    };
  }
}

export class ScheduleFilterOptions extends AuthenticatedAction {
  name = "schedule:filterOptions";
  description = "view a the filter options for a schedule";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ScheduleFilterOptions>;
  }) {
    const schedule = await Schedule.findById(params.id);
    const options = await FilterHelper.pluginFilterOptions(schedule);
    return {
      options: options,
      optionDescriptions: await buildPropertyFilterDictionary(options),
    };
  }
}

export class ScheduleView extends AuthenticatedAction {
  name = "schedule:view";
  description = "view a schedule";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ScheduleView> }) {
    const schedule = await Schedule.findById(params.id);
    return {
      schedule: await schedule.apiData(),
      pluginOptions: await schedule.pluginOptions(),
    };
  }
}

export class ScheduleDestroy extends AuthenticatedAction {
  name = "schedule:destroy";
  description = "destroy a schedule";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ScheduleDestroy>;
  }) {
    const schedule = await Schedule.findById(params.id);
    await schedule.destroy();
    await ConfigWriter.run();
    return { success: true };
  }
}

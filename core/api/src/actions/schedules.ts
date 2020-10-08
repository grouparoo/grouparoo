import { Schedule } from "../models/Schedule";
import { AuthenticatedAction } from "../classes/authenticatedAction";

export class SchedulesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "schedules:list";
    this.description = "list all the schedules";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: false,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params }) {
    const where = {};
    if (params.state) where["state"] = params.state;

    const schedules = await Schedule.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await Schedule.scope(null).count({ where });

    return {
      total,
      schedules: await Promise.all(
        schedules.map(async (conn) => conn.apiData())
      ),
    };
  }
}

export class ScheduleRun extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "schedule:run";
    this.description = "run a schedule either importing or exporting data";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const schedule = await Schedule.findByGuid(params.guid);
    await schedule.enqueueRun();
    return { success: true };
  }
}

export class ScheduleCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "schedule:create";
    this.description = "create a schedule";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      name: { required: false },
      sourceGuid: { required: true },
      recurring: { required: true },
      state: { required: false },
      options: { required: false },
      recurringFrequency: { required: true, default: 0 },
    };
  }

  async run({ params }) {
    const schedule = await Schedule.create({
      name: params.name,
      sourceGuid: params.sourceGuid,
      recurring: params.recurring,
      recurringFrequency: params.recurringFrequency,
    });

    if (params.options) await schedule.setOptions(params.options);
    if (params.state) await schedule.update({ state: params.state });

    return {
      schedule: await schedule.apiData(),
      pluginOptions: await schedule.pluginOptions(),
    };
  }
}

export class ScheduleEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "schedule:edit";
    this.description = "edit a schedule";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      guid: { required: true },
      name: { required: false },
      sourceGuid: { required: false },
      recurring: { required: false },
      state: { required: false },
      options: { required: false },
      recurringFrequency: { required: false },
    };
  }

  async run({ params }) {
    const schedule = await Schedule.findByGuid(params.guid);
    // these timing options are validated separately, and should be set first
    if (params.recurringFrequency || params.recurring) {
      await schedule.update({
        recurringFrequency: params.recurringFrequency,
        recurring: params.recurring,
      });
    }

    if (params.options) await schedule.setOptions(params.options);

    await schedule.update({ state: params.state, name: params.name });

    return {
      schedule: await schedule.apiData(),
      pluginOptions: await schedule.pluginOptions(),
    };
  }
}

export class ScheduleView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "schedule:view";
    this.description = "view a schedule";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const schedule = await Schedule.findByGuid(params.guid);
    return {
      schedule: await schedule.apiData(),
      pluginOptions: await schedule.pluginOptions(),
    };
  }
}

export class ScheduleDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "schedule:destroy";
    this.description = "destroy a schedule";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const schedule = await Schedule.findByGuid(params.guid);
    await schedule.destroy();
    return { success: true };
  }
}

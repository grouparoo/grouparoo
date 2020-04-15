import { Action, api } from "actionhero";
import { Schedule } from "../models/Schedule";
import { GrouparooPlugin } from "../classes/plugin";

export class SchedulesList extends Action {
  constructor() {
    super();
    this.name = "schedules:list";
    this.description = "list all the schedules";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: true,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const schedules = await Schedule.scope(null).findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.schedules = await Promise.all(
      schedules.map(async (conn) => conn.apiData())
    );

    response.total = await Schedule.count();
  }
}

export class ScheduleRun extends Action {
  constructor() {
    super();
    this.name = "schedule:run";
    this.description = "run a schedule either importing or exporting data";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const schedule = await Schedule.findOne({
      where: { guid: params.guid },
    });

    if (!schedule) {
      throw new Error("schedule not found");
    }

    await schedule.enqueueRun();
    response.success = true;
  }
}

export class ScheduleCreate extends Action {
  constructor() {
    super();
    this.name = "schedule:create";
    this.description = "create a schedule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      name: { required: false },
      sourceGuid: { required: true },
      recurring: { required: true },
      state: { required: false },
      options: { required: false },
      recurringFrequency: { required: true, default: 0 },
    };
  }

  async run({ params, response }) {
    const schedule = await Schedule.create({
      name: params.name,
      sourceGuid: params.sourceGuid,
      recurring: params.recurring,
      recurringFrequency: params.recurringFrequency,
    });

    if (params.options) {
      await schedule.setOptions(params.options);
    }

    if (params.state) {
      await schedule.update({ state: params.state });
    }

    response.schedule = await schedule.apiData();
    response.pluginOptions = await schedule.pluginOptions();
  }
}

export class ScheduleEdit extends Action {
  constructor() {
    super();
    this.name = "schedule:edit";
    this.description = "edit a schedule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
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

  async run({ params, response }) {
    const schedule = await Schedule.scope(null).findOne({
      where: { guid: params.guid },
    });

    if (!schedule) {
      throw new Error("schedule not found");
    }

    if (params.options) {
      await schedule.setOptions(params.options);
    }
    await schedule.update(params);
    response.schedule = await schedule.apiData();
    response.pluginOptions = await schedule.pluginOptions();
  }
}

export class ScheduleView extends Action {
  constructor() {
    super();
    this.name = "schedule:view";
    this.description = "view a schedule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const schedule = await Schedule.scope(null).findOne({
      where: { guid: params.guid },
    });

    if (!schedule) {
      throw new Error("schedule not found");
    }

    response.schedule = await schedule.apiData();
    response.pluginOptions = await schedule.pluginOptions();
  }
}

export class ScheduleDestroy extends Action {
  constructor() {
    super();
    this.name = "schedule:destroy";
    this.description = "destroy a schedule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const schedule = await Schedule.scope(null).findOne({
      where: { guid: params.guid },
    });

    if (!schedule) {
      throw new Error("schedule not found");
    }

    await schedule.destroy();
    response.success = true;
  }
}

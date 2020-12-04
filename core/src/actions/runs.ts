import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Run } from "../models/Run";
import { Op } from "sequelize";
import { Schedule } from "../models/Schedule";
import { Destination } from "../models/Destination";

export class RunsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "runs:list";
    this.description = "list the runs";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "read" };
    this.inputs = {
      guid: { required: false },
      state: { required: false },
      hasError: { required: false },
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async run({ params }) {
    let guid = params.guid;

    if (guid && guid.match(/^src_/)) {
      const schedule = await Schedule.scope(null).findOne({
        where: { sourceGuid: params.guid },
      });
      if (!schedule) {
        throw new Error("no schedule for this source");
      } else {
        guid = schedule.guid;
      }
    }

    const where = {};
    if (guid) where["creatorGuid"] = guid;
    if (params.state) where["state"] = params.state;
    if (params.hasError === "true") where["error"] = { [Op.ne]: null };
    if (params.hasError === "false") where["error"] = { [Op.eq]: null };

    const search = {
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    };

    const runs = await Run.scope(null).findAll(search);

    return {
      runs: await Promise.all(runs.map(async (run) => run.apiData())),
      total: await Run.scope(null).count({ where }),
    };
  }
}

export class RunEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "run:edit";
    this.description = "edit a run";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      guid: { required: true },
      state: { required: true },
    };
  }

  async run({ params }) {
    const run = await Run.findByGuid(params.guid);
    await run.update({ state: params.state });
    return { run: await run.apiData() };
  }
}

export class RunView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "run:view";
    this.description = "view a run";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const run = await Run.findByGuid(params.guid);
    return {
      run: await run.apiData(),
      quantizedTimeline: await run.quantizedTimeline(),
    };
  }
}

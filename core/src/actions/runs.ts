import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Run } from "../models/Run";
import { Op } from "sequelize";
import { Schedule } from "../models/Schedule";

export class RunsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "runs:list";
    this.description = "list the runs";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "read" };
    this.inputs = {
      id: { required: false },
      topic: { required: false },
      state: { required: false },
      hasError: { required: false },
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["updatedAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    let id: string = params.id;

    if (params.topic === "source") {
      const schedule = await Schedule.scope(null).findOne({
        where: { sourceId: params.id },
      });
      if (!schedule) {
        throw new Error("no schedule for this source");
      } else {
        id = schedule.id;
      }
    }

    const where = {};
    if (id) where["creatorId"] = id;
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
      id: { required: true },
      state: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const run = await Run.findById(params.id);
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const run = await Run.findById(params.id);
    return {
      run: await run.apiData(),
      quantizedTimeline: await run.quantizedTimeline(),
    };
  }
}

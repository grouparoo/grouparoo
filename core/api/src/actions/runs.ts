import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Run } from "../models/Run";
import { Op } from "sequelize";
import { Schedule } from "../models/Schedule";
import { Destination } from "../models/Destination";

export class ListRuns extends AuthenticatedAction {
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

  async run({ params, response }) {
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

    if (guid && guid.match(/^dst_/)) {
      // special handling for destination runs, as they link through exports
      const destination = await Destination.findByGuid(guid);
      const runs = await destination.getRuns(
        params.state,
        params.limit,
        params.offset
      );
      response.runs = await Promise.all(runs.map(async (run) => run.apiData()));
      response.total = runs.length;
    } else {
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
      response.runs = await Promise.all(runs.map(async (run) => run.apiData()));
      response.total = await Run.scope(null).count({ where });
    }
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

  async run({ params, response }) {
    const run = await Run.findByGuid(params.guid);
    await run.update({ state: params.state });
    response.run = await run.apiData();
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

  async run({ params, response }) {
    const run = await Run.findByGuid(params.guid);
    response.run = await run.apiData();
    response.quantizedTimeline = await run.quantizedTimeline();
  }
}

import { Action } from "actionhero";
import { Run } from "../models/Run";
import { Op } from "sequelize";

export class ListRuns extends Action {
  constructor() {
    super();
    this.name = "runs:list";
    this.description = "list the runs";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: false },
      state: { required: false },
      hasError: { required: false },
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: { required: true, default: [["createdAt", "desc"]] },
    };
  }

  async run({ params, response }) {
    const where = {};

    if (params.guid) {
      where["creatorGuid"] = params.guid;
    }

    if (params.state) {
      where["state"] = params.state;
    }

    if (params.hasError === "true") {
      where["error"] = { [Op.ne]: null };
    }
    if (params.hasError === "false") {
      where["error"] = { [Op.eq]: null };
    }

    const search = {
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    };

    const runs = await Run.findAll(search);
    response.runs = await Promise.all(runs.map(async (app) => app.apiData()));
    response.total = await Run.count({ where });
  }
}

export class RunView extends Action {
  constructor() {
    super();
    this.name = "run:view";
    this.description = "view a run";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const run = await Run.findOne({ where: { guid: params.guid } });
    if (!run) {
      throw new Error("run not found");
    }
    response.run = await run.apiData();
    response.quantizedTimeline = await run.quantizedTimeline();
  }
}

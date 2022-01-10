import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Run } from "../models/Run";
import { Op, WhereAttributeHash } from "sequelize";
import { Schedule } from "../models/Schedule";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class RunsList extends AuthenticatedAction {
  name = "runs:list";
  description = "list the runs";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "read" };
  inputs = {
    creatorId: { required: false },
    topic: { required: false },
    state: { required: false },
    hasError: { required: false },
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [["updatedAt", "desc"]],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<RunsList> }) {
    let creatorId: string = params.creatorId;

    if (params.topic === "source") {
      const schedule = await Schedule.scope(null).findOne({
        where: { sourceId: params.creatorId },
      });
      if (!schedule) {
        throw new Error("no schedule for this source");
      } else {
        creatorId = schedule.id;
      }
    }

    const where: WhereAttributeHash = {};
    if (creatorId) where["creatorId"] = creatorId;
    if (params.state) where["state"] = params.state;
    if (params.hasError === "true") where["error"] = { [Op.ne]: null };
    if (params.hasError === "false") where["error"] = { [Op.eq]: null };

    const runs = await Run.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      runs: await Promise.all(runs.map((run) => run.apiData())),
      total: await Run.scope(null).count({ where }),
    };
  }
}

export class RunEdit extends AuthenticatedAction {
  name = "run:edit";
  description = "edit a run";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    id: { required: true },
    state: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<RunEdit> }) {
    const run = await Run.findById(params.id);
    await run.update({ state: params.state });
    return { run: await run.apiData() };
  }
}

export class RunView extends AuthenticatedAction {
  name = "run:view";
  description = "view a run";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<RunView> }) {
    const run = await Run.findById(params.id);
    return {
      run: await run.apiData(),
      quantizedTimeline: await run.quantizedTimeline(),
    };
  }
}

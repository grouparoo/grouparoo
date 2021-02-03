import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Export } from "../models/Export";
import { Op } from "sequelize";
import { ExportOps } from "../modules/ops/export";

export class ExportsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "exports:list";
    this.description = "list exports";
    this.outputExample = {};
    this.permission = { topic: "export", mode: "read" };
    this.inputs = {
      profileId: { required: false },
      destinationId: { required: false },
      limit: { required: true, default: 100 },
      offset: { required: true, default: 0 },
      state: { required: false },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
    if (params.profileId) {
      where["profileId"] = params.profileId;
    }
    if (params.destinationId) {
      where["destinationId"] = params.destinationId;
    }

    if (params.state) {
      if (params.state === "created") {
        where["startedAt"] = { [Op.eq]: null };
        where[Op.and] = {
          completedAt: { [Op.eq]: null },
          errorMessage: { [Op.eq]: null },
        };
      } else if (params.state === "started") {
        where["startedAt"] = { [Op.ne]: null };
        where[Op.and] = {
          completedAt: { [Op.eq]: null },
          errorMessage: { [Op.eq]: null },
        };
      } else if (params.state === "completed") {
        where["startedAt"] = { [Op.ne]: null };
        where["completedAt"] = { [Op.ne]: null };
        where["errorMessage"] = { [Op.eq]: null };
      } else if (params.state === "error") {
        where["errorMessage"] = { [Op.ne]: null };
      } else {
        throw new Error("invalid state");
      }
    }

    const _exports = await Export.findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await Export.count({ where });

    return {
      total,
      exports: await Promise.all(_exports.map((exp) => exp.apiData())),
    };
  }
}

export class ExportsTotals extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "exports:totals";
    this.description = "count exports by state";
    this.outputExample = {};
    this.permission = { topic: "export", mode: "read" };
    this.inputs = {
      profileId: { required: false },
      destinationId: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
    if (params.profileId) {
      where["profileId"] = params.profileId;
    }
    if (params.destinationId) {
      where["destinationId"] = params.destinationId;
    }

    return { totals: await ExportOps.totals(where) };
  }
}

export class ExportView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "export:view";
    this.description = "view an export";
    this.outputExample = {};
    this.permission = { topic: "export", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const _export = await Export.findById(params.id);
    return { export: await _export.apiData() };
  }
}

import { Op, WhereAttributeHash } from "sequelize";
import { ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Export } from "../models/Export";
import { ExportOps } from "../modules/ops/export";
import { Destination } from "../models/Destination";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";

export class ExportsList extends AuthenticatedAction {
  name = "exports:list";
  description = "list exports";
  outputExample = {};
  permission: ActionPermission = { topic: "export", mode: "read" };
  inputs = {
    recordId: { required: false },
    destinationId: { required: false },
    exportProcessorId: { required: false },
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [["createdAt", "desc"]],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ExportsList> }) {
    const where: WhereAttributeHash = {};
    if (params.recordId) {
      where["recordId"] = params.recordId;
    }
    if (params.destinationId) {
      where["destinationId"] = params.destinationId;
    }
    if (params.exportProcessorId) {
      where["exportProcessorId"] = params.exportProcessorId;
    }
    if (params.state) {
      where["state"] = params.state;
    }

    const { rows: _exports, count: total } = await Export.findAndCountAll({
      where,
      include: [
        {
          model: Destination,
          where: { state: { [Op.ne]: "draft" } },
          required: false,
        },
        {
          model: GrouparooRecord,
          attributes: ["modelId"],
        },
      ],
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total,
      exports: await Promise.all(_exports.map((exp) => exp.apiData())),
    };
  }
}

export class ExportsTotals extends AuthenticatedAction {
  name = "exports:totals";
  description = "count exports by state";
  outputExample = {};
  permission: ActionPermission = { topic: "export", mode: "read" };
  inputs = {
    recordId: { required: false },
    destinationId: { required: false },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ExportsTotals>;
  }) {
    const where: WhereAttributeHash = {};
    if (params.recordId) {
      where["recordId"] = params.recordId;
    }
    if (params.destinationId) {
      where["destinationId"] = params.destinationId;
    }

    return { totals: await ExportOps.totals(where) };
  }
}

export class ExportView extends AuthenticatedAction {
  name = "export:view";
  description = "view an export";
  outputExample = {};
  permission: ActionPermission = { topic: "export", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ExportView> }) {
    const _export = await Export.findById(params.id);
    return { export: await _export.apiData() };
  }
}

export class ExportsRetryFailed extends AuthenticatedAction {
  name = "exports:retryFailed";
  description = "retry failed exports within a timeframe";
  permission: ActionPermission = { topic: "destination", mode: "write" };
  inputs = {
    destinationId: { required: false },
    startTimestamp: { required: true, formatter: APIData.ensureNumber },
    endTimestamp: { required: true, formatter: APIData.ensureNumber },
    preview: { required: false, formatter: APIData.ensureBoolean },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ExportsRetryFailed>;
  }) {
    const count = await Export.retryFailed(
      new Date(params.startTimestamp),
      new Date(params.endTimestamp),
      params.destinationId
        ? await Destination.findById(params.destinationId)
        : null,
      !params.preview
    );

    return { count };
  }
}

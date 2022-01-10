import { ParamsFrom } from "actionhero";
import { WhereAttributeHash } from "sequelize/types";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ExportProcessor } from "../models/ExportProcessor";
import { ActionPermission } from "../models/Permission";
import { APIData } from "../modules/apiData";

export class ExportProcessorsList extends AuthenticatedAction {
  name = "exportProcessors:list";
  description = "list export processors";
  outputExample = {};
  permission: ActionPermission = { topic: "export", mode: "read" };
  inputs = {
    destinationId: { required: false },
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    order: {
      required: false,
      default: [["createdAt", "desc"]],
      formatter: APIData.ensureArray,
    },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ExportProcessorsList>;
  }) {
    const where: WhereAttributeHash = {};
    if (params.destinationId) {
      where["destinationId"] = params.destinationId;
    }
    if (params.state) {
      where["state"] = params.state;
    }

    const { rows, count } = await ExportProcessor.findAndCountAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total: count,
      exportProcessors: await Promise.all(rows.map((prc) => prc.apiData())),
    };
  }
}

export class ExportProcessorView extends AuthenticatedAction {
  name = "exportProcessor:view";
  description = "view an export processor";
  outputExample = {};
  permission: ActionPermission = { topic: "export", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ExportProcessorView>;
  }) {
    const exportProcessor = await ExportProcessor.findById(params.id);
    return { exportProcessor: await exportProcessor.apiData() };
  }
}

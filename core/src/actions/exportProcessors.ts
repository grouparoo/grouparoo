import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ExportProcessor } from "../models/ExportProcessor";
import { APIData } from "../modules/apiData";

export class ExportProcessorsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "exportProcessors:list";
    this.description = "list export processors";
    this.outputExample = {};
    this.permission = { topic: "export", mode: "read" };
    this.inputs = {
      destinationId: { required: false },
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      state: { required: false },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
        formatter: APIData.ensureObject,
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
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
  constructor() {
    super();
    this.name = "exportProcessor:view";
    this.description = "view an export processor";
    this.outputExample = {};
    this.permission = { topic: "export", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const exportProcessor = await ExportProcessor.findById(params.id);
    return { exportProcessor: await exportProcessor.apiData() };
  }
}

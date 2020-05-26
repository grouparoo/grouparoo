import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Export } from "../models/Export";

export class ListExports extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "exports:list";
    this.description = "list exports";
    this.outputExample = {};
    this.permission = { topic: "export", mode: "read" };
    this.inputs = {
      profileGuid: { required: false },
      destinationGuid: { required: false },
      limit: { required: true, default: 100 },
      offset: { required: true, default: 0 },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async run({ params, response }) {
    const where = {};

    if (params.profileGuid) {
      where["profileGuid"] = params.profileGuid;
    }
    if (params.destinationGuid) {
      where["destinationGuid"] = params.destinationGuid;
    }

    const _exports = await Export.findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.exports = await Promise.all(_exports.map((exp) => exp.apiData()));
    response.total = await Export.count({ where });
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
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const _export = await Export.findByGuid(params.guid);
    response.export = await _export.apiData();
  }
}

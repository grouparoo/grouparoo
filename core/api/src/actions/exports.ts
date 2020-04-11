import { Action } from "actionhero";
import { Export } from "../models/Export";

export class ListExports extends Action {
  constructor() {
    super();
    this.name = "exports:list";
    this.description = "list exports";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      profileGuid: { required: false },
      destinationGuid: { required: false },
      limit: { required: true, default: 1000 },
      offset: { required: true, default: 0 },
      order: { required: true, default: [["createdAt", "desc"]] },
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

export class ExportView extends Action {
  constructor() {
    super();
    this.name = "export:view";
    this.description = "view an export";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const _export = await Export.findOne({ where: { guid: params.guid } });
    if (!_export) {
      throw new Error("export not found");
    }

    response.export = await _export.apiData();
  }
}

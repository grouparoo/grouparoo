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

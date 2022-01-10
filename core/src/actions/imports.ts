import { GrouparooRecord } from "../models/GrouparooRecord";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Import } from "../models/Import";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";
import { WhereAttributeHash } from "sequelize/types";

export class ImportsList extends AuthenticatedAction {
  name = "imports:list";
  description = "list imports";
  outputExample = {};
  permission: ActionPermission = { topic: "import", mode: "read" };
  inputs = {
    creatorId: { required: false },
    recordId: { required: false },
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [["createdAt", "desc"]],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ImportsList> }) {
    const where: WhereAttributeHash = {};
    if (params.creatorId) where["creatorId"] = params.creatorId;
    if (params.recordId) where["recordId"] = params.recordId;
    if (params.state) where["state"] = params.state;

    const search = {
      include: [GrouparooRecord],
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    };

    const total = await Import.count({ where });
    const imports = await Import.findAll(search);

    return {
      total,
      imports: await Promise.all(imports.map((i) => i.apiData())),
    };
  }
}

export class ImportView extends AuthenticatedAction {
  name = "import:view";
  description = "view an import";
  outputExample = {};
  permission: ActionPermission = { topic: "import", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ImportView> }) {
    const _import = await Import.findById(params.id);
    return { import: await _import.apiData() };
  }
}

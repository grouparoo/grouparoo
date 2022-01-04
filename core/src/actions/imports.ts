import { GrouparooRecord } from "../models/GrouparooRecord";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Import } from "../models/Import";
import { APIData } from "../modules/apiData";

export class ImportsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "imports:list";
    this.description = "list imports";
    this.outputExample = {};
    this.permission = { topic: "import", mode: "read" };
    this.inputs = {
      creatorId: { required: false },
      recordId: { required: false },
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      state: { required: false },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
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
  constructor() {
    super();
    this.name = "import:view";
    this.description = "view an import";
    this.outputExample = {};
    this.permission = { topic: "import", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const _import = await Import.findById(params.id);
    return { import: await _import.apiData() };
  }
}

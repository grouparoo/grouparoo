import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Import } from "../models/Import";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";

export class ImportsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "imports:list";
    this.description = "list imports";
    this.outputExample = {};
    this.permission = { topic: "import", mode: "read" };
    this.inputs = {
      creatorGuid: { required: false },
      profileGuid: { required: false },
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async run({ params }) {
    const where = {};
    if (params.creatorGuid) where["creatorGuid"] = params.creatorGuid;
    if (params.profileGuid) where["profileGuid"] = params.profileGuid;

    const search = {
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    };
    const total = await Import.count({ where });
    const imports = await Import.findAll(search);

    return {
      total,
      imports: await Promise.all(imports.map((e) => e.apiData())),
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
      guid: { required: true },
    };
  }

  async run({ params }) {
    const _import = await Import.findByGuid(params.guid);
    return { import: await _import.apiData() };
  }
}

export class ImportCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "import:create";
    this.description = "create an import";
    this.outputExample = {};
    this.permission = { topic: "import", mode: "write" };
    this.inputs = {
      properties: { required: true },
    };
  }

  async run({ params }) {
    let { properties } = params;

    if (typeof properties === "string") properties = JSON.parse(properties);

    const profilePropertyRules = await ProfilePropertyRule.findAll();
    let foundUniqueProperty = false;
    profilePropertyRules.forEach((rule) => {
      if (rule.unique && properties[rule.key]) foundUniqueProperty = true;
    });

    if (!foundUniqueProperty) {
      throw new Error("no unique profile property included");
    }

    const _import = await Import.create({
      data: properties,
      rawData: properties,
      creatorType: "api",
      creatorGuid: "?",
    });

    return { import: await _import.apiData() };
  }
}

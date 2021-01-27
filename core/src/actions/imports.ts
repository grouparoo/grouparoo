import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Import } from "../models/Import";
import { Property } from "../models/Property";

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
      limit: {
        required: true,
        default: 100,
        formatter: (p) => parseInt(p, 10),
      },
      offset: { required: true, default: 0, formatter: (p) => parseInt(p, 10) },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
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

  async runWithinTransaction({ params }) {
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

  async runWithinTransaction({ params }) {
    let { properties: _properties } = params;

    if (typeof _properties === "string") _properties = JSON.parse(_properties);

    const properties = await Property.findAll();
    let foundUniqueProperty = false;
    properties.forEach((property) => {
      if (property.unique && _properties[property.key]) {
        foundUniqueProperty = true;
      }
    });
    if (!foundUniqueProperty) {
      throw new Error("no unique profile property included");
    }

    const _import = await Import.create({
      data: _properties,
      rawData: _properties,
      creatorType: "api",
      creatorGuid: "?",
    });

    return { import: await _import.apiData() };
  }
}

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
      creatorId: { required: false },
      profileId: { required: false },
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
    if (params.creatorId) where["creatorId"] = params.creatorId;
    if (params.profileId) where["profileId"] = params.profileId;

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
      creatorId: "?",
    });

    return { import: await _import.apiData() };
  }
}

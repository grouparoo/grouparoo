import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Op } from "sequelize";
import { Profile } from "../models/Profile";
import { Property } from "../models/Property";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";
import { AsyncReturnType } from "type-fest";

export class PropertiesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "properties:list";
    this.description = "list all the properties";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      unique: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      order: {
        required: false,
        default: [
          ["key", "asc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params }) {
    const where = {};
    if (params.state) where["state"] = params.state;
    if (params.sourceGuid) where["sourceGuid"] = params.sourceGuid;
    if (params?.unique?.toString().toLowerCase() === "true")
      where["unique"] = true;

    const properties = await Property.scope(null).findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where,
    });

    const responseProperties: Array<
      AsyncReturnType<typeof Property.prototype.apiData>
    > = [];
    const responseExamples: { [guid: string]: string[] } = {};

    for (const i in properties) {
      const rule = properties[i];
      const apiData = await rule.apiData();

      const examples = await ProfileProperty.findAll({
        where: {
          propertyGuid: rule.guid,
          rawValue: { [Op.not]: null },
        },
        order: [["guid", "asc"]],
        limit: 5,
      });
      const exampleValues = examples.map((e) => e.rawValue);

      responseProperties.push(apiData);
      responseExamples[rule.guid] = exampleValues;
    }

    const total = await Property.scope(null).count();

    return {
      total,
      properties: responseProperties,
      examples: responseExamples,
    };
  }
}

export class PropertiesOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "properties:options";
    this.description = "enumerate the options for creating a new property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {};
  }

  async run() {
    return { types: Property.rawAttributes.type.values };
  }
}

export class PropertyGroups extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:groups";
    this.description =
      "enumerate the groups using this property in their rules";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = { guid: { required: true } };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);

    const groups = await Group.findAll({
      include: [
        {
          model: GroupRule,
          where: { propertyGuid: property.guid },
        },
      ],
    });

    return {
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class PropertyCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:create";
    this.description = "create a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "write" };
    this.inputs = {
      key: { required: false },
      type: { required: true },
      unique: { required: false },
      isArray: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      options: { required: false },
      filters: { required: false },
    };
  }

  async run({ params }) {
    const property = await Property.create({
      key: params.key,
      type: params.type,
      unique: params.unique,
      isArray: params.isArray,
      sourceGuid: params.sourceGuid,
    });

    if (params.options) await property.setOptions(params.options);
    if (params.filters) await property.setFilters(params.filters);
    if (params.state) await property.update({ state: params.state });

    const source = await property.$get("source");

    return {
      property: await property.apiData(),
      pluginOptions: await property.pluginOptions(),
      source: source.apiData(),
    };
  }
}

export class PropertyEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:edit";
    this.description = "edit a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "write" };
    this.inputs = {
      guid: { required: true },
      key: { required: false },
      type: { required: false },
      unique: { required: false },
      isArray: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      options: { required: false },
      filters: { required: false },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);

    if (params.options) await property.setOptions(params.options);
    if (params.filters) await property.setFilters(params.filters);

    await property.update(params);

    const source = await property.$get("source");

    return {
      property: await property.apiData(),
      pluginOptions: await property.pluginOptions(),
      source: source.apiData(),
    };
  }
}

export class PropertyMakeIdentifying extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:makeIdentifying";
    this.description = "make a property identifying for the cluster";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);
    await property.makeIdentifying();
    return { property: await property.apiData() };
  }
}

export class PropertyFilterOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:filterOptions";
    this.description = "view a the filter options for a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);
    return { options: await property.pluginFilterOptions() };
  }
}

export class PropertyView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:view";
    this.description = "view a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);
    const source = await property.$get("source");

    return {
      property: await property.apiData(),
      source: await source.apiData(),
    };
  }
}

export class PropertyPluginOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:pluginOptions";
    this.description = "view the plugin options for a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);

    return { pluginOptions: await property.pluginOptions() };
  }
}

export class PropertyProfilePreview extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:profilePreview";
    this.description = "view a property's new options against a profile";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {
      guid: { required: true },
      profileGuid: { required: false },
      options: { required: false },
      filters: { required: false },
    };
  }

  async run({ params }) {
    let profile: Profile;

    const property = await Property.findByGuid(params.guid);

    if (params.profileGuid) {
      profile = await Profile.findByGuid(params.profileGuid);
    } else {
      profile = await Profile.findOne({ order: [["guid", "asc"]] });
      if (!profile) {
        return { errorMessage: "No profiles found" };
      }
    }

    let parsedOptions = params.options;
    if (parsedOptions) {
      try {
        // as this is a GET, the options will be stringified
        parsedOptions = JSON.parse(parsedOptions);
      } catch {}
    }

    let parsedFilters = params.filters;
    if (parsedFilters) {
      try {
        // as this is a GET, the options will be stringified
        parsedFilters = parsedFilters.map((f) => JSON.parse(f));
      } catch {}
    }

    const apiData = await profile.apiData();
    const source = await property.$get("source");

    let newPropertyValues: Array<string | number | boolean | Date>;
    let errorMessage: string;
    try {
      newPropertyValues = await source.importProfileProperty(
        profile,
        property,
        parsedOptions,
        parsedFilters
      );
    } catch (error) {
      errorMessage = error.toString();
    }

    apiData.properties[property.key] = {
      guid: property.guid,
      state: property.state,
      values: newPropertyValues,
      type: property.type,
      unique: property.unique,
      isArray: property.isArray,
      identifying: property.identifying,
      valueChangedAt: null,
      confirmedAt: null,
      stateChangedAt: null,
      createdAt: null,
      updatedAt: null,
    };

    return { errorMessage, profile: apiData };
  }
}

export class PropertyTest extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:test";
    this.description = "test a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);

    return { test: (await property.test()) || true };
  }
}

export class PropertyDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "property:destroy";
    this.description = "destroy a property";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const property = await Property.findByGuid(params.guid);

    await property.destroy();
    return { success: true };
  }
}

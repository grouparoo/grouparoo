import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Op } from "sequelize";
import { Profile } from "../models/Profile";
import { Property, SimplePropertyOptions } from "../models/Property";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";
import { AsyncReturnType } from "type-fest";
import { ConfigWriter } from "../modules/configWriter";
import { FilterHelper } from "../modules/filterHelper";
import { APIData } from "../modules/apiData";

export class PropertiesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "properties:list";
    this.description = "list all the properties";
    this.outputExample = {};
    this.permission = { topic: "property", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      unique: { required: false },
      state: { required: false },
      sourceId: { required: false },
      includeExamples: { required: true, default: "false" },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [
          ["key", "asc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const includeExamples =
      params.includeExamples === "true" || params.includeExamples === true;

    const where = {};
    if (params.state) where["state"] = params.state;
    if (params.sourceId) where["sourceId"] = params.sourceId;
    if (params?.unique?.toString().toLowerCase() === "true")
      where["unique"] = true;

    const properties = await Property.scope(null).findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where,
    });

    const responseProperties: Array<AsyncReturnType<Property["apiData"]>> = [];
    const responseExamples: { [id: string]: string[] } = {};

    for (const property of properties) {
      const apiData = await property.apiData();
      responseProperties.push(apiData);

      if (includeExamples) {
        const examples = await ProfileProperty.findAll({
          where: {
            propertyId: property.id,
            rawValue: { [Op.not]: null },
          },
          order: [["id", "asc"]],
          limit: 5,
        });
        const exampleValues = examples.map((e) => e.rawValue);

        responseExamples[property.id] = exampleValues;
      }
    }

    const total = await Property.scope(null).count();

    return {
      total,
      properties: responseProperties,
      examples: includeExamples ? responseExamples : undefined,
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

  async runWithinTransaction() {
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
    this.inputs = { id: { required: true } };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);

    const groups = await Group.findAll({
      include: [
        {
          model: GroupRule,
          where: { propertyId: property.id },
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
      id: { required: false },
      key: { required: false },
      type: { required: true },
      unique: { required: false, formatter: APIData.ensureBoolean },
      isArray: { required: false },
      state: { required: false },
      sourceId: { required: false },
      options: { required: false, formatter: APIData.ensureObject },
      filters: { required: false, formatter: APIData.ensureObject },
      keepValueIfNotFound: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.create({
      id: params.id,
      key: params.key,
      type: params.type,
      unique: params.unique,
      isArray: params.isArray,
      sourceId: params.sourceId,
      keepValueIfNotFound: params.keepValueIfNotFound,
    });
    if (params.options) await property.setOptions(params.options);
    if (params.filters) await property.setFilters(params.filters);
    if (params.state) await property.update({ state: params.state });
    const source = await property.$get("source");
    await ConfigWriter.run();
    return {
      property: await property.apiData(),
      pluginOptions: await property.pluginOptions(),
      source: await source.apiData(),
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
      id: { required: true },
      key: { required: false },
      type: { required: false },
      unique: { required: false, formatter: APIData.ensureBoolean },
      isArray: { required: false },
      state: { required: false },
      sourceId: { required: false },
      options: { required: false, formatter: APIData.ensureObject },
      filters: { required: false, formatter: APIData.ensureObject },
      keepValueIfNotFound: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);

    if (params.options) await property.setOptions(params.options);
    if (params.filters) await property.setFilters(params.filters);

    await property.update(params);

    const source = await property.$get("source");

    await ConfigWriter.run();

    return {
      property: await property.apiData(),
      pluginOptions: await property.pluginOptions(),
      source: await source.apiData(),
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);
    await property.makeIdentifying();
    await ConfigWriter.run();
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);
    return { options: await FilterHelper.pluginFilterOptions(property) };
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);
    const source = await property.$get("source", { scope: null });

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
      id: { required: true },
      options: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);
    return { pluginOptions: await property.pluginOptions(params.options) };
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
      id: { required: true },
      profileId: { required: false },
      options: { required: false, formatter: APIData.ensureObject },
      filters: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    let profile: Profile;

    const property = await Property.findById(params.id);

    if (params.profileId) {
      profile = await Profile.findById(params.profileId);
    } else {
      profile = await Profile.findOne({ order: [["id", "asc"]] });
      if (!profile) {
        return { errorMessage: "No profiles found" };
      }
    }

    const apiData = await profile.apiData();
    const source = await property.$get("source", { scope: null });

    let newPropertyValues: Array<string | number | boolean | Date> = [];
    let errorMessage: string;
    try {
      newPropertyValues = await source.importProfileProperty(
        profile,
        property,
        params.options,
        params.filters
      );
    } catch (error) {
      errorMessage = error.toString();
    }

    apiData.properties[property.key] = {
      id: property.id,
      state: null,
      values: newPropertyValues,
      configId: property.getConfigId(),
      type: property.type,
      unique: property.unique,
      directlyMapped: property.directlyMapped,
      isArray: property.isArray,
      identifying: property.identifying,
      valueChangedAt: null,
      confirmedAt: null,
      stateChangedAt: null,
      startedAt: null,
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);

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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const property = await Property.findById(params.id);
    await property.destroy();
    await ConfigWriter.run();
    return { success: true };
  }
}

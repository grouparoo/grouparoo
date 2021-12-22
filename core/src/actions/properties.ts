import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Op, Order, Includeable, WhereAttributeHash } from "sequelize";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { Property } from "../models/Property";
import { RecordProperty } from "../models/RecordProperty";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";
import { AsyncReturnType } from "type-fest";
import { ConfigWriter } from "../modules/configWriter";
import { FilterHelper } from "../modules/filterHelper";
import { buildPropertyFilterDictionary } from "../modules/filterOpsDictionary";
import { APIData } from "../modules/apiData";
import { Source } from "../models/Source";
import { DestinationOps } from "../modules/ops/destination";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class PropertiesList extends AuthenticatedAction {
  name = "properties:list";
  description = "list all the properties";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    unique: { required: false, formatter: APIData.ensureBoolean },
    state: { required: false },
    modelId: { required: false },
    sourceId: { required: false },
    includeExamples: {
      required: true,
      default: "false",
      formatter: APIData.ensureBoolean,
    },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["key", "asc"],
        ["createdAt", "desc"],
      ],
    },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertiesList>;
  }) {
    const includeExamples = params.includeExamples;

    const where: WhereAttributeHash = {};
    if (params.state && params.state !== "invalid") {
      where["state"] = params.state;
    }
    if (params.sourceId) {
      where["sourceId"] = params.sourceId;
    }
    if (params.unique) {
      where["unique"] = true;
    }

    const include: Includeable[] = [
      {
        model: Source,
        where: { state: ["draft", "ready"] },
      },
    ];

    const properties = (
      await Property.scope(null).findAll({
        include,
        limit: params.limit,
        offset: params.offset,
        order: params.order,
        where,
      })
    ).filter((p) =>
      params.modelId ? p.source?.modelId === params.modelId : true
    );

    const responseProperties: Array<AsyncReturnType<Property["apiData"]>> = [];
    const responseExamples: { [id: string]: string[] } = {};

    for (const property of properties) {
      const apiData = await property.apiData();
      responseProperties.push(apiData);

      if (includeExamples) {
        const examples = await RecordProperty.findAll({
          where: {
            propertyId: property.id,
            rawValue: { [Op.not]: null },
            ...(params.state === "invalid"
              ? {
                  invalidReason: {
                    [Op.not]: null,
                  },
                }
              : {}),
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
  name = "properties:options";
  description = "enumerate the options for creating a new property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };

  async runWithinTransaction() {
    return { types: Property.rawAttributes.type.values };
  }
}

export class PropertyGroups extends AuthenticatedAction {
  name = "property:groups";
  description = "enumerate the groups using this property in their rules";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };
  inputs = { id: { required: true } };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertyGroups>;
  }) {
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
  name = "property:create";
  description = "create a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "write" };
  inputs = {
    id: { required: false },
    key: { required: false },
    type: { required: true },
    unique: { required: false, formatter: APIData.ensureBoolean },
    isArray: { required: false },
    state: { required: false },
    sourceId: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    filters: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertyCreate>;
  }) {
    const property = await Property.create({
      id: params.id,
      key: params.key,
      type: params.type,
      unique: params.unique,
      isArray: params.isArray,
      sourceId: params.sourceId,
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
  name = "property:edit";
  description = "edit a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "write" };
  inputs = {
    id: { required: true },
    key: { required: false },
    type: { required: false },
    unique: { required: false, formatter: APIData.ensureBoolean },
    isArray: { required: false },
    state: { required: false },
    sourceId: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    filters: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<PropertyEdit> }) {
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

export class PropertyFilterOptions extends AuthenticatedAction {
  name = "property:filterOptions";
  description = "view a the filter options for a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertyFilterOptions>;
  }) {
    const property = await Property.findById(params.id);

    const options = await FilterHelper.pluginFilterOptions(property);
    return {
      options: options,
      optionDescriptions: await buildPropertyFilterDictionary(options),
    };
  }
}

export class PropertyView extends AuthenticatedAction {
  name = "property:view";
  description = "view a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<PropertyView> }) {
    const property = await Property.findById(params.id);
    const source = await property.$get("source", { scope: null });

    return {
      property: await property.apiData(),
      source: await source.apiData(),
    };
  }
}

export class PropertyPluginOptions extends AuthenticatedAction {
  name = "property:pluginOptions";
  description = "view the plugin options for a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };
  inputs = {
    id: { required: true },
    options: { required: false, formatter: APIData.ensureObject },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertyPluginOptions>;
  }) {
    const property = await Property.findById(params.id);
    return { pluginOptions: await property.pluginOptions(params.options) };
  }
}

export class PropertyRecordPreview extends AuthenticatedAction {
  name = "property:recordPreview";
  description = "view a property's new options against a record";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "read" };
  inputs = {
    id: { required: true },
    recordId: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    filters: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertyRecordPreview>;
  }) {
    let record: GrouparooRecord;

    const property = await Property.findById(params.id);
    const source = await property.$get("source", { scope: null });

    if (params.recordId) {
      record = await GrouparooRecord.findById(params.recordId);
    } else {
      record = await GrouparooRecord.findOne({
        where: { modelId: source.modelId },
        order: [["id", "asc"]],
      });
      if (!record) {
        return { errorMessage: "No records found" };
      }
    }

    const apiData = await record.apiData();

    let newPropertyValues: Array<string | number | boolean | Date> = [];
    let errorMessage: string;
    try {
      newPropertyValues =
        (await source.importRecordProperty(
          record,
          property,
          params.options,
          params.filters
        )) ?? [];
    } catch (error) {
      errorMessage = error.toString();
    }

    apiData.properties[property.key] = {
      id: property.id,
      state: null,
      values: newPropertyValues,
      invalidValue: null,
      invalidReason: null,
      configId: property.getConfigId(),
      type: property.type,
      unique: property.unique,
      isPrimaryKey: property.isPrimaryKey,
      isArray: property.isArray,
      valueChangedAt: null,
      confirmedAt: null,
      stateChangedAt: null,
      startedAt: null,
      createdAt: null,
      updatedAt: null,
    };

    const groups = await record.$get("groups");
    const destinations = await DestinationOps.relevantFor(record, groups);

    return {
      errorMessage,
      record: apiData,
      groups: await Promise.all(groups.map((group) => group.apiData())),
      destinations: await Promise.all(
        destinations.map((destination) => destination.apiData(false, false))
      ),
    };
  }
}

export class PropertyTest extends AuthenticatedAction {
  name = "property:test";
  description = "test a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<PropertyTest> }) {
    const property = await Property.findById(params.id);

    return { test: (await property.test()) || true };
  }
}

export class PropertyDestroy extends AuthenticatedAction {
  name = "property:destroy";
  description = "destroy a property";
  outputExample = {};
  permission: ActionPermission = { topic: "property", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PropertyDestroy>;
  }) {
    const property = await Property.findById(params.id);
    await property.destroy();
    await ConfigWriter.run();
    return { success: true };
  }
}

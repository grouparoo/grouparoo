import { api, ParamsFrom, log } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { App } from "../models/App";
import { Source } from "../models/Source";
import { GrouparooRecord } from "../models/GrouparooRecord";
import {
  GrouparooPlugin,
  PluginConnection,
  PluginConnectionApiData,
} from "../classes/plugin";
import { OptionHelper } from "../modules/optionHelper";
import { ConfigWriter } from "../modules/configWriter";
import { Property, PropertyTypes } from "../models/Property";
import { AsyncReturnType } from "type-fest";
import { TableSpeculation } from "../modules/tableSpeculation";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { WhereAttributeHash } from "sequelize";
import { getGrouparooRunMode } from "../modules/runMode";

export class SourcesList extends AuthenticatedAction {
  name = "sources:list";
  description = "list all the sources";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    modelId: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["appId", "desc"],
        ["createdAt", "asc"],
      ],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<SourcesList> }) {
    const where: WhereAttributeHash = {};
    if (params.state) where["state"] = params.state;
    if (params.modelId) where["modelId"] = params.modelId;

    const sources = await Source.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await Source.scope(null).count({ where });

    return {
      total,
      sources: await Promise.all(sources.map((source) => source.apiData())),
    };
  }
}

export class SourceConnectionApps extends AuthenticatedAction {
  name = "sources:connectionApps";
  description =
    "enumerate the connection and app pairs for creating a new source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {};

  async runWithinTransaction() {
    const apps = await App.findAll();
    const existingAppTypes = apps.map((a) => a.type);

    const connectionApps: {
      app: AsyncReturnType<App["apiData"]>;
      connection: PluginConnectionApiData;
    }[] = [];

    let importConnections: PluginConnection[] = [];
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections
          .filter((c) => c.direction === "import")
          .filter((c) => {
            let match = false;
            for (const app of c.apps) {
              if (existingAppTypes.includes(app)) match = true;
            }
            return match;
          })
          .map((c) => importConnections.push(c));
      }
    });

    for (const app of apps) {
      for (const connection of importConnections) {
        if (connection.apps.includes(app.type)) {
          const methods = Object.keys(connection.methods).filter(
            (key: keyof PluginConnection["methods"]) =>
              typeof connection.methods[key] === "function"
          );
          connectionApps.push({
            app: await app.apiData(),
            connection: {
              ...connection,
              methods,
            },
          });
        }
      }
    }

    const environmentVariableOptions =
      OptionHelper.getEnvironmentVariableOptionsForTopic("source");

    return { connectionApps, environmentVariableOptions };
  }
}

export class SourceCreate extends AuthenticatedAction {
  name = "source:create";
  description = "create a source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    appId: { required: true },
    modelId: { required: true },
    name: { required: false },
    type: { required: true },
    state: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    mapping: { required: false, formatter: APIData.ensureObject },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<SourceCreate> }) {
    const source = await Source.create({
      appId: params.appId,
      modelId: params.modelId,
      name: params.name,
      type: params.type,
    });

    if (params.options) await source.setOptions(params.options);
    if (params.mapping) await source.setMapping(params.mapping);
    if (params.state) await source.update({ state: params.state });

    await ConfigWriter.run();

    return { source: await source.apiData() };
  }
}

export class SourceView extends AuthenticatedAction {
  name = "source:view";
  description = "view a source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<SourceView> }) {
    const source = await Source.findById(params.id);
    return { source: await source.apiData() };
  }
}

export class SourceEdit extends AuthenticatedAction {
  name = "source:edit";
  description = "edit a source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    id: { required: true },
    appId: { required: false },
    name: { required: false },
    type: { required: false },
    state: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    mapping: { required: false, formatter: APIData.ensureObject },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<SourceEdit> }) {
    const source = await Source.findById(params.id);
    if (params.options) await source.setOptions(params.options);
    if (params.mapping) await source.setMapping(params.mapping);

    await source.update(params);

    await ConfigWriter.run();

    return { source: await source.apiData() };
  }
}

export class SourceGenerateSampleRecords extends AuthenticatedAction {
  name = "source:generateSampleRecords";
  description = "create 3 sample records for this model";
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = { id: { required: true } };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SourceGenerateSampleRecords>;
  }) {
    const source = await Source.findById(params.id);

    if (getGrouparooRunMode() !== "cli:config")
      throw new Error(`this action is only valid in cli:config mode`);
    if (source.state !== "ready") throw new Error(`source is not ready`);
    if (!(await source.previewAvailable()))
      throw new Error(`source does not provide a preview`);

    let attempt = 0;
    let records: GrouparooRecord[] = [];
    const mapping = await source.getMapping();
    const mappingKey = Object.keys(mapping)[0];
    const mappingValue = Object.values(mapping)[0];
    const preview = await source.sourcePreview();

    while (records.length < 3 && attempt < preview.length) {
      const value = preview[attempt][mappingKey];
      if (value) {
        const record = new GrouparooRecord({ modelId: source.modelId });
        await record.save();
        try {
          await record.addOrUpdateProperties({ [mappingValue]: value });
          records.push(record);
        } catch (error) {
          log(error, "error");
          await record.destroy();
        }
      }

      attempt++;
    }

    return {
      records: await Promise.all(records.map((record) => record.apiData())),
    };
  }
}

export class SourceBootstrapUniqueProperty extends AuthenticatedAction {
  name = "source:bootstrapUniqueProperty";
  description =
    "bootstrap a new unique record property for this source before the mapping is set";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    id: { required: true },
    key: { required: false },
    type: {
      required: false,
      formatter: (p: unknown) => p as typeof PropertyTypes[number],
    },
    mappedColumn: { required: true },
    sourceOptions: { required: false, formatter: APIData.ensureObject },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SourceBootstrapUniqueProperty>;
  }) {
    const source = await Source.findById(params.id);

    const property = await source.bootstrapUniqueProperty({
      mappedColumn: params.mappedColumn,
      key: params.key,
      type: params.type,
      sourceOptions: params.sourceOptions,
    });

    await ConfigWriter.run();

    return {
      source: await source.apiData(),
      property: await property.apiData(),
    };
  }
}

export class SourceConnectionOptions extends AuthenticatedAction {
  name = "source:connectionOptions";
  description = "return option choices from this source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    id: { required: true },
    options: { required: false, formatter: APIData.ensureObject },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SourceConnectionOptions>;
  }) {
    const source = await Source.findById(params.id);
    return { options: await source.sourceConnectionOptions(params.options) };
  }
}

export class SourcePreview extends AuthenticatedAction {
  name = "source:preview";
  description = "preview the data from this source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    id: { required: true },
    options: { required: false, formatter: APIData.ensureObject },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SourcePreview>;
  }) {
    const source = await Source.findById(params.id);
    const model = await source.$get("model");
    const preview = await source.sourcePreview(params.options);
    const existingProperties: Property[] = await Property.findAll();

    const columnSpeculation: {
      [column: string]: {
        suggestedPropertyKey?: string;
        type: typeof PropertyTypes[number];
        isUnique: boolean;
      };
    } = {};
    if (preview.length > 0) {
      const keys = Object.keys(preview[0]);
      for (const key of keys) {
        const suggestedPropertyKey = TableSpeculation.suggestKey(
          key,
          model,
          existingProperties
        );

        columnSpeculation[key] = {
          suggestedPropertyKey,
          isUnique: TableSpeculation.isUniqueColumn(key),
          type: TableSpeculation.columnType(
            key,
            preview.map((row) => row[key])
          ),
        };
      }
    }

    return { preview, columnSpeculation };
  }
}

export class SourceDefaultPropertyOptions extends AuthenticatedAction {
  name = "source:defaultPropertyOptions";
  description = "view the default plugin options for a source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SourceDefaultPropertyOptions>;
  }) {
    const source = await Source.findById(params.id);
    return { defaultPropertyOptions: await source.defaultPropertyOptions() };
  }
}

export class SourceDestroy extends AuthenticatedAction {
  name = "source:destroy";
  description = "destroy a source";
  outputExample = {};
  permission: ActionPermission = { topic: "source", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SourceDestroy>;
  }) {
    const source = await Source.findById(params.id);
    await source.destroy();
    await ConfigWriter.run();
    return { success: true };
  }
}

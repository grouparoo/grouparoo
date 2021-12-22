import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { App } from "../models/App";
import { Source } from "../models/Source";
import {
  GrouparooPlugin,
  PluginConnection,
  PluginConnectionApiData,
} from "../classes/plugin";
import { OptionHelper } from "../modules/optionHelper";
import { ConfigWriter } from "../modules/configWriter";
import { PropertyTypes } from "../models/Property";
import { AsyncReturnType } from "type-fest";
import { TableSpeculation } from "../modules/tableSpeculation";
import { APIData } from "../modules/apiData";

export class SourcesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "sources:list";
    this.description = "list all the sources";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      state: { required: false },
      modelId: { required: false },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [
          ["appId", "desc"],
          ["createdAt", "asc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
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
  constructor() {
    super();
    this.name = "sources:connectionApps";
    this.description =
      "enumerate the connection and app pairs for creating a new source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {};
  }

  async runWithinTransaction() {
    const apps = await App.findAll();
    const existingAppTypes = apps.map((a) => a.type);

    const connectionApps: Array<{
      app: AsyncReturnType<App["apiData"]>;
      connection: PluginConnectionApiData;
    }> = [];

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
            (key) => typeof connection.methods[key] === "function"
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
  constructor() {
    super();
    this.name = "source:create";
    this.description = "create a source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      appId: { required: true },
      modelId: { required: true },
      name: { required: false },
      type: { required: true },
      state: { required: false },
      options: { required: false, formatter: APIData.ensureObject },
      mapping: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
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
  constructor() {
    super();
    this.name = "source:view";
    this.description = "view a source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const source = await Source.findById(params.id);
    return { source: await source.apiData() };
  }
}

export class SourceEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:edit";
    this.description = "edit a source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      id: { required: true },
      appId: { required: false },
      name: { required: false },
      type: { required: false },
      state: { required: false },
      options: { required: false, formatter: APIData.ensureObject },
      mapping: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const source = await Source.findById(params.id);
    if (params.options) await source.setOptions(params.options);
    if (params.mapping) await source.setMapping(params.mapping);

    await source.update(params);

    await ConfigWriter.run();

    return { source: await source.apiData() };
  }
}

export class SourceBootstrapUniqueProperty extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:bootstrapUniqueProperty";
    this.description =
      "bootstrap a new unique record property for this source before the mapping is set";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      id: { required: true },
      key: { required: false },
      type: { required: false },
      mappedColumn: { required: true },
      sourceOptions: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
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

export class sourceConnectionOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:connectionOptions";
    this.description = "return option choices from this source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      id: { required: true },
      options: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const source = await Source.findById(params.id);
    return { options: await source.sourceConnectionOptions(params.options) };
  }
}

export class SourcePreview extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:preview";
    this.description = "preview the data from this source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      id: { required: true },
      options: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const source = await Source.findById(params.id);
    const preview = await source.sourcePreview(params.options);

    const columnSpeculation: {
      [column: string]: {
        type: typeof PropertyTypes[number];
        isUnique: boolean;
      };
    } = {};
    if (preview.length > 0) {
      const keys = Object.keys(preview[0]);
      for (const key of keys) {
        columnSpeculation[key] = {
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
  constructor() {
    super();
    this.name = "source:defaultPropertyOptions";
    this.description = "view the default plugin options for a source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const source = await Source.findById(params.id);
    return { defaultPropertyOptions: await source.defaultPropertyOptions() };
  }
}

export class SourceDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:destroy";
    this.description = "destroy a source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const source = await Source.findById(params.id);
    await source.destroy();
    await ConfigWriter.run();
    return { success: true };
  }
}

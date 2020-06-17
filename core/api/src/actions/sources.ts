import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { App } from "../models/App";
import { Source } from "../models/Source";
import { GrouparooPlugin } from "../classes/plugin";

export class SourcesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "sources:list";
    this.description = "list all the sources";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: false,
        default: [
          ["appGuid", "desc"],
          ["createdAt", "asc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const where = {};

    if (params.state) {
      where["state"] = params.state;
    }

    const sources = await Source.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.sources = await Promise.all(
      sources.map(async (source) => source.apiData())
    );

    response.total = await Source.scope(null).count({ where });
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

  async run({ response }) {
    const apps = await App.findAll();
    const existingAppTypes = apps.map((a) => a.type);

    let importConnections = [];
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections
          .filter((c) => c.direction === "import")
          .filter((c) => existingAppTypes.includes(c.app))
          .map((c) => importConnections.push(c));
      }
    });

    const connectionApps = [];
    for (const i in apps) {
      for (const j in importConnections) {
        if (apps[i].type === importConnections[j].app) {
          connectionApps.push({
            app: await apps[i].apiData(),
            connection: importConnections[j],
          });
        }
      }
    }

    response.connectionApps = connectionApps;
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
      appGuid: { required: true },
      name: { required: false },
      type: { required: true },
      state: { required: false },
      options: { required: false },
      mapping: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.create({
      appGuid: params.appGuid,
      name: params.name,
      type: params.type,
    });
    if (params.options) {
      await source.setOptions(params.options);
    }
    if (params.mapping) {
      await source.setMapping(params.mapping);
    }

    if (params.state) {
      await source.update({ state: params.state });
    }

    response.source = await source.apiData();
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
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const source = await Source.findByGuid(params.guid);
    response.source = await source.apiData();
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
      guid: { required: true },
      appGuid: { required: false },
      name: { required: false },
      type: { required: false },
      state: { required: false },
      options: { required: false },
      mapping: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.findByGuid(params.guid);
    if (params.options) {
      await source.setOptions(params.options);
    }
    if (params.mapping) {
      await source.setMapping(params.mapping);
    }
    await source.update(params);
    response.source = await source.apiData();
  }
}

export class SourceBootstrapUniqueProfilePropertyRule extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:bootstrapUniqueProfilePropertyRule";
    this.description =
      "bootstrap a new unique profile property for this source before the mapping is set";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "write" };
    this.inputs = {
      guid: { required: true },
      key: { required: true },
      type: { required: true },
      mappedColumn: { required: true },
    };
  }

  async run({ params, response }) {
    const source = await Source.findByGuid(params.guid);

    const rule = await source.bootstrapUniqueProfilePropertyRule(
      params.key,
      params.type,
      params.mappedColumn
    );
    response.profilePropertyRule = await rule.apiData();
    response.source = await source.apiData();
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
      guid: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.findByGuid(params.guid);

    const options =
      typeof params.options === "string"
        ? JSON.parse(params.options)
        : params.options;

    response.options = await source.sourceConnectionOptions(options);
  }
}

export class sourcePreview extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "source:preview";
    this.description = "preview the data from this source";
    this.outputExample = {};
    this.permission = { topic: "source", mode: "read" };
    this.inputs = {
      guid: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.findByGuid(params.guid);

    const options =
      typeof params.options === "string"
        ? JSON.parse(params.options)
        : params.options;
    response.preview = await source.sourcePreview(options);
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
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const source = await Source.findByGuid(params.guid);
    await source.destroy();
    response.success = true;
  }
}

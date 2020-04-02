import { Action, api } from "actionhero";
import { App } from "../models/App";
import { Source } from "../models/Source";
import { GrouparooPlugin } from "../classes/plugin";

export class SourcesList extends Action {
  constructor() {
    super();
    this.name = "sources:list";
    this.description = "list all the sources";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: true,
        default: [
          ["appGuid", "desc"],
          ["createdAt", "asc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const sources = await Source.findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.sources = await Promise.all(
      sources.map(async (source) => source.apiData())
    );
    response.total = await Source.count();
  }
}

export class SourceConnectionApps extends Action {
  constructor() {
    super();
    this.name = "sources:connectionApps";
    this.description =
      "enumerate the connection and app pairs for creating a new source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
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

export class SourceCreate extends Action {
  constructor() {
    super();
    this.name = "source:create";
    this.description = "create a source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      appGuid: { required: true },
      name: { required: false },
      type: { required: true },
      state: { required: false },
      remoteProfileIdColumn: { required: false },
      remoteProfilePropertyRuleGuid: { required: false },
      options: { required: false },
      mapping: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.create(params);
    if (params.options) {
      await source.setOptions(params.options);
    }
    if (params.mapping) {
      await source.setMapping(params.mapping);
    }
    response.source = await source.apiData();
  }
}

export class SourceView extends Action {
  constructor() {
    super();
    this.name = "source:view";
    this.description = "view a source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const source = await Source.findOne({ where: { guid: params.guid } });
    if (!source) {
      throw new Error("source not found");
    }
    response.source = await source.apiData();
  }
}

export class SourceEdit extends Action {
  constructor() {
    super();
    this.name = "source:edit";
    this.description = "edit a source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
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
    const source = await Source.findOne({ where: { guid: params.guid } });
    if (!source) {
      throw new Error("source not found");
    }
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

export class SourceBootstrapUniqueProfilePropertyRule extends Action {
  constructor() {
    super();
    this.name = "source:bootstrapUniqueProfilePropertyRule";
    this.description =
      "bootstrap a new unique profile property for this source before the mapping is set";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
    this.inputs = {
      guid: { required: true },
      key: { required: true },
      type: { required: true },
    };
  }

  async run({ params, response }) {
    const source = await Source.findOne({ where: { guid: params.guid } });
    if (!source) {
      throw new Error("source not found");
    }

    const rule = await source.bootstrapUniqueProfilePropertyRule(
      params.key,
      params.type
    );
    response.profilePropertyRule = await rule.apiData();
    response.source = await source.apiData();
  }
}

export class sourceConnectionOptions extends Action {
  constructor() {
    super();
    this.name = "source:connectionOptions";
    this.description = "return option choices from this source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.findOne({ where: { guid: params.guid } });
    if (!source) {
      throw new Error("source not found");
    }

    response.options = await source.sourceConnectionOptions();
  }
}

export class sourcePreview extends Action {
  constructor() {
    super();
    this.name = "source:preview";
    this.description = "preview the data from this source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const source = await Source.findOne({ where: { guid: params.guid } });
    if (!source) {
      throw new Error("source not found");
    }

    const options =
      typeof params.options === "string"
        ? JSON.parse(params.options)
        : params.options;
    response.preview = await source.sourcePreview(options);
  }
}

export class SourceDestroy extends Action {
  constructor() {
    super();
    this.name = "source:destroy";
    this.description = "destroy a source";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const source = await Source.findOne({ where: { guid: params.guid } });
    if (!source) {
      throw new Error("source not found");
    }
    await source.destroy();
    response.success = true;
  }
}

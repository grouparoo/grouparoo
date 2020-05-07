import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { App } from "../models/App";
import { GrouparooPlugin } from "../classes/plugin";

export class AppsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "apps:list";
    this.description = "list all the apps";
    this.permission = { topic: "app", mode: "read" };
    this.outputExample = {};
    this.inputs = {
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: true,
        formatter: JSON.parse,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const where = {};

    if (params.state) {
      where["state"] = params.state;
    }

    const apps = await App.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.apps = await Promise.all(apps.map(async (app) => app.apiData()));
    response.total = await App.scope(null).count({ where });
  }
}

export class AppOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:options";
    this.description = "enumerate the options for creating a new app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {};
  }

  async run({ response }) {
    response.types = [];
    api.plugins.plugins.map((plugin: GrouparooPlugin) => {
      if (plugin.apps) {
        plugin.apps.map((app) => {
          response.types.push({
            name: app.name,
            options: app.options,
            plugin: { name: plugin.name, icon: plugin.icon },
          });
        });
      }
    });
  }
}

export class AppOptionOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:optionOptions";
    this.description = "return option choices from this app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const app = await App.findByGuid(params.guid);

    response.options = await app.appOptions();
  }
}

export class AppCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:create";
    this.description = "create an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      name: { required: false },
      type: { required: true },
      state: { required: false },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const app = await App.create({
      name: params.name,
      type: params.type,
    });

    if (params.options) {
      await app.setOptions(params.options);
    }

    if (params.state) {
      await app.update({ state: params.state });
    }

    response.app = await app.apiData();
  }
}

export class AppEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:edit";
    this.description = "edit an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      guid: { required: true },
      name: { required: false },
      type: { required: false },
      state: { required: false },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const app = await App.findByGuid(params.guid);
    if (params.options) {
      await app.setOptions(params.options);
    }
    await app.update(params);

    response.app = await app.apiData();
  }
}

export class AppTest extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:test";
    this.description = "test the options passed to an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      guid: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const app = await App.findByGuid(params.guid);
    let { result, error } = await app.test(params.options);
    if (error) {
      error = String(error);
    }
    response.test = { result, error };
    response.app = await app.apiData();
  }
}

export class AppView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:view";
    this.description = "view an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const app = await App.findByGuid(params.guid);
    response.app = await app.apiData();
  }
}

export class AppDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:destroy";
    this.description = "destroy an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const app = await App.findByGuid(params.guid);
    await app.destroy();
    response.success = true;
  }
}

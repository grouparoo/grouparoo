import { Action, api } from "actionhero";
import { App } from "../models/App";
import { GrouparooPlugin } from "../classes/plugin";

export class AppsList extends Action {
  constructor() {
    super();
    this.name = "apps:list";
    this.description = "list all the apps";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: true,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const apps = await App.findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.apps = await Promise.all(apps.map(async (app) => app.apiData()));
    response.total = await App.count();
  }
}

export class AppOptions extends Action {
  constructor() {
    super();
    this.name = "app:options";
    this.description = "enumerate the options for creating a new app";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
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

export class AppCreate extends Action {
  constructor() {
    super();
    this.name = "app:create";
    this.description = "create an app";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      name: { required: false },
      type: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const transaction = await api.sequelize.transaction();

    try {
      const app = await App.create(params, { transaction });

      if (params.options) {
        await app.setOptions(params.options);
      }

      await transaction.commit();

      response.app = await app.apiData();
      response.app.options = await app.getOptions();
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }
}

export class AppEdit extends Action {
  constructor() {
    super();
    this.name = "app:edit";
    this.description = "edit an app";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
      name: { required: false },
      type: { required: false },
      state: { required: false },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const app = await App.findOne({ where: { guid: params.guid } });
    if (!app) {
      throw new Error("app not found");
    }
    await app.update(params);
    if (params.options) {
      await app.setOptions(params.options);
    }

    response.app = await app.apiData();
    response.app.options = await app.getOptions();
  }
}

export class AppTest extends Action {
  constructor() {
    super();
    this.name = "app:test";
    this.description = "test the options passed to an app";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const app = await App.findOne({ where: { guid: params.guid } });
    if (!app) {
      throw new Error("app not found");
    }

    let { result, error } = await app.test(params.options);
    if (error) {
      error = String(error);
    }
    response.test = { result, error };
    response.app = await app.apiData();
    response.app.options = await app.getOptions();
  }
}

export class AppView extends Action {
  constructor() {
    super();
    this.name = "app:view";
    this.description = "view an app";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const app = await App.findOne({ where: { guid: params.guid } });
    if (!app) {
      throw new Error("app not found");
    }
    response.app = await app.apiData();
    response.app.options = await app.getOptions();
  }
}

export class AppDestroy extends Action {
  constructor() {
    super();
    this.name = "app:destroy";
    this.description = "destroy an app";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const app = await App.findOne({ where: { guid: params.guid } });
    if (!app) {
      throw new Error("app not found");
    }
    await app.destroy();
    response.success = true;
  }
}

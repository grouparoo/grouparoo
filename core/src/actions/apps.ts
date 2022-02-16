import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { App } from "../models/App";
import { OptionHelper } from "../modules/optionHelper";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";
import { WhereAttributeHash } from "sequelize";

export class AppsList extends AuthenticatedAction {
  name = "apps:list";
  description = "list all the apps";
  permission: ActionPermission = { topic: "app", mode: "read" };
  outputExample = {};
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["name", "desc"],
        ["createdAt", "desc"],
      ],
    },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppsList> }) {
    const where: WhereAttributeHash = {};

    if (params.state) where["state"] = params.state;
    const total = await App.scope(null).count({ where });

    const apps = await App.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total,
      apps: await Promise.all(apps.map(async (app) => app.apiData())),
    };
  }
}

export class AppOptions extends AuthenticatedAction {
  name = "app:options";
  description = "return option choices from this app";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppOptions> }) {
    const environmentVariableOptions =
      OptionHelper.getEnvironmentVariableOptionsForTopic("app");
    const app = await App.findById(params.id);
    const { pluginApp } = await app.getPlugin();
    const pluginOptions = pluginApp.options;
    return {
      options: await app.appOptions(),
      pluginOptions,
      environmentVariableOptions,
    };
  }
}

export class AppCreate extends AuthenticatedAction {
  name = "app:create";
  description = "create an app";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };
  inputs = {
    name: { required: false },
    type: { required: true },
    state: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppCreate> }) {
    const app = await App.create({
      name: params.name,
      type: params.type,
    });

    if (params.options) await app.setOptions(params.options);
    if (params.state) await app.update({ state: params.state });

    await ConfigWriter.run();

    return { app: await app.apiData() };
  }
}

export class AppEdit extends AuthenticatedAction {
  name = "app:edit";
  description = "edit an app";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };
  inputs = {
    id: { required: true },
    name: { required: false },
    type: { required: false },
    state: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppEdit> }) {
    const app = await App.findById(params.id);
    if (params.options) await app.setOptions(params.options);
    await app.update(params);

    await ConfigWriter.run();

    return { app: await app.apiData() };
  }
}

export class AppTest extends AuthenticatedAction {
  name = "app:test";
  description = "test the options passed to an app";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };
  inputs = {
    id: { required: true },
    options: { required: false, formatter: APIData.ensureObject },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppTest> }) {
    const app = await App.findById(params.id);
    const test = await app.test(params.options);
    if (test.error) test.error = String(test.error);

    return {
      test,
      app: await app.apiData(),
    };
  }
}

export class AppView extends AuthenticatedAction {
  name = "app:view";
  description = "view an app";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppView> }) {
    const app = await App.findById(params.id);
    return { app: await app.apiData() };
  }
}

export class AppDestroy extends AuthenticatedAction {
  name = "app:destroy";
  description = "destroy an app";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<AppDestroy> }) {
    const app = await App.findById(params.id);
    await app.destroy();

    await ConfigWriter.run();

    return { success: true };
  }
}

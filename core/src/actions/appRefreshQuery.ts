import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { AppRefreshQuery } from "../models/AppRefreshQuery";
import { GrouparooPlugin, PluginApp } from "../classes/plugin";
import { OptionHelper } from "../modules/optionHelper";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";

export class AppRefreshQueriesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "appRefreshQueries:list";
    this.description = "list all the appRefreshQueries";
    this.permission = { topic: "app", mode: "read" };
    this.outputExample = {};
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      state: { required: false },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [
          ["appId", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};

    if (params.state) where["state"] = params.state;
    const total = await AppRefreshQuery.scope(null).count({ where });

    const appRefreshQueries = await AppRefreshQuery.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total,
      appRefreshQueries: await Promise.all(
        appRefreshQueries.map(async (appRefreshQuery) => {
          appRefreshQuery.apiData();
        })
      ),
    };
  }
}

export class AppRefreshQueryCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "appRefreshQuery:create";
    this.description = "create an app refresh query";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      appId: { required: true },
      refreshQuery: { required: false },
      state: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const appRefreshQuery = await AppRefreshQuery.create({
      appId: params.appId,
    });
    if (params.refreshQuery)
      await appRefreshQuery.update({ refreshQuery: params.refreshQuery });
    if (params.state) await appRefreshQuery.update({ state: params.state });

    await ConfigWriter.run();

    return { appRefreshQuery: await appRefreshQuery.apiData() };
  }
}

export class AppRefreshQueryEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "appRefreshQuery:edit";
    this.description = "edit an app query refresh";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      id: { required: true },
      appId: { required: false },
      refreshQuery: { required: false },
      state: { required: false },
    };
  }
  async runWithinTransaction({ params }) {
    const appRefreshQuery = await AppRefreshQuery.findById(params.id);
    await appRefreshQuery.update(params);

    await ConfigWriter.run();

    return { appRefreshQuery: await appRefreshQuery.apiData() };
  }
}

export class AppRefreshQueryTest extends AuthenticatedAction {
    constructor(){
        super();
        this.name = "appRefreshQuery:test";
        this.description = 
    }
}
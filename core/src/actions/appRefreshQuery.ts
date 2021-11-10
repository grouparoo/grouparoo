import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { AppRefreshQuery } from "../models/AppRefreshQuery";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";
import { AppRefreshQueryOps } from "../modules/ops/appRefreshQuery";
import { CLS } from "../modules/cls";

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
        appRefreshQueries.map((appRefreshQuery) => {
          return appRefreshQuery.apiData();
        })
      ),
    };
  }
}

export class AppRefreshQueryQuery extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "appRefreshQuery:query";
    this.description =
      "run an appRefreshQuery to check for new data and enqueue schedules if needed";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = { id: { required: true } };
  }
  async runWithinTransaction({ params }) {
    let valueUpdated: Boolean = false;
    const appRefreshQuery = await AppRefreshQuery.findById(params.id);
    if (!appRefreshQuery)
      throw new Error(`No app refresh query ${params.id} founds`);

    const sampleValue = await AppRefreshQueryOps.runAppQuery(appRefreshQuery);
    await appRefreshQuery.update({ lastConfirmedAt: new Date() });

    if (sampleValue !== appRefreshQuery.value) {
      await appRefreshQuery.update({
        value: sampleValue,
        lastChangedAt: new Date(),
      });
      await AppRefreshQueryOps.triggerSchedules(appRefreshQuery);
      valueUpdated = true;
    }
    return { valueUpdated, appRefreshQuery: await appRefreshQuery.apiData() };
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
  constructor() {
    super();
    this.name = "appRefreshQuery:test";
    this.description = "test the query for a given appRefreshQuery";
    this.permission = { topic: "app", mode: "write" };
    this.outputExample = {};
    this.inputs = {
      id: { required: true },
      refreshQuery: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const appRefreshQuery = await AppRefreshQuery.findById(params.id);
    if (!appRefreshQuery) {
      throw new Error(`cannot find an appRefreshQuery ${params.id}`);
    }

    const test = await appRefreshQuery.test(params.refreshQuery);
    if (test.error) test.error = String(test.error);

    return {
      test,
      appRefreshQuery: await appRefreshQuery.apiData(),
    };
  }
}

export class AppRefreshQueryView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "appRefreshQuery:view";
    this.description = "view an app refresh query";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const appRefreshQuery = await AppRefreshQuery.findById(params.id);
    return { appRefreshQuery: await appRefreshQuery.apiData() };
  }
}

export class AppRefreshQueryDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "appRefreshQuery:destroy";
    this.description = "destroy an appRefreshQuery";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const appRefreshQuery = await AppRefreshQuery.findById(params.id);
    await appRefreshQuery.destroy();

    await ConfigWriter.run();

    return { success: true };
  }
}

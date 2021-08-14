import { api, id, actionheroVersion } from "actionhero";
import path from "path";
import { Setting } from "../models/Setting";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Status } from "../modules/status";

const packageJSON = require(path.join(__dirname, "..", "..", "package.json"));

export class PublicStatus extends OptionallyAuthenticatedAction {
  constructor() {
    super();
    this.name = "status:public";
    this.description = "A basic status endpoint";
    this.permission = { topic: "system", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction() {
    return { status: "ok" };
  }
}

export class PrivateStatus extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "status:private";
    this.description =
      "I will return detailed information about this API server and Resque";
    this.permission = { topic: "system", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction() {
    const clusterName = (
      await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      })
    ).value;

    const samples = await Status.get();

    return {
      clusterName,
      id,
      actionheroVersion,
      packageName: packageJSON.name,
      description: packageJSON.description,
      version: packageJSON.version,
      uptime: new Date().getTime() - api.bootTime,
      metrics: samples,
    };
  }
}

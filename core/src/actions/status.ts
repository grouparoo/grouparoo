import { api, id, actionheroVersion, Action, task } from "actionhero";
import path from "path";
import { Setting } from "../models/Setting";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Status } from "../modules/status";
import { ActionPermission } from "../models/Permission";
import { getGrouparooRunMode } from "../modules/runMode";

const packageJSON = require(path.join(__dirname, "..", "..", "package.json"));

export class PublicStatus extends Action {
  name = "status:public";
  description = "A basic status endpoint";
  outputExample = {};

  async run() {
    return { status: "ok" };
  }
}

export class PrivateStatus extends AuthenticatedAction {
  name = "status:private";
  description =
    "I will return detailed information about this API server and Resque";
  permission: ActionPermission = { topic: "system", mode: "read" };
  outputExample = {};

  async runWithinTransaction() {
    const clusterName = (
      await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      })
    ).value;

    const samples = await Status.get();
    const { leader } = await task.details();
    const runMode = getGrouparooRunMode();

    if (!leader && runMode === "cli:start") {
      throw new Error(
        `no leader for this Grouparoo cluster "${clusterName}" (${runMode})`
      );
    }

    return {
      clusterName,
      id,
      actionheroVersion,
      packageName: packageJSON.name,
      description: packageJSON.description,
      version: packageJSON.version,
      runMode,
      uptime: new Date().getTime() - api.bootTime,
      metrics: samples,
      leader,
    };
  }
}

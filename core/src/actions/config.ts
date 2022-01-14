import { ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { spawnPromise } from "../modules/spawnPromise";
import { ConfigUser } from "../modules/configUser";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { getGrouparooRunMode } from "../modules/runMode";

export class ConfigValidate extends AuthenticatedAction {
  name = "config:validate";
  description = "I validate the local config";
  permission: ActionPermission = { topic: "app", mode: "write" };
  inputs = {
    local: {
      required: true,
      default: "false",
      formatter: APIData.ensureBoolean,
    },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ConfigValidate>;
  }) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "validate",
      params.local === true ? `--validate` : null,
    ]);
  }
}

export class ConfigApply extends AuthenticatedAction {
  name = "config:apply";
  description = "I apply the local config";
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    local: {
      required: true,
      default: false,
      formatter: APIData.ensureBoolean,
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ConfigApply> }) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "apply",
      params.local === true ? `--validate` : null,
    ]);
  }
}

export class ConfigGenerate extends AuthenticatedAction {
  name = "config:generate";
  description = "I generate a new config file";
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    id: { required: true },
    parentId: { required: false },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ConfigGenerate>;
  }) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "generate",
      params.id,
      params.parentId,
    ]);
  }
}

export class ConfigUserCreate extends OptionallyAuthenticatedAction {
  name = "config:user:create";
  description = "I write user details to a .local file.";
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    email: { required: true },
    company: { required: true },
    subscribed: { required: false, formatter: APIData.ensureBoolean },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ConfigUserCreate>;
  }) {
    if (getGrouparooRunMode() !== "cli:config") {
      throw new Error("Action only available in config mode.");
    }
    await ConfigUser.create(params);
    const user = await ConfigUser.get();
    await ConfigWriter.run();
    return { user };
  }
}

import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { spawnPromise } from "../modules/spawnPromise";
import { ConfigUser } from "../modules/configUser";

export class ConfigValidate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "config:validate";
    this.description = "I validate the local config";
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      local: {
        required: true,
        default: "false",
      },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({ params }) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "validate",
      params.local === "true" ? `--validate` : null,
    ]);
  }
}

export class ConfigApply extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "config:apply";
    this.description = "I apply the local config";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      local: {
        required: true,
        default: false,
        formatter: (p) => p.trim() === "true",
      },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({ params }) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "apply",
      params.local === "true" ? `--validate` : null,
    ]);
  }
}

export class ConfigGenerate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "config:generate";
    this.description = "I generate a new config file";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      id: { required: true },
      parentId: { required: false },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({ params }) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "generate",
      params.id,
      params.parentId,
    ]);
  }
}

export class ConfigUserCreate extends OptionallyAuthenticatedAction {
  constructor() {
    super();
    this.name = "config:user:create";
    this.description = "I write user details to a .local file.";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      email: { required: true },
      company: { required: true },
      subscribed: { required: false },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({ params }) {
    await ConfigUser.create(params);
    const user = await ConfigUser.get();
    return { user };
  }
}

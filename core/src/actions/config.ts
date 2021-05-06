import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { spawnPromise } from "../modules/spawnPromise";

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

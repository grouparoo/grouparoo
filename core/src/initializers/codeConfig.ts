import { api, Initializer } from "actionhero";

declare module "actionhero" {
  export interface Api {
    codeConfig: {
      allowLockedModelChanges: boolean;
    };
  }
}

export class CodeConfig extends Initializer {
  constructor() {
    super();
    this.name = "codeConfig";
    this.loadPriority = 10000;
    this.startPriority = 1;
  }

  async initialize() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };
  }

  async start() {
    // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    api.codeConfig.allowLockedModelChanges = false;
  }
}

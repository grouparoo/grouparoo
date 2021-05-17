import { Initializer, api } from "actionhero";
import { APMWrap } from "../modules/apm";

declare module "actionhero" {
  export interface Api {
    apm: {
      wrap: APMWrap;
    };
  }
}

export class APMInitializer extends Initializer {
  constructor() {
    super();
    this.name = "apm";
    this.loadPriority = 1;
  }

  async initialize() {
    api.apm = {
      wrap: async (name, type, data, run) => {
        return run();
      },
    };
  }
}

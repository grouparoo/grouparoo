import { Initializer } from "actionhero";

export class CoreVersionValidator extends Initializer {
  constructor() {
    super();
    this.name = "coreVersionValidator";
    this.startPriority = 2;
  }

  async initialize() {
    const modulePrefixes = Object.keys(require.cache)
      .filter((file) => file.includes("grouparoo/core"))
      .map((file) => file.split("grouparoo/core")[0]);
    const uniqPrefixes = new Set(modulePrefixes);

    if (uniqPrefixes.size > 1) {
      throw new Error("Found multiple versions of @grouparoo/core.");
    }
  }
}

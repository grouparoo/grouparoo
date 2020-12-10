import { Initializer, config, api } from "actionhero";

export class UI extends Initializer {
  constructor() {
    super();
    this.name = "ui";
    this.loadPriority = 1001;
  }

  async initialize() {
    this.setupUiPlugin();
  }

  setupUiPlugin() {
    if (config.next.enabled) {
      api.plugins.announcePlugin("@grouparoo/ui");
    }
  }
}

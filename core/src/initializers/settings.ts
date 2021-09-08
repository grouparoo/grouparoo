import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { SettingOps } from "../modules/ops/setting";

export class SettingsInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "settings";
    this.startPriority = 1;
  }

  async initializeWithinTransaction() {}

  async startWithinTransaction() {
    await SettingOps.prepare();
  }

  async stopWithinTransaction() {}
}

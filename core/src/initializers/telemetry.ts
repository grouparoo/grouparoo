import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { Telemetry } from "../modules/telemetry";
import { api, config } from "actionhero";

export class TelemetryInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async initializeWithinTransaction() {}
  async startWithinTransaction() {}

  async stopWithinTransaction() {
    if (config.general.runMode === "cli:run")
      await Telemetry.send("cli_run", api.process.stopReasons);
  }
}

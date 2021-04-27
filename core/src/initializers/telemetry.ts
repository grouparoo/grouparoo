import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { Telemetry } from "../modules/telemetry";
import { api } from "actionhero";

export class TelemetryInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async initializeWithinTransaction() {}
  async startWithinTransaction() {}

  async stopWithinTransaction() {
    const runMode = process.env.GROUPAROO_RUN_MODE;
    if (runMode === "cli:run")
      await Telemetry.send("cli_run", api.process.stopReasons);
  }
}

import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { Telemetry } from "../modules/telemetry";
import { api } from "actionhero";
import { getGrouparooRunMode } from "../modules/runMode";

export class TelemetryInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async initializeWithinTransaction() {}
  async startWithinTransaction() {}

  async stopWithinTransaction() {
    if (getGrouparooRunMode() === "cli:run")
      await Telemetry.send("cli_run", api.process.stopReasons);
  }
}

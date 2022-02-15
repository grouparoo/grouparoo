import { api } from "actionhero";
import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { Telemetry } from "../modules/telemetry";
import { getGrouparooRunMode } from "../modules/runMode";
import { ConfigUser } from "../modules/configUser";

export class TelemetryInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async initializeWithinTransaction() {}

  async startWithinTransaction() {
    if (getGrouparooRunMode() === "cli:config") {
      await ConfigUser.loadOrStoreCustomerId();
      await Telemetry.send("cli_config");
    }
  }

  async stopWithinTransaction() {
    if (getGrouparooRunMode() === "cli:run")
      await Telemetry.send("cli_run", api.process.stopReasons);
  }
}

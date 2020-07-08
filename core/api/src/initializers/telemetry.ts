// const fetch = require("isomorphic-fetch");
import { Initializer } from "actionhero";
import { plugin } from "../modules/plugin";
import * as UUID from "uuid";

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async start() {
    await plugin.registerSetting(
      "telemetry",
      "customer-guid",
      `tcs_${UUID.v4()}`,
      "A unique, anonymous ID for this Grouparoo cluster."
    );

    await plugin.registerSetting(
      "telemetry",
      "customer-license",
      "",
      "Your Grouparoo License Key (for paid features)."
    );
  }
}

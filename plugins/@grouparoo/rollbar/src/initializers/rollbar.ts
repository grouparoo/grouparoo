import Rollbar from "rollbar";
import { Initializer, api, env, ExceptionReporter } from "actionhero";
import { plugin } from "@grouparoo/core";

const packageJSON = require("./../../package.json");

export class RollbarInitializer extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    if (!process.env.ROLLBAR_ACCESS_TOKEN) return;
    if (env === "test") return; // never enable rollbar when NODE_ENV=test

    plugin.registerPlugin({
      name: packageJSON.name,
    });

    const rollbar = new Rollbar({
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
      environment: env,
      captureUncaught: true,
      captureUnhandledRejections: true,
    });

    const rollbarExceptionReporter: ExceptionReporter = (error: Error) => {
      rollbar.error(error);
    };

    api.exceptionHandlers.reporters.push(rollbarExceptionReporter);
  }
}

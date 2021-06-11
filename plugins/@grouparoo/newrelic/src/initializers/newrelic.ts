import { Initializer, api, ExceptionReporter } from "actionhero";
import { plugin } from "@grouparoo/core";
const packageJSON = require("./../../package.json");

let newrelic;
if (process.env.NEW_RELIC_LICENSE_KEY) newrelic = require("newrelic");

export class NewRelic extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    if (!process.env.NEW_RELIC_LICENSE_KEY) return;

    plugin.registerPlugin({
      name: packageJSON.name,
    });

    // load the newrelic error reporter into actionhero
    const newRelicExceptionReporter: ExceptionReporter = (error) => {
      newrelic.noticeError(error);
    };

    api.exceptionHandlers.reporters.push(newRelicExceptionReporter);

    // configure APM transaction tracing
    plugin.setApmWrap(async function apmWrap(
      name: string,
      type: "action" | "task",
      data: any,
      run: Function
    ) {
      let transaction;

      // HTTP transactions will be auto-instrumented
      if (type === "action" && data?.connection?.type === "web") {
        newrelic.setTransactionName(`action/${name}`);
        newrelic.addCustomAttribute("params", data.params);
      }

      // tasks need manual instrumentation
      if (type === "task" && data?.queue) {
        newrelic.startBackgroundTransaction(`task/${name}`, data.queue, () => {
          transaction = newrelic.getTransaction();
          newrelic.addCustomAttribute("args", data.job.args);
        });
      }

      const response = await run();

      if (transaction) transaction.end();

      return response;
    });
  }
}

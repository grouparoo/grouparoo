import { Initializer, api, action, task } from "actionhero";
import { plugin } from "@grouparoo/core";
const packageJSON = require("./../../package.json");

let newrelic;
if (process.env.NEW_RELIC_LICENSE_KEY) {
  newrelic = require("newrelic");
}

export class NewRelic extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    if (!process.env.NEW_RELIC_LICENSE_KEY) {
      return;
    }

    plugin.registerPlugin({
      name: packageJSON.name,
    });

    const activeBackgroundTransactions: { [name: string]: any } = {};

    // load the newrelic action middleware into actionhero
    action.addMiddleware({
      name: "NewRelic Action Middleware",
      global: true,
      priority: 1,
      preProcessor: (data) => {
        // for now, the node newrelic agent only supports HTTP requests
        if (data.connection.type === "web") {
          newrelic.setTransactionName(`action/${data.actionTemplate.name}`);
          newrelic.addCustomAttribute("params", data.params);
        }
      },
    });

    // load the newrelic task middleware into actionhero
    task.addMiddleware({
      name: "NewRelic Task Middleware",
      global: true,
      priority: 1,
      preProcessor: function () {
        const worker = this.worker;
        const queue = this.queue;
        // NewRelic seems to want the entire function to track as an argument, not a reference
        // As it is, we do not get information about redis/postgres or the call stack tracked...
        // https://docs.newrelic.com/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation
        newrelic.startBackgroundTransaction(
          `task/${worker.job.class}`,
          queue,
          () => {
            activeBackgroundTransactions[
              this.worker.name
            ] = newrelic.getTransaction();
            newrelic.addCustomAttribute("args", this.worker.job.args);
          }
        );
      },

      postProcessor: async function () {
        const transaction = activeBackgroundTransactions[this.worker.name];
        if (transaction) {
          transaction.end();
        }
        delete activeBackgroundTransactions[this.worker.name];
      },
    });

    // load the newrelic error reporter into actionhero
    api.exceptionHandlers.reporters.push((error) => {
      newrelic.noticeError(error);
    });
  }
}

import { Initializer, api, env, action, task } from "actionhero";
import { plugin } from "@grouparoo/core";
const packageJSON = require("./../../package.json");

export class SentryInitializer extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    if (!process.env.SENTRY_DSN) return;
    if (!process.env.SENTRY_TRACE_SAMPLE_RATE) return;
    if (env === "test") return; // never enable sentry when NODE_ENV=test

    const Sentry = await import("@sentry/node");
    const Tracing = await import("@sentry/tracing");

    plugin.registerPlugin({
      name: packageJSON.name,
    });

    function beforeSend(event, hint) {
      const error = hint.originalException;

      // skip reporting some types of errors
      if (error?.code === "AUTHENTICATION_ERROR") return null;
      if (error?.code === "AUTHORIZATION_ERROR") return null;

      return event;
    }

    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: env,
      tracesSampleRate: parseFloat(process.env.SENTRY_TRACE_SAMPLE_RATE),
      release: packageJSON.version,
      integrations: [
        new Sentry.Integrations.Http(),
        new Tracing.Integrations.Postgres(),
      ],
      beforeSend: beforeSend,
    });

    // load the Sentry action middleware into actionhero
    action.addMiddleware({
      name: "Sentry Action Middleware",
      global: true,
      priority: 1,
      preProcessor: (data) => {
        const transaction = Sentry.startTransaction({
          op: "action",
          name: data.actionTemplate.name,
        });
        Sentry.setTag("action", data.actionTemplate.name);
        Sentry.configureScope((scope) => scope.setSpan(transaction));
        data.sentryTransaction = transaction;
      },
      postProcessor: (data) => {
        data?.sentryTransaction.finish();
      },
    });

    // load the Sentry task middleware into actionhero
    task.addMiddleware({
      name: "Sentry Task Middleware",
      global: true,
      priority: 1,
      preProcessor: function () {
        const worker = this.worker;
        Sentry.setTag("task", worker.job.class);

        const transaction = Sentry.startTransaction({
          op: "task",
          name: worker.job.class,
        });
        Sentry.setTag("task", worker.job.class);
        Sentry.configureScope((scope) => scope.setSpan(transaction));
        worker.sentryTransaction = transaction;
      },
      postProcessor: function () {
        const worker = this.worker;
        worker?.sentryTransaction.finish();
      },
    });

    // load the newrelic error reporter into actionhero
    api.exceptionHandlers.reporters.push((error: Error) => {
      Sentry.captureException(error);
    });
  }

  async stop() {
    const Sentry = await import("@sentry/node");
    await Sentry.close(2000);
  }
}

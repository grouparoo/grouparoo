import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import { Initializer, api, env, action, task } from "actionhero";
import { ApiKey, plugin, TeamMember } from "@grouparoo/core";
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

    plugin.registerPlugin({
      name: packageJSON.name,
    });

    function beforeSend(event, hint) {
      const error = hint.originalException;

      // skip reporting some types of errors
      if (error?.code === "AUTHENTICATION_ERROR") return null;
      if (error?.code === "AUTHORIZATION_ERROR") return null;
      if (error?.toString().includes("unknown action or invalid apiVersion")) {
        return null;
      }

      return event;
    }

    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: env,
      tracesSampleRate: parseFloat(process.env.SENTRY_TRACE_SAMPLE_RATE),
      release: packageJSON.version,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
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
          tags: { action: data.actionTemplate.name },
        });

        Sentry.configureScope((scope) => scope.setSpan(transaction));
        data.sentryTransaction = transaction;
      },
      postProcessor: (data) => {
        const transaction = data?.sentryTransaction;
        if (!transaction) return;

        Sentry.configureScope(function (scope) {
          if (data.session.teamMember) {
            const teamMember: TeamMember = data.session.teamMember;
            scope.setUser({ id: teamMember.id, email: teamMember.email });
          } else if (data.session.apiKey) {
            const apiKey: ApiKey = data.session.apiKey;
            scope.setUser({ id: apiKey.id });
          }
        });

        transaction.setHttpStatus(
          data.connection.rawConnection?.responseHttpCode
        );

        transaction.finish();
      },
    });

    // load the Sentry task middleware into actionhero
    task.addMiddleware({
      name: "Sentry Task Middleware",
      global: true,
      priority: 1,
      preProcessor: function () {
        const worker = this.worker;

        const transaction = Sentry.startTransaction({
          op: "task",
          name: worker.job.class,
          tags: { action: worker.job.class },
        });

        Sentry.configureScope((scope) => scope.setSpan(transaction));

        worker.sentryTransaction = transaction;
      },
      postProcessor: function () {
        const worker = this.worker;
        const transaction = worker?.sentryTransaction;
        transaction.finish();
      },
    });

    // load the error reporter into actionhero
    api.exceptionHandlers.reporters.push((error: Error) => {
      Sentry.captureException(error);
    });
  }

  async stop() {
    try {
      await Sentry.close(2000);
    } catch (e) {}
  }
}

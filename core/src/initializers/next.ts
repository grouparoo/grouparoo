import path from "path";
import fs from "fs";
import { Initializer, Connection, api, log, config } from "actionhero";

declare module "actionhero" {
  export interface Api {
    next: {
      app?: any;
      render?: (Connection) => void;
      handle?: (req, res) => void;
    };
  }
}

export class Next extends Initializer {
  constructor() {
    super();
    this.loadPriority = 1000;
    this.startPriority = 899;
    this.stopPriority = 101;
    this.name = "next";
  }

  async initialize() {
    api.next = {
      render: async (connection: Connection) => {
        if (connection.type !== "web") {
          throw new Error('Connections for next.js apps must be of type "web"');
        }
        const { req, res } = connection.rawConnection;
        return api.next.handle(req, res);
      },
    };
  }

  async start() {
    if (config.servers.web.enabled !== true) return;

    if (!config.next.enabled) {
      log("next disabled");
      return;
    }

    if (config.next.dev) {
      log("Running next in development mode...");
    }

    // We don't want to statically import next until we know we need it. It loads a lot and has problems in test mode
    // We also don't want next to be part of grouparoo/core, but to come from the UI plugins (could be locally installed or hoisted)
    const nextWithinPluginPath = path.join(
      config.general.paths.next[0],
      "node_modules",
      "next"
    );
    const next = await import(
      fs.existsSync(nextWithinPluginPath) ? nextWithinPluginPath : "next"
    );

    api.next.app = next.default({
      dev: config.next.dev,
      quiet: config.next.quiet,
      dir: config.general.paths.next[0],
    });

    api.next.handle = api.next.app.getRequestHandler();
    await api.next.app.prepare();
  }

  async stop() {
    if (api.next.app) await api.next.app.close();
  }
}

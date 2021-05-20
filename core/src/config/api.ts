import path from "path";
import { getParentPath } from "../utils/pluginDetails";
import { api } from "actionhero";

export const DEFAULT = {
  general: (config) => {
    const packageJSON = require(path.join(
      __dirname,
      "..",
      "..",
      "package.json"
    ));

    return {
      _toExpand: false,

      apiVersion: packageJSON.version,
      serverName: packageJSON.name,
      // A unique token to your application that servers will use to authenticate to each other
      serverToken: process.env.SERVER_TOKEN ? process.env.SERVER_TOKEN : null,
      // the redis prefix for actionhero's cache objects
      cachePrefix: "grouparoo:cache:",
      // the redis prefix for actionhero's cache/lock objects
      lockPrefix: "grouparoo:lock:",
      // how long will a lock last before it expires (ms)?
      lockDuration: 1000 * 10, // 10 seconds
      // How many pending actions can a single connection be working on
      simultaneousActions: 5,
      // allow connections to be created without remoteIp and remotePort (they will be set to 0)
      enforceConnectionProperties: true,
      // disables the allowing/filtering of client params
      disableParamScrubbing: false,
      // enable action response to logger
      enableResponseLogging: false,
      // params you would like hidden from any logs
      // api.plugins.plugins.map(p => p.apps).filter(a => a).flat().map(a => a.options).flat().filter(o => o.required).map(o => o.key)
      filteredParams: function () {
        const filteredParams = [
          "password",
          "passwordHash",
          "csrfToken",
          "private_key",
        ];

        const requiredAppOptions =
          api?.plugins?.plugins
            .map((p) => p.apps)
            .filter((a) => a)
            .flat()
            .map((a) => a.options)
            .flat()
            .filter((o) => o.required)
            .map((o) => `options.${o.key}`) ?? [];

        return [].concat(filteredParams, requiredAppOptions);
      },
      // responses you would like hidden from any logs. Can be an array of strings or a method that returns an array of strings.
      filteredResponse: [],
      // values that signify missing params
      missingParamChecks: [null, "", undefined],
      // The default filetype to server when a user requests a directory
      directoryFileType: "index.html",
      // What log-level should we use for file requests?
      fileRequestLogLevel: "info",
      // The default priority level given to middleware of all types (action, connection, say, and task)
      defaultMiddlewarePriority: 100,
      // Which channel to use on redis pub/sub for RPC communication
      channel: "actionhero",
      // How long to wait for an RPC call before considering it a failure
      rpcTimeout: 5000,
      // should CLI methods and help include internal ActionHero CLI methods?
      cliIncludeInternal: false,
      // configuration for your actionhero project structure
      paths: {
        action: [path.join(__dirname, "..", "actions")],
        task: [path.join(__dirname, "..", "tasks")],
        server: [path.join(__dirname, "..", "servers")],
        cli: [path.join(__dirname, "..", "bin")],
        initializer: [path.join(__dirname, "..", "initializers")],
        public: [path.join(__dirname, "..", "..", "public")],
        next: [config.next.path],
        pid: [path.join(process.cwd(), "pids")],
        log: process.env.GROUPAROO_LOGS_PATH
          ? [
              path.isAbsolute(process.env.GROUPAROO_LOGS_PATH)
                ? process.env.GROUPAROO_LOGS_PATH
                : path.join(getParentPath(), process.env.GROUPAROO_LOGS_PATH),
            ]
          : [],
        plugin: [path.join(process.cwd(), "..", "node_modules")],
        locale: [path.join(process.cwd(), "locales")],
        test: [path.join(process.cwd(), "__tests__")],
        // for the src and dist paths, assume we are running in compiled mode from `dist`
        src: path.join(process.cwd(), "src"),
        dist: path.join(process.cwd(), "dist"),
      },

      startingChatRooms: {
        "system:status": {},
        "system:cli": {},
        "model:log": {},
        "model:event": {},
      },
    };
  },
};

export const test = {
  general: (config) => {
    return {
      serverToken: `serverToken-${process.env.JEST_WORKER_ID || 0}`,
      developmentMode: true,
      startingChatRooms: {
        defaultRoom: {},
        otherRoom: {},
      },
      paths: {
        locale: [path.join(process.cwd(), "locales")],
      },
      rpcTimeout: 3000,
    };
  },
};

export const production = {
  general: (config) => {
    return {
      fileRequestLogLevel: "debug",
      developmentMode: false,
    };
  },
};

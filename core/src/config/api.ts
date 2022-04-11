import * as path from "path";
import * as fs from "fs";
import { PackageJson } from "type-fest";
import { ActionheroLogLevel, api } from "actionhero";
import { getParentPath } from "../modules/pluginDetails";

const namespace = "general";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  [namespace]: (config: Record<string, any>) => {
    const packageJSON: PackageJson = JSON.parse(
      fs
        .readFileSync(path.join(__dirname, "..", "..", "package.json"))
        .toString()
    );

    return {
      apiVersion: packageJSON.version,
      serverName: packageJSON.name,
      // you can manually set the server id (not recommended)
      id: undefined as string,
      welcomeMessage: `Welcome to the ${packageJSON.name} api`,
      // A unique token to your application that servers will use to authenticate to each other
      serverToken: process.env.SERVER_TOKEN ? process.env.SERVER_TOKEN : null,
      // the redis prefix for Actionhero cache objects
      cachePrefix: "grouparoo:cache:",
      // the redis prefix for actionhero's cache/lock objects
      lockPrefix: "grouparoo:lock:",
      // how long will a lock last before it expires (ms)?
      lockDuration: 1000 * 10, // 10 seconds
      // How many pending actions can a single connection be working on
      simultaneousActions: 5,
      // allow connections to be created without remoteIp and remotePort (they will be set to 0)
      enforceConnectionProperties: true,
      // disables the showing of client params
      disableParamScrubbing: false,
      // enable action response to logger
      enableResponseLogging: false,
      // params you would like hidden from any logs. Can be an array of strings or a method that returns an array of strings.
      filteredParams() {
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
            .filter((o) => o.type === "password")
            .map((o) => `options.${o.key}`) ?? [];

        return [].concat(filteredParams, requiredAppOptions);
      },
      // responses you would like hidden from any logs. Can be an array of strings or a method that returns an array of strings.
      filteredResponse: [] as string[] | (() => string[]),
      // values that signify missing params
      missingParamChecks: [null, "", undefined],
      // The default filetype to server when a user requests a directory
      directoryFileType: "index.html",
      // What log-level should we use for file requests?
      fileRequestLogLevel: "info" as ActionheroLogLevel,
      // The default priority level given to middleware of all types (action, connection, say, and task)
      defaultMiddlewarePriority: 100,
      // Which channel to use on redis pub/sub for RPC communication
      channel: "actionhero",
      // How long to wait for an RPC call before considering it a failure
      rpcTimeout: 5000,
      // should CLI methods and help include internal Actionhero CLI methods?
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
        test: [path.join(process.cwd(), "__tests__")],
        // for the src and dist paths, assume we are running in compiled mode from `dist`
        src: path.join(process.cwd(), "src"),
        dist: path.join(process.cwd(), "dist"),
      },

      startingChatRooms: {
        "system:status": {},
        "system:cli": {},
      },
    };
  },
};

export const test = {
  [namespace]: () => {
    return {
      startingChatRooms: {
        defaultRoom: {},
        otherRoom: {},
      },
      rpcTimeout: 3000,
    };
  },
};

export const production = {
  [namespace]: () => {
    return {
      fileRequestLogLevel: "debug",
    };
  },
};

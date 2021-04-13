import { CLI, api } from "actionhero";
import Colors from "colors/safe";

export namespace GrouparooCLI {
  /** Types */
  export interface LogStatus {
    [key: string]: number[] | string[];
  }

  export type LogStatusArray = Array<{ header: string; status: LogStatus }>;

  /** Settings and Boot Options */

  export function timestampOption(cli: CLI) {
    if (!cli.inputs) cli.inputs = {};
    cli.inputs.timestamps = {
      default: false,
      description: "Should timestamps be prepended to each log line?",
      letter: "t",
      flag: true,
    };

    // we need to set this ENV before the process starts up
    if (
      !process.argv.slice(2).includes("--timestamps") &&
      !process.argv.slice(2).find((a) => a.match(/-.*t/))
    ) {
      process.env.GROUPAROO_LOGS_STDOUT_DISABLE_TIMESTAMP = "true";
    }
  }

  export function jsonOption(cli: CLI) {
    if (!cli.inputs) cli.inputs = {};
    cli.inputs.json = {
      default: false,
      description:
        "Return data as JSON? Use process.env.GROUPAROO_LOG_LEVEL=alert to disable other messages.",
      letter: "j",
      flag: true,
    };
  }

  export function setGrouparooRunMode(cli: CLI) {
    process.env.GROUPAROO_RUN_MODE = `cli:${cli.name}`;
  }

  export function logCLI(name: string, announcePlugins = true) {
    if (announcePlugins) api.plugins.announcePlugins();

    GrouparooCLI.logger.log("");
    GrouparooCLI.logger.log(
      Colors.underline(Colors.bold(`🦘 Grouparoo: ${name}`))
    );
    GrouparooCLI.logger.log("");
  }

  export function disableWebServer() {
    delete api.servers.servers.web;
    delete api.servers.servers.websocket;
  }

  /** Logging */

  /**
   * We do not want to use the actionhero logger for CLI commands, as we do not want this info in the log files.
   * We also want more fine-grained control of log display for the terminal.
   */
  export namespace logger {
    export function log(message) {
      console.log(message);
    }

    export function error(message) {
      console.error(message);
    }

    export function blueBold(s: string) {
      return Colors.blue(Colors.bold(s));
    }

    export function blue(s: string) {
      return Colors.blue(s);
    }

    export function underlineBold(s: string) {
      return Colors.underline(Colors.bold(s));
    }

    export function deCamel(s: string) {
      return s.replace(/([a-z])([A-Z])/g, "$1 $2");
    }

    export function fatal(message: string) {
      logger.error("❌ " + message);
      if (process.env.NODE_ENV !== "test") process.exit(1);
      return true;
    }

    export function status(
      title: string,
      statusArray: LogStatusArray,
      secondaryTitle = `@ ${new Date().toISOString()}`
    ) {
      const formattedTitle = `┌-- ${title} ${secondaryTitle} ---`;

      GrouparooCLI.logger.log("");
      GrouparooCLI.logger.log(blueBold(formattedTitle));

      statusArray.forEach(({ header, status }, idx) => {
        if (idx > 0) logger.log(blueBold(`|`));

        GrouparooCLI.logger.log(blueBold(`|`) + " " + underlineBold(header));
        for (const key in status) {
          const [v1, v2] = status[key];
          GrouparooCLI.logger.log(
            `${blueBold("|")} * ${deCamel(key)}${
              (v1 !== null && v1 !== undefined ? ": " + v1.toString() : "") +
              (v2 !== null && v2 !== undefined ? ` / ${v2.toString()}` : "")
            }`
          );
        }
      });

      GrouparooCLI.logger.log(
        blueBold("└" + "-".repeat(formattedTitle.length - 1))
      );
      GrouparooCLI.logger.log("");
    }
  }
}

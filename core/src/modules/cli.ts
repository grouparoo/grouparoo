import { CLI, api, env } from "actionhero";
import Colors from "colors/safe";
import { FinalSummary } from "./status";
import { FinalSummaryReporters } from "../../../core/src/modules/statusReporters";

export namespace GrouparooCLI {
  /** Types */
  export type LogStatus = Record<string, number[] | string[]>;

  export type LogStatusArray = { header: string; status: LogStatus }[];

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
    const onlyName = cli.name.split(" ")[0];
    const prefixedName = `cli:${onlyName}`;
    process.env.GROUPAROO_RUN_MODE = prefixedName;
    return prefixedName;
  }

  export function setNextDevelopmentMode(nextDevelopmentMode = false) {
    if (process.env.NEXT_DEVELOPMENT_MODE === undefined) {
      process.env.NEXT_DEVELOPMENT_MODE = nextDevelopmentMode.toString();
    }
  }

  export function logCLI(name: string, announcePlugins = true) {
    if (announcePlugins) api.plugins.announcePlugins();

    GrouparooCLI.logger.log("");
    GrouparooCLI.logger.log(logger.underlineBold(`🦘 Grouparoo: ${name}`));
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
    export function log(message: string) {
      console.log(message);
    }

    export function error(message: string) {
      console.error(message);
    }

    export function blueBold(s: string) {
      return colorEnabled() ? Colors.blue(Colors.bold(s)) : s;
    }

    export function cyanBold(s: string) {
      return colorEnabled() ? Colors.cyan(Colors.bold(s)) : s;
    }

    export function blue(s: string) {
      return colorEnabled() ? Colors.blue(s) : s;
    }

    export function underlineBold(s: string) {
      return colorEnabled() ? Colors.underline(Colors.bold(s)) : s;
    }

    export function deCamel(s: string) {
      return s
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace("Grouparoo Record", "Record"); // special replacement for logging "record"
    }

    export function deCamelAndCapitalize(s: string) {
      return s.charAt(0).toUpperCase() + deCamel(s.slice(1));
    }

    export function fatal(message: string) {
      logger.error("❌ " + message);
      if (env !== "test") process.exit(1);
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

    export function generateSummaryItems(
      categorySummary:
        | FinalSummaryReporters.GrouparooRecords.RecordData[]
        | FinalSummaryReporters.Sources.SourceData[]
        | FinalSummaryReporters.Destinations.DestinationData[]
        | FinalSummaryReporters.Warnings.WarningData[],
      logBlock: string
    ) {
      if (categorySummary.length === 0) {
        GrouparooCLI.logger.log(`${cyanBold("|")} None affected`);
      }
      categorySummary.forEach(
        (
          category:
            | FinalSummaryReporters.GrouparooRecords.RecordData
            | FinalSummaryReporters.Sources.SourceData
            | FinalSummaryReporters.Destinations.DestinationData
            | FinalSummaryReporters.Warnings.WarningData,
          idx
        ) => {
          if (idx > 0) logger.log(cyanBold(`|`));

          if (category.name !== null) {
            GrouparooCLI.logger.log(
              `${cyanBold(`|`)} ${idx + 1}. ${underlineBold(category.name)}`
            );
          }

          if (logBlock === "WARNINGS") {
            for (const property in category) {
              if (property !== "name") {
                GrouparooCLI.logger.log(
                  //@ts-ignore
                  `${cyanBold("|")}     ${category[property]}`
                );
              }
            }
          } else {
            for (const property in category) {
              if (property !== "name") {
                GrouparooCLI.logger.log(
                  //@ts-ignore
                  category[property] === null
                    ? `${cyanBold("|")}   * ${deCamelAndCapitalize(
                        property
                      )}: none`
                    : `${cyanBold("|")}   * ${deCamelAndCapitalize(
                        property
                        //@ts-ignore
                      )}: ${category[property]}`
                );
              }
            }
          }
        }
      );
      return false;
    }

    export function finalSummary(
      finalSummaryLogs: FinalSummary.FinalSummaryLogArray,
      secondaryTitle = `${new Date().toISOString()}`
    ) {
      const formattedTitle = `┌-- 🦘 Run Completed @ ${secondaryTitle} ---`;

      GrouparooCLI.logger.log("");
      GrouparooCLI.logger.log(cyanBold(formattedTitle));
      const headings = ["RECORDS", "SOURCES", "DESTINATIONS"];
      if (finalSummaryLogs[3].length > 0) headings.push("WARNINGS");

      finalSummaryLogs.forEach((log, idx) => {
        if (headings[idx]) {
          GrouparooCLI.logger.log(
            cyanBold(`|`) +
              "\n" +
              cyanBold(`|`) +
              " " +
              underlineBold(headings[idx]) +
              "\n" +
              cyanBold(`|`)
          );
          generateSummaryItems(log, headings[idx]);
        }
      });

      GrouparooCLI.logger.log(
        cyanBold("└" + "-".repeat(formattedTitle.length - 1))
      );
      GrouparooCLI.logger.log("");
    }

    function colorEnabled() {
      return (
        process.env.GROUPAROO_LOGS_STDOUT_DISABLE_COLOR?.toLowerCase() !==
        "true"
      );
    }
  }
}

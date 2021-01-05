import { CLI, api } from "actionhero";
import Colors from "colors/safe";
import { Op } from "sequelize";
import { Run, Profile, Import, Export } from "..";

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
      required: true,
      default: "false",
      description: "Should timestamps be prepended to each log line?",
    };

    if (!process.argv.slice(2).includes("--timestamps")) {
      process.env.GROUPAROO_LOGS_STDOUT_DISABLE_TIMESTAMP = "true";
    }
  }

  export function setGrouparooRunMode(cli: CLI) {
    process.env.GROUPAROO_RUN_MODE = `cli:${cli.name}`;
  }

  export function logCLI(cli: CLI, announcePlugins = true) {
    if (announcePlugins) api.plugins.announcePlugins();

    console.log("");
    console.log(Colors.underline(Colors.bold(`🦘 Grouparoo: ${cli.name}`)));
    console.log("");
  }

  /** Status */

  export async function getPendingStatus(): Promise<LogStatus> {
    const activeRuns = await Run.count({ where: { state: "running" } });
    const pendingProfiles = await Profile.count({
      where: { state: { [Op.ne]: "ready" } },
    });
    const totalProfiles = await Profile.count();
    const pendingImports = await Import.count({
      where: { exportedAt: null },
    });
    const pendingExports = await Export.count({
      where: { completedAt: null, errorMessage: null },
    });

    return {
      ActiveRuns: [activeRuns],
      PendingProfiles: [pendingProfiles, totalProfiles],
      PendingImports: [pendingImports],
      PendingExports: [pendingExports],
    };
  }

  /** Logging */

  export function logStatus(title: string, statusArray: LogStatusArray) {
    const formattedTitle = `┌-- ${title} @ ${new Date().toISOString()} ---`;

    console.log("");
    console.log(blueBold(formattedTitle));

    statusArray.forEach(({ header, status }, idx) => {
      if (idx > 0) console.log(blueBold(`|`));

      console.log(blueBold(`|`) + " " + underlineBold(header));
      for (const key in status) {
        const [v1, v2] = status[key];
        console.log(
          `${blueBold("|")} * ${deCamel(key)}: ${
            v1.toString() + (v2 ? ` / ${v2.toString()}` : "")
          }`
        );
      }
    });

    console.log(blueBold("└" + "-".repeat(formattedTitle.length - 1)));
    console.log("");
  }

  function blueBold(s: string) {
    return Colors.blue(Colors.bold(s));
  }

  function underlineBold(s: string) {
    return Colors.underline(Colors.bold(s));
  }

  function deCamel(s: string) {
    return s.replace(/([a-z])([A-Z])/g, "$1 $2");
  }
}

import { CLI, api, log } from "actionhero";
import Colors from "colors/safe";
import { Op } from "sequelize";
import {
  Run,
  Profile,
  ProfileProperty,
  GroupMember,
  Import,
  Export,
  Log,
} from "..";

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

  export async function destroyProfiles() {
    log("Destroying all Profile and Related data", "warning");
    await Profile.truncate();
    await ProfileProperty.truncate();
    await GroupMember.truncate();
    await Import.truncate();
    await Export.truncate();
    await Run.truncate();
    await Log.truncate();
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

  export async function getRunsStatus(): Promise<LogStatus> {
    const activeRuns = await Run.findAll({ where: { state: "running" } });

    const status = {};
    for (const i in activeRuns) {
      const run = activeRuns[i];
      const creatorName = await run.getCreatorName();
      const percentComplete = run.percentComplete;
      const highWaterMark = run.highWaterMark
        ? Object.values(run.highWaterMark)[0]
        : run.groupHighWaterMark;
      status[creatorName] = [`${percentComplete}%`, highWaterMark];
    }

    if (activeRuns.length === 0) {
      status["None"] = [null];
    }

    return status;
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
          `${blueBold("|")} * ${deCamel(key)}${
            (v1 !== null && v1 !== undefined ? ": " + v1.toString() : "") +
            (v2 !== null && v2 !== undefined ? ` / ${v2.toString()}` : "")
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

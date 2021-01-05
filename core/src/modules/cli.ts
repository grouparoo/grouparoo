import { CLI, api } from "actionhero";
import Colors from "colors/safe";

export namespace GrouparooCLI {
  export function timestampOption(cli: CLI) {
    if (!cli.inputs) cli.inputs = {};
    cli.inputs.timestamps = {
      required: true,
      default: "false",
      description: "Should timestamps be prepended to each log line?",
    };

    if (!process.argv.includes("--timestamps")) {
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
}

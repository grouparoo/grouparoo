#! /usr/bin/env node

import { program } from "commander";
import path from "path";
import Ora from "ora";
import { loadLocalCommands } from "./utils/loadLocalCommands";
import { checkNodeVersion } from "./utils/checkNodeVersion";

import Initialize from "./lib/initialize";
import Update from "./lib/update";
import Install from "./lib/install";
import Uninstall from "./lib/uninstall";
import { readPackageJSON } from "./utils/readPackageJSON";

const Package = readPackageJSON(path.join(__dirname, "..", "package.json"));

if (!process.env.INIT_CWD) process.env.INIT_CWD = process.cwd(); // used for monorepo app determination

async function main() {
  checkNodeVersion();
  program.storeOptionsAsProperties(false);
  program.version(Package.version);

  const didLoadLocalCommands = await loadLocalCommands(program);

  program
    .command("init <path>")
    .description(
      'Initialize a new Grouparoo project.  Use "." for this directory.'
    )
    .option(
      "-f, --force",
      "overwrite the generated files if they already exist",
      false
    )
    .action(Initialize);

  program
    .command("update")
    .description("Upgrade the NPM packages in this Grouparoo project")
    .action(Update);

  program
    .command("install [package]")
    .description(
      "Install a grouparoo plugin (via npm install) and enable it.  Use package@version for a specific version or tag"
    )
    .action(Install);

  program
    .command("uninstall <package>")
    .description(
      "Uninstall a grouparoo plugin (via npm uninstall) and disable it."
    )
    .action(Uninstall);

  program.addHelpText(
    "after",
    `
You can add plugins to this project to connect to new Sources and Destinations and add additional commands with the \`grouparoo install\` command.  Learn more at https://www.grouparoo.com/docs.`
  );

  if (!didLoadLocalCommands) {
    program.addHelpText(
      "after",
      `
Don't see the commands that you are looking for? Make sure that you are in a Grouparoo project directory and you have run \`grouparoo install\`.`
    );
  }

  program.parse(process.argv);
}

process.on("unhandledRejection", (error) => {
  Ora().fail(error.toString());
  process.exit(1);
});

process.on("uncaughtError", (error) => {
  Ora().fail(error.toString());
  process.exit(1);
});

main();

#! /usr/bin/env node

import { program } from "commander";
import Ora from "ora";
import { loadLocalCommands } from "./utils/loadLocalCommands";
import { checkNodeVersion } from "./utils/checkNodeVersion";

import Initialize from "./lib/initialize";
import Update from "./lib/update";
import Install from "./lib/install";

const Package = require("../package.json");

if (!process.env.INIT_CWD) process.env.INIT_CWD = process.cwd(); // used for monorepo app determination

async function main() {
  checkNodeVersion();
  program.storeOptionsAsProperties(false);
  program.version(Package.version);

  await loadLocalCommands(program);

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

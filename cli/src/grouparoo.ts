#! /usr/bin/env node

import { program } from "commander";
import Ora from "ora";
import { loadLocalCommands } from "./utils/loadLocalCommands";

import Generate from "./lib/generate";
import Upgrade from "./lib/upgrade";

const Package = require("../package.json");

if (!process.env.INIT_CWD) process.env.INIT_CWD = process.cwd(); // used for monorepo app determination

async function main() {
  program.storeOptionsAsProperties(false);
  program.version(Package.version);

  program
    .command("generate [path]")
    .description("Generate a new Grouparoo project")
    .option(
      "-f, --force",
      "(over)write the generated files if they already exist",
      false
    )
    .action(Generate);

  program
    .command("upgrade [path]")
    .description("Upgrade an existing Grouparoo project")
    .action(Upgrade);

  await loadLocalCommands(program);

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

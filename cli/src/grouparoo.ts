#! /usr/bin/env node

import { program } from "commander";
import Ora from "ora";

import Generate from "./lib/generate";
import Upgrade from "./lib/upgrade";
// import Scaffold from "./lib/scaffold";

const Package = require("../package.json");

program.storeOptionsAsProperties(false);

program.version(Package.version);

program
  .command("generate [path]")
  .description("Generate a new Grouparoo project")
  .option(
    "-f, --force",
    "(over)write the scaffold file, even if it already exists",
    false
  )
  .action(Generate);

program
  .command("upgrade [path]")
  .description("Upgrade an existing Grouparoo project")
  .action(Upgrade);

// program
//   .command("scaffold [path]")
//   .description("Create a scaffold config file for this object and type")
//   .requiredOption(
//     "--class <class>",
//     "Grouparoo object class (app, source, etc)"
//   )
//   .requiredOption(
//     "--id <id>",
//     "Grouparoo object id (unique, no spaces, lower-case)"
//   )
//   .option("--name <name>", "Grouparoo object name or key (unique)")
//   .option("--type <type>", "Grouparoo object class type (postgres, mailchimp)")
//   .option(
//     "-f, --force",
//     "(over)write the scaffold file, even if it already exists",
//     false
//   )
//   .action(Scaffold);

program.parse(process.argv);

process.on("unhandledRejection", (error) => {
  Ora().fail(error.toString());
  process.exit(1);
});

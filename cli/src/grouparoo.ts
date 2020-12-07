#! /usr/bin/env node

import { program } from "commander";
import Generate from "./lib/generate";
import Upgrade from "./lib/upgrade";
import Ora from "ora";

const Package = require("../package.json");

program.version(Package.version);

program
  .command("generate [path]")
  .description("Generate a new Grouparoo project")
  .action(Generate);

program
  .command("upgrade [path]")
  .description("Upgrade an existing Grouparoo project")
  .action(Upgrade);

program.parse(process.argv);

process.on("unhandledRejection", (error) => {
  Ora().fail(error.toString());
  process.exit(1);
});

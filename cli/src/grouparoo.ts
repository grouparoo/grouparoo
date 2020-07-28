#! /usr/bin/env node

import { program } from "commander";
const Package = require("../package.json");
import Generate from "./lib/generate";
import Upgrade from "./lib/upgrade";

program.version(Package.version);

program
  .command("generate [path]")
  .description("generate a new Grouparoo project")
  .action(Generate);

program
  .command("upgrade [path]")
  .description("upgrade an existing Grouparoo project")
  .action(Upgrade);

program.parse(process.argv);

process.on("unhandledRejection", (error) => {
  console.error(error);
  process.exit(1);
});

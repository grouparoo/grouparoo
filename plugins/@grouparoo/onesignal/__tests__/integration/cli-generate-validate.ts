import { join } from "path";
import { CLISpecHelper } from "@grouparoo/spec-helper";

CLISpecHelper.validateGenerators(
  "@grouparoo/onesignal",
  join(__dirname, "..", "..")
);

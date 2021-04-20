import { join } from "path";
import { CLISpecHelper } from "@grouparoo/spec-helper";

CLISpecHelper.validateGenerators(
  "@grouparoo/salesforce",
  join(__dirname, "..", "..")
);

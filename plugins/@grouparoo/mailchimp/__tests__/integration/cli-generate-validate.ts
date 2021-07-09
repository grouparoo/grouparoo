import path from "path";
import fs from "fs";
import { CLISpecHelper } from "@grouparoo/spec-helper";

const pluginPath = path.join(__dirname, "..", "..");
const pluginName = JSON.parse(
  fs.readFileSync(path.join(pluginPath, "package.json")).toString()
).name;

describe(`${pluginName} CLI`, () => {
  const { projectPath, runCliCommand, runCliCommandSync } =
    CLISpecHelper.prepareForCLITest(pluginName, pluginPath);

  const generatorNames = CLISpecHelper.getGeneratorNames(
    pluginName,
    runCliCommandSync
  );

  // The mailchimp sources needs some additional properties to map to
  CLISpecHelper.generateUserSourceToPropertyProperty(
    projectPath,
    runCliCommandSync,
    ["user_id", "email", "first_name"]
  );

  CLISpecHelper.testAllPluginGenerators(
    generatorNames,
    projectPath,
    runCliCommand
  );
});

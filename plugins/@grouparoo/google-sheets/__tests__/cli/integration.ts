import path from "path";
import { CLISpecHelper } from "@grouparoo/spec-helper";

const pluginName = "@grouparoo/google-sheets";
const pluginPath = path.join(__dirname, "..", "..");

describe("google-sheets/CLI", () => {
  const {
    projectPath,
    runCliCommand,
    runCliCommandSync,
  } = CLISpecHelper.prepareForCLITest(pluginName, pluginPath);

  const generatorNames = CLISpecHelper.getGeneratorNames(
    pluginName,
    runCliCommandSync
  );

  CLISpecHelper.testAllPluginGenerators(
    generatorNames,
    projectPath,
    runCliCommand
  );
});

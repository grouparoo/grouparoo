import path from "path";
import { CLISpecHelper } from "@grouparoo/spec-helper";

const pluginName = "@grouparoo/google-sheets";
const pluginPath = path.join(__dirname, "..", "..");

describe("google-sheets/CLI", () => {
  const { projectPath, runCliCommand } = CLISpecHelper.prepareForCLITest(
    pluginName,
    pluginPath
  );

  test("the plugin appears in the generate list", async () => {
    const { stdout, exitCode } = await runCliCommand("generate --list");

    expect(exitCode).toBe(0);
    expect(stdout).toContain("google-sheets:app");
    expect(stdout).toContain("google-sheets:property");
    expect(stdout).toContain("google-sheets:source");
  });

  test("an app can be generated", async () => {
    const { exitCode } = await runCliCommand("generate google-sheets:app app");

    expect(exitCode).toBe(0);
  });

  test("a source can be generated", async () => {
    const { exitCode } = await runCliCommand(
      "generate google-sheets:source source --parent app"
    );

    expect(exitCode).toBe(0);
    CLISpecHelper.enableBootstrappedProperty(projectPath, "source");
  });

  test("a property can be generated", async () => {
    const { exitCode } = await runCliCommand(
      "generate google-sheets:property property property --parent source"
    );

    expect(exitCode).toBe(0);
  });

  test("the config files can be locally validated", async () => {
    const { stdout, exitCode } = await runCliCommand("validate --local");

    expect(exitCode).toBe(0);
    expect(stdout).toContain("Validation succeeded");
  });
});

import path from "path";
import { CLISpecHelper } from "@grouparoo/spec-helper";

const pluginName = "@grouparoo/google-sheets";
const pluginPath = path.join(__dirname, "..", "..");

describe("google-sheets/CLI", () => {
  const { runCliCommand } = CLISpecHelper.prepareForCLITest(
    pluginName,
    pluginPath
  );

  test("the plugin appears in the generate list", async () => {
    const { stdout, exitCode } = await runCliCommand(["generate", "--list"]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain("google-sheets:app");
    expect(stdout).toContain("google-sheets:property");
    expect(stdout).toContain("google-sheets:source");
  });
});

// import { helper } from "@grouparoo/spec-helper";
// import { RunCLI } from "../../src/bin/run";
// import { Run } from "../../src";

import fs from "fs";
import cp from "child_process";
import path from "path";

const outputDir = path.join(__dirname, "../../bin/static_refs");

const cliFilePath = path.join(outputDir, "cli-commands.json");

const scriptPath = path.join(__dirname, "../../bin/build_static_refs");

describe("bin/build_static_refs", () => {
  beforeEach(() => {
    if (fs.existsSync(cliFilePath)) fs.unlinkSync(cliFilePath);
  });

  test("generates CLI data", async () => {
    expect(fs.existsSync(cliFilePath)).toBe(false);
    cp.execSync(`node ${scriptPath}`);
    const json = JSON.parse(fs.readFileSync(cliFilePath).toString());

    const initCommand = json.find((c) => c.name === "init <path>");
    expect(initCommand.name).toBe("init <path>");
    expect(initCommand.inputs.force).toBeTruthy();
  });
});
